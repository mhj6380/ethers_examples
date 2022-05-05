// 송금처리 Transaction

const { ethers } = require("ethers");

const INFURA_ID = "d2627686e3b34a6db0cb54a0524bf205";
const provider = new ethers.providers.JsonRpcProvider(
  `https://kovan.infura.io/v3/${INFURA_ID}`
);

const account1 = "0xAb4E5834C33a48B0bbA585a04EeD444B48A74306"; // sender 테스트용 학구 지갑주소
const account2 = "0x2460394330Be26326D344594B04bA8e829814e75"; // receiver 수신자 지갑주소
const privateKey1 =
  "84e213fc46c31f33033d0bdbdf0da2b939b3653e55c9c4387dae9867bec63e47"; // sender private key
const wallet = new ethers.Wallet(privateKey1, provider);
const main = async () => {
  // Show account 1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  // Show account 2 balance before transfer
  const receiverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `Sender Balance Before : ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `Receiver Balance Before : ${ethers.utils.formatEther(
      receiverBalanceBefore
    )}`
  );

  // Send Ether Trainsaction
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025"),
  });

  // Feth Transaction
  // Trainsaction 이 끝나길 기다린다
  await tx.wait();
  console.log(tx);

  // Show account 1 balance after transfer
  const senderBalanceAfter = await provider.getBalance(account1);
  // Show account 2 balance after transfer
  const receiverBalanceAfter = await provider.getBalance(account2);

  console.log(
    `Sender Balance Before : ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `Receiver Balance Before : ${ethers.utils.formatEther(
      receiverBalanceAfter
    )}`
  );
};

main();
