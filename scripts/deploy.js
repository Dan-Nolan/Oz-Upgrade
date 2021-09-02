const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const box = await upgrades.deployProxy(BoxV1, [4,9]);
  await box.deployed();
  console.log("Box TransparentProxy deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
