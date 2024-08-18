import Button from "./Button";

const EventCard = ({event}) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-6 border border-white/30 bg-card backdrop-blur-sm">
    <img className="w-full" src={event.logo} alt={event.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center text-hc font-montserrat max-xs:text-lg whitespace-nowrap">{event.title}</div>
    </div>
    <div className="w-[80%] mb-8 mx-auto">
      <Button linkTo={event.linkTo} linkLabel={event.linkLabel}/>
    </div>
  </div>
  );
};

export default EventCard;
