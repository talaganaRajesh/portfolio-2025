import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/thekeepnotes2.png';
import img2 from '../assets/getmaterial.png';
import img3 from '../assets/picaura.png'
import img4 from '../assets/lemonstudio.png'

const projects = [
  {
    id: 1,
    title: 'Lemon Studio',
    description: 'A photography website for my client who owns a photgraphy studio in dubai . Where i showcased his work and services.',
    image: img4,
    tags: ['React','Tailwind CSS','API Integration'],
    link: 'https://lemonstudio.vercel.app/'
  },
  {
    id: 2,
    title: 'Get Material ✨',
    description: 'A Notes Sharing website for Nist students . Studetns can upload and get notes contributed by others',
    image: img2,
    tags: ['React', 'API Integration', 'Tailwind CSS','Firebase'],
    link: 'https://getmaterial.vercel.app/'
  },
  { 
    id: 3,
    title: 'Pic Aura',
    description: 'An all in one photo editing tool , where you can edit any image , remove background , add text in the background etc.',
    image: img3,
    tags: ['React','Tailwind CSS','API','removeBG'],
    link: 'https://picaura.vercel.app/'
  },
  {
    id: 4,
    title: 'Keep Notes Clone',
    description: 'A Note making website with React . This is a clone of google keep notes . I built it with very clean UI. ',
    image: img1,
    tags: ['React', 'Node.js', 'Tailwind css','Javascript','HTML/CSS'],
    link: 'https://thekeepnotes.vercel.app/'
  }
  
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-fit object-cover" />
    <div className="px-6 py-2">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        Live Demo
      </a>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 md:pb-1 px-4 md:pt-24 pt-5 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

