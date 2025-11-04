function Experience(props) {
  return (
    <div className="flex space-x-4 mb-10">
      {props.isFlip ? (
        <>
          <div className="text-end text-balance">
            <h2 className="text-xl font-medium text-third mb-2">
              {props.title}
            </h2>
            <p className="text-lg text-brand-gray">{props.description}</p>
          </div>
          <div className="bg-sixth rounded-full p-2 w-18 h-18 text-2xl font-bold flex items-center justify-center">
            <p>{props.year}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-sixth rounded-full p-2 w-18 h-18 text-2xl font-bold flex items-center justify-center">
            <p>{props.year}</p>
          </div>
          <div className="text-balance">
            <h2 className="text-xl font-medium text-third mb-2">
              {props.title}
            </h2>
            <p className="text-lg text-brand-gray">{props.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Experience;
