export default function LessonsHero() {
  return (
    <section className="pt-32 pb-16 px-4" aria-labelledby="lessons-hero-title">
      <div className="container mx-auto max-w-4xl">

        <h1
          id="lessons-hero-title"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance"
        >
          Guitar Lessons Designed Around You
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Whilst growing up, I took lessons from multiple tutors—from school to
            university. Over time I learned what makes a truly great teacher.
          </p>

          <p>
            My lessons combine proven techniques from world-class educators with
            fun, personalised coaching tailored to your goals and ability.
          </p>
        </div>

      </div>
    </section>
  )
}
