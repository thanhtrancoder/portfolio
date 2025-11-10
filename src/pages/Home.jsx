import avatar from "../assets/images/profile.jpg";
import Skill from "../components/Skill";
import Skills from "../data/Skills";
import Project from "../components/Project";
import Projects from "../data/Projects";
import Experience from "../components/Experience";
import Experiences from "../data/Experiences";
import Achievement from "../components/Achievement";
import Achievements from "../data/Achievements";
import Links from "../data/Links";
import { useState, Fragment } from "react";
import thanhtrancoderImage from "../assets/images/thanhtrancoder_251007_square.jpg";

function Home(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notiId, setNotiId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleScroll = (event, refName) => {
    event.preventDefault();
    props?.[refName]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const addNotification = (message, type = "error") => {
    const newId = notiId;
    setNotiId((prevId) => prevId + 1);

    setNotifications((prev) => [
      ...prev,
      {
        id: newId,
        message,
        type,
        isRemoving: false,
      },
    ]);

    // Đặt thời gian để bắt đầu hiệu ứng mờ dần
    setTimeout(() => {
      // Đánh dấu thông báo là đang bị xóa
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === newId
            ? { ...notification, isRemoving: true }
            : notification
        )
      );

      // Sau khi hoàn thành hiệu ứng mờ dần, xóa thông báo
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((notification) => notification.id !== newId)
        );
      }, 300); // Thời gian khớp với animation fadeOut
    }, 5000);
  };

  const handleContact = async () => {
    const body = {
      email: email,
      name: name,
      message: message,
    };

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/api/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      let errorBody;
      if (!response.ok) {
        try {
          errorBody = await response.json();
        } catch {
          errorBody = await response.text();
        }
        throw new Error(errorBody.message);
      }

      const data = await response.json();
      setResult(data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (err) {
      addNotification(err.message);
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      {notifications.length > 0 && (
        <div className="fixed top-10 right-5 z-50 notification-container">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item bg-red-500 w-fit p-4 text-white flex rounded-lg items-center gap-2 ${
                notification.isRemoving ? "removing" : "slide-in-right"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              {notification.message}
            </div>
          ))}
        </div>
      )}

      {/* About me */}
      <div className="px-5" ref={props?.aboutRef}>
        <div className="mt-18 text-center">
          <h1 className="text-5xl font-bold">Thanh Tran Coder</h1>
          <p className="text-xl mt-5 lg:px-70 lg:mt-11 text-balance">
            Hi, I'm Thanh, a Fresher Web Developer driven by a love for creating
            clean, user-friendly web experiences. I've dedicated my time to
            building projects that solve real-world problems.
          </p>
          <br></br>
          <p className="text-xl lg:px-70 text-balance">
            I am now eager to apply my skills in a professional setting, learn
            from experienced mentors, and contribute to a dynamic team. Explore
            my projects below, or let's connect!
          </p>
          <div className="flex justify-center mt-8 lg:mt-14">
            <img
              className="aspect-square object-cover h-40 rounded-full lg:h-70"
              src={thanhtrancoderImage}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div ref={props?.skillsRef} className="mt-16 px-5">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full h-24 bg-primary rounded-md lg:h-80 md:h-60">
            <div className="relative md:static h-12 lg:h-40 md:h-30 flex justify-center items-end lg:items-center">
              <h1 className="absolute -bottom-16 md:static text-white text-4xl font-medium ">
                Skills
              </h1>
            </div>
          </div>
          <div className="pt-46 md:pt-40 space-y-18 md:space-y-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-x-10 md:gap-y-20 px-10">
            {/* {Skills.map((skillItem, index) => (
              <Skill key={index} {...skillItem}></Skill>
            ))} */}
            {Skills.map((skillItem, index, arr) => (
              <Skill
                key={index}
                {...skillItem}
                isLast={index === arr.length - 1} // ← truyền prop để biết là cuối cùng
              />
            ))}
          </div>
          {/* <div className="w-full flex justify-center">
            <a
              href={Links?.cv}
              target="_blank"
              className="mt-18 bg-fourth text-white px-6 py-3 rounded-sm hover:bg-fourth-hover transition-all duration-300 cursor-pointer"
            >
              Here is my CV
            </a>
          </div> */}
        </div>
      </div>

      {/* Projects */}
      <div ref={props?.projectsRef} className="mt-16 text-center ">
        <h1 className="text-4xl font-medium">Projects</h1>
        <p className="mt-8 text-xl text-brand-gray">
          Have a look at some of the rolled-out projects I'm proud of:
        </p>
        {Projects.map((projectItem, index) => (
          <Project key={index} {...projectItem}></Project>
        ))}
      </div>

      {/* Interested */}
      <div
        ref={props?.contactRef}
        className="mt-18 bg-gradient-to-br from-fourth to-primary text-center px-5"
      >
        <h1 className="text-white text-4xl text-balance font-medium pt-30">
          Interested in working together?
        </h1>
        <p className="mt-8 text-white text-balance text-xl">
          You can trust your project in my expert hands. I'm always eager to do
          something nice and complicated. Let's discuss all the features in a
          private conversation.
        </p>
        <button
          onClick={(event) => handleScroll(event, "contactRef")}
          className="text-primary bg-white px-6 py-3 rounded-sm font-medium mt-8 mb-21 hover:bg-gray-200 cursor-pointer transition-all duration-300"
        >
          Contact me
        </button>
      </div>

      {/* Experience */}
      <div className="mt-18 mx-5" ref={props?.experienceRef}>
        <h1 className="text-center text-4xl font-medium">Experience</h1>
        <div className="mt-18 space-y-14 md:hidden">
          {Experiences.map((experienceItem, index) => (
            <div className="mx-10" key={index}>
              <Experience {...experienceItem} />
            </div>
          ))}
        </div>
        <div className="hidden md:flex md:justify-center mt-16">
          <div className="bg-fourth h-4 rounded-full w-4"></div>
        </div>

        <div className="hidden md:grid md:grid-cols-3">
          {Experiences.map((experienceItem, index) =>
            index % 2 === 0 ? (
              <Fragment key={index} className="h-fit">
                <div></div>
                <div className="h-full">
                  <div className="flex justify-center h-full">
                    <div className="h-full w-1 bg-fourth"></div>
                    <div className="absolute grid grid-cols-2">
                      <div className="mt-7 flex justify-end">
                        <div className="bg-fourth h-3 w-1.5 rounded-l-full"></div>
                      </div>
                      <div className="flex mt-7">
                        <div className="bg-fourth h-3 w-1.5 rounded-r-full"></div>
                        <div className="h-1 md:w-25 lg:w-36 bg-fourth mt-1 transition-discrete duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Experience
                  key={index}
                  {...experienceItem}
                  isFlip={index % 2 !== 0}
                />
              </Fragment>
            ) : (
              <Fragment key={index} className="h-fit">
                <Experience
                  key={index}
                  {...experienceItem}
                  isFlip={index % 2 !== 0}
                />
                <div className="h-full">
                  <div className="flex justify-center h-full">
                    <div className="h-full w-1 bg-fourth"></div>
                    <div className="absolute grid grid-cols-2">
                      <div className="flex mt-7">
                        <div className="h-1 md:w-25 lg:w-36 bg-fourth mt-1 transition-discrete duration-300"></div>
                        <div className="bg-fourth h-3 w-1.5 rounded-l-full"></div>
                      </div>
                      <div className="mt-7">
                        <div className="bg-fourth h-3 w-1.5 rounded-r-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </Fragment>
            )
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="md:mb-[500px] lg:mb-[450px]" ref={props?.achievementsRef}>
        <div className="mt-18 relative h-28 px-5 md:mt-0">
          <div className="h-24 bg-fourth rounded-md lg:h-80 md:h-60"></div>
          <h1 className="text-white text-4xl font-medium flex justify-center items-end absolute inset-0">
            Achievements
          </h1>
        </div>
        <div className="md:absolute md:grid md:grid-cols-2 md:gap-12 lg:mx-24 lg:gap-22 md:mx-5">
          {Achievements.map((achievementItem, index) => (
            <Achievement key={index} {...achievementItem}></Achievement>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="relative" ref={props?.contactRef}>
        <div className="md:mt-0 mt-20 mx-5 md:grid md:grid-cols-2 md:gap-11 lg:mx-20 items-center md:mx-10 absolute z-40">
          <div className="bg-white md:h-full border-2 border-gray-100 shadow-primary py-8 px-6 text-center text-balance rounded-md">
            <h1 className="text-4xl font-medium">Contact me</h1>
            <div className="mt-8 text-xl flex justify-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              &nbsp;
              <p className="font-bold">Email:</p>
              &nbsp; */}
              <p className="break-all">thanhtrancoder@gmail.com</p>
            </div>
            <p className="mt-16 text-xl text-brand-gray">
              If you got any questions, please do not hesitate to send me a
              message.
            </p>
          </div>

          <div className="relative">
            {isSuccess && (
              <div className="absolute top-0 left-0 w-full h-full bg-white p-8 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center mb-6 bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 stroke-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-brand-gray text-xl">
                  Thank you for contacting me.
                </p>

                <p className="text-brand-gray text-xl">
                  I will respond as soon as possible.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-center items-center">
                <div className={`flex items-center justify-center`}>
                  <div
                    className={`border-primary h-12 w-12 animate-spin rounded-full border-t-4 border-b-4`}
                  ></div>
                </div>
              </div>
            )}

            <div
              className={
                "rounded-md bg-white mt-10 border-2 border-gray-100 shadow-primary py-9 px-6 md:mt-0 " +
                (isLoading && "pointer-events-none")
              }
            >
              <div className={isLoading ? "opacity-50" : ""}>
                <div className="bg-seventh p-3 rounded-md flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-seventh-hover"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <input
                    className="w-full focus:outline-none text-gray-700"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="bg-seventh p-3 rounded-md flex mt-6 space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-seventh-hover"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    className="w-full focus:outline-none text-gray-700"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="bg-seventh p-3 rounded-md flex mt-6 space-x-1 h-32">
                  <textarea
                    className="w-full focus:outline-none text-gray-700"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <button
                    onClick={handleContact}
                    className="px-6 py-2 cursor-pointer rounded-lg w-full text-white bg-primary hover:bg-primary-hover transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fourth mt-[450px] w-full h-[340px] md:h-[150px] lg:h-[200px] lg:mt-[600px] md:mt-[700px]"></div>
    </>
  );
}

export default Home;
