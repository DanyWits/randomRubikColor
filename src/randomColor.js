export default function randomColor(){
	const colores = ["amarillo","blanco","azul","verde","naranja","rojo"];
	const min = 0;
	const max = 5;
	var randomNumber = Math.round(Math.random() * (max-min) + min);
	return colores[randomNumber];
}