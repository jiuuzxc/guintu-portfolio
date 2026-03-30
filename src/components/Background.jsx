import { useEffect, useRef } from "react"

const Background = ({ theme }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const mouse = { x: null, y: null }

    // 🔥 Increased nodes (balanced for performance)
    const NODE_COUNT = 80

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }))

    const getColors = () => {
    return theme === "dark"
        ? {
            line: "rgba(255,255,255,0.25)", // stronger lines
            node: "rgba(255,255,255,1)"     // FULL white
        }
        : {
            line: "rgba(0,100,255,0.12)",
            node: "rgba(0,100,255,0.7)"
        }
    }

    const draw = () => {
      const { line, node } = getColors()

      ctx.clearRect(0, 0, width, height)

      // 🔗 draw connections (optimized)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = dx * dx + dy * dy // 🔥 no sqrt (faster)

          if (dist < 140 * 140) {
            ctx.strokeStyle = line
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // 🖱 mouse interaction
      nodes.forEach(n => {
        if (mouse.x && mouse.y) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = dx * dx + dy * dy

          if (dist < 160 * 160) {
            n.x += dx * 0.01
            n.y += dy * 0.01
          }
        }
      })

      // 🔵 draw nodes (BIGGER + glow)
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2)

        ctx.fillStyle = node

        // ✨ stronger glow for dark mode
        ctx.shadowColor = theme === "dark" ? "rgba(255,255,255,0.9)" : node
        ctx.shadowBlur = theme === "dark" ? 12 : 6

        ctx.fill()
        ctx.shadowBlur = 0

        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      })

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}

export default Background