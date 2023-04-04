// migrating the appropriate contracts
const Roles = artifacts.require("./Roles.sol");
const FarmerRole = artifacts.require("./FarmerRole.sol");
const DistributorRole = artifacts.require("./DistributorRole.sol");
const RetailerRole = artifacts.require("./RetailerRole.sol");
const ConsumerRole = artifacts.require("./ConsumerRole.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");
const Ownable = artifacts.require("./Ownable.sol");


module.exports = function(deployer) {
  deployer.deploy(SupplyChain);
};
