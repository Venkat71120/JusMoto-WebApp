import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WalletService } from '../../core/services/wallet.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">My Wallet</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow p-6 text-white mb-6">
            <p class="text-sm opacity-80">Available Balance</p>
            <p class="text-4xl font-bold">₹{{ balance() }}</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">Add Money</h2>
            <div class="flex gap-4">
              <input type="number" [(ngModel)]="addAmount" placeholder="Enter amount" class="flex-1 p-3 border rounded">
              <button (click)="addMoney()" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" [disabled]="isProcessing()">
                {{ isProcessing() ? 'Processing...' : 'Add Money' }}
              </button>
            </div>
            <div class="flex gap-2 mt-4">
              @for (amount of quickAmounts; track amount) {
                <button (click)="addAmount = amount" class="px-4 py-2 border rounded hover:bg-gray-50">
                  +₹{{ amount }}
                </button>
              }
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Transaction History</h2>
            @if (transactions().length > 0) {
              <div class="space-y-4">
                @for (txn of transactions(); track txn.id) {
                  <div class="flex justify-between items-center border-b pb-4">
                    <div>
                      <p class="font-semibold">{{ txn.description }}</p>
                      <p class="text-sm text-gray-500">{{ txn.created_at | date:'medium' }}</p>
                    </div>
                    <span [class]="txn.type === 'credit' ? 'text-green-600' : 'text-red-600'" class="font-bold">
                      {{ txn.type === 'credit' ? '+' : '-' }}₹{{ txn.amount }}
                    </span>
                  </div>
                }
              </div>
            } @else {
              <p class="text-gray-500 text-center py-4">No transactions yet</p>
            }
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6 h-fit">
          <h2 class="text-xl font-bold mb-4">Quick Info</h2>
          <div class="space-y-4">
            <div class="p-3 bg-gray-50 rounded">
              <p class="text-sm text-gray-500">Total Added</p>
              <p class="font-bold text-lg">₹{{ stats().totalAdded }}</p>
            </div>
            <div class="p-3 bg-gray-50 rounded">
              <p class="text-sm text-gray-500">Total Spent</p>
              <p class="font-bold text-lg">₹{{ stats().totalSpent }}</p>
            </div>
            <div class="p-3 bg-gray-50 rounded">
              <p class="text-sm text-gray-500">Cashback Earned</p>
              <p class="font-bold text-lg text-green-600">₹{{ stats().cashbackEarned }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class WalletComponent implements OnInit {
  balance = signal(0);
  transactions = signal<any[]>([]);
  stats = signal({ totalAdded: 0, totalSpent: 0, cashbackEarned: 0 });
  addAmount = 0;
  isProcessing = signal(false);
  quickAmounts = [100, 500, 1000, 2000];

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadWallet();
    this.loadTransactions();
  }

  loadWallet(): void {
    this.walletService.getBalance().subscribe({
      next: (response) => {
        this.balance.set(response.data?.balance || 0);
      }
    });
  }

  loadTransactions(): void {
    this.walletService.getTransactions().subscribe({
      next: (response) => {
        this.transactions.set(response.data || []);
      }
    });
  }

  addMoney(): void {
    if (this.addAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    this.isProcessing.set(true);
    this.walletService.topUp(this.addAmount, 'razorpay').subscribe({
      next: () => {
        this.isProcessing.set(false);
        this.addAmount = 0;
        this.loadWallet();
        this.loadTransactions();
        alert('Money added successfully!');
      },
      error: () => {
        this.isProcessing.set(false);
        alert('Failed to add money. Please try again.');
      }
    });
  }
}
