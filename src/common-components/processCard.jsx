const ProcessCard = ({icon, title, description, linkText }) => {
  return (
    <div className="p-8 my-10 bg-white rounded-lg shadow-xl hover:shadow-lg transition duration-300 w-[85%]">
      {/* Icon */}
      <div className="text-5xl mb-8">{icon}</div>
      
      {/* Title */}
      <h3 className=" text-gray-800 text-2xl font-bold mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 my-4">{description}</p>
      
      {/* Link */}
      <a href="#" className="text-gray-800 font-bold group ">
        {linkText}
        <span className="inline-block group-hover:text-blue-500 group-hover:translate-x-2 transition-all ease-in-out duration-300 text-[1.5rem] align-sub">
          {' '} ➔</span>
      </a>
    </div>
  );
};

export default ProcessCard;
