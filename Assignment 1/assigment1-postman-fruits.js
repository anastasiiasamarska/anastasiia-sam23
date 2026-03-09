pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains fruit named Pear", function () {
  pm.response.to.be.json;
  const data = pm.response.json();

  pm.expect(data, "Response should be an array").to.be.an("array");
  const pear = data.find((item) => item && item.name === "Pear");
  pm.expect(pear, "Pear should exist in the response").to.exist;
});

pm.test("Pear has id 4", function () {
  const data = pm.response.json();
  const pear = data.find((item) => item && item.name === "Pear");

  pm.expect(pear, "Pear should exist in the response").to.exist;
  pm.expect(pear).to.have.property("id");
  pm.expect(pear.id, "Pear id").to.equal(4);
});