import mysqlIcon from "../assets/icons/mysql-logo-svgrepo-com.svg";
import springIcon from "../assets/icons/icons8-spring-boot-48.png";
import sqlServerIcon from "../assets/icons/sql-server.png";
import mongodbIcon from "../assets/icons/icons8-mongodb-48.png";
import figmaIcon from "../assets/icons/icons8-figma-48.png";
import reactIcon from "../assets/icons/icons8-react-48.png";
import tailwindIcon from "../assets/icons/icons8-tailwind-css-48.png";
import dockerIcon from "../assets/icons/icons8-docker-48.png";
import nginxIcon from "../assets/icons/icons8-nginx-48.png";
import githubIcon from "../assets/icons/icons8-github-48.png";

const Skills = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 stroke-secondary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Back-end Developer",
    description:
      "Develop business logic and back-end system to support the product. I work with RESTful APIs, databases, and security solutions to build a solid foundation for applications.",
    technologies: [
      { icon: springIcon, name: "Spring Boot" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: sqlServerIcon, name: "SQL Server" },
      { icon: mongodbIcon, name: "MongoDB" },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 stroke-secondary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
    title: "Front-end Developer",
    description:
      "Develop user interfaces and interactive logic using HTML, CSS, JS (e.g. React). Ensure responsive design, smooth UX, cross-browser compatibility, and integrate with RESTful APIs.",
    technologies: [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: figmaIcon, name: "Figma" },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 stroke-secondary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    title: "Tooling & Operations",
    description:
      "Develop and maintain deployment pipelines, containerisation and server-management tools. Collaborate with backend and frontend teams to enable seamless integration with platform operations.",
    technologies: [
      { icon: dockerIcon, name: "Docker" },
      { icon: githubIcon, name: "Github" },
      { icon: nginxIcon, name: "Nginx" },
    ],
  },
];

export default Skills;
