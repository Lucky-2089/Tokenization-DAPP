import FireblocksSDK from 'fireblocks-sdk';

const apiKey = process.env.FIREBLOCKS_API_KEY; // Your Fireblocks API Key
const apiSecret = process.env.FIREBLOCKS_API_SECRET; // Your Fireblocks API Secret
const fireblocks = new FireblocksSDK(apiKey, apiSecret);

const createTransaction = async (recipient, amount) => {
  try {
    // Create a transaction to transfer tokens (replace with actual logic)
    const transaction = await fireblocks.createTransaction({
      to: recipient,
      amount: amount,
      token: 'YOUR_TOKEN', // Token symbol or contract address
      // Other transaction details
    });

    return transaction;
  } catch (error) {
    throw new Error('Failed to create Fireblocks transaction');
  }
};

const signTransaction = async (transactionId) => {
  try {
    const signedTransaction = await fireblocks.signTransaction(transactionId);
    return signedTransaction;
  } catch (error) {
    throw new Error('Failed to sign transaction');
  }
};

export { createTransaction, signTransaction };