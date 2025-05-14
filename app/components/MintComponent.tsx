import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x69d1291333d2f564548e0e0dd5dece07fdfe76f2' 
  
> 
  
    <NFTMintButton disabled={false}/>
</NFTMintCard>
  );
}