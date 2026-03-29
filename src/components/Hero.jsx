import { devData } from "../assets/assets"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-12 gap-8">

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <motion.img
          src={devData.guintu}
          className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]"          
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-xl dark:text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Hello, my name is{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Julian Mathew M. Guintu
            </span>
            !
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-white/75 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Fourth-year Computer Science student at Holy Angel University with a
            background in IT Support and a growing focus on software testing and
            quality assurance. I am actively developing skills in both manual
            and automation testing, along with workflow automation using n8n.
          </motion.p>

        </div>
      </div>

    </div>
  )
}

export default Hero