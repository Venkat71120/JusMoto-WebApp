import {
  AuthGuard
} from "./chunk-UOPXGD5G.js";
import "./chunk-5AKWGKTS.js";
import "./chunk-OW254BTU.js";
import "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/client/client.routes.ts
var clientRoutes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-TDOLTP3W.js").then((m) => m.ClientLayoutComponent),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-J7YUXARY.js").then((m) => m.ClientDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-R3AXPW7L.js").then((m) => m.ClientOrderListComponent)
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./chunk-5Q5QPO3S.js").then((m) => m.ClientOrderDetailComponent)
      },
      {
        path: "favourites",
        loadComponent: () => import("./chunk-FMJWRRPV.js").then((m) => m.FavouritesComponent)
      },
      {
        path: "tickets",
        loadComponent: () => import("./chunk-VNUO5OB5.js").then((m) => m.ClientTicketListComponent)
      },
      {
        path: "tickets/new",
        loadComponent: () => import("./chunk-6D2UIO45.js").then((m) => m.TicketCreateComponent)
      },
      {
        path: "tickets/:id",
        loadComponent: () => import("./chunk-33PMLQXP.js").then((m) => m.ClientTicketDetailComponent)
      },
      {
        path: "refunds",
        loadComponent: () => import("./chunk-XDM4TO5S.js").then((m) => m.RefundListComponent)
      },
      {
        path: "traffic-challan",
        loadComponent: () => import("./chunk-J6AAHDZM.js").then((m) => m.ClientChallanListComponent)
      },
      {
        path: "traffic-challan/check",
        loadComponent: () => import("./chunk-ZFUFIOLL.js").then((m) => m.ClientChallanCheckComponent)
      },
      {
        path: "traffic-challan/:id",
        loadComponent: () => import("./chunk-NAFT4B34.js").then((m) => m.ClientChallanDetailComponent)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-2AJWWQYX.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "address",
        loadComponent: () => import("./chunk-ZAVJ77WJ.js").then((m) => m.AddressListComponent)
      },
      {
        path: "address/create",
        loadComponent: () => import("./chunk-UNJUOKZ4.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "address/edit/:id",
        loadComponent: () => import("./chunk-UNJUOKZ4.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-RX7P4PE7.js").then((m) => m.SettingsComponent)
      },
      {
        path: "my-cars",
        loadComponent: () => import("./chunk-VJ5M3BVT.js").then((m) => m.MyCarsComponent)
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
