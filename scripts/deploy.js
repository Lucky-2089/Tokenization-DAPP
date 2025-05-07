const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const tokenName = "My Security Token";
  const tokenSymbol = "MST";
  const initialSupply = 1000000;

  const ERC3643Token = await ethers.getContractFactory("ERC3643Token");
  const token = await ERC3643Token.deploy(tokenName, tokenSymbol, initialSupply);

  await token.waitForDeployment();

  console.log("ERC3643Token deployed to:", token.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});