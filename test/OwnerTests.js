var BatchDeposit = artifacts.require("BatchDeposit");
const assert = require("chai").assert;
const truffleAssert = require("truffle-assertions");

// 1 gwei fee
const fee = web3.utils.toWei("0", "gwei");

contract("BatchDeposit", async (accounts) => {

  it("should not renounce ownership", async () => {
    let contract = await BatchDeposit.deployed();

    await truffleAssert.reverts(
      contract.renounceOwnership({ from: accounts[0] }),
      "Ownable: renounceOwnership is disabled"
    );
  });
});
