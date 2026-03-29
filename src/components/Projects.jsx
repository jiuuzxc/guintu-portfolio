import { projects } from "../assets/assets"
import { motion } from "motion/react"

const Project = () => {

  return (
    <div id="projects" className="py-12 px-4 md:px-12">

      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 dark:text-white"
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {project.title}
            </h3>

            <p className="text-xs text-primary font-medium mb-2">
                {project.role}
            </p>

            <p className="text-sm text-gray-500 dark:text-white/70 mb-4">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default Project