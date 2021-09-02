const { ethers, upgrades } = require("hardhat");

// TODO: put your TransparentProxy here:
const proxyAddr = "";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upraded = await upgrades.upgradeProxy(proxyAddr, BoxV2);
  console.log("Box upgraded!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
