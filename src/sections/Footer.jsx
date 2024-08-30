import { Link } from "react-router-dom";
import sairamIcon from "../assets/images/icons/sairam-icon.png";
import { quickLinks } from "../constants/";
import { Mail } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  // sm:px-16 px-8 sm:py-24 py-12
  return (
    <section className="bg-card">
      <footer className="max-container padding-x pt-12 sm:pt-24 pb-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0 wide:justify-around">
          <div className="bg-white w-[160px] h-[56px] rounded lg:self-center ">
            <img
              src={sairamIcon}
              alt="sairam-icon"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-tc font-montserrat text-2xl leading-normal">
              Location
            </h4>

            <div className="mt-2">
              <p className="text-white-400  hover:text-primary transition duration-250 ease-in-out">
                {"📍 "}
                <a
                  href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9606025,80.0563133,17.72z/data=!4m6!3m5!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071!16s%2Fm%2F02ppmyg?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-8"
                >
                  Sri Sai Ram Engineering College, <br />
                  Sai Leo Nagar, West Tambaram <br />
                  Chennai - 600 044 <br />
                  Tamilnadu <br />
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-tc font-montserrat text-2xl leading-normal">
              {quickLinks.title}
            </h4>
            <ul className="font-sans">
              {quickLinks.links.map((link) => (
                <li
                  key={link.name}
                  className="mt-2 text-white-400  hover:text-primary transition duration-250 ease-in-out"
                >
                  <Link to={link.linkTo}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-tc font-montserrat text-2xl leading-normal">
              Reach Us
            </h4>

            <ul className="font-sans">
              <li className="mb-2 flex items-center gap-2 text-white-400 hover:text-primary transition duration-250 ease-in-out">
                <InstagramIcon fontSize="medium" />
                <a
                  href="https://www.instagram.com/sairam_mech?igsh=Zzh1dmMzbjNlYjd3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-8"
                >
                  @sairam_mech
                </a>
              </li>
              <li className="pl-[1px] flex items-center gap-2 text-white-400 hover:text-primary transition duration-250 ease-in-out">
                <Mail size={22} />
                <p>mechavers@sairam.edu.in</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:justify-center md:items-center border padding-x py-8 border-x-0 border-slate-gray/20 md:text-center ">
        <div className="mb-4 text-tc">
          Stay updated with the latest events and more..
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/sairam_mech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-250 ease-in-out"
          >
            <InstagramIcon
              fontSize="large"
              sx={{
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#90e7e9",
                },
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sairam-mechanical-engineering/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-250 ease-in-out"
          >
            <LinkedInIcon
              fontSize="large"
              sx={{
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#90e7e9",
                },
              }}
            />
          </a>
          <a
            href="https://www.youtube.com/@sairammechanicalofficial8424"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-250 ease-in-out"
          >
            <YouTubeIcon
              sx={{
                fontSize: 46,
                paddingBottom: 1,
                transition: "color 0.25s ease-in-out",
                "&:hover": {
                  color: "#90e7e9",
                },
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
