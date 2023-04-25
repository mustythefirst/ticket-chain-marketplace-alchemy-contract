const { expect } = require("chai");

describe('NFTMarketplace', function () {
  let nftmarketplace;
  let listPrice;
  let user;

  beforeEach(async function () {
    const NFTMarketplace = await ethers.getContractFactory('NFTMarketplace');
    nftmarketplace = await NFTMarketplace.deploy();
    await nftmarketplace.deployed();

    // Set the list price to 0.1 ETH for the test
    listPrice = ethers.utils.parseEther("0.1");

    // Get a user account to use for testing
    [user] = await ethers.getSigners();
  });

  it('should check if user has enough balance to list a token', async function () {
    // Check the user's account balance before listing the token
    const balanceBefore = await user.getBalance();
    console.log(balanceBefore);

    // Make sure the user has enough balance to cover the list price
    expect(balanceBefore).to.be.at.least(listPrice);

    // You can continue with the rest of the test here to list the token if the balance check passed
  });
});