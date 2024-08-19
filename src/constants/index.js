import { eventsImg } from "../assets/images";
import { aboutUsImg } from "../assets/images";

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

