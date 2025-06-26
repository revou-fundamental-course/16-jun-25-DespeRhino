// script.js

function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const hasilDiv = document.getElementById('luasHasil');

  if (isNaN(alas) || isNaN(tinggi)) {
    hasilDiv.innerHTML = 'Masukkan nilai alas dan tinggi yang valid';
    return;
  }

  const luas = 0.5 * alas * tinggi;
  hasilDiv.innerHTML = `L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`;
}

function resetLuas() {
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('luasHasil').innerHTML = '';
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById('sisi1').value);
  const s2 = parseFloat(document.getElementById('sisi2').value);
  const s3 = parseFloat(document.getElementById('sisi3').value);
  const hasilDiv = document.getElementById('kelilingHasil');

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    hasilDiv.innerHTML = 'Masukkan nilai ketiga sisi yang valid';
    return;
  }

  const keliling = s1 + s2 + s3;
  hasilDiv.innerHTML = `K = ${s1} + ${s2} + ${s3}<br>K = ${keliling}`;
}

function resetKeliling() {
  document.getElementById('sisi1').value = '';
  document.getElementById('sisi2').value = '';
  document.getElementById('sisi3').value = '';
  document.getElementById('kelilingHasil').innerHTML = '';
}
