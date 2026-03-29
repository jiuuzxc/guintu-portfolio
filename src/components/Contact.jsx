import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "motion/react"

const Contact = () => {
    
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    })
    .catch((err) => {
    console.log("EmailJS Error:", err)
    setStatus("Failed to send message. Try again.")
    })
    .finally(() => {
        setLoading(false)
    })
  }

  return (
    <div id="contact" className="py-12 px-4 md:px-12 text-center">

      <motion.h2 className="text-3xl md:text-4xl font-semibold mb-6 dark:text-white"
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}>
        Contact Me
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >

        <motion.input
                  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border dark:text-white dark:border-gray-700"
        />

        <motion.input
                  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border dark:text-white dark:border-gray-700"
        />

        <motion.textarea
                  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border dark:text-white dark:border-gray-700"
        />

        <motion.button
                  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
            type="submit"
            disabled={loading}
            className="bg-primary text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
            {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}

            {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p className="text-sm text-gray-500 mt-2">
            {status}
          </p>
        )}

      </form>

    </div>
  )
}

export default Contact