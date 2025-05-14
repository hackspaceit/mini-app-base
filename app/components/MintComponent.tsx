import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x068BC80E15c38d91E09653EF714A7b1E3B2052Bc' 
  
> 
  
    <NFTMintButton disabled={false}/>
</NFTMintCard>
  );
}