// npx hardhat run scripts/deploy.js --network goerli

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");

  console.log('BuyMeACoffee starting deploy Part I');
  const buyMeACoffee = await BuyMeACoffee.deploy();
  console.log('BuyMeACoffee starting deploy Part II');

  await buyMeACoffee.deployed();

  console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });