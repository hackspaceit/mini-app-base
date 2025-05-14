import { NFTCard } from '@coinbase/onchainkit/nft';
import { NFTMedia, NFTTitle, NFTOwner, NFTMintDate, NFTNetwork } from '@coinbase/onchainkit/nft/view';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const CONTRACT_ADDRESSES = [
  
  '0x068BC80E15c38d91E09653EF714A7b1E3B2052Bc',

] as const;

interface CachedImage {
  contractAddress: string;
  imageUrl: string;
  timestamp: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function MintComponents() {
  const [imageCache, setImageCache] = useState<Record<string, CachedImage>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cache from localStorage on mount
  useEffect(() => {
    const loadCache = () => {
      try {
        const cached = localStorage.getItem('nft-image-cache');
        if (cached) {
          const parsedCache = JSON.parse(cached) as Record<string, CachedImage>;
          // Clean expired entries
          const now = Date.now();
          const validCache = Object.entries(parsedCache).reduce((acc, [key, value]) => {
            if (now - value.timestamp < CACHE_DURATION) {
              acc[key] = value;
            }
            return acc;
          }, {} as Record<string, CachedImage>);
          setImageCache(validCache);
        }
      } catch (error) {
        console.error('Error loading cache:', error);
      }
      setIsInitialized(true);
    };

    loadCache();
  }, []);

  // Save cache to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized && Object.keys(imageCache).length > 0) {
      localStorage.setItem('nft-image-cache', JSON.stringify(imageCache));
    }
  }, [imageCache, isInitialized]);


  // Custom NFTMedia wrapper component
  const CachedNFTMedia = ({ contractAddress }: { contractAddress: string }) => {
    const [isLoading] = useState(!imageCache[contractAddress]);


    const cachedImage = imageCache[contractAddress];

    if (!isInitialized) {
      return <div className="w-full h-full bg-gray-200 animate-pulse" />;
    }

    return (
      <div className="relative w-full h-full">
        {cachedImage ? (
          <Image 
            src={cachedImage.imageUrl} 
            alt="NFT" 
            fill
            className="object-cover"
          />
        ) : (
          <div className={`w-full h-full ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
            <NFTMedia square />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 max-w-5xl mx-auto w-full">
      {CONTRACT_ADDRESSES.map((address) => (
        <div key={address} className="max-w-[400px] mx-auto w-full">
          <NFTCard 
            contractAddress={`0x${address.substring(2)}`} 
            tokenId="1"
            className="w-full h-full !border-0 !shadow-none"
          >
            <div className="aspect-square">
              <CachedNFTMedia contractAddress={`0x${address.substring(2)}`} />
            </div>
            <div className="p-4">
              <NFTTitle />
              <NFTOwner />
              <NFTMintDate />
              <NFTNetwork />
            </div>
          </NFTCard>
        </div>
      ))}
    </div>
  );
}