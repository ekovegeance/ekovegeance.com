/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qwZ2rM2HMY4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Resume() {
  return (
    <div className="bg-background text-foreground font-inter">
      <div className="container max-w-3xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start gap-4">
              <div className="text-4xl font-bold">Eko Saputra</div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div>
                  <MailIcon className="inline w-4 h-4 mr-2" />
                  <Link href="mailto:me@ekovegeance.com">me@ekovegeance.com</Link>
                 
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
                  <Link href="https://certificate.ekovegeance.com/" prefetch={false}>
                    Certificate
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="grid gap-8">
              <div>
                <div className="mb-2 text-xl font-bold">Profile</div>
                <p className="text-muted-foreground">
                  Designer & software engineer berpengalaman dalam membuat
                  aplikasi web yang efektif dan skalabel Berpengalaman dalam
                  pengembangan full-stack. berkomitmen untuk mengembangkan
                  teknologi baru dan memberikan pekerjaan berkualitas tinggi.
                </p>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Work Experience</div>
                <div className="grid gap-6">
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      UI Desinger
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="https://www.payoprint.id/">
                        Payoprint ID | Mei 2024 - Saat ini
                      </Link>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Mengembangkan dan memelihara aplikasi web yang kompleks
                      menggunakan React, Node.js, dan berbagai teknologi
                      pendukungnya. Berkolaborasi dengan tim lintas fungsi untuk
                      merancang dan mengimplementasikan fitur baru,
                      mengoptimalkan kinerja, dan memastikan kualitas kode.
                    </p>
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
                <div className="mb-2 text-xl font-bold">Pendidikan</div>
                <div className="grid gap-4">
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Sarjana Sains dan Ilmu Komputer
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Universitas Bina Darma Palembang | 2020 - 2024
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Skills</div>
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
