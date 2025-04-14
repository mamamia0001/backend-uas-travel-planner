const mongoose = require("mongoose"); // Mengimpor library Mongoose, yang menyediakan alat untuk berinteraksi dengan MongoDB.

const destinationSchema = new mongoose.Schema({
  // Membuat skema Mongoose baru yang mendefinisikan struktur dokumen untuk koleksi "Destination" di MongoDB.
  name: { type: String, required: true }, // Mendefinisikan field "name" dalam skema:
  //   - type: String - Menentukan bahwa nilai field ini harus berupa string.
  //   - required: true - Menentukan bahwa field ini wajib diisi saat membuat dokumen baru.
  date: { type: String, required: true }, // Mendefinisikan field "date" dalam skema:
  //   - type: String - Menentukan bahwa nilai field ini harus berupa string.
  //   - required: true - Menentukan bahwa field ini wajib diisi saat membuat dokumen baru.
});

module.exports = mongoose.model("Destination", destinationSchema); // Membuat model Mongoose bernama 'Destination' berdasarkan skema 'destinationSchema'.
// Model ini akan digunakan untuk membuat, membaca, memperbarui, dan menghapus dokumen dalam koleksi 'destinations' (secara otomatis menjadi jamak dari nama model) di database MongoDB.
// 'module.exports' membuat model ini tersedia untuk digunakan di file JavaScript lain yang mengimpornya.
