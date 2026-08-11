
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Roti Jogja - UMKM Jual Roti</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- HEADER -->
    <header>
        <h1>🍞 Roti Jogja</h1>
        <p>Roti Fresh, Enak, dan Terjangkau</p>
    </header>

    <!-- NAVBAR -->
    <nav>
        <a href="#beranda">Beranda</a>
        <a href="#produk">Produk</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#kontak">Kontak</a>
    </nav>

    <!-- BERANDA -->
    <section class="hero" id="beranda">

        <h2>Selamat Datang di Roti Jogja</h2>

        <p>
            Menjual berbagai macam roti lezat
            dengan harga terjangkau.
        </p>

        <a href="#produk" class="btn">
            Lihat Produk
        </a>

    </section>

    <!-- PRODUK -->
    <section id="produk">

        <h2>🍞 Produk Kami</h2>

        <div class="produk">

            <div class="card">
                <div class="emoji">🍫</div>

                <h3>Roti Cokelat</h3>

                <p>
                    Roti lembut dengan isian
                    cokelat yang lezat.
                </p>

                <h4>Rp8.000</h4>

                <button onclick="pesan('Roti Cokelat')">
                    Beli Sekarang
                </button>
            </div>


            <div class="card">
                <div class="emoji">🧀</div>

                <h3>Roti Keju</h3>

                <p>
                    Roti lembut dengan topping
                    keju.
                </p>

                <h4>Rp10.000</h4>

                <button onclick="pesan('Roti Keju')">
                    Beli Sekarang
                </button>
            </div>


            <div class="card">
                <div class="emoji">🍓</div>

                <h3>Roti Strawberry</h3>

                <p>
                    Roti dengan selai strawberry
                    yang manis.
                </p>

                <h4>Rp9.000</h4>

                <button onclick="pesan('Roti Strawberry')">
                    Beli Sekarang
                </button>
            </div>


            <div class="card">
                <div class="emoji">🥐</div>

                <h3>Croissant</h3>

                <p>
                    Croissant renyah dan cocok
                    untuk sarapan.
                </p>

                <h4>Rp12.000</h4>

                <button onclick="pesan('Croissant')">
                    Beli Sekarang
                </button>
            </div>

        </div>

    </section>

    <!-- TENTANG -->
    <section id="tentang">

        <h2>🏪 Tentang Kami</h2>

        <p>
            Roti Jogja adalah contoh UMKM yang bergerak
            di bidang makanan. Kami menyediakan berbagai
            macam roti fresh dengan bahan berkualitas
            dan harga yang terjangkau.
        </p>

        <p>
            📍 Yogyakarta, Indonesia
        </p>

    </section>

    <!-- KONTAK -->
    <section id="kontak">

        <h2>📞 Kontak Kami</h2>

        <p>WhatsApp: 08xxxxxxxxxx</p>
        <p>Email: rotijogja@gmail.com</p>
        <p>Instagram: @rotijogja</p>

        <button onclick="hubungi()">
            Hubungi Sekarang
        </button>

    </section>

    <!-- FOOTER -->
    <footer>

        <p>
            &copy; 2026 Roti Jogja - UMKM Yogyakarta
        </p>

    </footer>


    <!-- JAVASCRIPT -->
    <script src="script.js"></script>

</body>
</html>
```

