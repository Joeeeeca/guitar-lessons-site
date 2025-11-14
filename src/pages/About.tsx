import { Helmet } from "react-helmet"
import AboutHero from "../components/about/about-hero"
import AboutStory from "../components/about/about-story"
import AboutPhilosophy from "../components/about/about-philosophy"
import AboutCta from "../components/about/about-cta"
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible"
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      <Helmet>
        <title>About George Capon | Online Guitar Teacher &amp; Musician</title>

        <meta
          name="description"
          content="Learn about George Capon, an experienced online guitar teacher offering personalised acoustic and electric guitar lessons for all skill levels."
        />

        <link rel="canonical" href="https://georgecaponguitarlessons.com/about" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="About George Capon | Online Guitar Teacher & Musician"
        />
        <meta
          property="og:description"
          content="Learn about George Capon, a professional guitar instructor offering personalised online lessons in acoustic and electric guitar."
        />
        <meta
          property="og:url"
          content="https://georgecaponguitarlessons.com/about"
        />
        <meta
          property="og:image"
          content="https://georgecaponguitarlessons.com/about.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About George Capon | Online Guitar Teacher & Musician"
        />
        <meta
          name="twitter:description"
          content="Learn about George Capon, a professional guitar instructor offering personalised online lessons in acoustic and electric guitar."
        />
        <meta
          name="twitter:image"
          content="https://georgecaponguitarlessons.com/about.webp"
        />

        {/* Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "George Capon",
            jobTitle: "Guitar Teacher",
            url: "https://georgecaponguitarlessons.com",
            image: "https://georgecaponguitarlessons.com/about.webp",
            description:
              "Experienced online guitar teacher offering personalised lessons for all skill levels.",
            sameAs: [],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <AboutHero />
</motion.div>
     <FadeInWhenVisible>
  <AboutStory />
</FadeInWhenVisible>

<FadeInWhenVisible>
  <AboutPhilosophy />
</FadeInWhenVisible>

<FadeInWhenVisible>
  <AboutCta />
</FadeInWhenVisible>
      </main>
    </>
  )
}
