const hre = require("hardhat");
const { BigNumber } = require('ethers');


async function main() {
  
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const initialSupply = BigNumber.from(1000000);
  const myToken = await MyToken.deploy(initialSupply);

  await myToken.deployed();

  console.log("MyToken deployed to:", myToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
