import { NFTMintCard } from '@coinbase/onchainkit/nft';
import { NFTMedia } from '@coinbase/onchainkit/nft/view'; 
import {
 
  NFTMintButton, 

} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0xaF3FAFb7Bb7259c0108AB678De96439df3df245c' 
  
> 
  <NFTMedia
 />
    <NFTMintButton />
</NFTMintCard>
  );
}