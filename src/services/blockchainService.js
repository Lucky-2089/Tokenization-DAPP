import { ethers } from 'ethers';
import ERC3643Token from '../abis/ERC3643Token.json'; // Path to your contract ABI

const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
let provider;
let signer;
let contract;

const connectWallet = async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ERC3643Token.abi, signer);
    await provider.send('eth_requestAccounts', []);
    const address = await signer.getAddress();
    return address;
  } else {
    throw new Error('Please install MetaMask');
  }
};

const mintTokens = async (recipient, amount) => {
  try {
    const tx = await contract.mint(recipient, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    return tx;
  } catch (error) {
    throw new Error('Minting failed');
  }
};

const transferTokens = async (recipient, amount) => {
  try {
    const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    return tx;
  } catch (error) {
    throw new Error('Transfer failed');
  }
};

const getBalance = async (address) => {
  const balance = await contract.balanceOf(address);
  return ethers.utils.formatUnits(balance, 18); // Convert from Wei to token units
};

export { connectWallet, mintTokens, transferTokens, getBalance };