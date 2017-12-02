/*
5.3. Posedujemo 2 predmeta. Svaki od njih ima svoju težinu.
Takođe znamo koja je maksimalna težina koju možemoda ponesemo sa nama. 
Proveriti da li možemo da ponesemo oba, samo jedan od njih i to koji ili 
ni jedan. Takođe se može desiti da ne možemo oba ali da pojedinačno ne 
prelaze maksimalnu težinu pa možemo da biramo koji ćemo.
*/

var tezina1 = Number(prompt('Unesi težinu prvog predmeta:'));
var tezina2 = Number(prompt('Unesi težinu drugog predmeta:'));
var maxTezina = Number(prompt('Unesi maksimalnu dozvoljenu težinu:'));
var suma = tezina1+tezina2;

function ProveraTezine (a, b, max){
	if (suma <= max){
		console.log('Moguće je poneti oba predmeta');
	}
	else if (a>max && b>max){
		console.log('Nije moguće poneti ni jedan predmet');
	}
	else if (a>max && b<=max){
		console.log('Moguće je poneti drugi predmet');
	}
	else if (a<=max && b>max){
		console.log('Moguće je poneti prvi predmet');
	}
	else if (a<=max && b<=max && max<=suma){
		console.log('Nije moguće poneti oba predmeta.Izaberi koji od dva predmeta želiš poneti')
	}
	else{
		console.log('Pogrešan unos!')
	}
}

ProveraTezine(tezina1, tezina2, maxTezina);
