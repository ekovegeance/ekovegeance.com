import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ekovegeance.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://ekovegeance.vercel.app/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://ekovegeance.vercel.app/books',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://ekovegeance.vercel.app/certifications',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://ekovegeance.vercel.app/cv',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ekovegeance.vercel.app/templates',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ekovegeance.vercel.app/bio',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.1,
        },  {
            url: 'https://ekovegeance.vercel.app/404',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.1,
        },
    ]
}