export const TOKEN_DECIMALS = 18; // ERC20 standard typically uses 18 decimals
export const ERC3643_TOKEN_ABI = [
  // Replace with the actual ABI of your ERC3643 token contract
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Add other contract functions and events as needed
];

export const FIREBLOCKS_API_KEY = process.env.FIREBLOCKS_API_KEY; // Just as a reference
export const FIREBLOCKS_API_SECRET = process.env.FIREBLOCKS_API_SECRET; // Same for the secret

// You can add other constants like token symbol, etc.
export const TOKEN_SYMBOL = 'ERC3643'; // Example token symbol