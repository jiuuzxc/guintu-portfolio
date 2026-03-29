import { motion } from "motion/react"

const Experiences = () => {
  return (
    <div id="experiences" className="py-12 px-4 md:px-12">

      {/* Title */}
      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 dark:text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}>
        Experiences
      </motion.h2>

      {/* Single Experience */}
      <motion.div className="max-w-3xl mx-auto"          
      initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition">

          <h3 className="text-xl font-semibold dark:text-white">
            IT Support Intern
          </h3>

          <p className="text-sm text-gray-500 dark:text-white/70">
            Clark Outsourcing • December 2025 - March 2026
          </p>

          <ul className="mt-3 text-sm text-gray-600 dark:text-white/80 list-disc list-inside space-y-1">
            <li>Provided technical support for hardware and software issues</li>
            <li>Set up and configured workstations</li>
            <li>Used tools such as LAN cable testers and boot drives for troubleshooting</li>
            <li>Assisted in network setup and maintenance tasks</li>
          </ul>

        </div>
      </motion.div>

    </div>
  )
}

export default Experiences;