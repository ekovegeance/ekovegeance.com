export function getData() {
    const data = {
        name: "Eko Saputra",
        username: "ekovegeance",
        image: "https://avatars.githubusercontent.com/u/26839751?v=4",
        summary:
            "UI/UX Designer dan Front-End Developer dengan lebih dari 1 tahun pengalaman dalam membangun aplikasi web modern dan desain antarmuka yang intuitif. Terampil menggunakan teknologi terbaru seperti React.js, Next.js, dan Figma. Memiliki kemampuan kolaborasi tim yang kuat, berfokus pada kualitas kode dan pengalaman pengguna, serta berkomitmen untuk menghasilkan solusi yang efektif dan user-friendly.",
        email: "me@ekovegeance",
        address: "Palembang, Indonesia",
        links: {
            website: "www.ekovegeance.com",
            linkedin: "linkedin.com/in/ekovegeance/",
            github: "gitub.com/ekovegeance",
        },
        education: [
            {
                institution: "Universitas Bina Darma Palembang",
                degree: "Sarjana Komputer (S.Kom)",
                field: "Teknik Informatika",
                date: "2020 - 2024",
                gpa: "3.77",
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
                    "Berfokus pada detail dan efisiensi dalam menghasilkan desain yang fungsional dan menarik.",
                ],
            },
        ],
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "HTML/CSS",
            "Git",
            "SQL",
            "Problem-solving",
            "Teamwork",
            "Communication",
        ],
        projects: [
            {
                title: "DracOS GNU/Linux Remastered",
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