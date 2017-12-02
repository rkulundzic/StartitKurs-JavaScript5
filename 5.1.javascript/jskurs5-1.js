/*
5.1. Zadat je niz celih brojeva, zadata je vrednost koja se traži i 
zadata je vrednost kojom treba zameniti traženu vrednost.
Broj 4 u nizu zemeniti brojem 25, i izbaciti novi niz sa zamenjenim brojevima.
*/

var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var traženaVrednost=4;
var novaVrednost=25;
var noviNiz=[];

function Zamena(array, a, b){
	for (var i = 0; i < array.length; i++) {
		if (niz[i] == a) {
			niz[i] = b;
		}
		noviNiz.push(array[i]);
	}

	console.log(noviNiz);
}

Zamena(niz, traženaVrednost, novaVrednost);
