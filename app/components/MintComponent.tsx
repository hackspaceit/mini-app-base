import { NFTMintCard } from '@coinbase/onchainkit/nft';
import { NFTMedia } from '@coinbase/onchainkit/nft/view'; 
import {
  NFTCreator, 
  NFTCollectionTitle, 
  NFTQuantitySelector, 
  NFTAssetCost, 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0x068BC80E15c38d91E09653EF714A7b1E3B2052Bc' 
  tokenId='2'
> 
  <NFTCreator />
  <NFTMedia />
  <NFTCollectionTitle />
  <NFTQuantitySelector />
  <NFTAssetCost />
    <NFTMintButton />
</NFTMintCard>
  );
}