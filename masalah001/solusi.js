/*
 * Penyelesaian masalah 1 Proyek Euler dengan cara 
 * brute-force melalui pengulangan for
 */

export const jumlahKelipatan3atau5 = (batas) => {
	let jumlah = 0;

	for (let i = 1; i < batas; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			jumlah += i;
		}
	}

	return jumlah;
};