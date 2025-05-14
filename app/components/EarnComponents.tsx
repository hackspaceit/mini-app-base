'use client';

import { Earn } from '@coinbase/onchainkit/earn';

const vaultAddresses: `0x${string}`[] = [
  '0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1',
  '0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A',
  '0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca',
  '0x0D05e6ec0A10f9fFE9229EAA785c11606a1d13Fb',
  '0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844',
  '0xBeEf11eCb698f4B5378685C05A210bdF71093521'
];

export default function EarnComponents() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vaultAddresses.map((address) => (
          <div key={address} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <Earn 
              vaultAddress={address}
            />
          </div>
        ))}
      </div>
    </div>
  );
}