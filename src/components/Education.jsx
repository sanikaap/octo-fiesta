// src/components/Education.jsx
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Bachlore Of Technology Degree in Computer Science & Engineering",
      school: "Sveri's College of Engineering, Pandharpur",
      duration: "2021 - 2024",
      details: "Specialized in Software Engineering and Web Technologies",
      courses: ["Advanced Web Development", "Cloud Computing", "Software Architecture", "Data Structures", "Algorithms", "Machine Learning", "Data Analytics"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl font-bold text-slate-50 mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.school}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{edu.duration}</span>
              </div>
              <p className="text-slate-50 mb-4">{edu.details}</p>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <span 
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;