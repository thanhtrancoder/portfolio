const Experiences = [
  {
    title: ".NET Programming Intern",
    description: (
      <div>
        <p className="mb-2">GSOFT - Global Software Joint Stock Company</p>
        <ul className="list-disc ml-4 space-y-2">
          <li>
            Developed RESTful APIs using ASP.NET Core and implemented business
            logic.
          </li>
          <li>
            Worked with Entity Framework Core and SQL Server for data
            operations.
          </li>
          <li>
            Fixed assigned bugs, participated in code reviews to ensure
            stability.
          </li>
        </ul>
      </div>
    ),
    year: "2022",
  },
  {
    title: "Backend Developer part-time",
    description: (
      <div>
        <p className="mb-2">Wisdom Engineering & Business Solutions</p>
        <ul className="list-disc space-y-2 ml-4 md:hidden">
          <li className="">
            Contributed to functional requirement analysis and database design.
          </li>
          <li>
            Built APIs using Spring Boot with JPA/Hibernate and documented
            endpoints.
          </li>
          <li>
            Integrated APIs with the frontend and optimized performance through
            testing.
          </li>
          <li>
            Configured a self-hosted environment on Ubuntu using Nginx and
            Docker.
          </li>
        </ul>
        <ul
          className="list-disc mr-4 space-y-2 text-right hidden md:block"
          dir="rtl"
        >
          <li className="">
            Contributed to functional requirement analysis and database design
          </li>
          <li>
            Built APIs using Spring Boot with JPA/Hibernate and documented
            endpoints
          </li>
          <li>
            Integrated APIs with the frontend and optimized performance through
            testing
          </li>
          <li>
            Configured a self-hosted environment on Ubuntu using Nginx and
            Docker
          </li>
        </ul>
      </div>
    ),
    year: "2024",
  },
  {
    title: "Graduated - HCMUTE",
    description: (
      <div>
        <p className="mb-2">
          Ho Chi Minh City University of Technology and Education
        </p>
        <ul className="list-disc ml-4 space-y-2">
          <li>Graduated with a degree in information technology.</li>
          <li>
            Relevant Coursework: Data Structures & Algorithms, Web Programming,
            Database Systems, Object-Oriented Programming, Software Engineering.
          </li>
          <li>CGPA: 7.48/10</li>
        </ul>
      </div>
    ),
    year: "2025",
  },
];

export default Experiences;
