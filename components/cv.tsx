/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qwZ2rM2HMY4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { PhoneIcon, Linkedin, Mail, Locate } from "lucide-react";
import {Data} from "@/types";

export default function Cv({data} : {data: Data}) {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <div className="text-4xl font-bold">{data.name}</div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <Link href={`mailto:${data.email}`}>
                <p>{data.email}</p>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <p>{data.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <Locate className="w-4 h-4" />
              <p>{data.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <Link href={`https://${data.links.linkedin}`}>
                <p>{data.links.linkedin}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col-span-2 md:col-span-2">
            <div className="grid gap-8">
              <div>
                <div className="mb-2 text-xl font-bold">Profil Singkat</div>
                <p className="text-muted-foreground">{data.summary}</p>
              </div>
              <div>
                <div className="mb-2 text-xl font-bold">Pendidikan</div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-20">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <Link href={edu.link}>
                        <div className="mb-1 text-md font-semibold hover:text-teal-700">
                          {edu.institution}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.degree}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.field} | {edu.date}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {edu.gpa && "GPA: " + edu.gpa}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {" "}
                <div className="mb-2 text-xl font-bold">
                  Pengalaman Organisasi
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-36">
                  {data.organizations.map((org, index) => (
                    <div key={index} className="mb-4">
                      <div>
                        <Link href={org.link}>
                          <div className="mb-1 text-md font-semibold hover:text-teal-700">
                            {org.organization}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {org.position} | {org.date}
                          </div>
                          {/* <div className="text-muted-foreground">
                          {org.description}
                        </div> */}
                          {/* <div className="text-sm text-muted-foreground">
                      {org.location} | {org.date}
                    </div> */}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-xl font-bold">Pengalaman Kerja</div>
                {data.experiences.map((exp, index) => (
                  <div key={index}>
                    <div>
                      <Link href={exp.link}>
                        <div className="mt-4 mb-1 text-md font-semibold hover:text-teal-700">
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
                <Link
                  href="/certificates"
                  className="mb-1 text-xl font-semibold hover:text-teal-700"
                >
                  Sertifikat dan Penghargaan
                </Link>
                {data.certificates.map((certificate, index) => (
                  <ul
                    key={index}
                    className="mt-2 list-disc ms-4 text-muted-foreground"
                  >
                    <li className="text-md">
                      {certificate.title} - {certificate.organization} (
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
