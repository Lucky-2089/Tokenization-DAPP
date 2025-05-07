import React, { useState, useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import CreateToken from './components/CreateToken';
import MintToken from './components/MintToken';


function App() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const checkConnectedWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log('Connected account on load:', accounts[0]);
        }
      }
    };

    checkConnectedWallet();
  }, []);

  return (
    <div>
      <h1>My Tokenization DApp</h1>
      <ConnectWallet setAccount={setAccount} />
      {account && (
        <div>
          <p>Connected Account: {account}</p>
          <CreateToken account={account} />
          <MintToken account={account} />
          
        </div>
      )
      }
    </div>
  );
}

export default App;