import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Button = ({ linkTo, linkLabel }) => {
  return (
    <div className="inline-flex w-full mx-auto mt-4">
      <Link
        to={linkTo}
        className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group"
      >
        {linkLabel}
        <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
      </Link>
    </div>
  );
};

export default Button;
