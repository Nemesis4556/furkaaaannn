import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  to: number
  decimals?: number
  duration?: number
  className?: string
}

/** Görünür olduğunda sayıyı yukarı saydırır (number count-up) */
export function CountUp({ to, decimals = 0, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) {
      ref.current.textContent = to.toFixed(decimals).replace('.', ',')
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals).replace('.', ',')
      },
    })
    return () => controls.stop()
  }, [inView, to, decimals, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals).replace('.', ',')}
    </span>
  )
}
