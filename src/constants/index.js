import { eventsImg } from "../assets/images";
import { aboutUsImg } from "../assets/images";
import aadhiImg from "../assets/icons/aadhi-Img.jpeg";

import {
  aquaStrikeLogo,
  brainTeaseLogo,
  colloquiumTalkLogo,
  cricketAuctionLogo,
  droneZoneLogo,
  machinistLogo,
  pixelPerfectLogo,
  rcDaCorsaLogo,
  shapeShiftersLogo,
  stumbleGuysLogo,
  sdgLogo,
  tdPrintingLogo,
  vrCricketLogo,
  senateSparLogo,
} from "../assets/images";

import {
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7, 
  img_8,
} from "../assets/images"

import { clgImg } from "../assets/images";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/our-team", label: "Our Team" },
];

export const eventsContent = {
  title: "Exciting Events",
  description:
    "Explore the fascinating world of 3D printing with us! Our events focus on Mechanical Engineering, Robotics, and more, ensuring you gain a deep understanding of these cutting-edge fields. Secure your spot by filling out the registration form and embark on this exciting journey into innovation and creativity.",
  linkLabel: "Explore Events",
  linkTo: "/events",
  img: eventsImg,
  imgAlt: "events",
  imgWidth: 320,
};

export const aboutContent = {
  title: "About Us",
  img: aboutUsImg,
  imgAlt: "events",
  imgWidth: 380,
  description:
    "Sri Sairam Engineering College, Chennai, established by MJF.Ln.Leo Muthu, is a non-profit institution affiliated with Anna University and approved by AICTE. Spanning a vast campus, it features advanced facilities including labs, a digital library, and a sports complex. With top certifications and accreditations, the college is committed to providing quality technical education and nurturing leaders with a global perspective. The institution also includes Sri Sairam Institute of Management and has expanded into medical sciences and community services.",
  linkTo: "/about",
  linkLabel: "Learn More",
};

export const contactDetails = [
  {
    title: "Event Coordinators",
    contacts: [
      { name: "Lakshman G", phone: "+91 97908 17205" },
      { name: "Ajay Kumar A", phone: "+91 98847 17979" },
    ],
  },
  {
    title: "Help Desk",
    contacts: [
      { name: "Nithish Anand A", phone: "+91 80560 88096" },
      { name: "Karthick Raja V", phone: "+91 93440 02325" },
    ],
  },
];

export const quickLinks = {
  title: "Quick Links",
  links: [
    { name: "Home", linkTo: "/" },
    { name: "Events", linkTo: "/events" },
    { name: "About Us", linkTo: "/about" },
    { name: "Our Team", linkTo: "/our-team" },
  ],
};

export const reachUs = {
  title: "Reach Us",
  links: [
    { name: "Instagram", linkTo: "mailto:customer@nike.com" },
    { name: "Email", linkTo: "tel:+92554862354" },
  ],
};

export const allEvents = [
  {
    id: 1,
    title: "Colloquium Talk",
    logo: colloquiumTalkLogo,
    linkTo: "/events/1",
    linkLabel: "View Details",
  },

  {
    id: 2,
    title: "Brain Tease",
    logo: brainTeaseLogo,
    linkTo: "/events/2",
    linkLabel: "View Details",
  },

  {
    id: 3,
    title: "Shape Shifters",
    logo: shapeShiftersLogo,
    linkTo: "/events/3",
    linkLabel: "View Details",
  },

  {
    id: 4,
    title: "Machinist",
    logo: machinistLogo,
    linkTo: "/events/4",
    linkLabel: "View Details",
  },

  {
    id: 5,
    title: "Cricket Auction",
    logo: cricketAuctionLogo,
    linkTo: "/events/5",
    linkLabel: "View Details",
  },

  {
    id: 6,
    title: "Aqua Strike",
    logo: aquaStrikeLogo,
    linkTo: "/events/6",
    linkLabel: "View Details",
  },

  {
    id: 7,
    title: "Senate Spar",
    logo: senateSparLogo,
    linkTo: "/events/7",
    linkLabel: "View Details",
  },

  {
    id: 8,
    title: "Stumble Guys",
    logo: stumbleGuysLogo,
    linkTo: "/events/8",
    linkLabel: "View Details",
  },

  {
    id: 9,
    title: "Rc Da Corsa",
    logo: rcDaCorsaLogo,
    linkTo: "/events/9",
    linkLabel: "View Details",
  },

  {
    id: 10,
    title: "Pixel Perfect",
    logo: pixelPerfectLogo,
    linkTo: "/events/10",
    linkLabel: "View Details",
  },

  {
    id: 11,
    title: "3D Printing",
    logo: tdPrintingLogo,
    linkTo: "/events/11",
    linkLabel: "View Details",
  },

  {
    id: 12,
    title: "Drone Zone",
    logo: droneZoneLogo,
    linkTo: "/events/12",
    linkLabel: "View Details",
  },

  {
    id: 13,
    title: "Vr Cricket",
    logo: vrCricketLogo,
    linkTo: "/events/13",
    linkLabel: "View Details",
  },

  {
    id: 14,
    title: "Together We Can",
    logo: sdgLogo,
    linkTo: "/events/14",
    linkLabel: "View Details",
  },
];

export const eventsById = allEvents.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, {});

export const colloquiumTalk = {
  id: 1,
  title: "Colloquium Talk",
  logo: colloquiumTalkLogo, // Assuming you have a logo variable named colloquiumTalkLogo
  description: `Inviting you to the forum of Colloquium Talk where you can present engineering solutions to the problems that prevail in society. Engaging presentations followed by interactive Q&A sessions provide networking opportunities with peers and professionals.
  Topics (But not limited to):
  - Sustainable engineering solutions
  - Automotive advancements
  - Robotics and automation
  - New materials and manufacturing processes
  - Energy sources
  - Power system and power electronics
  - Electronics & IoT
  - Data science & Cloud computing
  - Artificial Intelligence and Machine Learning
  - Information & Communication Technologies`,
  guidelines: [
    "Teams can have a minimum of two and a maximum of three members.",
    "Teams will have a presentation duration of 5 minutes and Q&A session of 3 minutes.",
    "Participants must send their presentation PPT on or before 15.08.2024 to the mail ID (mechaverse24@sairam.edu.in).",
    "Winning teams will be rewarded with cash prizes and certificates.",
    "Participation certificates will be provided to all the participants.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Raj Kumar", // Replace with actual coordinator name and image if different
      img: aadhiImg, // Replace with actual image variable if different
    },
    {
      name: "Praveen Kumar", // Replace with actual coordinator name and image if different
      img: aadhiImg, // Replace with actual image variable if different
    },
  ],
};


export const tdPrintingWorkshop = {
  id: 11,
  title: "3D Printing Workshop",
  logo: tdPrintingLogo,
  description: `Step into the future of technology at our immersive 3D Printing Workshop! Whether you're a tech enthusiast, a creative professional, or just curious about the world of 3D printing, this workshop is designed for you.
  Join us for a hands-on experience where you'll:
  - Learn the Basics: Get an overview of 3D printing technology, including how it works and its various applications.
  - Hands-On Demonstrations: Watch live demonstrations of different 3D printers and materials in action.
  - Interactive Sessions: Engage in interactive activities to understand the design process and how to create your own 3D models.`,
  guidelines: [
    "Each participant is instructed to register through Google Form provided.",
    "First come first served (Only first 30 members are expected).",
    "After the workshop, a quiz will be conducted to test your knowledge.",
    "No team participation is allowed for the quiz, only individual participation.",
    "Winners will be provided with certificates and cash awards.",
    "Participation certificates will be provided to all.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Raj Kumar",
      img: aadhiImg,
    },
    {
      name: "Praveen Kumar",
      img: aadhiImg,
    },
  ],
};

export const brainTeaseEvent = {
  id: 2,
  title: "Brain Tease",
  logo: brainTeaseLogo,
  description:
    "Ready to test-drive your brain? Buckle up for our automotive quiz! Whether you're a gearhead who dreams in horsepower or someone who thinks a spark plug is a new dance move, this quiz is the pit stop for laughs and learning. Let's see if you can steer clear of wrong answers or if you'll need a tow truck by the end!",

  guidelines: [
    "Teams can have a minimum of two and a maximum of three people.",
    "Questions can be multiple choice, true or false, or specific answer.",
    "There may be multiple rounds",
    "There may be a time limit for answering questions. For example, a team may have 1 minutes to answer each question",
    "Teams may be eliminated based on their scores in each round",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },

    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const droneZoneWorkshop = {
  id: 12,
  title: "Drone Zone Workshop",
  logo: droneZoneLogo,
  description:
    "Welcome to Drone Zone, brought to you by LMES (Let's Make Education Simple)! Get ready for an exciting adventure where you'll dive into the world of drones. Today, you'll learn how these amazing flying machines work, build your very own drone, and master the art of flying. With LMES, our expert instructors make complex concepts easy to understand through fun, hands-on activities. Whether you're a beginner or have some experience, Drone Zone is the perfect place to unleash your creativity, learn safely, and have a blast all while LMES simplifies your educational journey!",

  guidelines: [
    "Each participant is instructed to register through Google Form provided.",
    "First come first served (Only first 30 members are expected).",
    "After the workshop, a quiz will be conducted to test your knowledge.",
    "No team participation is allowed for the quiz, only individual participation.",
    "Winners will be provided with certificates and cash awards.",
    "Participation certificates will be provided to all.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const machinistEvent = {
  id: 4,
  title: "Machinist",
  logo: machinistLogo,
  description:
    "Join us for Machinist (Lathe Machining), a fundamental process in mechanical engineering primarily used for shaping materials, typically metals, by removing excess material. The workpiece is rotated about its axis, while a cutting tool is applied to it to create cylindrical, conical, or even complex shapes with high precision. Participants can showcase their talents, compete for exciting prizes, and receive feedback from a panel of esteemed judges at our mechanical symposium. This event offers attendees insights into both the fundamental principles and the latest innovations in the field.",

  guidelines: [
    "Each team can consist of 2-3 members.",
    "Each team will be given a specific time of 15-30 minutes to complete their task.",
    "The material to be machined will be provided by the organizers.",
    "Participants will be given a specified design and dimensions.",
    "Judging will be based on accuracy, surface finish, and time management.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const cricketAuctionEvent = {
  id: 5,
  title: "Cricket Auction",
  logo: cricketAuctionLogo,
  description:
    "Experience the ultimate high-stakes fantasy cricket showdown, where fortunes are won or lost in a heartbeat. Fierce bidders compete for top players as the auctioneer’s rapid-fire calls fuel the excitement. Get ready for a thrilling game where every decision counts.",

  guidelines: [
    "A team can have a maximum of 3 and a minimum of 2 members.",
    "Each team should pick 7 players. The rules to pick the 7 players are 2 batters, 2 bowlers, 2 all-rounders, and 1 wicketkeeper.",
    "There will be three tiers of players in the auction; as per the tier of the players, points should vary.",
    "The judge's decision is final and no appeal will be entertained.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const rcDaCorsaEvent = {
  id: 9,
  title: "RC Da Corsa",
  logo: rcDaCorsaLogo,
  description: `RC Racing for cars specifically involves racing remote-controlled vehicles designed to mimic full-sized cars. These RC cars come in various types, including on-road cars for smooth surfaces and off-road cars for dirt tracks, grass, and other rugged terrains.\n\nRC car racing requires skillful handling as drivers must maneuver their cars through tight turns, high-speed straights, and sometimes over jumps, all while competing against other racers. The cars are powered by electric motors offering different speeds and performance characteristics.\n\nRaces can range from short sprints to longer endurance events, with some competitions incorporating time trials or knockout rounds.`,
  guidelines: [
    "A team can comprise a maximum of 2 members.",
    "Participants must bring their own RC cars.",
    "Initial inspection will be done.",
    "The race track will be a dirt track with hairpin bends and S-shaped curves.",
    "Each team is permitted to have a maximum of 2 penalties, after which the team will be disqualified.",
    "We will not be held responsible for any damage to the car during the race.",
    "Each team will be allowed one trial session.",
    "Judge's decision will be final.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const senateSparEvent = {
  id: 7,
  title: "Senate Spar: The Big Debate",
  logo: senateSparLogo,
  description: `Get ready for the battle of wits and ideas as the highest minds come together for a thrilling house of representative competition! This event promises to be an electrifying exchange of arguments, counterarguments, and perspectives on thought-provoking topics.`,
  guidelines: [
    "Teams of two or three students will be allowed.",
    "Each team will represent a state.",
    "The states for each team will be announced two days before the event.",
    "Each team must give an introduction about their respective states.",
    "After the introduction part, the argument session between the states will begin.",
    "Cash prize and certificates will be provided.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const aquaStrikeEvent = {
  id: 6,
  title: "Aqua Strike",
  logo: aquaStrikeLogo,
  description:
    "BLAST OFF INTO HYDRO-MADNESS! Where creativity meets propulsion and innovation meets fun. Compete against rival rocketeers in a battle of wits, skill, and water pressure, and experience the THRILL OF LIFTOFF and the agony of defeat. Don't miss this SPLASH-TACULAR event, where you'll go HYDRO-WILD and make a splash with fellow rocket enthusiasts. Register now and get ready for liftoff!",

  guidelines: [
    "Each team must have 2 members.",
    "The event will be conducted in 2 rounds.",
    "Teams eligible to play the second round will be decided based on the number of points secured in the first round.",
    "Cash rewards will be given to the top 3 teams.",
    "All participants will receive a participation certificate.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const pixelPerfectEvent = {
  id: 10,
  title: "Pixel Perfect",
  logo: pixelPerfectLogo,
  description:
    "Join us for 'Pixel Perfect,' a premier photography contest where creativity meets precision. This event invites photographers of all skill levels to capture the essence of life through their lenses. Whether it's a breathtaking landscape, an evocative portrait, or a striking abstract, we're looking for images that tell compelling stories. Participants can showcase their talents, compete for exciting prizes, and receive feedback from a panel of esteemed judges. Unleash your imagination, sharpen your focus, and make every pixel count in this celebration of visual artistry!",

  guidelines: [
    "Each participant is instructed to upload their photo in the Google Form for the first round with the theme 'Urban Life.'",
    "Out of those, the top 20 are selected for the second round, where photos are submitted under the theme 'Environmental Issues.'",
    "Participants are instructed not to take photos inside the college premises.",
    "Cash prizes and certificates will be given to the top three participants.",
    "Participation certificates will be provided to the top 20 participants.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const shapeShiftersEvent = {
  id: 3,
  title: "Shape Shifters",
  logo: shapeShiftersLogo,
  description:
    "The 3D CAD Modeling Competition is a platform for aspiring engineers and designers to showcase their proficiency in creating detailed and accurate digital models. Participants will be tasked with designing a complex object or assembly within a specified time frame, using any CAD software of their choice. The competition will test their technical skills, creativity, and ability to adhere to design specifications.",

  guidelines: [
    "Each team may consist of a maximum of 2 members.",
    "The total duration of 1 round is 30 minutes.",
    "The event will be conducted in 2 rounds.",
    "A maximum of 10 teams can participate in the event.",
    "Cash awards will be given to the top 3 winners.",
    "All participants will receive a participation certificate.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const stumbleGuysEvent = {
  id: 8,
  title: "Stumble Guys",
  logo: stumbleGuysLogo,
  description:
    "Welcome to Stumble Guys! Experience a thrilling sequence of chaotic obstacle courses and mini-games as part of our action-packed 'Stumble Guys' tournament! Inspired by the viral sensation, this event promises lots of laughter, fast-paced excitement, and unforeseen obstacles. This tournament is the ideal way to demonstrate your abilities, take on other fans, and have some friendly competition—regardless of your level of experience. Don't miss the opportunity to become the Stumble Guys champion!",

  guidelines: [
    "Each participant is instructed to register through the Google Form provided.",
    "First come, first served (Only the first 60 members are accepted).",
    "4 games will be conducted (Each game includes 15 members).",
    "Each game will select 7 to 8 members for the final round.",
    "In the final round, the top 3 members will be selected.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const sdgAwarenessEvent = {
  id: 13,
  title: "SDG Awareness",
  logo: sdgLogo,
  description:
    "An engaging experience that combines knowledge with impact! In this exciting event, we welcome you to journey through layers of knowledge and creativity, with each step bringing you closer to understanding and advocating the Sustainable Development Goals (SDGs). Prepare to engage your thoughts as we embark on a series of engaging exercises meant to raise your understanding of global identities and long-term change.",

  guidelines: [
    "Engineering students from any discipline and any year can participate.",
    "Participants must adhere to the time limits.",
    "General knowledge and basic knowledge of SDG goals are required.",
    "Smartphones and other electronic gadgets are prohibited.",
    "All participants will receive participation E-certificates.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Nagaraj",
      img: aadhiImg,
    },
    {
      name: "Gopal",
      img: aadhiImg,
    },
  ],
};

export const aboutClg = {
  title: "Our College",
  img: clgImg,
  imgAlt: "college img",
  imgWidth: 500,
  description: "Sri Sai ram Engineering College, Chennai, established in the year 1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, is a non-profitable and a non-minority institution. A welldefined vision, highly committed mission and a dedicated leadership facilitate Sri Sai ram Engineering College to be in the best of educational institutions in the country. The institution is situated in a sprawling campus with architecturally and aesthetically designed buildings, blocks, stadiums, auditoriums, hostels, gymnasium and the sports grounds. The institution is affiliated to Anna University and approved by the All India Council for Technical Education (AICTE), New Delhi.",
};

export const aboutSecMotorSports = {
  title: "SEC Motorsports",
  img: img_2,
  imgAlt: "college img",
  imgWidth: 500,
  description: "SEC Motorsports is ang club from the Mechanical Engineering Department of Sri Sairam Engineering College(SEC).This club is established to be the hub of all motorsport's events under one banner. This club includes The Rocketeer Racing (mBAJA), Team Evega Racing (eBAJA), Team Luaskart (Go-kart), Team Agrosters (Tifan), Racing Rois (Efficycle), Green Pyora (Ebike), Black Squad (Dirtbike) & Revival Racing (SUPRA) various events under the Society of Automotive Engineers(SAE). The listed teams are participating in all national level motorsports events. These teams are the club's pride as they won various prestigious awards under different categories in different core events and also overall ranks all over India. SEC Motorsports encourages students to enroll and enlighten in all those events to get, hands on experience and gain knowledge on their core engineering.",
};

export const aboutDepartment = {
  title: "Our Department",
  img: clgImg,
  imgAlt: "college img",
  imgWidth: 500,
  description: "Established in the year 1995, the Department of Mechanical Engineering has excelled in its infrastructural facilities keeping pace with the latest development in technologies. The department is accredited by the National board of accreditation and is backed by professionally experienced and highly qualified faculty and supporting staff. More than 600 students have enrolled in the Mechanical Engineering branch. The Department has well developed laboratories equipped with latest equipment. Society of Automotive Engineers (SAE) is very vibrant. The Association of mechanical engineering is regularly conducting seminars, workshops and guest lectures by eminent personalities in various streams of mechanical engineering. CII-AICTE survey of industry linked technical institutions 2015 has placed the Department of Mechanical Engineering in the first position at all India level. Students are encouraged to actively participate in professional society activities.",
};


export const motorSportsImages = [
  {
    img: img_1,
    imgAlt: "img-1"
  },
  {
    img: img_2,
    imgAlt: "img-2"
  },
  {
    img: img_3,
    imgAlt: "img-3"
  },
  {
    img: img_4,
    imgAlt: "img-4"
  },
  {
    img: img_5,
    imgAlt: "img-5"
  },
  {
    img: img_6,
    imgAlt: "img-6"
  },
  {
    img: img_7,
    imgAlt: "img-7"
  },
  {
    img: img_8,
    imgAlt: "img-8"
  }
]


export const keyPersonsProfiles = [
  {
    img: aadhiImg,
    imgAlt: "Aadhitya Varma A",
    name: "Aadhitya Varma A",
    year: "MECH - Third Year",
    linkedIn: "https://www.linkedin.com/in/aadhitya-varma/"
  },

  {
    img: aadhiImg,
    imgAlt: "Aadhitya Varma A",
    name: "Aadhitya Varma A",
    year: "MECH - Third Year",
    linkedIn: "https://www.linkedin.com/in/aadhitya-varma/"
  },
  {
    img: aadhiImg,
    imgAlt: "Aadhitya Varma A",
    name: "Aadhitya Varma A",
    year: "MECH - Third Year",
    linkedIn: "https://www.linkedin.com/in/aadhitya-varma/"
  },
  {
    img: aadhiImg,
    imgAlt: "Aadhitya Varma A",
    name: "Aadhitya Varma A",
    year: "MECH - Third Year",
    linkedIn: "https://www.linkedin.com/in/aadhitya-varma/"
  },
  // {
  //   img: aadhiImg,
  //   imgAlt: "Aadhitya Varma A",
  //   name: "Aadhitya Varma A",
  //   year: "MECH - Third Year",
  //   linkedIn: "https://www.linkedin.com/in/aadhitya-varma/"
  // },
  
]