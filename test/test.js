const expect = require("chai").expect;
const randomColor = require("..").default;

describe("#randomColor", function(){
	it("El programa debe devolver: blanco, amarillo, verde, azul, rojo o naranja", function(){
		const color=randomColor();
		expect(color).to.equal("blanco");
	})
})