const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
   { id: 2, period: '2020 - 2023', institution: 'SMK 1 Muhammadiyah Muntilan', major: 'RPL-REKAYASA PERANGKAT LUNAK' },
    { id: 3, period: '2017 - 2019', institution: 'SMP N 40 Batam' },
    { id: 4, period: '2011 - 2016', institution: 'SD It At-Thoriq Batam' }
];

const skills = [
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'HTML', level: 'Mahir' },
  { name: 'CSS', level: 'Mahir' },
  { name: 'Tailwind', level: 'Mahir' },
  { name: 'Vue Js', level: 'Mahir' },
  { name: 'Bootstrap', level: 'Mahir' },
  { name: 'Laravel', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' }


];

const projects = [
  {
    title: 'Website Technologia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtTULrrm5CG0jxRk1KYDUgs7lHxunHYIzcw&s',
    description: 'Spesifikasi Laptop',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: 'https://github.com/ddaannuu/Project-Website-Laptop'
  

  }

];

module.exports = { educationHistory, skills, projects };
