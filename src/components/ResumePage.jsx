import React from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

const ResumePage = () => {
    const experiences = [
        {
          id: 1,
          title: "Frontend Developer",
          company: "GetMaterial",
          period: "Jun 2024 - Present",
          responsibilities: [
            "Developed a notes-sharing platform for students using React and Tailwind CSS",
            "Implemented responsive and user-friendly UI to enhance the student experience",
            "Ensured application security by integrating authentication and role-based access",
          ],
        },
        {
          id: 2,
          title: "Web Developer Intern",
          company: "Freelance Projects",
          period: "Jan 2024 - May 2024",
          responsibilities: [
            "Designed and deployed a photography portfolio website using React",
            "Collaborated with clients to understand requirements and deliver tailor-made solutions",
            "Optimized website performance and SEO for improved client visibility",
          ],
        },
        {
          id: 3,
          title: "AI Project Developer",
          company: "NIST College - Internship Program",
          period: "Jul 2024 - Aug 2024",
          responsibilities: [
            "Worked on AI-based crop disease detection using a custom-trained model",
            "Built a React-based frontend to display AI predictions and visualizations",
            "Collaborated with a six-member team to implement end-to-end solutions",
          ],
        },
      ];
    
      const education = [
        {
          id: 1,
          degree: "Bachelor of Technology in Computer Science and Engineering",
          institution: "NIST College, Berhampur",
          year: "2021 - Present",
          achievements: [
            "Developed multiple live web projects such as GetMaterial and PicAura",
            "Participated in Smart India Hackathon 2024 with a focus on agricultural innovations",
            "Consistently ranked among the top 5 students in coding competitions",
          ],
        },
      ];
    
      const skills = [
        "React",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "RESTful APIs",
        "Git",
        "Python",
        "AI/ML Basics",
      ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">T Rajesh</h1>
                <p className="text-xl text-gray-600">Frontend Developer</p>
              </div>
              <motion.a
                href="/path-to-your-resume.pdf"
                download
                className="flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2" />
                Download CV
              </motion.a>
            </div>

            <motion.section {...fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            <motion.section {...fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">
                    {edu.institution} | {edu.year}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResumePage

