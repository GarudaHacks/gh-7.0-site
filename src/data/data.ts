export const AboutData = [
  {
    title: "What is GarudaHacks?",
    description:
      "We are a 501c3 nonprofit dedicated to empowering young Indonesians with the skills and motivation to solve the country's most urgent issues.",
  },
  {
    title: "Our Organization",
    description:
      "We began our organization in 2020, launching our first hackathon online. Since then, we have hosted SEA's largest hackathons for five years consecutively and have helped thousands of students develop in both computer science and entrepreneurship",
  },
];

export const byTheNumbers = [
  {
    title: "partisipants",
    number: "6408",
    description: "Total Participants",
    iconBaseName: "partisipant-line",
    hoverIcon: "partisipant-fill",
  },
  {
    title: "Prize",
    number: "100",
    unit: "Million IDR",
    description: "Total Prize Pool",
    iconBaseName: "ghCoin",
    hoverIcon: "GH-coin-fill",
  },
  {
    title: "Projects",
    number: "629",
    description: "Total Projects Submitted",
    iconBaseName: "ghCoin",
    hoverIcon: "GH-coin-fill",
  },
];

export type TeamMember = {
  name: string;
  photo: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Dominic Moreno", photo: "placeholder.png" },
  { name: "Ralph Benedict", photo: "placeholder.png" },
  { name: "Amelia Muliawati", photo: "placeholder.png" },
  { name: "Jessica Wijoyo", photo: "placeholder.png" },
  { name: "Margery Jessica", photo: "placeholder.png" },
  { name: "Eleonora Ansella", photo: "placeholder.png" },
  { name: "Putra Pratama", photo: "placeholder.png" },
  { name: "Emily Jade", photo: "placeholder.png" },
  { name: "Austin Sim", photo: "placeholder.png" },
  { name: "Jericho Siregar", photo: "placeholder.png" },
  { name: "Hafidz Rizky", photo: "placeholder.png" },
  { name: "Winner Rasendriya", photo: "placeholder.png" },
];

export const contributors = [
  "fawwazhumam",
  "smsunarto",
  "edwardtanoto",
  "rakhadjo",
  "Fatih20",
  "marathalia",
  "nicholasaxl",
  "edutjie",
  "aardisaputra",
  "hib4",
  "heryandjaruma",
  "hafidzmrizky",
  "feblcsack",
];

export const speaker = [
  {
    id: 1,
    name: "Sarah Fajri",
    role: "Project Manager at Deloitte",
    photo: "/image/sarah.png",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "CTO at Gojek",
    photo: "/image/sarah.png",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    name: "Rina Putri",
    role: "AI Researcher at Google",
    photo: "/image/sarah.png",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const projects = [
  {
    title: "HijauKita",
    number: "01",
    description:
      "HijauKita is an app designed to encourage community participation in sustainability activities in Indonesia",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/540/627/datas/original.jpg",
    link: "https://devpost.com/software/hijaukita?_gl=1*o9r3wd*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzAxODkuMC4wLjA.",
    teamName: "team name",
  },
  {
    title: "Aspiring AI",
    number: "02",
    description:
      "Aspiring AI is an AI-powered platform that helps students create a compelling tech portfolio in 15 minutes...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/540/256/datas/original.jpg",
    link: "https://devpost.com/software/p-lbraso?_gl=1*8furrd*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzA2NTAuMC4wLjA.",
    teamName: "team name",
  },
  {
    title: "Jendela",
    number: "03",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/950/263/datas/original.png",
    link: "https://devpost.com/software/jendela?_gl=1*837o5i*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzA2NTEuMC4wLjA.",
    teamName: "team name",
  },
  {
    title: "JalanKami",
    number: "04",
    description:
      "JalanKami is a platform improving urban walkability by providing tools like an interactive map...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/949/694/datas/original.png",
    link: "https://devpost.com/software/jalankami",
    teamName: "team name",
  },
  {
    title: "IRiS",
    number: "05",
    description:
      "IRIS is an innovative application designed to provide comprehensive security and user convenience...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/950/385/datas/original.png",
    link: "https://devpost.com/software/iris-fprvg9?_gl=1*1cfsuv2*_gcl_au*MTY0MTk2NDAyMi4xNzQyNDQ3NTU2*_ga*MTQzNzAyNDA1LjE3NDI0NDc1NTY.*_ga_0YHJK3Y10M*MTc0NDM1NTg0Ni4yLjEuMTc0NDM1NTg1MC4wLjAuMA..",
    teamName: "team name",
  },
];

export const judges = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ... (biarkan data AboutData, byTheNumbers, contributors, speaker, projects seperti sebelumnya)

export const offlineJudges = [
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Angelika Putri",
    designation: "Judge",
    src: "/offline/Angelika Putri.jpg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Billtraviano Harda",
    designation: "Judge",
    src: "/offline/BillHardaFotoJas - Billtraviano Harda.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Arief Budiman",
    designation: "Judge",
    src: "/offline/Copy of LRP_5501 - Arief Budiman.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Hervina Safira",
    designation: "Judge",
    src: "/offline/DSC08090-min - Hervina Safira.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Taro Lay",
    designation: "Judge",
    src: "/offline/IMG_0787 - Taro Lay.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Nunung Nurul Qomariyah",
    designation: "Judge",
    src: "/offline/IMG_8824 - Nunung Nurul Qomariyah.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Julian Sukmana Putra",
    designation: "Judge",
    src: "/offline/IMG_9064 - Julian Sukmana Putra.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Louis",
    designation: "Judge",
    src: "/offline/louis.png",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Mario Caesar",
    designation: "Judge",
    src: "/offline/Mario Caesar.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Martinus Indra Senjaya",
    designation: "Judge",
    src: "/offline/Martinus photo - Martinus Indra Senjaya.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Nino Wandhana",
    designation: "Judge",
    src: "/offline/Nino Headshot - Nino Wandhana.png",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Rina Fitri",
    designation: "Judge",
    src: "/offline/rina-fitri.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Sandy Kusuma",
    designation: "Judge",
    src: "/offline/SK Alam Sutra - Sandy Kusuma.jpeg",
  },
  {
    quote: "Kutipan untuk offline judge bisa diisi di sini.",
    name: "Timotius Haniel",
    designation: "Judge",
    src: "/offline/Timotius Haniel.jpeg",
  }
];

export const onlineJudges = [
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Bintang Fathur Rahman",
    designation: "Judge",
    src: "/online/Bintang Fathur Rahman.png",
  },
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Fariz Eda",
    designation: "Judge",
    src: "/online/Fariz Eda.jpeg",
  },
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Jaya Iskandar",
    designation: "Judge",
    src: "/online/Jaya Iskandar.jpeg",
  },
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Julian Chan",
    designation: "Judge",
    src: "/online/Julian Chan.jpeg",
  },
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Mathilda Dellanova",
    designation: "Judge",
    src: "/online/Mathilda Dellanova.jpeg",
  },
  {
    quote: "Kutipan untuk online judge bisa diisi di sini.",
    name: "Wily Goldramijaya",
    designation: "Judge",
    src: "/online/Wily Goldramijaya.jpeg",
  }
];



export const categorys = [
  {
    label: "Health",
    description:
      "Health is more than just access to hospitals. It includes prevention, mental well-being, nutrition, environment, and community support. In Indonesia, disparities persist between urban and rural populations, with challenges in healthcare access, health literacy, affordability, and cultural attitudes toward wellbeing. At the same time, lifestyle-related diseases and mental health issues are rising, especially among younger populations.",
    learnMore: "#",
    // Gambar: Dokter/Tenaga Medis sedang mengecek data via tablet digital (Health Tech vibe)
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ce222?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Safety",
    description:
      "Safety is a fundamental need for individuals and communities to thrive. In Indonesia, people face a wide range of risks, from natural disasters such as earthquakes or floods to rising concerns about crime, public safety, and even economic instability. Many communities lack timely access to accurate information, coordinated response systems, and recovery resources.",
    learnMore: "#",
    // Gambar: Helikopter rescue / tim SAR lagi bertugas (Disaster Response & Safety vibe)
    image: "https://images.unsplash.com/photo-1502318217862-aa4e294ba654?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Agriculture & Food Systems",
    description:
      "As an archipelago with vast fertile lands and rich seas, Indonesia is naturally an agrarian and maritime powerhouse. However, our farmers and fishers, the backbone of Indonesia’s food security, remain among the most economically vulnerable citizens. They often face significant hurdles, including aging infrastructure, volatile market prices, and the growing impact of climate change on crop yields and fish stocks.",
    learnMore: "#",
    // Gambar: Lahan agrikultur modern atau penggunaan traktor/drone di lahan hijau (Agritech vibe)
    image: "https://images.unsplash.com/photo-1586771107445-d3af2e8c2538?auto=format&fit=crop&w=800&q=80",
  },
];