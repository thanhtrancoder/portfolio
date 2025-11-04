import logo from "../assets/images/JT-logo.png";
import { useState, useEffect } from "react";
import Links from "../data/Links";
import Avatar from "../assets/images/Avatar.png";

function Header(props) {
  const [open, setOpen] = useState(false);

  const handleScroll = (event, refName) => {
    setOpen(false);

    event.preventDefault();
    props?.[refName]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed h-screen z-50 bg-white w-full top-0 overscroll-none overflow-auto">
          <div className="m-5 grid grid-cols-12">
            <a href={Links.portfolio} className="cursor-pointer">
              <img src={Avatar} alt="logo" className="w-16 col-span-2" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-end md:hidden col-span-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="space-y-5 col-span-12 mt-8 font-bold text-center text-lg">
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "aboutRef");
                  }}
                >
                  About me
                </a>
              </li>
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "skillsRef");
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "projectsRef");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "experienceRef");
                  }}
                >
                  Experience
                </a>
              </li>
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "achievementsRef");
                  }}
                >
                  Achievements
                </a>
              </li>
              <li className="hover:text-primary-hover cursor-pointer">
                <a
                  href="#"
                  onClick={(event) => {
                    handleScroll(event, "contactRef");
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={Links.github}
                  target="_blank"
                  className="flex justify-center"
                >
                  <svg
                    className="w-9 h-9 text-primary hover:text-white hover:bg-primary-hover rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Menu */}
      <div className="md:mx-8 lg:mx-16">
        <div className="m-5 grid grid-cols-12 mb-0">
          <a href={Links.portfolio} className="cursor-pointer">
            <img src={Avatar} alt="logo" className="w-16 col-span-2" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-end md:hidden col-span-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center justify-end space-x-3 col-span-10 text-lg font-medium">
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "aboutRef");
                }}
              >
                About me
              </a>
            </li>
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "skillsRef");
                }}
              >
                Skills
              </a>
            </li>
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "projectsRef");
                }}
              >
                Projects
              </a>
            </li>
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "experienceRef");
                }}
              >
                Experience
              </a>
            </li>
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "achievementsRef");
                }}
              >
                Achievements
              </a>
            </li>
            <li className="hover:text-primary-hover cursor-pointer">
              <a
                href="#"
                onClick={(event) => {
                  handleScroll(event, "contactRef");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a href={Links.github} target="_blank">
                <svg
                  className="w-9 h-9 text-primary hover:text-white hover:bg-primary-hover rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
