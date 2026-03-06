import {
  AuthGuard
} from "./chunk-FUWPJJA2.js";
import "./chunk-R5YFSE7W.js";
import "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/client.routes.ts
var clientRoutes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-6YJDTPB2.js").then((m) => m.ClientLayoutComponent),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-VELH4NCP.js").then((m) => m.ClientDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-4OJCJGZY.js").then((m) => m.ClientOrderListComponent)
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./chunk-PKCWXU4Z.js").then((m) => m.ClientOrderDetailComponent)
      },
      {
        path: "favourites",
        loadComponent: () => import("./chunk-DWVAVUHS.js").then((m) => m.FavouritesComponent)
      },
      {
        path: "tickets",
        loadComponent: () => import("./chunk-PB7JBKQ6.js").then((m) => m.ClientTicketListComponent)
      },
      {
        path: "tickets/new",
        loadComponent: () => import("./chunk-JFCATE5H.js").then((m) => m.TicketCreateComponent)
      },
      {
        path: "tickets/:id",
        loadComponent: () => import("./chunk-LCKXQSAD.js").then((m) => m.ClientTicketDetailComponent)
      },
      {
        path: "refunds",
        loadComponent: () => import("./chunk-5CQLC2W2.js").then((m) => m.RefundListComponent)
      },
      {
        path: "traffic-challan",
        loadComponent: () => import("./chunk-ZPWS7WO7.js").then((m) => m.ClientChallanListComponent)
      },
      {
        path: "traffic-challan/check",
        loadComponent: () => import("./chunk-GGWMGBA6.js").then((m) => m.ClientChallanCheckComponent)
      },
      {
        path: "traffic-challan/:id",
        loadComponent: () => import("./chunk-35KUVKBB.js").then((m) => m.ClientChallanDetailComponent)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-WRACPOXO.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "address",
        loadComponent: () => import("./chunk-7CDNG7MQ.js").then((m) => m.AddressListComponent)
      },
      {
        path: "address/create",
        loadComponent: () => import("./chunk-XIDQK5HZ.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "address/edit/:id",
        loadComponent: () => import("./chunk-XIDQK5HZ.js").then((m) => m.AddressFormComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-GMPRUXQW.js").then((m) => m.SettingsComponent)
      },
      {
        path: "my-cars",
        loadComponent: () => import("./chunk-NSIC2JCW.js").then((m) => m.MyCarsComponent)
      },
      {
        path: "cart",
        loadComponent: () => import("./chunk-5O4GKYDM.js").then((m) => m.CartComponent)
      },
      {
        path: "checkout",
        loadComponent: () => import("./chunk-SCWH7TQR.js").then((m) => m.CheckoutComponent)
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
