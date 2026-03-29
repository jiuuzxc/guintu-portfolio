import { motion } from "motion/react"

const Certifications = () => {
  return (
    <div id="certifications" className="py-12 px-4 md:px-12">

      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 dark:text-white"
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        Certifications & Trainings
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {[
          { title: "n8n Course: No Code AI Agent Builder", org: "Simplilearn", year: "2026" },
          { title: "Data Analytics Essentials", org: "Cisco", year: "2025" },
          { title: "AWS Academy Cloud Foundations", org: "AWS Training", year: "2025" },
          { title: "Foundations of UX Design", org: "Google", year: "2024" },
          { title: "Cyber Threat Management", org: "Cisco", year: "2024" },
          { title: "Cybersecurity Essentials", org: "Cisco", year: "2024" },
          { title: "CCNA: Introduction to Networks", org: "Cisco", year: "2024" },
        ].map((cert, index) => (
          <motion.div key={index} className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
            <h3 className="font-semibold dark:text-white">{cert.title}</h3>
            <p className="text-sm text-gray-500 dark:text-white/70">
              {cert.org} • {cert.year}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default Certifications;