/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MxMPYWDz3vx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
export default function Book() {
  return (
    <div className="w-full max-w-3xl px-4 py-8 mx-auto md:px-6 md:py-12">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">Daftar Bacaan Saya</h1>
          <p className="text-muted-foreground">Koleksi buku yang saya baca</p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-4">
            {/* <h2 className="text-2xl font-bold">Currently Reading</h2> */}
            <div className="grid gap-4">
              <Link href="books/Steve Schoger, Adam Wathan - Refactoring UI (2018).pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">Refactoring UI</h3>
                      <p className="text-muted-foreground">
                        Adam Wathan & Steve Schoger
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learning
                    </div>
                  </div>
                  <p>
                    Panduan praktis untuk membangun tampilan antarmuka yang
                    lebih baik dan lebih menarik.
                  </p>
                </div>
              </Link>
              <Link href="books/pdf-atomic-habits-versi-indonesia-james-clear-tagt_compress.pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">Atomic Habits</h3>
                      <p className="text-muted-foreground">James Clear</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Self-help
                    </div>
                  </div>
                  <p>
                    Panduan praktis untuk membangun kebiasaan baik dan
                    menghentikan kebiasaan buruk yang, berdasarkan penelitian
                    terbaru di bidang psikologi dan ilmu saraf.
                  </p>
                </div>
              </Link>
              <Link href="books/debian remaster.pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">
                        Debian GNU/Linux Bible
                      </h3>
                      <p className="text-muted-foreground">Debian</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learning
                    </div>
                  </div>
                  <p>
                    Debian GNU/Linux adalah salah satu distribusi Linux utama
                    yang tersedia saat ini. Distribusi ini dikenal sebagai
                    distribusi Linux yang paling terbuka -- karena komitmennya
                    terhadap prinsip-prinsip perangkat lunak open source.
                  </p>
                </div>
              </Link>
              <Link href="books/Steve Schoger, Adam Wathan - Refactoring UI (2018).pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">
                        Linux From Scratch
                      </h3>
                      <p className="text-muted-foreground">Gerard Beekmans</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learning
                    </div>
                  </div>
                  <p>
                    Buku ini memberikan petunjuk kepada pembaca tentang cara
                    membangun sistem Linux dari awal.
                  </p>
                </div>
              </Link>
              <Link href="books/progit.pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">Pro Git</h3>
                      <p className="text-muted-foreground">
                        Scott Chacon, Ben Straub
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learning
                    </div>
                  </div>
                  <p>
                    Git adalah sistem kontrol versi yang dikembangkan oleh Linus
                    Torvalds untuk pengembangan kernel Linux. Hal ini
                    menggemparkan dunia open source sejak didirikan pada tahun
                    2005.
                  </p>
                </div>
              </Link>
              <Link href="books/Tenggelamnya Kapal Van Der Wijck.pdf">
                <div className="grid gap-2 p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">
                        Tenggelamnya Kapal Van Der Wijck
                      </h3>
                      <p className="text-muted-foreground">Hamka</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Novel</div>
                  </div>
                  <p>
                    Berlatar belakang kehidupan di Minangkabau, tanah asal Buya
                    Hamka, dengan masalah adat yang berlaku pada saat itu
                    perihal warisan, perjodohan dan kawin paksa, serta pertalian
                    darah dan status sosial yang sangat kuat berakar.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

