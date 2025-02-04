/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sBYqgYodkCe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import ButtonMac from "./button-mac";

export default function About() {
  return (
    <section className="py-12 mx-6 border-zinc-200/70 border-x md:py-24 lg:py-32 dark:border-zinc-700/70">
      <div className="grid gap-8 transition duration-300 ease-in-out delay-150 hover:bg-zinc-50 hover:dark:bg-zinc-900 hover:rounded-xl hover:mx-8 hover:-translate-y-1 ">
        <div className="grid gap-4 border-b border-zinc-200/70 dark:border-zinc-700/70 ">
        <ButtonMac/>
          <h2 className="mx-6 text-3xl font-bold tracking-tight sm:text-4xl">Tentang Saya</h2>
          <p className="mx-6 text-lg text-muted-foreground">
          Hallo! Saya seorang Designer & software engineer. Karier saya banyak dipengaruhi oleh Web dan Open Source.
          </p>
        </div>
        <div className="grid gap-6 mx-6 md:grid-cols-2 ">
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Latar Belakang</h3>
            <p className="text-muted-foreground">
            Saya menghabiskan masa remaja saya dengan menganjurkan dan mengajar orang cara menggunakan Linux, berkontribusi di proyek Open Source dan kemudian mengembangkan minat terhadap JavaScript dan pengembangan Web.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Minat</h3>
            <p className="text-muted-foreground">
            Di waktu luang, saya menikmati menjelajahi teknologi web terkini, bereksperimen dengan tren desain, dan berkontribusi pada proyek Open Source. Saya juga seorang yang rajin membaca, suka bepergian, dan pecinta alam.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Prestasi</h3>
            <p className="text-muted-foreground">
            Saya bangga telah memenangkan beberapa penghargaan desain dan aplikasi. Saya juga pernah tampil dalam publikasi industri dan berbicara di pertemuan teknologi lokal.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Kontak</h3>
            <p className="text-muted-foreground">
            Jangan ragu untuk menghubungi saya di{" "}
              <a href="mailto:me@ekovegeance.com" className="underline underline-offset-4">
                me@ekovegeance.com
              </a>{" "}
              atau terhubung dengan saya di{" "}
              <Link href="https://www.linkedin.com/in/ekovegeance/" className="underline underline-offset-4" prefetch={false}>
                LinkedIn
              </Link>
              .
            </p>
          </div>
          {/* <Keyboard/> */}
        </div>
      </div>
    </section>
  )
}