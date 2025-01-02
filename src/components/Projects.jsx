import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'AUTISM SPECTRUM DISORDER DETECTION USING MACHINE LEARNING',
        description: 'Spearheaded an investigation into machine learning methods for detecting Autism Spectrum Disorder (ASD), driving innovation in diagnostic precision through advanced algorithm development',
        link: '#',
        image: 'src/assets/asd.png'
    },
    {
        title: 'MATCH PREDICTIONS AND ANALYSIS USING ML',
        description: 'Created a predictive model trained on the IPL dataset to forecast match scores and winners based on overs and balls, greatly enhancing analytical capabilities for sports analytics.',
        link: '#',
        image: 'src/assets/ms.png'
    },
    {
        title: 'TWITTER CLONE - USING NEXT.JS',
        description: 'Crafted reusable UI components for tweets, user profiles, comments, and likes using Tailwind CSS classes, resulting in a responsive and engaging user interface.',
        link: '#',
        image: 'src/assets/Tc.png'
    }
];

const Projects = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-50 text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl text-slate-50 font-semibold mb-4">{project.title}</h3>
                            <p className="text-slate-50 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                className=" btn text-white font-medium py-2 px-4 rounded-full hover:bg-slate-800"
                            >
                                Github
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;