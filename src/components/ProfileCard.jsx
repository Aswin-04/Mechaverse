import aadhiImg from "../assets/icons/aadhi-Img.jpeg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';

const ProfileCard = ({profile}) => {
  return (
    <div className="profile-card relative font-sans flex flex-col items-center mt-10 w-[320px] pt-6 pb-8 rounded-3xl text-center bg-card backdrop-blur-lg shadow-inner">
      <div className="bg-card mb-4  rounded-full w-[170px] h-[170px] flex items-center justify-center">
        <img src={profile.img} alt={profile.imgAlt}  className="rounded-full w-[160px] h-[160px]"/>
      </div>
      <h3 className="h3-text">{profile.name}</h3>
      <p className="mb-4 text-sm text-white-400">{profile.year}</p>
      <a href={profile.linkedIn} target="_blank">
        <LinkedInIcon sx={{ color: blue[500] }} fontSize="large"/>
      </a>

    </div>
  )
}

export default ProfileCard
