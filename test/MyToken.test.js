const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe('MyToken', () => {
  it('Should return the correct symbol', async () => {
    const MyToken = await ethers.getContractFactory('MyToken');
    const initialSupply = BigNumber.from(1000000);
    const myToken = await MyToken.deploy(initialSupply);
    await myToken.deployed();

    expect(await myToken.symbol()).to.equal('MYT');
  });

  it('Should return the correct name', async () => {
    const MyToken = await ethers.getContractFactory('MyToken');
    const initialSupply = BigNumber.from(1000000);
    const myToken = await MyToken.deploy(initialSupply);
    await myToken.deployed();

    expect(await myToken.name()).to.equal('MyToken');
  });
});

