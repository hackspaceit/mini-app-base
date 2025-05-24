import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 

} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x363b1a86BB37fc1A1F87c1791119dbe18e9B4aF2' 
  
> 
  
    <NFTMintButton />
</NFTMintCard>
  );
}