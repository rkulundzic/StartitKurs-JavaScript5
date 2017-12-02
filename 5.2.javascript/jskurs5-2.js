/*
5.2. Kao ulazna vrednost zadat je niz celih brojeva. 
Proveriti da li u tom nizu postoje bar 2 ista elementa.
Ukoliko postoje bar 2 ista elementa vratiti true vrednost, u suprotnom false. 
Primeri:
  var niz = [3, 6, 7, 8]; // false
  var niz = [1, 3, 1, 5]; // true
*/

var duzina = Number(prompt('Unesi duzinu niza:'));
var niz = [];
var provera = false;

for (var i = 0; i < duzina; i++){
	niz.push(Number(prompt('Unesi jedan broj:')));
}

console.log(niz);

function Duplikat(array){
for (var i = 0; i < array.length; i++) {
		
	for (var j = i+1; j < array.length; j++) {
			
		if (array[i] == array[j]) {
			provera = true;
		}
	}
}

if (provera){
	console.log(true);
}
else{
	console.log(false);
}

}

Duplikat(niz);
