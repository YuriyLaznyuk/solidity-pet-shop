const Adoption = artifacts.require("Adoption");

contract("Adoption", function (accounts) {
  describe("First group of test", () => {
    let instance;
    before(async () => {
      instance = await Adoption.deployed();
    });

    it("User should adopt a pet", async () => {
      await instance.adopt.sendTransaction(8, { from: accounts[0] });
      let adopter = await instance.adopters.call(8);
      assert.equal(adopter, accounts[0], "Incorrect owner address");
    });

    it("Should get adopter address by pet id in array", async () => {
      let adopters = await instance.getAdopters.call();
      assert.equal(
        adopters[8],
        accounts[0],
        "Owner of pet id should be recorder in the array"
      );
    });

    it("Should throw if invalid pet id is given", async () => {
      try {
       await instance.adopt.sendTransaction(18,{ from:accounts[0]})
       assert.fail(true,false,"This function did not throw"); 
      } catch (erorr) {

assert.include(String(erorr), "revert",
 `Expected "revert" but instead received got ${erorr}`);

      }
    });
  });
});
