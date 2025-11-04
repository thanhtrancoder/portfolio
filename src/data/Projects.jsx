import clockDisplay from "../assets/images/clock-display.jpg";
import portfolioFigma from "../assets/images/portfolio-figma.jpg";
import domainPro from "../assets/images/domain-pro-screen.jpg";

const Projects = [
  {
    image: domainPro,
    title: "Domain Pro",
    description:
      "Domain Pro is a website that allows users to register and manage their domain names. It features integrated login with Google, payment via Momo, and email notifications.",
    link: [
      {
        name: "Visit website",
        href: "https://domainpro.thanhtrancoder.com",
      },
      {
        name: "View frontend code",
        href: "https://github.com/thanhtrancoder/domain-pro-fe-user",
      },
      {
        name: "View backend code",
        href: "https://github.com/thanhtrancoder/domain-pro-be",
      },
    ],
  },
  {
    image: portfolioFigma,
    title: "Portfolio Figma",
    description: "Portfolio figma design.",
    link: [
      {
        name: "Open figma",
        href: "https://www.figma.com/design/BmtqxD2Ha1YelbHmjFevt3/Portfolio?node-id=0-1&m=dev&t=iGNPfoeMjttV2Lbb-1",
      },
    ],
  },
  {
    image: clockDisplay,
    title: "Clock Display Extension",
    description: "Display clock when opening a new tab.",
    link: [
      {
        name: "View code",
        href: "https://github.com/thanhtrancoder/clock-display-extension",
      },
    ],
  },
];

export default Projects;
