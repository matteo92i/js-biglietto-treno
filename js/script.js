var numeroKm = prompt('numero Km')
var etàPass = prompt('età passeggero')
var prezzoAlKm = 0.21


var scontoMinorenne = 20
var scontoMaggiorenne = 40

document.getElementById('prezzo').innerHTML = numeroKm * prezzoAlKm


if(etàPass >= 65){
    document.getElementById('output').innerHTML = ((numeroKm * prezzoAlKm) * scontoMaggiorenne) /100
} else if (etàPass <= 17){
    document.getElementById('output').innerHTML = ((numeroKm * prezzoAlKm) * scontoMinorenne) /100
    
}

    



