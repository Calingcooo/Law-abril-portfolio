import { GoArrowUp } from "react-icons/go";
import { Link } from "react-scroll";

const Arrowup = ({to}) => {
  return (
    <Link to={to} smooth={true} activeClass={"active"} spy={true} offset={-100} duration={500}  className="hover:opacity-70 cursor-pointer bg-[#d1d1d1ee] fixed bottom-20  lg:right-20 md:right-14 max-md:right-14 max-sm:right-5 text-white rounded-full p-3">
        <GoArrowUp className="text-[#000000] lg:text-3xl md:text-2xl sm:text-2xl" />
    </Link>
  )
}

export default Arrowup



