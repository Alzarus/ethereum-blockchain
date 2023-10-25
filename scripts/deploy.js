const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("MeuContrato");
  const contract = await contractFactory.deploy("Hello, world!");
  await contract.waitForDeployment();
  console.log("Contrato enviado a Blockchain no endereço: ", await contract.getAddress());

  const setMessageTxn = await contract.setMessage("Oi, mundo!");
  await setMessageTxn.wait();
  console.log("Mensagem enviada com o hash: ", setMessageTxn.hash);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
