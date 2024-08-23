import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EventCard = ({event}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Store the current scroll position
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(event.linkTo);
  };

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-6 border border-white/30 bg-card backdrop-blur-sm">
    <img src={event.logo} alt={event.title} width={300} height={300} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center text-hc font-montserrat max-xs:text-lg whitespace-nowrap">{event.title}</div>
    </div>
    <div className="w-[80%] mb-8 mx-auto" onClick={handleClick}>
      <Button linkTo={event.linkTo} linkLabel={event.linkLabel}/>
    </div>
  </div>
  );
};

export default EventCard;
