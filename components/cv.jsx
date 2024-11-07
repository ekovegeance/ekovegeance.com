/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qwZ2rM2HMY4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Cv() {
  return (
    <div className="bg-background text-foreground font-inter">
      <div className="container max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start gap-4">
              <div className="text-4xl font-bold">Eko Saputra</div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div>
                  <MailIcon className="inline w-4 h-4 mr-2" />
                  <Link href="mailto:me@ekovegeance.com">
                    me@ekovegeance.com
                  </Link>
                </div>
                {/* <div>
                  <PhoneIcon className="inline w-4 h-4 mr-2" />
                  (123) 456-7890
                </div> */}
                <div>
                  <LocateIcon className="inline w-4 h-4 mr-2" />
                  Palembang, Indonesia
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link href="https://www.ekovegeance.com" prefetch={false}>
                    www.ekovegeance.com
                  </Link>
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link
                    href="https://www.linkedin.com/in/ekovegeance/"
                    prefetch={false}
                  >
                    linkedin.com/in/ekovegeance/
                  </Link>
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link href="https://github.com/ekovegeance" prefetch={false}>
                    github.com/ekovegeance
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="grid gap-8">
              <div>
                <div className="mb-2 text-xl font-bold">
                  Ringkasan Profesional
                </div>
                <p className="text-muted-foreground">
                  UI/UX Designer dan Front-End Developer dengan pengalaman lebih
                  dari 1 tahun dalam membangun aplikasi web modern dan desain
                  antarmuka yang intuitif. Terampil dalam menggunakan teknologi
                  terbaru seperti React.js, Next.js, dan Figma. Memiliki
                  kemampuan kolaborasi tim yang kuat dan fokus pada kualitas
                  kode serta pengalaman pengguna.
                </p>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Pendidikan</div>
                <div className="grid gap-4">
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Universitas Bina Darma Palembang
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sarjana Komputer (S.Kom)
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Teknik Informatika | 2020 - 2024
                    </div>
                    <div className="text-sm text-muted-foreground">
                      IPK: 3.77
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Pengalaman Kerja</div>
                <div className="grid gap-6">
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Front End Developer
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://www.payoprint.id/">
                        PT. Inaprint Lentera Teknologi Sriwijaya (payoprint) |
                        Mei 2024 - Saat ini
                      </Link>
                    </div>
                    <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                      <li>
                        Mengembangkan dan memelihara aplikasi web yang kompleks
                        menggunakan React, Node.js, dan teknologi pendukung
                        lainnya.
                      </li>
                      <li>
                        Berkolaborasi dengan tim untuk merancang dan
                        mengimplementasikan fitur-fitur baru yang memperbaiki
                        pengalaman pengguna.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      UI Desinger
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Magang / Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://www.payoprint.id/">
                        PT. Inaprint Lentera Teknologi Sriwijaya (payoprint) |
                        Oktober 2023 - Februari 2024
                      </Link>
                    </div>
                    <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                      <li>
                        Menciptakan antarmuka yang estetis, intuitif, dan
                        responsif.
                      </li>
                      <li>
                        Terampil menggunakan Figma untuk mendesain user flow
                        yang efektif dan mendukung pengalaman pengguna yang
                        optimal.
                      </li>
                      <li>
                        Berfokus pada detail dan efisiensi dalam menghasilkan
                        desain yang fungsional dan menarik.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Project Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Magang / Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://loko.co.id/">
                        LOKO Sistem Terintegrasi | Maret 2023 - Agustus 2023
                      </Link>
                    </div>
                    <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                      <li>
                        Terlibat dalam pengembangan Sistem informasi kampus yang
                        kami kembangkan memiliki fitur-fitur penting, seperti
                        manajemen data mahasiswa, jadwal kuliah, penilaian, dan
                        laporan akademik.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Support Team Lead
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Magang / Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://loko.co.id/">
                        LOKO Sistem Terintegrasi | Maret 2023 - Agustus 2023
                      </Link>
                    </div>
                    <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                      <li>
                        Memimpin pengembangan website Skodi (Sekolah Koding
                        Indonesia), sebuah platform pembelajaran coding online.
                      </li>
                      <li>
                        Fokus pada kolaborasi tim, pengembangan fitur, dan
                        integrasi sistem yang efektif.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Teknisi Komputer
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Magang / Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://www.google.com/search?sca_esv=fa65bd0a363ad061&sxsrf=ADLYWIJkajJocILIlWyEvQWF1cP29Qy4Yw:1730991129725&q=cahaya+komputer+pariaman&source=lnms&fbs=AEQNm0AeMNWKf4PpcKMI-eSa16lJoRPMIuyspCxWO6iZW9F1Ns6EVsgc0W_0xN47PHaanAEtg26fpfc9gg2y1-ZsywNNvFNsUhDWR4E0wi7xGg-xrf_Sy9bzTMgYml2XYO8-wGBzdYyjgm1GxUgrzQRgc4dMk-rxWBBU74weqHI1oXOBcIzqHLRs2wmN3kdZa-sR8S7dDD-YaL4NK2a5JkTHeKoYpFindg&sa=X&ved=2ahUKEwjp6ZW7vMqJAxUayzgGHbkWF8IQ0pQJegQICBAB&biw=1333&bih=652&dpr=2">
                        Cahaya Komputer Pariaman | Juli 2017 - Desember 2017
                      </Link>
                    </div>
                    <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                      <li>
                        Melakukan perbaikan komputer, laptop, dan printer,
                        instalasi sistem operasi, serta pemasangan software
                        pendukung.
                      </li>
                      <li>
                        Berfokus pada troubleshooting dan memastikan perangkat
                        berfungsi optimal.
                      </li>
                    </ul>
                  </div>

                  {/* <div>
                    <div className="mb-1 text-lg font-semibold">
                      Web Developer Intern
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Widgets Inc. | Jun 2018 - Aug 2019
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Assisted in the development and maintenance of the
                      company's website and web-based tools. Gained experience
                      in front-end and back-end technologies, including HTML,
                      CSS, JavaScript, and PHP.
                    </p>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">
                  Keterampilan Teknis
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    JavaScript
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    React
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    Node.js
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    HTML/CSS
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    Git
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    SQL
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    Problem-solving
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    Teamwork
                  </div>
                  <div className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground">
                    Communication
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-xl font-semibold">
                  Proyek Terpilih
                </div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>
                    DracOS GNU/Linux RemasteredDracOS GNU/Linux Remastered -
                    Berkontribusi dalam pengembangan DracOS GNU/Linux
                    Remastered, sebuah distro Linux open-source yang dibangun
                    berdasarkan proyek Debian Live. Didesain untuk pengujian
                    keamanan (penetration testing), DracOS menyediakan berbagai
                    alat untuk pentest, forensik, dan rekayasa balik, dengan
                    dukungan GUI dan CLI.
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-1 text-xl font-semibold">
                  Sertifikat dan Penghargaan
                </div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>
                    Alibaba Cloud Certified Developer - Alibaba Cloud Academy
                    (2023)
                  </li>
                  <li>
                    Juara 1 ITI - 1st Palembang Business Plan Award (2022)
                  </li>
                  <li>
                    TryHackMe Pre Security Learning Path - TryHackMe (2022)
                  </li>
                  <li>
                    Memulai Pemrograman Dengan Python - Dicoding Indonesia
                    (2021)
                  </li>
                  <li>
                    Belajar Dasar Visualisasi Data - Dicoding Indonesia (2021)
                  </li>
                  <li>CCNA: Introduction to Networks - Cisco NetAcad (2021)</li>
                  <li>
                    Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) -
                    Dicoding Indonesia (2021)
                  </li>
                  <li>
                    CCNA: Switching, Routing, and Wireless Essentials - Cisco
                    NetAcad (2020)
                  </li>
                  <li>
                    Certified Fundamentals of Digital Marketing - Google (2019)
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-1 text-xl font-semibold">Bahasa</div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>Bahasa Indonesia: Native</li>
                  <li>Bahasa Inggris: Menengah</li>
                </ul>
              </div>
              <div>
                <div className="mb-1 text-xl font-semibold">Hobi</div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>Desain Visual dan Fotografi</li>
                  <li>Traveling dan Mendaki Gunung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
