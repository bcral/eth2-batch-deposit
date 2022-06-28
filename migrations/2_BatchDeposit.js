const DepositContract = artifacts.require("DepositContract");
const BatchDeposit = artifacts.require("BatchDeposit");

module.exports = function (deployer) {
  deployer.deploy(DepositContract).then(function () {
    return deployer.deploy(BatchDeposit, DepositContract.address);
  });
};
