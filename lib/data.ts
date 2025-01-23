// Simulate fetching data from an API
export function getData() {
    const data = {
        name: "Eko Saputra",
        username: "ekovegeance",
        image: "https://avatars.githubusercontent.com/u/26839751?v=4",
        summary:
            "Designer & Software Engineer dengan spesialisasi dalam Web dan Open Source, berpengalaman dalam UI/UX dan Frontend Development. Terampil dalam membuat keputusan tepat di bawah tekanan, dengan fokus pada detail dan penyelesaian proyek tepat waktu. Memiliki pemahaman mendalam tentang teknologi web modern dan berkomitmen pada pengembangan solusi inovatif, efisien, dan berkualitas tinggi. Siap berkontribusi dalam tim dinamis dan berorientasi pada hasil.",
        email: "me@ekovegeance.com",
        address: "Palembang, Indonesia",
        links: {
            website: "www.ekovegeance.com",
            linkedin: "linkedin.com/in/ekovegeance/",
            github: "github.com/ekovegeance",
        },
        education: [
            {
                institution: "Universitas Bina Darma Palembang",
                link: "http://www.binadarma.ac.id/",
                degree: "Sarjana Komputer (S.Kom)",
                field: "Teknik Informatika",
                date: "2020 - 2024",
                gpa: "3.77",
            },
            {
                institution: "SMKN 1 Sintuk Toboh Gadang",
                link: "https://www.smkn1sintoga.sch.id/",
                degree: "",
                field: "Rekayasa Perangkat Lunak",
                date: "2016 - 2019",
                gpa: "",
            },
        ],
        organizations: [
            {
                organization: "Bina Darma Cyber Army",
                position: "Wakil Ketua Umum",
                date: "2021 - 2023",
                link: "https://www.google.com/search?q=bina+darma+cyber+army&oq=bina+darma+cyber+army&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGD0yBggCEEUYPDIGCAMQRRg80gEINTUwN2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
                description:"Bina Darma Cyber Army (BDCA) merupakan sebuah komunitas yang terdapat pada Unversitas Bina Darma Palembang. Komunitas ini sendiri merupakan sekumpulan dari mahasiswa yang memiliki visi dan misi yang sama dan memiliki ketertarikan dalam satu bidang yang sama yaitu ilmu komputer."
            },
            {
                organization: "OSIS SMKN 1 Sintuk Toboh Gadang",
                position: "Wakil Ketua OSIS",
                date: "2017-218",
                link: "https://www.google.com/search?q=osis+smkn+1+sintuk+toboh+gadang&sca_esv=d0b455892eb4553b&sxsrf=AHTn8zosjlzv9CODaStZh2Yob1-VBXg3lw%3A1737607184268&ei=EMiRZ8zWD9uYseMP2qKjSQ&oq=osis+smkn+1+sintu&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW9zaXMgc21rbiAxIHNpbnR1KgIIADIHECEYoAEYCkjhR1C8D1jOP3ACeAKQAQCYAe4BoAHME6oBBjIuMTYuMbgBA8gBAPgBAZgCFqACohTCAgQQABhHwgIKECMYgAQYJxiKBcICEBAuGIAEGNEDGMcBGCcYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgUQLhiABMICERAuGIAEGLEDGNEDGIMBGMcBwgIQEC4YgAQYsQMYQxiDARiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgIQEAAYgAQYsQMYgwEYigUYCsICBRAAGIAEwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGMcBGK8BwgINEC4YgAQYsQMYQxiKBcICCBAuGIAEGLEDwgIOEC4YgAQYsQMYgwEYigXCAhEQABiABBiRAhixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIQEAAYgAQYkQIYigUYRhj_AcICDRAAGIAEGLEDGEMYigXCAhwQABiABBiRAhiKBRhGGP8BGJcFGIwFGN0E2AEBwgIIEAAYgAQYywHCAgYQABgWGB7CAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgQQIRgVmAMAiAYBkAYEugYGCAEQARgTkgcGNC4xNy4xoAfqiQE&sclient=gws-wiz-serp",
                description:""
            },

        ],
        experiences: [
            {
                title: "Front End Developer",
                company: "Freelance",
                link: "https://www.payoprint.id/",
                location: "PT. Inaprint Lentera Teknologi Sriwijaya (payoprint)",
                date: "Mei 2024 - Des 2024",
                description: [
                    "Mengembangkan dan memelihara aplikasi web yang kompleks menggunakan React, Node.js, dan teknologi pendukung lainnya.",
                    "Berkolaborasi dengan tim untuk merancang dan mengimplementasikan fitur-fitur baru yang memperbaiki pengalaman pengguna.",
                ],
            },
            {
                title: "UI Desinger",
                company: "Magang / Intern",
                link: "https://www.payoprint.id/",
                location: "PT. Inaprint Lentera Teknologi Sriwijaya (payoprint)",
                date: "Oktober 2023 - Februari 2024",
                description: [
                    "Menciptakan antarmuka yang estetis, intuitif, dan responsif.",
                    "Terampil menggunakan Figma untuk mendesain user flow yang efektif dan mendukung pengalaman pengguna yang optimal.",
                    // "Berfokus pada detail dan efisiensi dalam menghasilkan desain yang fungsional dan menarik.",
                ],
            },
            // {
            //     title: "Project Intern ",
            //     company: "Magang / Intern",
            //     link: "https://loko.co.id/",
            //     location: "LOKO Sistem Terintegrasi",
            //     date: "Maret 2023 - Agustus 2023",
            //     description: ["Terlibat dalam pengembangan Sistem Informasi Kampus dengan fitur manajemen data mahasiswa dan laporan akademik.",
            //     ],
            // },
            // {
            //     title: "Support team lead ",
            //     company: "Magang / Intern",
            //     link: "https://loko.co.id/",
            //     location: "LOKO Sistem Terintegrasi",
            //     date: "Maret 2023 - Agustus 2023",
            //     description: ["Memimpin pengembangan website untuk platform pembelajaran coding online Skodi", "Berkolaborasi dalam pengembangan fitur dan integrasi sistem",
            //     ],
            // },
        ],
        skills: [
            "Problem-solving",
            "Teamwork",
            "Communication",
            "HTML/CSS",
            "Git",
            "JavaScript/ TypeScript",
            "PHP",
            "SQL",
        ],
        projects: [
            {
                title: "DracOS GNU/Linux Remastered",
                link: "https://github.com/dracos-linux",
                description:
                    "Berkontribusi dalam pengembangan DracOS GNU/Linux Remastered, sebuah distro Linux open-source yang dibangun berdasarkan proyek Debian Live. Didesain untuk pengujian keamanan (penetration testing), DracOS menyediakan berbagai alat untuk pentest, forensik, dan rekayasa balik, dengan dukungan GUI dan CLI.",
            },
        ],
        certificates: [
            {
                title: "Alibaba Cloud Certified Developer",
                issuer: "Alibaba Cloud Academy",
                date: "2023",
            },
            {
                title: "1st Palembang Business Plan Award",
                issuer: "ITI",
                date: "2022",
            },
            {
                title: "Pre Security Learning Path",
                issuer: "TryHackMe",
                date: "2022",
            },
            {
                title: "Memulai Pemrograman Dengan Python",
                issuer: "Dicoding Indonesia",
                date: "2021",
            },
            {
                title: "Belajar Dasar Visualisasi Data",
                issuer: "Dicoding Indonesia",
                date: "2021",
            },
            {
                title: "Introduction to Networks",
                issuer: "Cisco NetAcad",
                date: "2021",
            },
            {
                title: "Cloud Practitioner Essentials",
                issuer: "Dicoding Indonesia",
                date: "2021",
            },
            {
                title: "Switching, Routing, and Wireless Essentials",
                issuer: "Cisco NetAcad",
                date: "2020",
            },
            {
                title: "Fundamentals of Digital Marketing",
                issuer: "Google",
                date: "2019",
            },
        ]
    };
    return data;
}

export function getBooks() {
    const books = [
        {
            title: "Refactoring UI",
            author: "Adam Wathan & Steve Schoger",
            genre: "Learning",
            description:
                "Panduan praktis untuk membangun tampilan antarmuka yang lebih baik dan lebih menarik.",
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            genre: "Self-help",
            description:
                "Panduan praktis untuk membangun kebiasaan baik dan menghentikan kebiasaan buruk yang, berdasarkan penelitian terbaru di bidang psikologi dan ilmu saraf.",
        },
        {
            title: "Debian GNU/Linux Bible",
            author: "Debian",
            genre: "Learning",
            description:
                "Debian GNU/Linux adalah salah satu distribusi Linux utama yang tersedia saat ini. Distribusi ini dikenal sebagai distribusi Linux yang paling terbuka -- karena komitmennya terhadap prinsip-prinsip perangkat lunak open source.",
        },
        {
            title: "Linux From Scratch",
            author: "Gerard Beekmans",
            genre: "Learning",
            description:
                "Buku ini memberikan petunjuk kepada pembaca tentang cara membangun sistem Linux dari awal.",
        },
        {
            title: "Pro Git",
            author: "Scott Chacon, Ben Straub",
            genre: "Learning",
            description:
                "Git adalah sistem kontrol versi yang dikembangkan oleh Linus Torvalds untuk pengembangan kernel Linux. Hal ini menggemparkan dunia open source sejak didirikan pada tahun 2005.",
        },
        {
            title: "Tenggelamnya Kapal Van Der Wijck",
            author: "Hamka",
            genre: "Novel",
            description:
                "Berlatar belakang kehidupan di Minangkabau, tanah asal Buya Hamka, dengan masalah adat yang berlaku pada saat itu perihal warisan, perjodohan dan kawin paksa, serta pertalian darah dan status sosial yang sangat kuat berakar.",
        }
    ];
    return books;
}
