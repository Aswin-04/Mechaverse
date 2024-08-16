import {eventsImg} from '../assets/images'

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events"},
  { to: "/our-team", label: "Our Team" },
];


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