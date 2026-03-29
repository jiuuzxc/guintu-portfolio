import { motion } from "motion/react"

const Skills = () => {
  return (
    <div id="skills" className="py-12 px-4 md:px-12">

      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 dark:text-white"
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Technical */}
        <div>
          <motion.h3 className="text-xl font-semibold mb-3 dark:text-white"
                    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>

          <motion.ul className="text-gray-600 dark:text-white/80 space-y-2"
                    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
            <li><strong>Languages:</strong> Python, Java, HTML5, CSS3, JavaScript</li>
            <li><strong>Frameworks & Libraries:</strong> React, TailwindCSS, Vite, Scikit-learn, Playwright, Selenium</li>
            <li><strong>Database & Cloud:</strong> MySQL, AWS</li>
            <li><strong>Tools:</strong> VS Code, n8n, Git, GitHub, Figma, Canva</li>
          </motion.ul>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3 className="text-xl font-semibold mb-3 dark:text-white"
                    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
            Soft Skills
          </motion.h3>

          <motion.div className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
            {[
              "Communication",
              "Teamwork",
              "Problem-Solving",
              "Time Management",
              "Willingness to Learn",
              "Adaptability"
            ].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm dark:text-white">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Skills;