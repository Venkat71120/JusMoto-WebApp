<?php

namespace Modules\RolePermission\app\Http\Controllers;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use App\Models\Backend\Admin_outlet_location;
class AdminManageController extends Controller
{
    public function all_admins()
    {
        $all_admins = Admin::all();
        return view('rolepermission::admin-manage.all-admins', compact('all_admins'));
    }

    public function create_admin(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'name' => 'required',
                'username' => 'required|unique:admins,username',
                'email' => 'required|email|unique:admins,email',
                'password' => 'required|min:8|max:191|confirmed',
                'image' => 'nullable',
            ]);


            $admin = Admin::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'image' => $request->image,
                'phone' => $request->phone,
                'about' => $request->about,
            ]);

            $admin->assignRole($request->role);
            return back()->with(FlashMsg::item_new(__('New Admin Successfully Created')));
        }
        $roles = Role::pluck('name', 'id')->all();
        return view('rolepermission::admin-manage.create-admin', compact('roles'));
    }

    //edit admin
    public function edit_admin(Request $request, $id)
    {

        $admin = Admin::where('id', $id)->first();
        $roles = Role::pluck('name', 'name')->all();
        $admin_role = $admin->roles->pluck('name', 'name')->all();
        $outletLocations = Admin_outlet_location::where('status', 1)->get();
        if ($request->isMethod('post')) {
            $request->validate([
                'name' => 'required',
                'username' => 'required|unique:admins,username,' . $admin->id,
                'email' => 'required|email|unique:admins,email,' . $admin->id,
                'image' => 'nullable',
                'is_franchise' => 'nullable|boolean',
                'franchise_code' => 'required_if:is_franchise,1|nullable|string|max:50|unique:admins,franchise_code,' . $admin->id,
                'franchise_location' => 'nullable|string|max:191',
                'outlet_location_id' => 'nullable|exists:admin_outlet_locations,id',
            ]);

            Admin::where('id', $admin->id)->update([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'image' => $request->image,
                'phone' => $request->phone,
                'about' => $request->about,
                'is_franchise' => $request->has('is_franchise') ? 1 : 0,
                'franchise_code' => $request->franchise_code,
                'franchise_location' => $request->franchise_location,
                'outlet_location_id' => $request->outlet_location_id,
            ]);

            DB::table('model_has_roles')->where('model_id', $admin->id)->delete();
            $admin->assignRole($request->role);

            return back()->with(FlashMsg::item_new(__('Admin Info Successfully Updated')));
        }

        return view('rolepermission::admin-manage.edit-admin', compact(['admin', 'roles', 'admin_role', 'outletLocations']));
    }

    // delete admin
    public function delete_admin($id)
    {
        $admin = Admin::where('id', $id)->first();
        DB::table('model_has_roles')->where('model_id', $admin->id)->delete();
        $admin->delete();
        return back()->with(FlashMsg::item_new(__('Admin Successfully Deleted')));
    }

    //change password
    public function change_password(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|max:191'
        ]);
        Admin::where('id', $request->admin_id_for_change_password)->update([
            'password' => Hash::make($request->password)
        ]);
        return back()->with(FlashMsg::item_new(__('Password Successfully Changed.')));
    }
}
