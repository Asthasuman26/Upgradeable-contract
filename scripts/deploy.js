const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");

  console.log("Deploying MyContract");

  const instance = await upgrades.deployProxy(MyContract, [42], {
    initializer: "initialize",
  });

  await instance.waitForDeployment();

  console.log("MyContract deployed at:", await instance.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
