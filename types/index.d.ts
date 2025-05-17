export interface Data {
    name: string;
    username: string;
    image: string;
    summary: string;
    email: string;
    phone: string;
    address: string;
    links: Link;
    education: Education[];
    organizations: Organization[];
    experiences: Experience[];
    skills: string[];
    projects: Project[];
    certificates: Certificate[];
}
export interface Link {
    website: string;
    linkedin: string;
    github: string;
}
export interface Education {
    institution: string;
    link: string;
    degree: string;
    field: string;
    date: string;
    gpa?: string;
}
export interface Organization {
    organization: string;
    position: string;
    date: string;
    link: string;
    description: string;
}
export interface Experience {
    title: string;
    company: string;
    link: string;
    location: string;
    date: string;
    description: string[];
}
export interface Project {
    title: string;
    link: string;
    description: string;
}

export interface Bio {
    name: string;
    username: string;
    image: string;
    description: string;
    sites: Site[]
}
export interface Site {
    title: string;
    link: string;
}
export interface Book {
    title: string;
    author: string;
    genre: string;
    link?: string;
    description?: string;
}
export interface Certificate {
    title: string;
    organization: string;
    date: string;
    image?: string;
    category?: string;
    credential?: string;
    url?: string;
}
export interface Repository {
    id: string;
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stargazers_count: number;
    forks: number;
    updated_at: string;
    is_template: boolean;
    html_url: string;
}