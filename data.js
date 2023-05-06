const namaAku = "Yahya Ayas";
let umur = 19;
console.log (`Perkenalkan nama saya ${namaAku} dan saya berusia ${umur} tahun`)

let biodatas = document.getElementById('bio')

function biodata() {
    let usia;

    if(umur < 20){
    usia = 'anda bayi';
    }else {
    usia = 'anda tua';
    }
    return biodatas.innerHTML = usia;
}

biodata()