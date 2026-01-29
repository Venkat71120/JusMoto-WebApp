<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Services\CalculateTotalHourIncome;
use App\Http\Services\CalculateTotalMonthIncome;
use App\Http\Services\CalculateTotalProductMonthly;
use App\Http\Services\CalculateTotalProductWeekly;
use App\Http\Services\CalculateTotalProductYearly;
use App\Http\Services\CalculateTotalServiceMonthly;
use App\Http\Services\CalculateTotalServiceWeekly;
use App\Http\Services\CalculateTotalServiceYearly;
use App\Http\Services\CalculateTotalUserMonthly;
use App\Http\Services\CalculateTotalUserWeekly;
use App\Http\Services\CalculateTotalUserYearly;
use App\Http\Services\CalculateTotalWeekIncome;
use App\Http\Services\CalculateTotalYearIncome;
use App\Models\Backend\Admin;
use App\Models\Backend\Category;
use App\Models\Backend\ChildCategory;
use App\Models\Backend\Language;
use App\Models\Backend\MediaUpload;
use App\Models\Backend\SubCategory;
use App\Models\Car;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Service;
use App\Models\Staff;
use App\Models\SubOrder;
use App\Models\User;
use App\Models\UserBalance;
use App\Models\WithdrawRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;
use Modules\Coupon\app\Models\Coupon;
use Modules\JobPost\app\Models\JobPost;
use Modules\SupportTicket\app\Models\Ticket;

class AdminDashboardController extends Controller
{
    public function __construct() {
        $this->middleware('auth:admin');
    }

    public function adminDashboard()
    {
        // Total Orders
        $totalOrders = Order::count();

        // total tax count
        $total_tax = Order::whereIn('status', [2, 3])
        ->where('payment_status', 1)
        ->sum('tax');

        $admin_total_tax = Order::whereIn('status', [2, 3])
         ->whereNotNull('admin_id')
        ->where('payment_status', 1)
        ->sum('tax');


        // Total Admin Orders (where admin_id is not null)
        $totalAdminOrders = Order::whereNotNull('admin_id')->count();


        // Total Admin Earnings from their own orders
        $total_admin_earning_with_tax = Order::whereNotNull('admin_id')
            ->whereIn('status', [2, 3])
            ->where('payment_status', 1)
            ->sum('total');


       $total_admin_earning = $total_admin_earning_with_tax - $admin_total_tax;
       

        $dashboardData = [
            ['title' => __('Total Admins'),  'route' => 'admin.all','value' => Admin::count()],
            ['title' => __('Total Users'), 'route' => 'admin.user.all', 'value' => User::count()],
            ['title' => __('Total Services'),'route' => 'admin.all.services', 'value' => Service::AdminServices()->count()],
            ['title' => __('Total Products'),'route' => 'admin.all.products', 'value' => Service::AdminProducts()->count()],
            ['title' => __('Total Cars'),'route' => 'admin.car.all', 'value' => Car::count()],
            ['title' => __('Total Coupons'),  'route' => 'admin.coupon.all','value' => Coupon::count()],
            ['title' => __('Total Orders'), 'value' => $totalOrders],
            ['title' => __('Total Tax'),'value' => float_amount_with_currency_symbol($total_tax)],
            ['title' => __('Total Admin Earnings'),'value' => float_amount_with_currency_symbol($total_admin_earning)],
          
        ];


        $total_user = User::count();
        $recent_users = User::latest()->take(5)->get();
        $total_services = Service::where("type",0)->count();
        $total_products = Service::where("type",1)->count();
        $recent_services = Service::whereNotNull('admin_id')->where("type",0)->latest()->take(5)->get();
        $recent_products = Service::whereNotNull('admin_id')->where("type",1)->latest()->take(5)->get();

        return view('backend.pages.dashboard.dashboard', compact(
            'dashboardData',
            'total_user',
            'recent_users',
            'recent_services',
            'recent_products',
            'total_services',
            'total_products'
        ));
    }

    public function getUserData(Request $request) {
        $interval = $request->input('interval');

        switch ($interval) {
            case '0': // This Week
                $startWeek = Carbon::now()->startOfWeek();
                $endWeek = Carbon::now()->endOfWeek();
                $data=CalculateTotalUserWeekly::calculateUserWeekly($startWeek,$endWeek);
                break;
            case '1': // Last week
                $startWeek = Carbon::now()->startOfWeek();
                $startLastWeek=$startWeek->subweek();
                $endWeek = Carbon::now()->endOfWeek();
                $endLastWeek=$endWeek->subweek();
                $data=CalculateTotalUserWeekly::calculateUserWeekly($startLastWeek,$endLastWeek);
                break;
            case '2'://this month
                $startMonth = Carbon::now()->startOfMonth();
                $endMonth = Carbon::now()->endOfMonth();
                $data=CalculateTotalUserMonthly::calculateUserMonthly($startMonth,$endMonth);
                break;
            case '3'://last month
                $startMonth = Carbon::now()->subMonth()->startOfMonth();
                $endMonth = Carbon::now()->subMonth()->endOfMonth();
                $data=CalculateTotalUserMonthly::calculateUserMonthly($startMonth,$endMonth);
                break;

            case '4': //  This Yearly
                $currentYear = carbon::now()->year;
                $data=CalculateTotalUserYearly::calculateUserYearly($currentYear);
                break;

            case '5': //  Last Yearly
                $currentYear = carbon::now()->subYear();
                $data=CalculateTotalUserYearly::calculateUserYearly($currentYear);
                break;

            default:
                $data = [];
                $uniqueYears = [];
                break;
        }


        return response()->json($data);
    }
    public function getServiceData(Request $request) {
        $interval = $request->input('interval');

        switch ($interval) {
            case '0': // This Week
                $startWeek = Carbon::now()->startOfWeek();
                $endWeek = Carbon::now()->endOfWeek();
                $data=CalculateTotalServiceWeekly::calculateServiceWeekly($startWeek,$endWeek);
                break;
            case '1': // Last week
                $startWeek = Carbon::now()->startOfWeek();
                $startLastWeek=$startWeek->subweek();
                $endWeek = Carbon::now()->endOfWeek();
                $endLastWeek=$endWeek->subweek();
                $data=CalculateTotalServiceWeekly::calculateServiceWeekly($startLastWeek,$endLastWeek);
                break;
            case '2'://this month
                $startMonth = Carbon::now()->startOfMonth();
                $endMonth = Carbon::now()->endOfMonth();
                $data=CalculateTotalServiceMonthly::calculateServiceMonthly($startMonth,$endMonth);
                break;
            case '3'://last month
                $startMonth = Carbon::now()->subMonth()->startOfMonth();
                $endMonth = Carbon::now()->subMonth()->endOfMonth();
                $data=CalculateTotalServiceMonthly::calculateServiceMonthly($startMonth,$endMonth);
                break;

            case '4': //  This Yearly
                $currentYear = carbon::now()->year;
                $data=CalculateTotalServiceYearly::calculateServiceYearly($currentYear);
                break;

            case '5': //  Last Yearly
                $currentYear = carbon::now()->subYear();
                $data=CalculateTotalServiceYearly::calculateServiceYearly($currentYear);
                break;

            default:
                $data = [];
                $uniqueYears = [];
                break;
        }


        return response()->json($data);
    }


    public function getProductData(Request $request) {
        $interval = $request->input('interval');

        switch ($interval) {
            case '0': // This Week
                $startWeek = Carbon::now()->startOfWeek();
                $endWeek = Carbon::now()->endOfWeek();
                $data=CalculateTotalProductWeekly::calculateServiceWeekly($startWeek,$endWeek);
                break;
            case '1': // Last week
                $startWeek = Carbon::now()->startOfWeek();
                $startLastWeek=$startWeek->subweek();
                $endWeek = Carbon::now()->endOfWeek();
                $endLastWeek=$endWeek->subweek();
                $data=CalculateTotalProductWeekly::calculateServiceWeekly($startLastWeek,$endLastWeek);
                break;
            case '2'://this month
                $startMonth = Carbon::now()->startOfMonth();
                $endMonth = Carbon::now()->endOfMonth();
                $data=CalculateTotalProductMonthly::calculateServiceMonthly($startMonth,$endMonth);
                break;
            case '3'://last month
                $startMonth = Carbon::now()->subMonth()->startOfMonth();
                $endMonth = Carbon::now()->subMonth()->endOfMonth();
                $data=CalculateTotalProductMonthly::calculateServiceMonthly($startMonth,$endMonth);
                break;

            case '4': //  This Yearly
                $currentYear = carbon::now()->year;
                $data=CalculateTotalProductYearly::calculateServiceYearly($currentYear);
                break;

            case '5': //  Last Yearly
                $currentYear = carbon::now()->subYear();
                $data=CalculateTotalProductYearly::calculateServiceYearly($currentYear);
                break;

            default:
                $data = [];
                $uniqueYears = [];
                break;
        }


        return response()->json($data);
    }


    public function getTotalIncomeData(Request $request) {
        $interval = $request->input('interval');

        switch ($interval) {
            case '0': // today
                $total_earnings = $this->calculateEarnings('today');
                break;

            case '1': // yesterday
                $total_earnings = $this->calculateEarnings('yesterday');
                break;

            case '2': // recent week
                $total_earnings = $this->calculateEarnings('recent_week');
                break;

            case '3': // last week
                $total_earnings = $this->calculateEarnings('last_week');
                break;

            case '4': // recent month
                $total_earnings = $this->calculateEarnings('recent_month');
                break;

            case '5': // last month
                $total_earnings = $this->calculateEarnings('last_month');
                break;

            case '6': // recent year
                $total_earnings = $this->calculateEarnings('recent_year');

                break;
            case '7': // last year
                $total_earnings = $this->calculateEarnings('last_year');
                break;

            default:
                $total_earnings = 0;
                break;
        }

        return response()->json(['total_earnings' => $total_earnings]);
    }

    

    private function calculateEarnings($interval) {
        switch ($interval) {
            case 'today':
                $today= Carbon::now()->startOfDay();
                $endOfDay=Carbon::now()->endOfDay();
                $result=CalculateTotalHourIncome::calculateHourIncome($today,$endOfDay);
                return $result;
                break;

            case 'yesterday':
                $today= Carbon::now()->subDay()->startOfDay();
                $endOfDay=Carbon::now()->subDay()->endOfDay();
                $result=CalculateTotalHourIncome::calculateHourIncome($today,$endOfDay);
                return $result;
                break;


            case 'recent_week':
                $startWeek = Carbon::now()->startOfWeek();
                $endWeek = Carbon::now()->endOfWeek();
                $result=CalculateTotalWeekIncome::calculateWeekIncome($startWeek,$endWeek);
                return $result;
                break;

            case 'last_week':
                $startWeek = Carbon::now()->startOfWeek();
                $startLastWeek=$startWeek->subweek();
                $endWeek = Carbon::now()->endOfWeek();
                $endLastWeek=$endWeek->subweek();
                $result=CalculateTotalWeekIncome::calculateWeekIncome($startLastWeek,$endLastWeek);
                return $result;
                break;

            case 'recent_month':
                $startMonth = Carbon::now()->startOfMonth();
                $endMonth = Carbon::now()->endOfMonth();
                $result=CalculateTotalMonthIncome::calculateMonthIncome($startMonth,$endMonth);
                return $result;
                break;

            case 'last_month':
                $startMonth = Carbon::now()->subMonth()->startOfMonth();
                $endMonth = Carbon::now()->subMonth()->endOfMonth();
                $result=CalculateTotalMonthIncome::calculateMonthIncome($startMonth,$endMonth);
                return $result;
                break;

            case 'recent_year':
                $recentYear = Carbon::now()->year;
                $result=CalculateTotalYearIncome::calculateYearIncome($recentYear);
                return $result;
                break;

            case 'last_year':
                $lastYear = Carbon::now()->subYear()->year;
                $result=CalculateTotalYearIncome::calculateYearIncome($lastYear);
                return $result;
                break;
            default:
                return 0;
        }
    }
    



    public function darkModeToggle(Request $request){
        $data = get_static_option('site_admin_dark_mode');
        if($request->mode == 'off' || empty($data)){
            update_static_option('site_admin_dark_mode','on');
        }
        if($request->mode == 'on'){
            update_static_option('site_admin_dark_mode','off');
        }
        return response()->json(['status'=>'done']);
    }


}
