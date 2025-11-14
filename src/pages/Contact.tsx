import { Helmet } from "react-helmet"
import ContactHero from "../components/contact/contact-hero"
import ContactInfo from "../components/contact/contact-info"
import ContactForm from "../components/contact/contact-form"
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact George Capon | Book Online Guitar Lessons</title>

        <meta
          name="description"
          content="Contact George Capon to book online guitar lessons or ask any questions. Start your personalised musical journey today."
        />

        <link
          rel="canonical"
          href="https://georgecaponguitarlessons.com/contact"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Contact George Capon | Book Online Guitar Lessons"
        />
        <meta
          property="og:description"
          content="Get in touch with George Capon to book online acoustic or electric guitar lessons."
        />
        <meta
          property="og:url"
          content="https://georgecaponguitarlessons.com/contact"
        />
        <meta
          property="og:image"
          content="https://georgecaponguitarlessons.com/contact.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact George Capon | Book Online Guitar Lessons"
        />
        <meta
          name="twitter:description"
          content="Get in touch with George Capon to book online acoustic or electric guitar lessons."
        />
        <meta
          name="twitter:image"
          content="https://georgecaponguitarlessons.com/contact.webp"
        />

        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact George Capon",
            description: "Contact page for booking online guitar lessons.",
            url: "https://georgecaponguitarlessons.com/contact",
          })}
        </script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "George Capon Guitar Lessons",
            url: "https://georgecaponguitarlessons.com",
            image: "https://georgecaponguitarlessons.com/social-card.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "guitarlessonsin@gmail.com",
            },
          })}
        </script>
      </Helmet>

      <main className="flex-1 pt-20 min-h-screen">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <ContactHero />
</motion.div>
        <div className="container mx-auto px-4 py-16">
         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
  <FadeInWhenVisible>
    <ContactInfo />
  </FadeInWhenVisible>

  <FadeInWhenVisible>
    <ContactForm />
  </FadeInWhenVisible>
</div>
        </div>
      </main>
    </>
  )
}
