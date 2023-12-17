# Masalah 1: Kelipatan 3 atau 5

Laman di proyek: [https://projecteuler.net/problem=1](https://projecteuler.net/problem=1)
Jawaban hitungan: [https://math.stackexchange.com/a/9305](https://math.stackexchange.com/a/9305)

Jika kita menulis semua bilangan asli di bawah 10 yang merupakan kelipatan 3 atau 5, kita mendapatkan 3, 5, 6, dan 9. Jumlah semua kelipatan ini adalah 23.
Cari jumlah semua kelipatan 3 atau 5 di bawah 1000.

## Penjelasan solusi.js
Penyelesaian ini menggunakan cara _brute-force_. Sederhananya, program ini menghasilkan bilangan dari 1 hingga 999 kemudian setiap bilangan dites apakah jika dibagi habis 3 atau 5 sama dengan nol (0).

Setiap bilangan yang memenuhi kondisi di atas akan ditambahkan ke `jumlah` yang menyimpan bilangan kondisional sebelumnya.

## Penjelasan solusi-pie.js
Prinsip Inklusi-Eksklusi (PIE) adalah cara untuk menghitung jumlah elemen dalam sebuah himpunan gabungan. Berikut ini contoh cara kerjanya.

Kita ingin mengetahui jumlah himpunan gabungan kelipatan 3 atau 5 di bawah 20. Kita dapat menulis notasinya sebagai `|A ∪ B|`.

Berikut himpunan kelipatan di bawah 20.
1. $A = \{3, 6, 9, 12, 15, 18\}$
2. $B = \{5, 10, 15\}$

Dari atas kita mengetahui bahwa $|A| = 6$ dan $|B| = 3$ sehingga jumlah keduanya adalah 9. Namun, kita juga menghitung dua kali 15. Untuk menghilangkan "duplikasi" ini, diperlukan pengurangan dari himpunan irisan 3 dan 5, atau yang bisa kita notasikan sebagai $|A ∩ B|$.

Dengan PIE, bisa dilihat bahwa:
$|A ∪ B| = |A| + |B| - |A ∩ B|$
$|A ∪ B| = 6 + 3 - 1$
$|A ∪ B| = 8$
