/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qwZ2rM2HMY4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { getData } from "../lib/data";

export default function Cv() {
  const data = getData();
  return (
    <div className="bg-background text-foreground font-inter">
      <div className="container max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start gap-4">
              <div className="text-4xl font-bold">{data.name}</div>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div>
                  <MailIcon className="inline w-4 h-4 mr-2" />
                  <Link href={`mailto:${data.email}`}>{data.email}</Link>
                </div>
                {/* <div>
                  <PhoneIcon className="inline w-4 h-4 mr-2" />
                  (123) 456-7890
                </div> */}
                <div>
                  <LocateIcon className="inline w-4 h-4 mr-2" />
                  {data.address}
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link href={`https://${data.links.website}`} prefetch={false}>
                    {data.links.website}
                  </Link>
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link
                    href={`https://www.${data.links.linkedin}`}
                    prefetch={false}
                  >
                    {data.links.linkedin}
                  </Link>
                </div>
                <div>
                  <LinkIcon className="inline w-4 h-4 mr-2" />
                  <Link href={`https://${data.links.github}`} prefetch={false}>
                    {data.links.github}
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
                <p className="text-muted-foreground">{data.summary}</p>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Pendidikan</div>
                <div className="grid gap-4">
                  <div>
                    {data.education.map((edu, index) => (
                      <div key={index}>
                        <Link href={edu.link}>
                        <div className="mb-1 text-lg font-semibold hover:text-teal-700">
                          {edu.institution}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.degree}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.field} | {edu.date}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          IPK: {edu.gpa}
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Pengalaman Kerja</div>
                {data.experiences.map((exp, index) => (
                  <div key={index}>
                    <div>
                    <Link href={exp.link}>
                      <div className="mt-4 mb-1 text-lg font-semibold hover:text-teal-700">
                        {exp.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.company}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        
                          {exp.location} | {exp.date}
                        
                      </div>
                      <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                        {exp.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">
                  Keterampilan Teknis dan Interpersonal
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {data.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground hover:bg-teal-100 hover:text-teal-800"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div>
                <div className="mb-1 text-xl font-semibold">
                  Proyek Terpilih
                </div>
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <Link href={project.link}>
                    <div className="mt-4 mb-1 text-lg font-semibold hover:text-teal-700">
                      {project.title}
                    </div>
                    <div className="text-muted-foreground">
                      {project.description}
                    </div>
                    </Link>
                  </div>
                ))}
              </div> */}

              <div>
                <Link href="https://certificate.ekovegeance.com/" className="mb-1 text-xl font-semibold hover:text-teal-700">
                  Sertifikat dan Penghargaan
                </Link>
                {data.certificates.map((certificate, index) => (
                  <ul
                    key={index}
                    className="mt-2 list-disc ms-4 text-muted-foreground"
                  >
                    <li>
                      {certificate.title} - {certificate.issuer} (
                      {certificate.date})
                    </li>
                  </ul>
                ))}
              </div>
              <div>
                <div className="mb-1 text-xl font-semibold">Bahasa</div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>Bahasa Indonesia: Native</li>
                  <li>Bahasa Inggris: Menengah</li>
                </ul>
              </div>
              {/* <div>
                <div className="mb-1 text-xl font-semibold">Hobi</div>
                <ul className="mt-2 list-disc ms-4 text-muted-foreground">
                  <li>Desain Visual dan Fotografi</li>
                  <li>Traveling dan Mendaki Gunung</li>
                </ul>
              </div> */}
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
