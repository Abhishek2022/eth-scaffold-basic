const main = async () => {
    const [owner, randomAddr] = await hre.ethers.getSigners();
    const counterFactory = await hre.ethers.getContractFactory("Counter");
    const counterContract = await counterFactory.deploy();
    await counterContract.deployed();

    console.log("Contract deployed to:", counterContract.address);
    console.log("Contract deployed by:", owner.address);

    let count = await counterContract.getCount();
    console.log("Current count - ", count);

    let txn = await counterContract.increment();
    txn.wait();

    count = await counterContract.getCount();
    console.log("Current count - ", count);
};

const runMain = async () => {
    try {
      await main();
      process.exit(0); 
    } catch (error) {
      console.log(error);
      process.exit(1); 
    }
};

runMain();