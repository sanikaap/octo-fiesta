// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-50 mb-6">
          Hi, I'm Sanika Patil 👋
        </h1>
        <p className="text-xl text-slate-50 mb-8">
          A passionate web developer specializing in modern web technologies.
        </p>
        <div className="card  py-3  ">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">
            About Me
          </h2>
          <p className="text-slate-50 mb-4">
          Aspiring Software Developer with a
          problem-solving mindset and a passion for creating impactful solutions
          through innovation and collaboration. I am a recent graduate from the Sveri College Of Engineering with a
          Bachelor's degree in Computer Science. My interests include web development, Data Analytics and Machine Learning, and exploring new technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Download CV
            </button>
            <button className="border-2 btn border-blue-600 text-blue-600 px-6 py-2 rounded-full  transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;