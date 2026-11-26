class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}

class MobilListrik extends KendaraanListrik {}

class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach((kendaraan) => kendaraan.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach((kendaraan) => kendaraan.isiDaya(40));
}

const avanza = new MobilBensin("Avanza_3156");
const ioniq = new MobilListrik("Ioniq_3156");
const beat = new MotorBensin("Beat_3156");

avanza.info();
ioniq.info();
beat.info();

isiSemuaBensin([avanza, beat]);
isiSemuaDaya([ioniq]);