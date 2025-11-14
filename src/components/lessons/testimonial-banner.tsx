export function TestimonialBanner() {
  return (
    <section className="w-full py-12 md:py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <blockquote className="space-y-6">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-balance italic">
           "George is such a helpful and patient teacher who has truly helped me progress with my guitar playing! He makes sure to explain guitar theory to me and always insists I ask for help when needed. Learning online has been just as effective as off and I look forward to learning more with him!"
          </p>
          <footer className="text-lg text-muted-foreground">
            <cite className="not-italic font-medium text-foreground">Christina Croitor</cite>
            {" · "}
            Student for 2 years
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
