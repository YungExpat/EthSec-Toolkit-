const { expect } = require("chai");

describe("SampleChallenge", function () {
  it("should accept deposits and allow withdrawals", async function () {
    const [user] = await ethers.getSigners();
    const Sample = await ethers.getContractFactory("SampleChallenge");
    const contract = await Sample.deploy();
    await contract.deployed();

    await contract.connect(user).deposit({ value: ethers.utils.parseEther("1") });
    expect(await contract.balances(user.address)).to.equal(ethers.utils.parseEther("1"));

    await contract.connect(user).withdraw();
    expect(await contract.balances(user.address)).to.equal(0);
  });
});
