

const frontendSkills = [
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "SASS/SCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
];

const backendSkills = [
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "RESTful APIs", img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-api-web-flaticons-flat-flat-icons.png" },
  { name: "Mongoose", img: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      {/* Frontend */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">FRONTEND</h3>
        <div className="flex flex-wrap gap-6 items-center">
          {frontendSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-28 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-600 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">BACKEND</h3>
        <div className="flex flex-wrap gap-6 items-center">
          {backendSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-28 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-600 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
