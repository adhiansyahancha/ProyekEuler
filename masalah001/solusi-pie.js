/*
 * Penyelesaian masalah 1 Proyek Euler dengan cara
 * prinsip inklusi-eksklusif (PIE) dan deret aritmetika
 * 
 * Penjelasan tentang PIE: https://math.mit.edu/~fox/MAT307-lecture04.pdf
 */

const sigmaKelipatan = (n, k) => {
	const p = Math.floor((n - 1) / k);
	return k * p * (p + 1) / 2;
};

const jumlahKelipatan3atau5 = (batas) => {
	return sigmaKelipatan(batas, 3) + sigmaKelipatan(batas, 5) - sigmaKelipatan(batas, 15);
};

console.log(jumlahKelipatan3atau5(20));
