function Skill(props) {
  return (
    <div
      className={
        "bg-white p-8 flex flex-col items-center space-y-6 rounded-md shadow-primary border-2 border-gray-100 " +
        (props.isLast ? " md:col-span-2 md:mx-40 lg:mx-0 lg:col-span-1" : "")
      }
    >
      {props.icon}
      <h3 className="text-xl font-medium">{props.title}</h3>
      <p className="text-lg text-brand-gray text-center text-balance">
        {props.description}
      </p>
      <h4 className="text-xl text-third">Technologies</h4>

      {props.technologies.map((technologyItem, index) => (
        <div className="flex items-center space-y-4" key={index}>
          <img src={technologyItem.icon} className="h-8 mb-0"></img>
          <p>&nbsp;{technologyItem.name}</p>
        </div>
      ))}
      <div className="h-2.5"></div>
    </div>
  );
}

export default Skill;
