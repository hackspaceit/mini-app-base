import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 

} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x9b40354c2fc6098913F6D9DA26B70af1acF0413C' 
  
> 
  
    <NFTMintButton />
</NFTMintCard>
  );
}