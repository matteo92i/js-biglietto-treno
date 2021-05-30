var numeroKm = prompt('numero Km')
var etàPass = prompt('età passeggero')

document.getElementById('prezzo').innerHTML = numeroKm * 0.21

var etàPass = 65
if(etàPass >= 65){
    document.getElementById('output').innerHTML = numeroKm * 0.126
}