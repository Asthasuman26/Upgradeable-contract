const { ethers, upgrades } = require("hardhat");

async function main() {
  const existingProxyAddress = "0x0832Dd8cA919Db8B9723D8Ea32efd44845B91A69";

  console.log("Upgrading MyContract to V2");

  const MyContractV2 = await ethers.getContractFactory("MyContractV2");
  const upgraded = await upgrades.upgradeProxy(existingProxyAddress, MyContractV2);

  console.log("Contract upgraded at same proxy address:", upgraded.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
