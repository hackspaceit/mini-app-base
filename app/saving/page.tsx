'use client';

import { WalletDefault } from '@coinbase/onchainkit/wallet';
import { Earn } from '@coinbase/onchainkit/earn';
import { useState } from 'react';

const USDC_VAULT = '0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A';

function WelcomeView({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-serif text-white">
          Welcome to SafeYield
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Earn up to 5% APY on your USDC savings, backed by secure DeFi protocols.
          No lock-ups, withdraw anytime.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="text-3xl font-serif mb-3 text-white">6.3% APY</div>
            <div className="text-gray-400 font-light">Competitive yield on your savings, paid out daily</div>
          </div>
          <div className="p-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="text-3xl font-serif mb-3 text-white">24/7</div>
            <div className="text-gray-400 font-light">Access your funds anytime, anywhere in the world</div>
          </div>
          <div className="p-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="text-3xl font-serif mb-3 text-white">Secure</div>
            <div className="text-gray-400 font-light">Bank-grade security with smart contract audits</div>
          </div>
        </div>
        <button
          type="button"
          onClick={onStart}
          className="px-10 py-5 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10">Start Earning →</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>
      </div>
    </div>
  );
}

function EarnView() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-4xl font-serif text-white">Start Earning</h2>
        <p className="text-gray-300 font-light text-lg leading-relaxed">
          Deposit USDC to earn automated yield from secure DeFi protocols.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-10">
          <Earn vaultAddress={USDC_VAULT} />
        </div>
        <div className="space-y-8 py-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white">How It Works</h3>
            <div className="space-y-4 text-gray-300 font-light">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1">1</div>
                <p>Deposit USDC, receive vault shares</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1">2</div>
                <p>Funds auto-allocated to vetted protocols</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1">3</div>
                <p>Daily yield compounding</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1">4</div>
                <p>Withdraw anytime with earned yields</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/5 p-6">
            <h4 className="font-serif text-white mb-2">Security First</h4>
            <p className="text-gray-300 font-light leading-relaxed">
              Audited contracts with multi-sig protection ensure your funds stay safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SavingsApp() {
  const [view, setView] = useState<'welcome' | 'earn'>('welcome');

  const handleStart = () => {
    console.log('Switching to earn view');
    setView('earn');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white">
      <header className="w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
              <span className="text-xl font-serif">S</span>
            </div>
            <span className="text-xl font-serif tracking-wide">SafeYield</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="wallet-container">
              <WalletDefault />
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        {view === 'welcome' ? (
          <WelcomeView onStart={handleStart} />
        ) : (
          <EarnView />
        )}
      </main>
    </div>
  );
}