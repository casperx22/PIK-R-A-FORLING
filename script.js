const SCRIPT_URL = "https://docs.google.com/spreadsheets/d/1ZSYjxlOxxrUVEcm8fVQ1NBgXH-TR8RGTey_b13bepyg/edit?gid=0#gid=0"; 

document.getElementById('absensiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = e.target.querySelector('button');
    btn.innerText = "MENGIRIM...";
    btn.disabled = true;

    const tglInput = document.getElementById('tanggal').value;
    const d = new Date(tglInput);
    const tanggalFormat = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    const bulanSaja = String(d.getMonth() + 1).padStart(2, '0');

    const dataBaru = {
        tanggal: tanggalFormat,
        nama: document.getElementById('nama').value,
        kelas: document.getElementById('kelas').value,
        ket: document.getElementById('keterangan').value,
        materi: document.getElementById('materi').value,
        bulan: bulanSaja
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(dataBaru)
    })
    .then(() => {
        alert("Terima kasih! Absensi kamu sudah tercatat.");
        document.getElementById('absensiForm').reset();
        btn.innerText = "KIRIM ABSENSI";
        btn.disabled = false;
    })
    .catch(err => {
        alert("Terjadi kesalahan, coba lagi!");
        btn.innerText = "KIRIM ABSENSI";
        btn.disabled = false;
    });
});
