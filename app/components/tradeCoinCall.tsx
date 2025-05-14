import { tradeCoin } from "@zoralabs/coins-sdk";
import { Address, createWalletClient, createPublicClient, http, parseEther, Hex } from "viem";
import { base } from "viem/chains";
 
// Set up viem clients
const publicClient = createPublicClient({
  chain: base,
  transport: http("<RPC_URL>"),
});
 
const walletClient = createWalletClient({
  account: "0x<YOUR_ACCOUNT>" as Hex,
  chain: base,
  transport: http("<RPC_URL>"),
});
 
// Define buy parameters
const buyParams = {
  direction: "buy" as const,
  target: "0xCoinContractAddress" as Address,
  args: {
    recipient: "0xYourAddress" as Address, // Where to receive the purchased coins
    orderSize: parseEther("0.1"), // Amount of ETH to spend
    tradeReferrer: "0xOptionalReferrerAddress" as Address, // Optional
  }
};
 
// Execute the buy
async function buyCoin() {
  const result = await tradeCoin(buyParams, walletClient, publicClient);
  
  console.log("Transaction hash:", result.hash);
  console.log("Trade details:", result.trade);
  
  return result;
}

