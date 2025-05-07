import React from 'react';

const ConnectWallet = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log('Connected:', accounts[0]);
      } catch (error) {
        console.error('Wallet connection error:', error);
      }
    } else {
      alert('MetaMask not found');
    }
  };

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;