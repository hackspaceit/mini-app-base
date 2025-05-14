import { FundCard } from '@coinbase/onchainkit/fund';

export default function FundCardComponents() {
  const presetAmountInputs = ['5', '10', '20'] as const;

  return (
    <div className="p-2">
      <FundCard 
        assetSymbol="USDC" 
        country="US"
        presetAmountInputs={presetAmountInputs}
      />
    </div>
  );
}