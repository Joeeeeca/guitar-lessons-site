export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted flex justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Meet Your Teacher
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 5 years of teaching experience, I'm passionate about helping
              students discover the joy of playing guitar.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a complete beginner or refining advanced techniques,
              I’ll guide you with patience, structure, and support.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-4/3 md:h-[420px] rounded-2xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/about_me.webp`}
              alt="George Capon teaching guitar in his studio"
              loading="lazy"
              decoding="async"
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
