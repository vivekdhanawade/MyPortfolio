import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-[80vh] text-center bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-600">Vivek Dhanawade</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-700 max-w-xxl"
      >
        I’m a Web Developer passionate about building responsive, elegant, and user-friendly web applications.
        Experienced React.js Developer with 4.8 years of expertise in designing and developing scalable, 
maintainable, and high-performance web applications using React, Next.js, TypeScript, and Redux. 
Proficient in modern styling frameworks like Material-UI and Tailwind CSS, with a strong focus on WCAG 
accessibility compliance and responsive design. Demonstrated success in Agile and CI/CD environments, 
contributing to code reviews, technical documentation, and team mentorship. Solid understanding of 
SOLID principles, design patterns, and performance optimization techniques, with a growing interest in 
Web 3.0, Headless CMS, and AI-powered interfaces. Passionate about innovation, collaborative problem
solving, and delivering user-centric digital products at scale.
      </motion.p>
    </section>
  );
}
