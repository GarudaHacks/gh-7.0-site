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
    number: "40+",
    unit: "Million IDR",
    description: "Grand Prize Pool",
    iconBaseName: "ghCoin",
    hoverIcon: "GH-coin-fill",
  },
  {
    title: "Prize",
    logo: "advan",
    unit: "Ultimate Gear",
    description: "laptops, tablets, and more",
    iconBaseName: "device-outline",
    hoverIcon: "prizepool-color",
  },
  {
    title: "Projects",
    logo: "garudie2",
    unit: "Cute Garudie",
    description: "Special Soulderkins",
    iconBaseName: "garudie-outline",
    hoverIcon: "garudie-fill",
  },
];

export type TeamMember = {
  name: string;
  photo: string;
};

export const managingDirectors: TeamMember[] = [
  { name: "Dominic Moreno", photo: "dom.jpg" },
  { name: "Ralph Benedict", photo: "ben.jpg" },
];

export type TeamGroup = {
  team: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    team: "Marketing & Design",
    members: [
      { name: "Eleonora Ansella", photo: "ansella.jpg" },
      { name: "Margery Jessica", photo: "margery.jpg" },
      { name: "Keanan Halim", photo: "keanan.jpeg" },
      { name: "Alif Farham", photo: "alif.jpeg" },
      { name: "Rainier Saputra", photo: "rainier.jpg" },
      { name: "Vallerie Anne", photo: "vallerie.jpg" },
      { name: "Muhammad Fahruridho", photo: "ridho.JPG" },
      { name: "Megan Sudjarwadi", photo: "megan2.jpg" },
    ],
  },
  {
    team: "Content",
    members: [
      { name: "Amelia Muliawati", photo: "amel.jpeg" },
      { name: "Jessica Wijoyo", photo: "jess.jpg" },
      { name: "Topan Prasetyo", photo: "topan.jpeg" },
      { name: "Luminous Insani", photo: "luminous.jpg" },
      { name: "Khalila Kalla", photo: "khalila.JPG" },
    ],
  },
  {
    team: "Logistics",
    members: [
      { name: "Emily Jade", photo: "emily.jpeg" },
      { name: "Putra Pratama", photo: "putra.jpg" },
      { name: "Josephine Yuwono", photo: "josephine.jpg" },
      { name: "Adrianna Isanto", photo: "adrianna.jpeg" },
      { name: "Lyan Callista", photo: "lyan.jpg" },
      { name: "Kimberly Zhou", photo: "kim.jpeg" },
      { name: "Noel Siregar", photo: "noel.jpg" },
      { name: "Aufy Mulyadi", photo: "aufy.png" },
      { name: "Adnaan Gumanti", photo: "adnaan.jpeg" },
    ],
  },
  {
    team: "Partnerships",
    members: [
      { name: "Jericho Siregar", photo: "jericho.jpeg" },
      { name: "Austin Sim", photo: "austin.jpeg" },
      { name: "Inola Adriana", photo: "inola.jpeg" },
      { name: "Natha Lie", photo: "natha lie.jpeg" },
      { name: "Christopher Lim", photo: "chris.jpg" },
      { name: "Mieko Lim", photo: "mieko.jpeg" },
      { name: "Wenny Utami", photo: "wenny.jpeg" },
      { name: "Arya Handrian", photo: "arya.jpeg" },
    ],
  },
  {
    team: "Tech",
    members: [
      { name: "Hafidz Rizky", photo: "rizky.jpg" },
      { name: "Winner Rasendriya", photo: "winner2.jpg" },
      { name: "Heryan Djaruma", photo: "ryan.jpeg" },
      { name: "Alifian Abdiel", photo: "alfin.jpeg" },
      { name: "Cheryl Aurelia", photo: "cheryl.jpeg" },
      { name: "Mohammad Daffa", photo: "daffa.png" },
      { name: "Hans Figo", photo: "figo.jpeg" },
      { name: "Fatih Nararya", photo: "fatih2.jpg" },
      { name: "Grace Marin", photo: "marin.jpg" },
      { name: "Jayden Katuari", photo: "jayden.jpg" },
      { name: "Fawwaz Humam", photo: "fawwaz.jpeg" },
    ],
  },
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
    name: "Mr. M. Arifin Dobson",
    role: "IT Business Partner Lead for Logistics and Distribution",
    photo: "/speakers/arifin.png",
    bio: "",
  },
  {
    id: 2,
    name: "Mr. Titan Danar",
    role: "Intel Master Trainer",
    photo: "/speakers/titan.png",
    bio: "",
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
    teamName: "Devpost",
  },
  {
    title: "Aspiring AI",
    number: "02",
    description:
      "Aspiring AI is an AI-powered platform that helps students create a compelling tech portfolio in 15 minutes...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/540/256/datas/original.jpg",
    link: "https://devpost.com/software/p-lbraso?_gl=1*8furrd*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzA2NTAuMC4wLjA.",
    teamName: "Devpost",
  },
  {
    title: "Jendela",
    number: "03",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/950/263/datas/original.png",
    link: "https://devpost.com/software/jendela?_gl=1*837o5i*_gcl_au*ODk2NDczMTI1LjE3MzYxOTI1MzM.*_ga*MTA1ODc5ODQxNy4xNzE1ODY5MjU1*_ga_0YHJK3Y10M*MTc0MzgzMDA4MC4yNi4xLjE3NDM4MzA2NTEuMC4wLjA.",
    teamName: "Devpost",
  },
  {
    title: "JalanKami",
    number: "04",
    description:
      "JalanKami is a platform improving urban walkability by providing tools like an interactive map...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/949/694/datas/original.png",
    link: "https://devpost.com/software/jalankami",
    teamName: "Devpost",
  },
  {
    title: "IRiS",
    number: "05",
    description:
      "IRIS is an innovative application designed to provide comprehensive security and user convenience...",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/950/385/datas/original.png",
    link: "https://devpost.com/software/iris-fprvg9?_gl=1*1cfsuv2*_gcl_au*MTY0MTk2NDAyMi4xNzQyNDQ3NTU2*_ga*MTQzNzAyNDA1LjE3NDI0NDc1NTY.*_ga_0YHJK3Y10M*MTc0NDM1NTg0Ni4yLjEuMTc0NDM1NTg1MC4wLjAuMA..",
    teamName: "Devpost",
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

export type Judge = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export type JudgeTrack = {
  track: string;
  judges: Judge[];
};

export const offlineJudgeTracks: JudgeTrack[] = [
  {
    track: "Health",
    judges: [
      { quote: "", name: "Natali Ardianto", designation: "CEO @ Lifepack.id", src: "/offline/health/Natali Ardianto.png" },
      { quote: "", name: "Timotius Haniel", designation: "Product Manager @ Superbank", src: "/offline/health/Timotius Haniel.png" },
      { quote: "", name: "Rafie Amandio Fauzan", designation: "CTO @ Summon AI", src: "/offline/health/rafie amandia.png" },
      { quote: "", name: "Dr. Elisa Indriasari", designation: "CEO & Founder @ Digimaster and Coachee360", src: "/offline/health/dr elisa indriasari.png" },
      { quote: "", name: "Elfindah Princes", designation: "CEO @ Westin Group", src: "/offline/health/elfindah princes.png" },
      { quote: "", name: "Mario Caesar Kristantoputra", designation: "Data Warehouse Engineer @ Kredit Pintar Indonesia", src: "/offline/health/mario caesar.png" },
      { quote: "", name: "Dr. Tirta Darmawan Susanto", designation: "Lecturer @ UPH", src: "/offline/health/Dr. Tirta Darmawan Susanto.png" },
      { quote: "", name: "Dr. Reno Yonora", designation: "Anesthesiologist @ RSU BUNDA MENTENG JAKARTA", src: "/offline/health/Dr. Reno Yonora.png" },
      { quote: "", name: "Eka Kurnia", designation: "Head of Digital Transformation and Ruang Talenta @ Maxy Academy", src: "/offline/health/eka kurnia.png" },
      { quote: "", name: "Evan Wijaya Tanotogono", designation: "CEO & Co-Founder @ Rey", src: "/offline/health/evan wiaya.png" },
      { quote: "", name: "Rina Fitri", designation: "Komisaris @ PT. Tandon Citra Mutri", src: "/offline/health/rina fitri.png" },
      { quote: "", name: "Martinus Indra Senjaya", designation: "Automation Project Management @ Sinarmas APP", src: "/offline/health/martinus indra.png" },
    ],
  },
 {
    track: "Safety",
    judges: [
      { quote: "", name: "Albertus Vincent", designation: "Data Engineer @ BUMN Banking", src: "/offline/safety/albertus vincnt.png" },
      { quote: "", name: "Franciscus Xaverius Taro Lay", designation: "Founder @ Kalama Cyber", src: "/offline/safety/franciscus xaverius.png" },
      { quote: "", name: "Andy Djojo Budiman", designation: "Ketua Komtap Software @ APTIKNAS", src: "/offline/safety/andy djojo.png" },
      { quote: "", name: "Andy Febrico Bintoro", designation: "CTO/Co-Founder @ MAXY Academy", src: "/offline/safety/andy febrico.png" },
      { quote: "", name: "Dr. Muhamad Ismail", designation: "CEO @ PT. Zahir Internasional", src: "/offline/safety/dr muh ismail.png" },
      { quote: "", name: "Febry Indra Setyawan", designation: "CTO @ hibank", src: "/offline/safety/febry indra set.png" },
      { quote: "", name: "Andisa Rizky Febrianti", designation: "Digital Communication Strategist @ Generation Girl", src: "/offline/safety/andisa rixky feb.png" },
      { quote: "", name: "Angelika Putri", designation: "Ketua Komtap Teknologi Finansial & Inovasi Pembayaran Digital @ APTIKNAS", src: "/offline/safety/angleika putri.png" },
      { quote: "", name: "Billtraviano Ferlan Harda", designation: "CEO @ DOT Indonesia", src: "/offline/safety/billtraviano.png" },
      { quote: "", name: "Patrick Theodore Tjandra", designation: "M&A @ JAPFA Comfeed", src: "/offline/safety/patrick theodore.png" },
      { quote: "", name: "Yuliasiane Sulistiyawati", designation: "Director @ PT. VNCOOL Technology Indonesia", src: "/offline/safety/yuliasiane s.png" },
      { quote: "", name: "Mikael Dewabrata", designation: "Content Creator @ learnfol.io", src: "/offline/safety/mikael dewabrata.png" }
    ],
  },
 {
    track: "Agriculture & Food Systems",
    judges: [
      { quote: "", name: "Angkoso Brami Prasojo", designation: "AI Engineer Manager @Sinarmas APP", src: "/offline/agri/angkoso brami.png" },
      { quote: "", name: "Aditya Alta", designation: "Head of Research @CIE", src: "/offline/agri/aditaya alta.png" },
      { quote: "", name: "Dr. Arief Budiman", designation: "CEO @ PT AGRINDO", src: "/offline/agri/dr arief budiman.png" },
      { quote: "", name: "Prihadiyanto", designation: "Ex Director @HiBank & MD @Accenture", src: "/offline/agri/prihadiyanto.png" },
      { quote: "", name: "Julian Sukmana Putra", designation: "Senior Automation Export @Sinarmas APP", src: "/offline/agri/julian sukmana p.png" },
      { quote: "", name: "Sandy Kusuma", designation: "Waketum 1 Bidang Talenta Digital @APTIKNAS", src: "/offline/agri/sandy kusuma.png" },
      { quote: "", name: "Sari Lauda", designation: "COO/ Advisor @ Hangry/ Padel Pro", src: "/offline/agri/sari lauda.png" },
      { quote: "", name: "Christian Budiman", designation: "President Director @ SUITEN INOVASI SUKSES", src: "/offline/agri/christian budiman.png" },
      { quote: "", name: "Esti Arianti Kesuma", designation: "CEO @Idea Duta Indonesia", src: "/offline/agri/esti arianti.png" }
    ],
  },
];

export const onlineJudgeTracks: JudgeTrack[] = [
  {
    track: "Health",
    judges: [
    { quote: "", name: "Daniel Hadiseputro", designation: "Technical Judge", src: "/online/Daniel hadi.png" },
  { quote: "", name: "Nunung Nurul Qomariyah", designation: "Technical Judge", src: "/online/nunung nurul.png" },
  { quote: "", name: "Louis Yanggara", designation: "Technical Judge", src: "/online/louis yanggara.png" },
  { quote: "", name: "Eda Andhika", designation: "Technical and Non-Technical Judge", src: "/online/eda andhika.png" },
  { quote: "", name: "Bryan Aptana", designation: "Non-Technical Judge", src: "/online/bryan aptana.png" },
  { quote: "", name: "Muhammad Husein", designation: "Technical and Non-Technical Judge", src: "/online/muh. husein.png" },
  { quote: "", name: "Julian Chan", designation: "Technical and Non-Technical Judge", src: "/online/julian chan.png" },
  { quote: "", name: "Bintang Fathur Rohman", designation: "Technical and Non-Technical Judge", src: "/online/bintang fathur rohma.png" },
  { quote: "", name: "Jaya Iskandar", designation: "Technical and Non-Technical Judge", src: "/online/jaya iskandar.png" },
  { quote: "", name: "Netan Mangal", designation: "Technical Judge", src: "/online/netan mangal.png" },
  { quote: "", name: "Julian Sidik", designation: "Technical and Non-Technical Judge", src: "/online/julia sidik.png" },
  { quote: "", name: "Mathilda Dellanova", designation: "Technical Judge", src: "/online/Mathilda Dellanova.jpeg" },
  { quote: "", name: "Giga Hidjrika Aura Adkhy", designation: "Technical and Non-Technical Judge", src: "/online/giga hidjrika.png" },
  { quote: "", name: "Sekarwulan", designation: "Technical and Non-Technical Judge", src: "/online/sekarwulan.png" },
  { quote: "", name: "Utari Octavianty", designation: "Non-Technical Judge", src: "/online/utari octavianty.png" },
  { quote: "", name: "Wily Goldramijaya", designation: "Non-Technical Judge", src: "/online/wily goldra.png" }
],
  },
  { track: "Safety", judges: [] },
  { track: "Agriculture & Food Systems", judges: [] },
];

export const offlineJudges = offlineJudgeTracks[0].judges;
export const onlineJudges = onlineJudgeTracks[0].judges;

export const categorys = [
  {
    label: "Health",
    description:
      "Health is more than just access to hospitals. It includes prevention, mental well-being, nutrition, environment, and community support. In Indonesia, disparities persist between urban and rural populations, with challenges in healthcare access, health literacy, affordability, and cultural attitudes toward wellbeing. At the same time, lifestyle-related diseases and mental health issues are rising, especially among younger populations.",
    learnMore: "#",

    image: "/tracks/health.avif",
  },
  {
    label: "Safety",
    description:
      "Safety is a fundamental need for individuals and communities to thrive. In Indonesia, people face a wide range of risks, from natural disasters such as earthquakes or floods to rising concerns about crime, public safety, and even economic instability. Many communities lack timely access to accurate information, coordinated response systems, and recovery resources.",
    learnMore: "#",

    image: "/tracks/safety.avif",
  },
  {
    label: "Agriculture & Food Systems",
    description:
      "As an archipelago with vast fertile lands and rich seas, Indonesia is naturally an agrarian and maritime powerhouse. However, our farmers and fishers, the backbone of Indonesia’s food security, remain among the most economically vulnerable citizens. They often face significant hurdles, including aging infrastructure, volatile market prices, and the growing impact of climate change on crop yields and fish stocks.",
    learnMore: "#",

    image: "/tracks/food.avif",
  },
];
