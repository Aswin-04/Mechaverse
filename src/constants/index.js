import {eventsImg} from '../assets/images'
import { aboutUsImg } from "../assets/images"


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
} from '../assets/images'

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events"},
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

export const allEvents = [
  
  {
    title: "3D Printing",
    logo: tdPrintingLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Aqua Strike",
    logo: aquaStrikeLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Brain Tease",
    logo: brainTeaseLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Colloquium Talk",
    logo: colloquiumTalkLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Cricket Auction",
    logo: cricketAuctionLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Drone Zone",
    logo: droneZoneLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Machinist",
    logo: machinistLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Pixel Perfect",
    logo: pixelPerfectLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Rc Da Corsa",
    logo: rcDaCorsaLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Shape Shifters",
    logo: shapeShiftersLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Stumble Guys",
    logo: stumbleGuysLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Vr Cricket",
    logo: vrCricketLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },

  {
    title: "Together We Can",
    logo: sdgLogo,
    linkTo : "/events", 
    linkLabel: "View Details",
  },


] 



