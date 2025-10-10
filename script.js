document.getElementById("kirim").addEventListener("click", kirimPertanyaan);

function kirimPertanyaan() {
  let nama = document.getElementById("nama").value;
  let pertanyaan = document.getElementById("pertanyaan").value;
  // Kirim pertanyaan ke server
  console.log(`Nama: ${nama}, Pertanyaan: ${pertanyaan}`);
}
