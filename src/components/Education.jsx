import { motion } from "motion/react"

const Education = () => {
  return (
    <div id="education" className="py-12 px-4 md:px-12">

      {/* Title */}
      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 dark:text-white"
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        Education
      </motion.h2>

      {/* Education Card */}
      <motion.div className="max-w-3xl mx-auto"           
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition">

          <h3 className="text-xl font-semibold dark:text-white">
            Bachelor of Science in Computer Science
          </h3>

          <p className="text-sm text-gray-500 dark:text-white/70">
            Holy Angel University • 2022 – 2026
          </p>

          <ul className="mt-3 text-sm text-gray-600 dark:text-white/80 list-disc list-inside space-y-1">
            <li>Focused on software development and IT support</li>
            <li>Studied algorithms, data structures, and system design</li>
            <li>Developed projects including a 2D game engine and automation workflows</li>
          </ul>

        </div>
      </motion.div>

    </div>
  )
}

export default Education;