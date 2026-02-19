import {
  AuthGuard
} from "./chunk-OGL46LFN.js";
import "./chunk-BZ2LTEHJ.js";
import "./chunk-GUDC7RY7.js";
import "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/client.routes.ts
var clientRoutes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-OAGEPR5E.js").then((m) => m.ClientLayoutComponent),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-CPQEMUFW.js").then((m) => m.ClientDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-CKJFQGBI.js").then((m) => m.ClientOrderListComponent)
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./chunk-3LZZRKMU.js").then((m) => m.ClientOrderDetailComponent)
      },
      {
        path: "favourites",
        loadComponent: () => import("./chunk-LV43IEPR.js").then((m) => m.FavouritesComponent)
      },
      {
        path: "tickets",
        loadComponent: () => import("./chunk-3BRWKY7T.js").then((m) => m.ClientTicketListComponent)
      },
      {
        path: "tickets/new",
        loadComponent: () => import("./chunk-3D3A6UXV.js").then((m) => m.TicketCreateComponent)
      },
      {
        path: "tickets/:id",
        loadComponent: () => import("./chunk-EVNQ2XOO.js").then((m) => m.ClientTicketDetailComponent)
      },
      {
        path: "refunds",
        loadComponent: () => import("./chunk-2RZ6XGIQ.js").then((m) => m.RefundListComponent)
      },
      {
        path: "traffic-challan",
        loadComponent: () => import("./chunk-OWWS7XHI.js").then((m) => m.ClientChallanListComponent)
      },
      {
        path: "traffic-challan/check",
        loadComponent: () => import("./chunk-ZBNAJQ4X.js").then((m) => m.ClientChallanCheckComponent)
      },
      {
        path: "traffic-challan/:id",
        loadComponent: () => import("./chunk-XUY3777F.js").then((m) => m.ClientChallanDetailComponent)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-3RMYQ2AA.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "address",
        loadComponent: () => import("./chunk-W74JABYL.js").then((m) => m.AddressListComponent)
      },
      {
        path: "address/create",
        loadComponent: () => import("./chunk-7ZJQAD4M.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "address/edit/:id",
        loadComponent: () => import("./chunk-7ZJQAD4M.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-LSCSP6GH.js").then((m) => m.SettingsComponent)
      },
      {
        path: "my-cars",
        loadComponent: () => import("./chunk-WTVQIMDX.js").then((m) => m.MyCarsComponent)
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];
export {
  clientRoutes
};
//# sourceMappingURL=chunk-53UZZWU6.js.map
