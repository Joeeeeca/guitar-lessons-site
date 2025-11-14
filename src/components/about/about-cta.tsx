import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function AboutCta() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Guitar Journey?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Let's schedule your first lesson and begin making music together.
            I offer a free 15-minute consultation to discuss your goals and
            answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link to="/lessons">
              <Button size="lg" variant="outline">
                View Lesson Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
