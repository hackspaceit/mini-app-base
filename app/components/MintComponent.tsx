import { NFTMintCard } from '@coinbase/onchainkit/nft';

import {
 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x7b92f1d8350daceeb751b45bb2d74916c768e309' 
  
> 
  
    <NFTMintButton disabled={false}/>
</NFTMintCard>
  );
}