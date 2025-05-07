const CONFIG = {
    NETWORK: {
      NAME: 'Ethereum', // Change this based on your network (Ethereum, Hedera, etc.)
      RPC_URL: process.env.RPC_URL || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Default Infura URL or your custom RPC URL
      CHAIN_ID: 1, // Ethereum Mainnet chain ID, change it based on the network
    },
    CONTRACT_ADDRESS: 'YOUR_CONTRACT_ADDRESS', // Replace with the address of your deployed ERC3643 contract
    FIREBLOCKS_API_KEY: process.env.FIREBLOCKS_API_KEY, // Fireblocks API Key from your .env
    FIREBLOCKS_API_SECRET: process.env.FIREBLOCKS_API_SECRET, // Fireblocks API Secret from your .env
  };
  
  export default CONFIG;