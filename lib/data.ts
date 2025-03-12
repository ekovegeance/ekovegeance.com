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

export function getTemplates(){
    const templates = [
        {
            title: "Financly",
            description: "Take control of your finances. Financly helps you track expenses, manage budgets, and achieve your financial goals with ease.",
            image: "/images/financly.png",
            slug: "financly",
            price: 500000,
            demo: "https://financly.laravel.cloud/",
            buy: "https://buy.com",
            framework: "Laravel",
            techStack: "Laravel 12, React 19",
            useCase: "Finance",
            css: "Tailwind CSS 4",
            features: [
                "Expense tracking",
                "Budget management",
                "Goal setting",
                "Responsive design",
            ],
        },
    ];

    return templates;

}

export function getCertificates() {

    const certificates = [
        {
          id: 1,
          title: "Memulai Pemrogram Dengan Python",
          organization: "Dicoding Indonesia",
          date: "Jul 2021",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "JLX133DM2P72",
          url: "https://drive.google.com/file/d/1DrXmTvJyE06JJoR_V3pitovBu4sVT3eO/view?usp=sharing",
        },
        {
          id: 2,
          title: "Belajar Dasar AWS Cloud",
          organization: "Dicoding Indonesia",
          date: "Jul 2021",
          image: "/placeholder.svg?height=300&width=500",
          category: "cloud",
          credential: "JMZVMOYR3ZN9",
          url: "https://drive.google.com/file/d/1E95Dz7iD-0gTqCsME-ZqL9k3WZgMi2Eh/view?usp=sharing",
        },
        {
          id: 3,
          title: "Belajar Dasar Visualisasi Data",
          organization: "Dicoding Indonesia",
          date: "Jul 2021",
          image: "/placeholder.svg?height=300&width=500",
          category: "data",
          credential: "JLX11NR8JX72",
          url: "https://drive.google.com/file/d/1HwZzZjIbuD6TYuhjo7hgYyXMTF7VNbXO/view?usp=sharing",
        },
        {
          id: 4,
          title: "CCNAv7: Introduction to Networks",
          organization: "Cisco NetAcad",
          date: "Jun 2021",
          image: "/placeholder.svg?height=300&width=500",
          category: "networking",
          credential: "-",
          url: "https://drive.google.com/file/d/1aWTd4-rnQ2QbLs15Q3OZkIGQnt_vwTPK/view?usp=sharing",
        },
        {
          id: 5,
          title: "CCNAv7: Switching, Routing, and Wireless Essentials",
          organization: "Cisco NetAcad",
          date: "Jul 2022",
          image: "/placeholder.svg?height=300&width=500",
          category: "networking",
          credential: "-",
          url: "https://drive.google.com/file/d/1fdTanfcqAKxBQz-RLWgy_AYS_i0OTBH4/view?usp=sharing",
        },
        {
          id: 6,
          title: "Google Digital Marketing",
          organization: "Google",
          date: "Jul 2022",
          image: "/placeholder.svg?height=300&width=500",
          category: "marketing",
          credential: "KWG E9D HTL",
          url: "https://drive.google.com/file/d/14xlm3x0TLf50rhWyDjdIhwRBwR8ZBgEo/view?usp=sharing",
        },
        {
          id: 7,
          title: "Pre Security Learning Path",
          organization: "TryHackMe",
          date: "Jul 2022",
          image: "/placeholder.svg?height=300&width=500",
          category: "security",
          credential: "THM-YTATWIKFDF",
          url: "https://drive.google.com/file/d/1i21ToVxzR64Au8DpjtHQd8Cmv1CBwzwx/view?usp=sharing",
        },
        {
          id: 8,
          title: "1st Palembang Business Plan Award",
          organization: "DIIB Univ Bina Darma",
          date: "Jun 2022",
          image: "/placeholder.svg?height=300&width=500",
          category: "business",
          credential: "-",
          url: "https://drive.google.com/file/d/1QU8YHB9Khy9aCa8tjHFnPzpWBkD40po6/view?usp=sharing",
        },
        {
          id: 9,
          title: "1st Palembang Business Plan Award",
          organization: "DIIB Univ Bina Darma",
          date: "Jun 2022",
          image: "/placeholder.svg?height=300&width=500",
          category: "business",
          credential: "-",
          url: "https://drive.google.com/file/d/1QU8YHB9Khy9aCa8tjHFnPzpWBkD40po6/view?usp=sharing",
        },
        {
          id: 10,
          title: "Certified Developer",
          organization: "Alibaba Cloud Academy",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "cloud",
          credential: "ACCD0172091200002432",
          url: "https://drive.google.com/file/d/1y05Xvy0DStAdJukmD4Pf0IEllDS-tmK2/view?usp=sharing",
        },
        {
          id: 11,
          title: "Beginner's Guide to MySQL",
          organization: "Alibaba Cloud Academy",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "cloud",
          credential: "ACFW221240200107464",
          url: "https://drive.google.com/file/d/1TxTuyDtlYhtz2fAj-OHxlLqIomYUAOfh/view?usp=sharing",
        },
        {
          id: 12,
          title: "Beginner's Guide to MySQL",
          organization: "Alibaba Cloud Academy",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "cloud",
          credential: "ACFW221240200107464",
          url: "https://drive.google.com/file/d/1TxTuyDtlYhtz2fAj-OHxlLqIomYUAOfh/view?usp=sharing",
        },
        {
          id: 13,
          title: "Alibaba Cloud DataWorks-Basic Knowledge",
          organization: "Alibaba Cloud Academy",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "cloud",
          credential: "ACLD25240200107291",
          url: "https://drive.google.com/file/d/1ye4mcHmo0uMXwYQcA-fLz2sxzyxGAYn-/view?usp=sharing",
        },
        {
          id: 14,
          title: "Dasar HTML",
          organization: "Codepolitan",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "KJFQ5F0",
          url: "https://drive.google.com/file/d/1YjpVljqP3OL6hozHHUdGKOZrxwhJ69B_/view?usp=sharing",
        },
        {
          id: 15,
          title: "Bootstrap CSS Framework",
          organization: "Codepolitan",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "SEACJKD",
          url: "https://drive.google.com/file/d/19N-YZ3Mly9TOSVH7njydBiYljmyblBru/view?usp=sharing",
        },
        {
          id: 16,
          title: "Javascript Fundamental",
          organization: "Codepolitan",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "SB7LTEP",
          url: "https://drive.google.com/file/d/1HAP6-lRzndU_9KZCCCdkqzE2TKcuNsdj/view?usp=sharing",
        },
        {
          id: 17,
          title: "JavaScript DOM",
          organization: "Codepolitan",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "01JTLGE",
          url: "https://drive.google.com/file/d/1XwPD5y5Mb4cF8x1XPoHWPbUBhFOWb1E9/view?usp=sharing",
        },
        {
          id: 18,
          title: "JavaScript Asynchronous",
          organization: "Codepolitan",
          date: "Des 2023",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "WBELMF0",
          url: "https://drive.google.com/file/d/186i49Ubqizgu8HMyWGRceNQM2mZQos61/view?usp=sharing",
        },
        {
          id: 19,
          title: "JavaScript Asynchronous",
          organization: "Codepolitan",
          date: "Mar 2024",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "WBELMF0",
          url: "https://drive.google.com/file/d/186i49Ubqizgu8HMyWGRceNQM2mZQos61/view?usp=sharing",
        },
        {
          id: 20,
          title: "AJAX dan Web API ",
          organization: "Codepolitan",
          date: "Mar 2024",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "Z0J6QEU",
          url: "https://drive.google.com/file/d/1tY4k6hdLgfsaUTkZBTASgHr4Ay9cHtV8/view?usp=sharing",
        },
        {
          id: 21,
          title: "OOP di JavaScript",
          organization: "Codepolitan",
          date: "Mar 2024",
          image: "/placeholder.svg?height=300&width=500",
          category: "development",
          credential: "9BXEFAQ",
          url: "https://drive.google.com/file/d/1FaIq0bVEUs7qV3rGlmxHPJwuTEw4MsTB/view?usp=sharing",
        },
        {
          id: 22,
          title: "Desktop Office Training",
          organization: "Universitas Bina Darma",
          date: "Sep 2024",
          image: "/placeholder.svg?height=300&width=500",
          category: "office",
          credential: "09/12/IX/2024",
          url: "https://drive.google.com/file/d/1hQwACCju_dDQCUNmBJTFcFWBdoZYVbz_/view?usp=sharing",
        },



 
      ];

    return certificates;
}