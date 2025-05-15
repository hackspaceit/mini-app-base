import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 

} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x5d3fa8fc8fcdcd61083940e27977ed64261be53f' 
  
> 
  
    <NFTMintButton />
</NFTMintCard>
  );
}