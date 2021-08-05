var numeroKm = prompt('numero Km');
var etàPass = prompt('età passeggero');
var prezzoAlKm = 0.21;
var scontoMag = 40;
var scontoMin = 20;


var scontoMinorenne = 100 - scontoMin;
var scontoMaggiorenne =  100 - scontoMag;




if(etàPass >= 65){
    document.getElementById('output').innerHTML =  Math.round((((numeroKm * prezzoAlKm) * scontoMaggiorenne) /100) *100) /100
} else if (etàPass <= 17){
    document.getElementById('output').innerHTML = Math.round((((numeroKm * prezzoAlKm) * scontoMinorenne) /100) *100) /100
} else{
    document.getElementById('output').innerHTML = numeroKm * prezzoAlKm

}
    





