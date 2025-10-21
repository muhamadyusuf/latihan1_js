function kirim() {
    let nama_depan = document.getElementById("nama_depan").value;
    let nama_belakang = document.getElementById("nama_belakang").value;
    let nilai_angka = document.getElementById("nilai_angka").value;

    var nilai_huruf = "";
    switch(true){
        case (nilai_angka >= 85):
            nilai_huruf = "A";
            break;
        case (nilai_angka >= 80):
            nilai_huruf = "A-";
            break;
        case (nilai_angka >= 75):
            nilai_huruf = "B+";
            break;
        case (nilai_angka >= 70):
            nilai_huruf = "B";
            break;
        case (nilai_angka >= 65):
            nilai_huruf = "B-";
            break;
        case (nilai_angka >= 60):
            nilai_huruf = "C+";
            break;
        case (nilai_angka >= 55):
            nilai_huruf = "C";
            break;
        case (nilai_angka >= 40):
            nilai_huruf = "D";
            break;
        default:
            nilai_huruf = "E";
    }
    console.log("Nama Lengkap: " + nama_depan + " " + nama_belakang);
    console.log("Nilai Angka: " + nilai_angka);
    console.log("Nilai Huruf: " + nilai_huruf);
}