<?php

namespace Modules\SupportTicket\app\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\UserNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Modules\SupportTicket\app\Models\ChatMessage;
use Modules\SupportTicket\app\Models\Ticket;
use Modules\SupportTicket\app\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    /**
     * Display a listing of tickets
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        $status = $request->get('status', '');
        $searchId = $request->get('search_id', '');
        $searchStatus = $request->get('search_status', '');

        // Build query for tickets based on status
        $query = Ticket::where('user_id', $user->id);

        // Apply status filter if provided
        if ($status === 'open') {
            // For open tickets, include all non-closed statuses
            $query->where('status','open');
        } elseif ($status === 'close') {
            // For closed tickets, include closed and resolved
            $query->where('status', 'close');
        }
        // If status is empty, show all tickets (no additional filter)

        // Apply search filters
        if (!empty($searchId)) {
            $query->where('id', $searchId);
        }

        if (!empty($searchStatus)) {
            $query->where('status', $searchStatus);
        }

        // Get tickets with pagination
        $tickets = $query->orderBy('created_at', 'desc')->paginate(10);

        // Get counts for different statuses
        $totalTickets = Ticket::where('user_id', $user->id)->count();
        $openTickets = Ticket::where('user_id', $user->id)
            ->where('status', 'open')
            ->count();
        $closedTickets = Ticket::where('user_id', $user->id)
            ->where('status','close')
            ->count();

        // Get all possible statuses for the search dropdown
        $allStatuses = ['open','close'];

        // Get all departments for the create ticket form
        $departments = Department::all();

        return view('supportticket::Frontend.support-ticket', compact(
            'tickets',
            'totalTickets',
            'openTickets',
            'closedTickets',
            'allStatuses',
            'searchId',
            'searchStatus',
            'departments'
        ));
    }

    /**
     * Store a newly created ticket
     */
    public function store(Request $request)
    {
        // Validate the request
        $validator=Validator::make($request->all(),[
            'department_id' => 'required|exists:departments,id',
            'title' => 'required|string|max:255',
            'priority' => 'required|in:low,normal,high,urgent',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            toastr_error( $validator->errors()->first());
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Create a new ticket
        $ticket = new Ticket();
        $ticket->department_id = $request->input('department_id');
        $ticket->user_id = Auth::id();
        $ticket->title = $request->input('title');
        $ticket->priority = $request->input('priority');
        $ticket->description = $request->input('description');
        $ticket->status = 'open';
        $ticket->save();

        // send notification to admin
        notificationToAdmin($ticket->id, Auth::id(),'ticket',__('New Support Ticket'));

        //Email to admin
        try {
            $subject = get_static_option('support_ticket_subject') ?? __('Support Ticket');
            $message = get_static_option('support_ticket_message') ?? __('Support Ticket Message');
            $message = str_replace(["@name","@ticket_id"],[__('Admin'),$ticket->id], $message);

            Mail::to(get_static_option('site_global_email'))->send(new BasicMail([
                'subject' => $subject,
                'message' => $message
            ]));

        } catch (\Exception $e) {}

        toastr_success('Ticket created successfully.');

        // Redirect to the tickets list with success message
        return redirect()->route('tickets.index');
    }


//    public function show($id)
//    {
//        $user = Auth::user();
//
//        $ticket_details = Ticket::where('user_id', $user->id)
//            ->where('id', $id)
//            ->firstOrFail();
//
//        return view('supportticket::Frontend.details', compact('ticket_details'));
//    }

    public function ticket_details(Request $request, $id,$notificationId=null){
        $ticket_details = Ticket::with(['user','admin','message','get_ticket_latest_message'])->where('id',$id)->first();
        if($request->isMethod('post')){
            // user to admin ticket chat
            if(empty($request->attachment) && empty($request->message)){
                $request->validate([
                    'message'=> 'required|max:10000',
                ]);
            }

            if(!empty($request->attachment) || empty($request->message)){
                $request->validate([
                    'attachment'=> 'mimes:jpg,jpeg,png,gif,pdf,svg,xlsx,xls,txt,webp',
                ]);
            }

            if($attachment = $request->file('attachment')){
                $imageName = time().'-'.uniqid().'.'.$attachment->getClientOriginalExtension();
                $attachment->move('assets/uploads/ticket/chat-messages',$imageName);
            }



            $user_id = Auth::guard('sanctum')->user()->id;
            ChatMessage::create([
                'ticket_id'=> $id,
                'message'=>$request->message,
                'attachment'=> $imageName ?? '',
                'notify'=> $request->email_notify,
                'type'=> 'user',
            ]);

            // update ticket status to open if it was closed
            Ticket::where('id', $id)
                ->where('user_id', $user_id)
                ->update(['status' => 'open']);

            // send notification to user
            notificationToAdmin($id, $ticket_details?->user?->id,'ticket',__('Ticket New Message'));

            // email sent to user
            if($request->email_notify == 'on'){
                try {
                    $message = get_static_option('support_ticket_message_email_message') ?? __('Support Ticket Message Email Notify');
                    $message = str_replace(["@name","@ticket_id"],[__('Admin') ,$id], $message);
                    $subject = get_static_option('support_ticket_message_email_subject') ?? __('Support Ticket Message Email');

                    Mail::to(get_static_option('site_global_email'))->send(new BasicMail([
                        'subject' => $subject,
                        'message' => $message
                    ]));
                } catch (\Exception $e) {}
            }

            return back();
        }

        try {
            UserNotification::where('id', $notificationId)->update(['is_read' => 'read']);
        }catch (\Exception $e) {}

        return !empty($ticket_details) ? view('supportticket::Frontend.details',compact('ticket_details')) : back();
    }

}
