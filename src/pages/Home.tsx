import { Hero } from "@/components/shared/hero"
import { Welcome } from "@/components/shared/welcome"
import { TestimonialBanner } from "@/components/lessons/testimonial-banner"
import { Helmet } from "react-helmet"
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible"


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Guitar Lessons Online | Learn Guitar with George Capon</title>

        <meta
          name="description"
          content="Professional online guitar lessons for beginners to advanced players. Learn acoustic or electric guitar through personalised, structured teaching with George Capon."
        />

        <link rel="canonical" href="https://georgecaponguitarlessons.com/" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Guitar Lessons Online | Learn Guitar with George Capon"
        />
        <meta
          property="og:description"
          content="Learn guitar online with a professional instructor. Tailored acoustic and electric guitar lessons for all ages and skill levels."
        />
        <meta property="og:url" content="https://georgecaponguitarlessons.com/" />
        <meta
          property="og:image"
          content="https://georgecaponguitarlessons.com/home.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guitar Lessons Online | Learn Guitar with George Capon"
        />
        <meta
          name="twitter:description"
          content="Learn guitar online with a professional instructor. Tailored acoustic and electric guitar lessons for all ages and skill levels."
        />
        <meta
          name="twitter:image"
          content="https://georgecaponguitarlessons.com/home.webp"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="online guitar lessons, acoustic guitar teacher, electric guitar tuition, Zoom guitar lessons, guitar tutor UK"
        />

        <meta name="robots" content="index, follow" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Online Guitar Lessons",
            description:
              "Professional acoustic and electric guitar lessons taught online by George Capon.",
            provider: {
              "@type": "Person",
              name: "George Capon",
              url: "https://georgecaponguitarlessons.com",
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        
         <FadeInWhenVisible>
    <Welcome />
  </FadeInWhenVisible>

  <FadeInWhenVisible>
    <TestimonialBanner />
  </FadeInWhenVisible>
      </main>
    </>
  )
}
