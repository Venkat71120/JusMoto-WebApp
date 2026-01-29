@extends('frontend.user.layout.master')
@section('title', 'Support Ticket')
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="support_ticket p_15">
            <div class="page_header">
                <h3 class="page_title">{{__('Good Afternoon')}}</h3>
                <p>{{__('Manage your dashboard here')}}</p>
            </div>
            @if (session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
            <div class="tab_wrapper pt_15">
                <!-- Search Form -->
                <div class="card mb-3">
                    <div class="card-body">
                        <form method="GET" action="{{ route('tickets.index') }}" class="row g-3">
                            <div class="col-md-4">
                                <label for="search_id" class="form-label">{{__('Ticket ID')}}</label>
                                <input type="text" class="form-control" id="search_id" name="search_id"
                                       value="{{ request('search_id') }}" placeholder="Enter Ticket ID">
                            </div>

                            <div class="col-md-4 d-flex align-items-end">
                                <button type="submit" class="btn_primary btn-sm py-2 me-2">{{__('Search')}}</button>
                                <a href="{{ route('tickets.index') }}" class="btn btn-secondary">{{__('Reset')}}</a>
                            </div>
                            <!-- Preserve the current status tab -->
                            <input type="hidden" name="status" value="{{ request('status') }}">
                        </form>
                    </div>
                </div>

                <!-- Create New Ticket Button -->
                <div class="d-flex justify-content-end mb-3">
                    <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#createTicketModal">
                        <i class="icon-base ti tabler-plus me-2"></i>{{__('Create New Ticket')}}
                    </button>
                </div>

                <ul class="nav nav-tabs support_ticket" id="myTab" role="tablist">
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link {{ request('status') == '' ? 'active' : '' }}"
                           href="{{ route('tickets.index') }}"
                           role="tab">
                            {{__('All Tickets')}} ({{ $totalTickets }})
                        </a>
                    </li>
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link {{ request('status') == 'open' ? 'active' : '' }}"
                           href="{{ route('tickets.index', ['status' => 'open']) }}"
                           role="tab">
                            {{__('Open Tickets')}} ({{ $openTickets }})
                        </a>
                    </li>
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link {{ request('status') == 'close' ? 'active' : '' }}"
                           href="{{ route('tickets.index', ['status' => 'close']) }}"
                           role="tab">
                            {{__('Closed Tickets')}} ({{ $closedTickets }})
                        </a>
                    </li>
                </ul>
                <div class="tab-content mt_15" id="myTabContent">
                    <div class="tab-pane fade show active" role="tabpanel">
                        <div class="table_wrapper">
                            @if($tickets->count() > 0)
                                <table class="data-table table w-100 br_4 overflow-hidden">
                                    <colgroup>
                                        <col data-dt-column="1" style="width: 274px;">
                                        <col data-dt-column="2" style="width: 267px;">
                                        <col data-dt-column="3" style="width: 199px;">
                                        <col data-dt-column="4" style="width: 263px;">
                                        <col data-dt-column="5" style="width: 168px;">
                                        <col data-dt-column="6" style="width: 165px;">
                                    </colgroup>
                                    <thead class="table_head">
                                    <tr>
                                        <th>{{__('Date')}}</th>
                                        <th>{{__('Ticket Id')}}</th>
                                        <th>{{__('Priority')}}</th>
                                        <th>{{__('Title')}}</th>
                                        <th>{{__('Status')}}</th>
                                        <th>{{__('Action')}}</th>
                                    </tr>
                                    </thead>
                                    <tbody class="table_body">
                                    @foreach($tickets as $ticket)
                                        <tr>
                                            <td>
                                                <i class="icon-base ti tabler-calendar"></i>
                                                <span>{{ \Carbon\Carbon::parse($ticket->created_at)->format('d-m-Y') }}</span>
                                                <span>{{ \Carbon\Carbon::parse($ticket->created_at)->format('h:iA') }}</span>
                                            </td>
                                            <td>ID: {{ $ticket->id }}</td>
                                            <td class="table_payment">
                                                <span class="priority {{ strtolower($ticket->priority) }}">{{ ucfirst($ticket->priority) }}</span>
                                            </td>
                                            <td>{{ $ticket->title ?? 'N/A' }}</td>
                                            <td>
                                                <span class="table_status {{ in_array($ticket->status, ['closed', 'resolved']) ? 'complete' : 'pending' }}">
                                                    {{ ucfirst(str_replace('_', ' ', $ticket->status)) }}
                                                </span>
                                            </td>
                                            <td class="action_icon">
                                                <div class="three_icons">
                                                    <a href="{{ route('ticket.details', $ticket->id) }}" title="View Ticket">
                                                        <i class="icon-base ti tabler-eye"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <div class="pagination mt-3">
                                    <x-frontend.dashboard-pagination.pagination
                                        :paginator="$tickets"
                                        :filters="request()->query()"
                                    />

                                </div>
                            @else
                                <div class="alert alert-info text-center p-4">
                                    <i class="fa-solid fa-info-circle fa-3x mb-3"></i>
                                    @if(request('status') == 'open')
                                        <h5>{{__('No Open Tickets Found')}}</h5>
                                        <p class="mb-0">{{__('You have no open tickets.')}}</p>
                                    @elseif(request('status') == 'close')
                                        <h5>{{__('No Closed Tickets Found')}}</h5>
                                        <p class="mb-0">{{__('You have no closed tickets.')}}</p>
                                    @else
                                        <h5>{{__('No Tickets Found')}}</h5>
                                        <p class="mb-0">{{__("You haven't created any tickets yet.")}}</p>
                                    @endif
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Create Ticket Modal -->
    <div class="modal fade" id="createTicketModal" tabindex="-1" aria-labelledby="createTicketModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createTicketModalLabel">{{__('Create New Ticket')}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="POST" action="{{ route('ticket.store') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="department_id" class="form-label">{{__('Department')}}</label>
                                <select class="form-select" id="department_id" name="department_id" required>
                                    <option value="">{{__('Select Department')}}</option>
                                    @foreach($departments as $department)
                                        <option value="{{ $department->id }}" {{ old('department_id') == $department->id ? 'selected' : '' }}>{{ $department->name }}</option>
                                    @endforeach
                                </select>
                                @error('department_id')
                                <div class="text-danger mt-1">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="col-md-6">
                                <label for="priority" class="form-label">{{__('Priority')}}</label>
                                <select class="form-select" id="priority" name="priority" required>
                                    <option value="">{{ __('Select Priority') }}</option>
                                    <option value="low" {{ old('priority') == 'low' ? 'selected' : '' }}>{{ __('Low') }}</option>
                                    <option value="normal" {{ old('priority') == 'normal' ? 'selected' : '' }}>{{ __('Normal') }}</option>
                                    <option value="high" {{ old('priority') == 'high' ? 'selected' : '' }}>{{ __('High') }}</option>
                                    <option value="urgent" {{ old('priority') == 'urgent' ? 'selected' : '' }}>{{ __('Urgent') }}</option>
                                </select>

                                @error('priority')
                                <div class="text-danger mt-1">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="title" class="form-label">{{__('Title')}}</label>
                            <input type="text" class="form-control" id="title" name="title" value="{{old('title')}}" required>
                            @error('title')
                            <div class="text-danger mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">{{__('Description')}}</label>
                            <textarea class="form-control" id="description" name="description" rows="5" required>{{old('description')}}</textarea>
                            @error('description')
                            <div class="text-danger mt-1">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn_gray" data-bs-dismiss="modal">{{__('Cancel')}}</button>
                        <button type="submit" class="btn_primary">{{__('Create Ticket')}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            @if($errors->any())
            $('#createTicketModal').modal('show');
            @endif
        });
    </script>
@endsection
