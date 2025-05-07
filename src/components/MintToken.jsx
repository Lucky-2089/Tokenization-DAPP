import React, { useState } from 'react';
import { ethers } from 'ethers';
import { BrowserProvider } from 'ethers'; // Import BrowserProvider

// Assuming you have your contract ABI imported
// import ERC3643TokenABI from '../services/ERC3643TokenABI.json';

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address

function MintToken({ account }) {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amountToMint, setAmountToMint] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const mintTokenHandler = async () => {
    if (!account) {
      setErrorMessage('Please connect your wallet first.');
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(account);
      // const tokenContract = new ethers.Contract(contractAddress, ERC3643TokenABI, signer); // Uncomment when you have the ABI

      // Assuming your ERC3643Token contract has a 'mint' function
      // const amount = ethers.utils.parseUnits(amountToMint, 'ether'); // Adjust decimals if needed
      // const transaction = await tokenContract.mint(recipientAddress, amount);
      // await transaction.wait();
      console.log('Attempting to mint', amountToMint, 'tokens to', recipientAddress);
      setSuccessMessage(`Successfully initiated minting of ${amountToMint} tokens to ${recipientAddress} (check console for details - actual transaction needed).`);
      setErrorMessage('');
    } catch (error) {
      console.error('Error minting tokens:', error);
      setErrorMessage('Failed to mint tokens.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Mint Tokens</h2>
      <div>
        <label>Recipient Address:</label>
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Amount to Mint:</label>
        <input
          type="number"
          value={amountToMint}
          onChange={(e) => setAmountToMint(e.target.value)}
        />
      </div>
      <button onClick={mintTokenHandler} disabled={!account}>
        Mint
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default MintToken;