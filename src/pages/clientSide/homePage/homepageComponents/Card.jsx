import { FaHeart, FaUserCircle, FaUsers } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Card = ({ title, image, description }) => {


  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-1/2">
        <img
          src={image}
          alt="Shoes" className="w-full h-full object-cover" />
      </figure>
      <div className="card-body h-1/3">
        <h2 className="card-title">{title}</h2>
        <p className="">{description.slice(0, 150)}</p>

      </div>
      <div className="border-t-2 text-3xl text-gray-300 flex justify-around py-4">
        <div className="">
          <FaUserCircle />
        </div>

        <div className="flex justify-between gap-3">
          <FaHeart />
          <FaUsers />
        </div>
      </div>
    </div>
  );
};

export default Card;
