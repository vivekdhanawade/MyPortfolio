import { motion } from "framer-motion";
import Image from "../assets/image.png";
import Image2 from "../assets/Image2.png";

const projects = [
  {
    id: 1,
    title: "Adidas Clone",
    desc: "React + Tailwind CSS",
    img: Image,
    url: "https://adidas-nu-red.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Tracker",
    desc: "React + CoinGecko API",
    img: Image2,
    url: "https://crypto-tracker-gamma-cyan.vercel.app/",
  },
  {
    id: 3,
    title: "10 HTML CSS PROJECTS",
    desc: "React + Express + MongoDB",
    img: "https://picsum.photos/400/250?3",
    url: "https://github.com/vivekdhanawade/HTML-CSSPROJECTS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow block"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <span className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium">
                View →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
