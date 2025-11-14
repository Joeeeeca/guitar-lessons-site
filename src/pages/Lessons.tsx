import { Helmet } from "react-helmet"
import LessonsHero from "../components/lessons/lessons-hero"
import LessonsPricing from "../components/lessons/lessons-pricing"
import LessonsTestimonials from "../components/lessons/lessons-testimonials"
import { LessonsFAQ } from "../components/lessons/lessons-faq"
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible"
import { motion } from "framer-motion"

export default function Lessons() {
  return (
    <>
      <Helmet>
        <title>Online Guitar Lessons &amp; Pricing | George Capon</title>

        <meta
          name="description"
          content="Explore guitar lesson plans and pricing. Learn acoustic or electric guitar through structured 30-minute or 60-minute online sessions with George Capon."
        />

        <link
          rel="canonical"
          href="https://georgecaponguitarlessons.com/lessons"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Online Guitar Lessons & Pricing | George Capon"
        />
        <meta
          property="og:description"
          content="Explore online guitar lesson plans and pricing, including 30-minute and 60-minute sessions tailored to your skill level and goals."
        />
        <meta
          property="og:url"
          content="https://georgecaponguitarlessons.com/lessons"
        />
        <meta
          property="og:image"
          content="https://georgecaponguitarlessons.com/lessons.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Guitar Lessons & Pricing | George Capon"
        />
        <meta
          name="twitter:description"
          content="Explore online guitar lesson plans and pricing, including 30-minute and 60-minute sessions tailored to your skill level and goals."
        />
        <meta
          name="twitter:image"
          content="https://georgecaponguitarlessons.com/lessons.webp"
        />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Guitar Lesson Plans",
            itemListElement: [
              {
                "@type": "Course",
                name: "30 Minute Guitar Lessons",
                description:
                  "Short, focused sessions designed to build strong fundamentals. Ideal for beginners or busy learners wanting consistent practice and steady progress.",
                provider: {
                  "@type": "Person",
                  name: "George Capon",
                },
              },
              {
                "@type": "Course",
                name: "60 Minute Guitar Lessons",
                description:
                  "In-depth full lessons offering detailed guidance, technique development, and personalised coaching. Perfect for players looking to accelerate their skill and musical confidence.",
                provider: {
                  "@type": "Person",
                  name: "George Capon",
                },
              },
            ],
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What if I'm a complete beginner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All abilities are welcome. Lessons are tailored to your current skill level and personal goals. Whether you’ve never picked up a guitar before or you're refining technique, we work at a pace that suits you.",
                },
              },
              {
                "@type": "Question",
                name: "How does the free first lesson work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The first lesson is completely free for all new students. It’s an opportunity to meet, discuss your goals, and try a session with no pressure or commitment before deciding to continue.",
                },
              },
              {
                "@type": "Question",
                name: "What do I need for my first lesson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Just bring your guitar and enthusiasm to learn. For online lessons, you'll also need a stable internet connection and a device with a camera. Everything else will be guided during the session.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide lesson materials and follow-up support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. After each lesson, follow-up videos and materials are sent via WhatsApp to reinforce what we've covered and support effective practice between sessions.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I take lessons?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most students take weekly lessons, but fortnightly sessions are also available. The right frequency depends on your goals, availability, and how much time you can dedicate to practice.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <LessonsHero />
</motion.div>

<FadeInWhenVisible>
  <LessonsPricing />
</FadeInWhenVisible>

<FadeInWhenVisible>
  <LessonsFAQ />
</FadeInWhenVisible>

<FadeInWhenVisible>
  <LessonsTestimonials />
</FadeInWhenVisible>

      </main>
    </>
  )
}
