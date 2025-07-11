const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 - Informatika",
  },
  {
    id: 2,
    period: "2020 - 2023",
    institution: "SMK 1 Muhammadiyah Muntilan",
    major: "RPL-REKAYASA PERANGKAT LUNAK",
  },
  { id: 3, period: "2017 - 2019", institution: "SMP N 40 Batam" },
  { id: 4, period: "2011 - 2016", institution: "SD It At-Thoriq Batam" },
];

const skills = [
  { 
    name: "JavaScript", 
    level: "Mahir", 
    logo: "/images/javascript.png" 
  },
  { name: "HTML", level: "Mahir",logo: "/images/html.png"  },
  { name: "CSS", level: "Mahir",logo: "/images/css.png"  },
  { name: "Tailwind", level: "Mahir",logo: "/images/tailwind.png" },
  { name: "Vue Js", level: "Mahir",logo: "/images/vuejs.png"  },
  { name: "Bootstrap", level: "Mahir",logo: "/images/bootstrap.png"  },
  { name: "PHP", level: "Mahir",logo: "/images/php.png"  },
   { name: "Pyton", level: "Mahir",logo: "/images/pyton.png"  },
];

const projects = [
  {
    title: "Website Technologia",
    image: "/images/project.png",
    description: "Spesifikasi Laptop",
    tech: ["Vue.js", "Express.js", "PostgreSQL"],
    link: "https://github.com/ddaannuu/Project-Website-Laptop",
  },
  {
    title: "Website Technologia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtTULrrm5CG0jxRk1KYDUgs7lHxunHYIzcw&s",
    description: "Spesifikasi Laptop",
    tech: ["Vue.js", "Express.js", "PostgreSQL"],
    link: "https://github.com/ddaannuu/Project-Website-Laptop",
  },
];

module.exports = { educationHistory, skills, projects };
