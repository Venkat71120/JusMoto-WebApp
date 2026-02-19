import {
  AuthGuard
} from "./chunk-4D75ZKII.js";
import "./chunk-42K6S4RX.js";
import "./chunk-GUDC7RY7.js";
import "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/client.routes.ts
var clientRoutes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-VUUOBSGH.js").then((m) => m.ClientLayoutComponent),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-MUCTLFMG.js").then((m) => m.ClientDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-UK5BDL5A.js").then((m) => m.ClientOrderListComponent)
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./chunk-WXKXMOL2.js").then((m) => m.ClientOrderDetailComponent)
      },
      {
        path: "favourites",
        loadComponent: () => import("./chunk-H7TR7DLH.js").then((m) => m.FavouritesComponent)
      },
      {
        path: "tickets",
        loadComponent: () => import("./chunk-IK7TA4EC.js").then((m) => m.ClientTicketListComponent)
      },
      {
        path: "tickets/new",
        loadComponent: () => import("./chunk-CKRP2EYD.js").then((m) => m.TicketCreateComponent)
      },
      {
        path: "tickets/:id",
        loadComponent: () => import("./chunk-TW6LFPHD.js").then((m) => m.ClientTicketDetailComponent)
      },
      {
        path: "refunds",
        loadComponent: () => import("./chunk-STNAHHQN.js").then((m) => m.RefundListComponent)
      },
      {
        path: "traffic-challan",
        loadComponent: () => import("./chunk-T4QBUL35.js").then((m) => m.ClientChallanListComponent)
      },
      {
        path: "traffic-challan/check",
        loadComponent: () => import("./chunk-GWHLIGTN.js").then((m) => m.ClientChallanCheckComponent)
      },
      {
        path: "traffic-challan/:id",
        loadComponent: () => import("./chunk-IEM7R23Q.js").then((m) => m.ClientChallanDetailComponent)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-B5MHMASR.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "address",
        loadComponent: () => import("./chunk-Q5H3YBUA.js").then((m) => m.AddressListComponent)
      },
      {
        path: "address/create",
        loadComponent: () => import("./chunk-YL4UKKCS.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "address/edit/:id",
        loadComponent: () => import("./chunk-YL4UKKCS.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-F2GHFPWD.js").then((m) => m.SettingsComponent)
      },
      {
        path: "my-cars",
        loadComponent: () => import("./chunk-QHPDF5C7.js").then((m) => m.MyCarsComponent)
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
//# sourceMappingURL=chunk-SSHLNJPM.js.map
