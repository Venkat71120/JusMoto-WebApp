import {
  ApiService
} from "./chunk-GMJ7MHWM.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RLLOV7VK.js";

// src/app/core/services/ticket.service.ts
var TicketService = class _TicketService {
  api;
  constructor(api) {
    this.api = api;
  }
  getTickets(params) {
    return this.api.get("/tickets", params);
  }
  getTicket(id) {
    return this.api.get(`/tickets/${id}`);
  }
  createTicket(data) {
    return this.api.post("/tickets", data);
  }
  replyToTicket(id, data) {
    return this.api.post(`/tickets/${id}/messages`, data);
  }
  closeTicket(id) {
    return this.api.post(`/tickets/${id}/close`, {});
  }
  reopenTicket(id) {
    return this.api.post(`/tickets/${id}/reopen`, {});
  }
  static \u0275fac = function TicketService_Factory(t) {
    return new (t || _TicketService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketService, factory: _TicketService.\u0275fac, providedIn: "root" });
};

export {
  TicketService
};
