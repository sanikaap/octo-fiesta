// src/components/Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "HPE",
      duration: "2022 - Present",
      description: [
        "Led team of 5 developers in building enterprise SaaS platform",
        "Improved application performance by 40% through code optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Data Science Intern",
      company: "ISAN DATA SYSTEMS PVT LTD",
      duration: "Jan 2024 - Apr 2022",
      description: [
        "Engineered a gradebook system using Python and Pandas for optimizing academic record management, resulting in streamlinedprocesses and improved data accuracy",
        "Developed automated workflows leveraging Pandas to process large datasets efficiently, achieving time savings of approximately 15 hours weekly while enhancing the reliability of student performance metrics."
      
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "1Stop.ai",
      duration: "Aug 2022 - Oct 2022",
      description: [
        "Created a sentiment analysis model utilizing Natural Language Processing (NLP) techniques, including text classification and lemmatization, achieving over 90 % accuracy in sentiment predictions.",
        "Engineered an automated system for processing large datasets,achieving time savings of approximately 20 hours weekly while improving the reliability of analytical results through optimized algorithms tailored to specific tasks."
       
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.5 }}
      transition={{ duration: 0.75 }}
      className="py-20 "
    >
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <span className="text-slate-50 mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-slate-50 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;