/** @format */

let elements = document.querySelectorAll("li");
let num = elements.length;
console.log(`кол-во елементов ${num}`);
for (let elem of elements) {
	console.log(elem);
	let text = elem.firstChild.nodeValue.trim();
	console.log(text);
}
