import { eventsImg } from "../assets/images";
import { aboutUsImg } from "../assets/images";
// import aadhiImg from "../assets/icons/aadhi-Img.jpeg";

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
  surpriseEventLogo,
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
} from "../assets/images";

import { clgImg, secMotorsportsImg, departmentImg } from "../assets/images";

import {
  meganathan_1,
  sudarshan_1,
  sakthivel_2,
  srivari_2,
  lokjith_3,
  santhosh_3,
  avinash_4,
  sathappan_4,
  aakash_5,
  haresh_5,
  jayasurya_5,
  durga_6,
  jayanthan_6,
  asmathi_7,
  madhan_7,
  merlin_7,
  haribabu_8,
  vigneshwar_8,
  mohanraj_9,
  saravanan_9,
  sakthivel_10,
  arun_11,
  ashwin_11,
  srivatsan_11,
  gohul_12,
  jayasurya_12,
  prasanna_12,
  roshan_13,
  aravindh_14,
} from "../assets/images";

import {
  ceoImg,
  principalImg,
  rpImg,
  rpImg1,
  hodImg,
  parswajinanImg,
  rajaprasannaImg,
} from "../assets/images";

import {
  sheshathImg,
  sanjayImg,
  kowshikImg,
  karthiImg,
  aadhiImg,
  viwinImg,
  dineshImg,
  salmanImg,
  harishImg,
  vishalImg,
} from "../assets/images";

import {
  keerthanaImg,
  priyankaImg,
  ajayImg,
  lakshmanImg,
  nithishImg,
  aswinImg,
} from "../assets/images";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/our-team", label: "Our Team" },
  { to: "/faqs", label: "FAQs" },
];

export const eventsContent = {
  title: "Exciting Events",
  description:
    "Join us to experience engineering excellence at SAIMECH'24 - MECHAVERSE! Engage in events like cutting-edge workshops with hands-on demonstrations, Enthralling events of Tech Titans, Entertaining events of Techno fest along with immersive activites.",
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
    "Sri Sai Ram Engineering College, Chennai, established in the year 1995 by MJF. Ln. Leo Muthu, Chairman of Sapthagiri Educational Trust, is a non-profitable and a non-minority institution.  The Department of Mechanical Engineering, accredited by the NBA(4 times) is backed by a well experienced teaching professionals, state of the art laboratories and actively participating in societies such as SAE, IEEE, IEI, ISHRAE and IWS, etc.,. The SEC Motorsports includes The Rocketeer Racing, Team Evega Racing, Team Luaskart, Team Agrosters & Revival Racing.",
  linkTo: "/about",
  linkLabel: "Learn More",
};

export const quickLinks = {
  title: "Quick Links",
  links: [
    { name: "Home", linkTo: "/" },
    { name: "About Us", linkTo: "/about" },
    { name: "Events", linkTo: "/events" },
    { name: "Our Team", linkTo: "/our-team" },
    { name: "FAQs", linkTo: "/faqs" },
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
    title: "SDG Awarness",
    logo: sdgLogo,
    linkTo: "/events/13",
    linkLabel: "View Details",
  },

  {
    id: 14,
    title: "Surprise Event",
    logo: surpriseEventLogo,
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
  logo: colloquiumTalkLogo,
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
    "Selection will be on a first-come, first-served basis.",
    "Teams will have a presentation duration of 5 minutes and Q&A session of 3 minutes.",
    "Participants must send their presentation PPT on or before 15.09.2024 to the mail ID: mechaverse@sairam.edu.in.",
    "Participants must assemble in the CAD Laboratory on time.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Sudarshan R",
      img: sudarshan_1,
      phoneNumber: "+91 80566 05946",
    },
    {
      name: "Meganathan D",
      img: meganathan_1,
      phoneNumber: "+91 63831 64562",
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
    "Teams can have a maximum of two members.",
    "Selection will be on a first-come, first-served basis.",
    "Question type is multiple choice.",
    "Number of rounds: 2.",
    "Each question will have a 30-second time limit for answering.",
    "Shortlisted teams will advance for Round 2.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Shakthivel R",
      img: sakthivel_2,
      phoneNumber: "+91 88254 57499",
    },

    {
      name: "Srivari Balaji G",
      img: srivari_2,
      phoneNumber: "+91 98401 61202",
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
    "Selection will be on a first-come, first-served basis.",
    "Duration of the competition will be 1 hour.",
    "The modeling should be done in SolidWorks software in the system provided to you.",
    "Top 3 teams will be awarded based on uniqueness, duration, and product feasibility.",
    "Designing should be done on the model given.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Lokjith NSR",
      img: lokjith_3,
      phoneNumber: "+91 98401 98984",
    },
    {
      name: "Santhosh Chakravarthy E",
      img: santhosh_3,
      phoneNumber: "+91 93427 52881",
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
    "Teams can have a maximum of two members. Selection will be on a first-come, first-served basis.",
    "Each team will have a specific timeframe of 30 minutes to complete their task.",
    "The material to be machined will be supplied.",
    "All participants are required to wear leather shoes.",
    "Goggles and gloves will be supplied to all participants.",
    "Participants will be given a specific design and set of dimensions.",
    "Judging will be based on accuracy, surface finish, and time management.",
  ],

  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Avinash S",
      img: avinash_4,
      phoneNumber: "+91 99415 92128",
    },
    {
      name: "Sathappan RM",
      img: sathappan_4,
      phoneNumber: "+91 86100 33625",
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
    "Selection will be on a first-come, first-served basis.",
    "The team should consist of at least 2 players and no more than 3 players.",
    "Each team must choose 7 players comprising 2 batsmen, 2 bowlers, 2 all-rounders, and 1 wicket keeper.",
    "There will be three tiers - Legendary, Epic, and Rare, with points varying according to each tier.",
    "The judges decisions are final.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Aakash A",
      img: aakash_5,
      phoneNumber: "+91 81480 10430",
    },
    {
      name: "Haresh Raj DJ",
      img: haresh_5,
      phoneNumber: "+91 73977 55505",
    },

    {
      name: "Jayasurya K",
      img: jayasurya_5,
      phoneNumber: "+91 63856 69322",
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
    "Selection will be on a first-come, first-served basis.",
    "Every team must consist of two members.",
    "The event takes place over 2 rounds.",
    "Teams eligible for the second round will be determined by the number of points scored in the first round.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Jayanthan D",
      img: jayanthan_6,
      phoneNumber: "+91 70924 95863",
    },
    {
      name: "Durga Devi G",
      img: durga_6,
      // phoneNumber: "+91 63697 36949",
    },
  ],
};

export const senateSparEvent = {
  id: 7,
  title: "Senate Spar: The Big Debate",
  logo: senateSparLogo,
  description: `Get ready for the battle of wits and ideas as the highest minds come together for a thrilling house of representative competition! This event promises to be an electrifying exchange of arguments, counterarguments, and perspectives on thought-provoking topics.`,
  guidelines: [
    "Teams of two or three students will be permitted. Selection will be on a first-come, first-served basis.",
    "Each team will represent a different state.",
    "States assigned to each team will be announced two days prior to the event.",
    "Each team should introduce their state's history, culture, and unique features within one minute.",
    "The debate will start after the introduction, covering topics like current affairs, state politics, disaster management, women empowerment, tourism, and job opportunities in the states.",
    "The judges decisions are final and no appeals will be considered.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Asmathi JS",
      img: asmathi_7,
      // phoneNumber: "+91 89404 33994",
    },
    {
      name: "Madan K",
      img: madhan_7,
      phoneNumber: "+91 75399 18920",
    },
    {
      name: "Merlin Priya J",
      img: merlin_7,
      // phoneNumber: "+91 91502 57608",
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
    "The event only requires individual participation.",
    "Selection will be on a first-come, first-served basis.",
    "A total of 5 rounds will be held, with the first four rounds consisting of 15 members per game.",
    "Players in each of the 4 games will be considered as finalists.",
    "Emotes and skills will not be permitted during the game.",
    "The Importance Punch and Lifting emotes are strictly prohibited.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Haribabu S",
      img: haribabu_8,
      phoneNumber: "+91 90254 08596",
    },
    {
      name: "Vigneshwar P",
      img: vigneshwar_8,
      phoneNumber: "+91 93459 62776",
    },
  ],
};

export const rcDaCorsaEvent = {
  id: 9,
  title: "RC Da Corsa",
  logo: rcDaCorsaLogo,
  description: `RC Racing for cars specifically involves racing remote-controlled vehicles designed to mimic full-sized cars. These RC cars come in various types, including on-road cars for smooth surfaces and off-road cars for dirt tracks, grass, and other rugged terrains.\n\nRC car racing requires skillful handling as drivers must maneuver their cars through tight turns, high-speed straights, and sometimes over jumps, all while competing against other racers. The cars are powered by electric motors offering different speeds and performance characteristics.\n\nRaces can range from short sprints to longer endurance events, with some competitions incorporating time trials or knockout rounds.`,
  guidelines: [
    "Teams can have a minimum of one and a maximum of two members.",
    "Selection will be on a first-come, first-served basis.",
    "Participants must bring their own RC cars, whose initial inspection will be done to race in the dirt track.",
    "A maximum of 2 penalties is permitted, after which the team will be disqualified.",
    "Note: Participants are responsible in case of any damage to RC cars.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Mohan Raj M",
      img: mohanraj_9,
      phoneNumber: "+91 93630 48463",
    },
    {
      name: "Saravanan V",
      img: saravanan_9,
      phoneNumber: "+91 89393 48707",
    },
  ],
};

export const pixelPerfectEvent = {
  id: 10,
  title: "Pixel Perfect",
  logo: pixelPerfectLogo,
  description:
    "Join us for 'Pixel Perfect', a premier photography contest where creativity meets precision. This event invites photographers of all skill levels to capture the essence of life through their lenses. Whether it's a breathtaking landscape, an evocative portrait, or a striking abstract, we're looking for images that tell compelling stories. Participants can showcase their talents, compete for exciting prizes, and receive feedback from a panel of esteemed judges. Unleash your imagination, sharpen your focus, and make every pixel count in this celebration of visual artistry!",

  guidelines: [
    "Participants have to upload a photograph for the first round with the theme 'Urban Life' in the Google Form only.",
    "The top 20 are selected for the second round, which will be intimated through mail along with the theme for the second round.",
    "Participants are instructed not to take photos inside the college premises.",
    "Note: Pixel Perfect is an open event to both Tech Titans and Techno Fun Fest participants.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Sakthivel R",
      img: sakthivel_10,
      phoneNumber: "+91 94426 18495",
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
    "Individual participation is only expected.",
    "Selection will be on a first-come, first-served basis.",
    "After the workshop, an individual quiz will be conducted to test your knowledge.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Arun M",
      img: arun_11,
      phoneNumber: "+91 72009 28706",
    },
    {
      name: "Srivatsan Babu",
      img: srivatsan_11,
      phoneNumber: "+91 63804 21788",
    },
    {
      name: "Ashvin EJ",
      img: ashwin_11,
      phoneNumber: "+91 63745 21686",
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
    "Selection will be on a first-come, first-served basis.",
    "Participants are chosen on a first-come, first-served basis.",
    "Participants are asked to complete the feedback form provided.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Gohul RK",
      img: gohul_12,
      phoneNumber: "+91 86376 51338",
    },
    {
      name: "Jeyasurya B",
      img: jayasurya_12,
      phoneNumber: "+91 63848 95174",
    },
    {
      name: "Prasanna N",
      img: prasanna_12,
      phoneNumber: "+91 97913 95384",
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
    "Selection will be on a first-come, first-served basis.",
    "Engineering students from any discipline and any year can participate.",
    "Participants must adhere to the time limits of 6 minutes.",
    "General knowledge and basic knowledge on SDG goals are required.",
    "Smartphones and other electronic gadgets are prohibited.",
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Aravindh M",
      img: aravindh_14,
      phoneNumber: "+91 94436 65209",
    },
  ],
  // hideNote: true,
  // hideRegistration: true,
};

export const vrCricketEvent = {
  id: 14,
  title: "Surprise Event",
  logo: surpriseEventLogo,
  description:
    "Get ready to experience the thrill of the unknown! As part of our symposium, we're bringing you a surprise event that promises to be as exciting as it is mysterious. Expect the unexpected and prepare yourself for a challenge that will keep you on your toes!",
  venue: "",
  timing: "",
  hideNote: true,
  hideRegistration: true,

  // coordinators: [
  //   {
  //     name: "Roshan JS",
  //     img: roshan_13,
  //     phoneNumber: "+91 96267 12389",
  //   },
  // ],
};

export const aboutClg = {
  title: "Our College",
  img: clgImg,
  imgAlt: "college img",
  imgWidth: 500,
  description:
    "Sri Sai Ram Engineering College, Chennai, established in the year 1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, a non-profitable and a non-minority institution. A well defined vision, highly committed mission and a dedicated leadership facilitate Sri Sai Ram Engineering College to be in the best of educational institutions in the country. The institution is situated in a sprawling campus with architecturally and aesthetically designed buildings, blocks, stadiums, auditoriums, hostels, gymnasium and the sports grounds. The institution is affiliated to Anna University and approved by the All India Council for Technical Education (AICTE), New Delhi.",
};

export const aboutSecMotorSports = {
  title: "SEC Motorsports",
  img: secMotorsportsImg,
  imgAlt: "SecMotorsports img",
  imgWidth: 500,
  description:
    "SEC Motorsports is a club from the Mechanical Engineering Department of Sri Sai Ram Engineering College. This club is the hub of all motorsport's events under one banner. This includes The Rocketeer Racing, Team Evega Racing, Team Luaskart, Team Agrosters, Racing Rois, Green Pyora, Black Squad and Revival Racing those take part in various National Level Events. These teams are the club's pride as they have won various prestigious awards under different categories in different core events and also got All India Ranking (AIR). SEC Motorsports encourages students to enroll, get hands on experience and gain knowledge on recent automotive and manufacturing technologies, starts from design, modelling, prototyping and fabrication.",

  linkTo: "https://www.instagram.com/sec_motorsports/",
};

export const aboutDepartment = {
  title: "Our Department",
  img: departmentImg,
  imgAlt: "department img",
  imgWidth: 500,
  description:
    "Established in the year 1995, the Department of Mechanical Engineering has excelled in its infrastructural facilities keeping pace with the latest development in technologies. The Department is accredited(4 times) by the National board of accreditation and is backed by professionally experienced and highly qualified faculty and supporting staff. More than 350 students have enrolled in the Mechanical Engineering branch. The Department has well developed laboratories equipped with latest equipments. Professional societies like Society of Automotive Engineers (SAE) and the Association of Mechanical Engineering are regularly conducting seminars, workshops and guest lectures by eminent personalities in various streams of mechanical engineering for making the students Industry Ready.  Our Department received AICTE-CII industry linked institutional award in the year 2015 and 2020.",
};

export const motorSportsImages = [
  {
    img: img_1,
    imgAlt: "img-1",
  },
  {
    img: img_2,
    imgAlt: "img-2",
  },
  {
    img: img_3,
    imgAlt: "img-3",
  },
  {
    img: img_4,
    imgAlt: "img-4",
  },
  {
    img: img_5,
    imgAlt: "img-5",
  },
  {
    img: img_6,
    imgAlt: "img-6",
  },
  {
    img: img_7,
    imgAlt: "img-7",
  },
  {
    img: img_8,
    imgAlt: "img-8",
  },
];

export const keyPersonsProfiles = [
  {
    img: ceoImg,
    imgAlt: "ceoSirImg",
    name: "Dr. Sai Prakash Leomuthu",
    year: `Chairman & CEO - Sairam Institutions`,
    linkedIn: "https://www.linkedin.com/in/sairamceo/",
  },

  {
    img: principalImg,
    imgAlt: "principalSirImg",
    name: "Dr. J. Raja",
    year: "Principal",
    linkedIn: "https://www.linkedin.com/in/raja-j-32b44164/",
  },
  {
    img: rpImg,
    imgAlt: "rpSirImg",
    name: "Dr. A. Rajendra Prasad",
    year: "Dean of Student Affairs",
    linkedIn: "https://www.linkedin.com/in/arprasad225/",
  },
  {
    img: hodImg,
    imgAlt: "hodSirImg",
    name: "Dr. B. Vijaya Ramnath",
    year: "Head of the Department",
    linkedIn: "https://www.linkedin.com/in/dr-b-vijaya-ramnath-5bb11542/",
  },
];

export const staffCoordinatorsProfiles = [
  {
    img: parswajinanImg,
    imgAlt: "parswajinanSirImg",
    name: "Dr. C. Parswajinan",
    year: "Associate Professor",
    linkedIn: "https://www.linkedin.com/in/parswajinan-c-163875143/",
  },

  {
    img: rajaprasannaImg,
    imgAlt: "rajaprasannaSirImg",
    name: "Mr. R. Rajaprasanna",
    year: "Assistant Professor",
    linkedIn:
      "https://www.linkedin.com/in/ramanujam-rajaprasanna/?originalSubdomain=in",
  },
];

export const mediaTeamProfiles = [
  {
    id: 1,
    img: sheshathImg,
    imgAlt: "sheshathImg",
    name: "Sheshath P",
    // year: "Mech - Final Year",
    linkedIn: "https://www.linkedin.com/in/sheshath-p-419774288/",
  },

  {
    id: 2,
    img: sanjayImg,
    imgAlt: "sanjayImg",
    name: "Sanjay K",
    // year: "Mech - Final Year",
    linkedIn: "https://www.linkedin.com/in/sanjay-k-73b43731b/",
  },

  {
    id: 3,
    img: kowshikImg,
    imgAlt: "kowshikImg",
    name: "Kowshik K",
    // year: "Mech - Third Year",
    linkedIn: "https://www.linkedin.com/in/kowshik-sk-251881247/",
  },

  {
    id: 4,
    img: karthiImg,
    imgAlt: "karthiImg",
    name: "Karthick Raja V",
    // year: "Mech - Third Year",
    linkedIn: "https://www.linkedin.com/in/karthick-raja-427294257/",
  },

  {
    id: 5,
    img: aadhiImg,
    imgAlt: "aadhiImg",
    name: "Arul Adithan R",
    // year: "Mech - Third Year",
    linkedIn: "https://www.linkedin.com/in/arul-adithan-r-336167257/",
  },

  {
    id: 6,
    img: viwinImg,
    imgAlt: "viwinImg",
    name: "Viwin M",
    // year: "Mech - Third Year",
    linkedIn: "https://www.linkedin.com/in/viwin-baskaran-b575aa25b/",
  },

  {
    id: 7,
    img: dineshImg,
    imgAlt: "dineshImg",
    name: "Dinesh D",
    // year: "Mech - Second Year",
    linkedIn: "https://www.linkedin.com/in/dinesh1306/",
  },

  {
    id: 8,
    img: salmanImg,
    imgAlt: "salmanImg",
    name: "Salman L",
    // year: "Mech - Second Year",
    linkedIn: "https://www.linkedin.com/in/salman-l-0163412a2/",
  },

  // {
  //   id: 9,
  //   img: sudarshanImg,
  //   imgAlt: "sudarshanImg",
  //   name: "Sudarshan R",
  //   year: "Mech - Final Year",
  //   linkedIn: "https://www.linkedin.com/in/sudarshan-r-01b532288/",
  // },

  {
    id: 9,
    img: harishImg,
    imgAlt: "harishImg",
    name: "Harish A",
    // year: "Mech - Third Year",
    linkedIn: "https://www.linkedin.com/in/harish-a-787506257/",
  },

  {
    id: 10,
    img: vishalImg,
    imgAlt: "vishalImg",
    name: "Vishal VB",
    // year: "Mech - Second Year",
    linkedIn: "https://www.linkedin.com/in/vb-vishal-726305295/",
  },
];

export const studentCoordinatorsProfiles = [
  {
    id: 1,
    img: keerthanaImg,
    imgAlt: "keerthanaImg",
    name: "Sakthi Keerthana MH",
    year: "President",
    linkedIn: "https://www.linkedin.com/in/sakthi-keerthana-m-h-732b17271/",
  },

  {
    id: 2,
    img: priyankaImg,
    imgAlt: "priyankaImg",
    name: "Priyanka AN",
    year: "Vice President",
    linkedIn: "https://www.linkedin.com/in/priyanka-a-n-59760a323/",
  },

  {
    id: 3,
    img: ajayImg,
    imgAlt: "ajayImg",
    name: "Ajay Kumar A",
    year: "Secretary",
    linkedIn: "https://www.linkedin.com/in/aajaykumar07/",
  },

  {
    id: 4,
    img: lakshmanImg,
    imgAlt: "lakshmanImg",
    name: "Lakshman G",
    year: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/lakshman-gopalakrishnan-561270229/",
  },

  {
    id: 5,
    img: nithishImg,
    imgAlt: "nithishImg",
    name: "Nithish Anand A",
    year: "Outreach",
    linkedIn: "https://www.linkedin.com/in/nithish-anand-2a144821b/",
  },
];

export const webDeveloperProfile = [
  {
    id: 1,
    img: aswinImg,
    imgAlt: "aswinImg",
    name: "Aswin E",
    // year: "Mech- Third Year",
    linkedIn: "https://www.linkedin.com/in/aswin04/",
  },
];

export const faqContent = [
  {
    question: "What is the dress code for the participants?",
    answer:
      "Formal Dress Code. Jeans, T-shirts, Casuals are not allowed (both boys and girls).",
  },

  {
    question: "Is transport facilities available for participants?",
    answer:
      "College Bus: Boarding point - Viveks Showroom, Rajaji road, West Tambaram at 8:00 A.M.",
  },

  {
    question: "When and where will the events be conducted?",
    answer:
      "Events will be conducted as per the program agenda will be given on the day of symposium",
  },
  {
    question: "Will lunch be provided to the students?",
    answer: "Yes, lunch will be provided for all participants.",
  },
  {
    question: "Is there any registration fee to participate in the events?",
    answer: "There is no entry fee.",
  },
  {
    question: "I have more questions regarding the event.",
    answer:
      "You can reach our event coordinator, the contact information is provided in the respective events page",
  },
  {
    question: "Can I participate in more than one event?",
    answer: "No, a participant should register for only one event.",
  },
];
