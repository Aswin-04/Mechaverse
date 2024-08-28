import Button from "./Button";

const EventCard = ({event}) => {

  const handleLinkClick = () => {
    // Save the scroll position in sessionStorage
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };

  return (
    <div data-aos="zoom-in"  data-aos-easing="ease-in-out" className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-6 border border-white/30 bg-card backdrop-blur-sm">
    <img src={event.logo} alt={event.title} width={300} height={300} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center text-hc font-montserrat max-xs:text-lg whitespace-nowrap">{event.title}</div>
    </div>
    <div className="w-[80%] mb-8 mx-auto" onClick={handleLinkClick}>
      <Button linkTo={event.linkTo} linkLabel={event.linkLabel}/>
    </div>
  </div>
  );
};

export default EventCard;