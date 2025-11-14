import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <motion.section
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-4"
      aria-labelledby="home-hero-title"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h1
              id="home-hero-title"
              className="text-4xl md:text-6xl font-bold leading-tight text-balance"
            >
              Master the Guitar with Expert Instruction
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Personalised lessons for all skill levels. From your first chord
              to advanced techniques, unlock your musical potential.
            </p>

            <div className="flex flex-col lg:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
              <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.15 }}
>
                <Button
                  size="lg"
                  className="group cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  Book Your First Lesson
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                </motion.div>
              </Link>

              <Link to="/lessons" className="w-full sm:w-auto">
              <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.15 }}
>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  View Lesson Plans
                </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-4/5 sm:aspect-3/4 lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden bg-muted">
            <img
              src={`${import.meta.env.BASE_URL}images/Hero_image.webp`}
              alt="George Capon teaching guitar during an online lesson"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="object-cover w-full h-full object-top md:object-[center_top]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
