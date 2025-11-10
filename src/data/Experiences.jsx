const Experiences = [
  {
    title: "Intern - GSOFT",
    description: (
      <div>
        <p className="mb-2">Global Software Joint Stock Company</p>
        <ul className="list-disc ml-4 space-y-2">
          <li>Participate in developing RESTful APIs using Spring Boot.</li>
          <li>Fix assigned bugs.</li>
        </ul>
      </div>
    ),
    year: "2023",
  },
  {
    title: "Remote - WISDOM",
    description: (
      <div>
        <p className="mb-2">
          Wisdom Engineering and Business Solutions Company
        </p>
        <ul className="list-disc space-y-2 ml-4 md:hidden">
          <li className="">
            Participate in functional design and database development for the
            website.
          </li>
          <li>Developing APIs using Spring Boot for websites.</li>
        </ul>
        <ul
          className="list-disc mr-4 space-y-2 text-right hidden md:block"
          dir="rtl"
        >
          <li className="">
            Participate in functional design and database development for the
            website
          </li>
          <li>Developing APIs using Spring Boot for websites</li>
        </ul>
      </div>
    ),
    year: "2024",
  },
  {
    title: "Graduate - HCMUTE",
    description: (
      <div>
        <p className="mb-2">
          Ho Chi Minh City University of Technology and Education
        </p>
        <ul className="list-disc ml-4 space-y-2">
          <li>
            Graduated from Ho Chi Minh City University of Technology and
            Education.
          </li>
          <li>
            Relevant Coursework: Data Structures & Algorithms, Web Programming,
            Database Systems, Object-Oriented Programming, Software Engineering.
          </li>
          <li>GPA: 7.48/10.00</li>
        </ul>
      </div>
    ),
    year: "2025",
  },
];

export default Experiences;
