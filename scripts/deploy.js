require("@nomicfoundation/hardhat-toolbox");
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Ticketchain = await ethers.getContractFactory("Ticketchain");
  const ticketchain = await Ticketchain.deploy();

  console.log("Ticketchain address:", ticketchain.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });