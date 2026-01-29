<?php

namespace Modules\Wallet\app\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WalletTransactionResource extends JsonResource
{
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user_balance_id' => $this->wallet_id,
            'transaction_type' => $this->transaction_type,
            'amount' => $this->amount,
            'description' => $this->description,
            'payment_gateway' => $this->payment_gateway,
            'payment_attachment' => $this->payment_attachment,
            'status' => $this->status,
            'reference_type' => $this->reference_type,
            'invoice_number' => $this->invoice_number,
            'created_at' => $this->created_at ? $this->created_at->format('d-m-Y') : null,
          ];
    }
}
