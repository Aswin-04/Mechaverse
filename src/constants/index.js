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
} from "../assets/images";

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

export const reachUs =   {
  title: "Reach Us",
  links: [
    { name: "Instagram", linkTo: "mailto:customer@nike.com" },
    { name: "Email", linkTo: "tel:+92554862354" },
  ],
}


export const allEvents = [
  {
    id: 1,
    title: "3D Printing",
    logo: tdPrintingLogo,
    linkTo: "/events/1",
    linkLabel: "View Details",
  },

  {
    id: 2,
    title: "Aqua Strike",
    logo: aquaStrikeLogo,
    linkTo: "/events/2",
    linkLabel: "View Details",
  },

  {
    id: 3,
    title: "Brain Tease",
    logo: brainTeaseLogo,
    linkTo: "/events/3",
    linkLabel: "View Details",
  },

  {
    id: 4,
    title: "Colloquium Talk",
    logo: colloquiumTalkLogo,
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
    title: "Drone Zone",
    logo: droneZoneLogo,
    linkTo: "/events/6",
    linkLabel: "View Details",
  },

  {
    id: 7,
    title: "Machinist",
    logo: machinistLogo,
    linkTo: "/events/7",
    linkLabel: "View Details",
  },

  {
    id: 8,
    title: "Pixel Perfect",
    logo: pixelPerfectLogo,
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
    title: "Shape Shifters",
    logo: shapeShiftersLogo,
    linkTo: "/events/10",
    linkLabel: "View Details",
  },

  {
    id: 11,
    title: "Stumble Guys",
    logo: stumbleGuysLogo,
    linkTo: "/events/11",
    linkLabel: "View Details",
  },

  {
    id: 12,
    title: "Vr Cricket",
    logo: vrCricketLogo,
    linkTo: "/events/12",
    linkLabel: "View Details",

  },

  {
    id: 13,
    title: "Together We Can",
    logo: sdgLogo,
    linkTo: "/events/13",
    linkLabel: "View Details",
  },
];


export const eventsById = allEvents.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, {});

export const tdPrintingWorkshop = {
  id: 1,
  title: "3D Printing Workshop",
  logo: tdPrintingLogo,  // Replace with the correct path to the event logo
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
    "Participation certificates will be provided to all."
  ],
  venue: "",
  timing: "",
  coordinators: [
    {
      name: "Raj Kumar",
      img: aadhiImg
    },
    {
      name: "Praveen Kumar",
      img: aadhiImg
    }
  ]
};

export const brainTeaseEvent = {
  id: 3,
  title: "Brain Tease",
  logo: brainTeaseLogo,
  description: "Ready to test-drive your brain? Buckle up for our automotive quiz! Whether you're a gearhead who dreams in horsepower or someone who thinks a spark plug is a new dance move, this quiz is the pit stop for laughs and learning. Let's see if you can steer clear of wrong answers or if you'll need a tow truck by the end!",

  rules: [
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
      img: aadhiImg
     }
  ]
}


export const droneZoneWorkshop = {
  id: 6,
  title: "Drone Zone Workshop",
  logo: droneZoneLogo, // Add the appropriate logo variable here
  description: "Welcome to Drone Zone, brought to you by LMES (Let's Make Education Simple)! Get ready for an exciting adventure where you'll dive into the world of drones. Today, you'll learn how these amazing flying machines work, build your very own drone, and master the art of flying. With LMES, our expert instructors make complex concepts easy to understand through fun, hands-on activities. Whether you're a beginner or have some experience, Drone Zone is the perfect place to unleash your creativity, learn safely, and have a blast all while LMES simplifies your educational journey!",

  rules: [
    "Each participant is instructed to register through Google Form provided.",
    "First come first served (Only first 30 members are expected).",
    "After the workshop, a quiz will be conducted to test your knowledge.",
    "No team participation is allowed for the quiz, only individual participation.",
    "Winners will be provided with certificates and cash awards.",
    "Participation certificates will be provided to all."
  ],
  venue: "", // Add the venue details here if available
  timing: "", // Add the timing details here if available
  coordinators: [
    {
      name: "Nagaraj", // Adjust if different coordinators are involved
      img: aadhiImg, // Replace with appropriate image variable
    },
    {
      name: "Gopal", // Adjust if different coordinators are involved
      img: aadhiImg, // Replace with appropriate image variable
    }
  ]
}



