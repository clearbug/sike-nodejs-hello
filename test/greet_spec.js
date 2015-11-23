var greet = require("greet");
describe("greet", function(){
  it("should greet a person by name", function(){
		var args = "clearbug";
		var result = greet(args);
		expect(result).to.equal("hello, clearbug");    
  });
	it("should greet a person flirtatiously if drunk", function(){
		var args = "Tom";
		var drunk = true;
		var nodrunk = false;
		var result = greet(args, drunk);
		expect(result).to.equal("hello, Tom,you look sexy today");
		result = greet(args, nodrunk);
		expect(result).to.equal("hello, Tom");
	});
});
