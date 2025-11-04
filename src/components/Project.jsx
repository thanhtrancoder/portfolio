import { useRef, useState, useEffect } from "react";

const Project = (props) => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
        console.log(props?.title, " height = ", entry.contentRect.height);
      }
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="px-5 mt-12 md:grid md:grid-cols-2 md:w-full md:gap-8 md:px-10 lg:px-16">
      <div className="flex items-center justify-center">
        <img
          src={props?.image}
          className="w-full rounded-md object-cover"
          style={{ height: `${height}px` }}
        ></img>
      </div>

      <div className="border-b-3 border-third h-fit rounded-md " ref={divRef}>
        <div className="mt-12 border border-gray-100 shadow-primary rounded-md py-16 md:mt-0">
          <h2 className="text-3xl text-third font-medium">{props?.title}</h2>
          <p className="my-8 text-brand-gray text-balance">
            {props?.description}
          </p>
          <div className="flex flex-col space-y-2">
            {props?.link.map((linkItem, index) => (
              <a
                key={index}
                className="text-fifth text-lg hover:underline"
                href={linkItem.href}
                target="_blank"
              >
                {linkItem.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
