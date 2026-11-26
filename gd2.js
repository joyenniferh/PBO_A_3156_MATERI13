const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    }
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};

const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const robotRumah = new RobotRumah("RobotRumah_3156");
const robotKurir = new RobotKurir("RobotKurir_3156");

robotRumah.bersihkan();
robotRumah.patroli();
robotKurir.antarPaket();

console.log("RobotKurir_3156 bisa membersihkan? " +
    (typeof robotKurir.bersihkan === "function"));

console.log("RobotRumah_3156 bisa mengantar paket? " +
    (typeof robotRumah.antarPaket === "function"));