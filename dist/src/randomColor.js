"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = randomColor;
function randomColor() {
	var colores = ["amarillo", "blanco", "azul", "verde", "naranja", "rojo"];
	var min = 0;
	var max = 5;
	var randomNumber = Math.round(Math.random() * (max - min) + min);
	return colores[randomNumber];
}