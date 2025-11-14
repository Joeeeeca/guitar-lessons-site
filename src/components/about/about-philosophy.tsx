import { CheckCircle } from "lucide-react"

export default function AboutPhilosophy() {
  const principles = [
    "Every student learns at their own pace - I adapt my teaching to match your learning style",
    "Music should be fun - we'll work on songs and techniques that excite you",
    "Strong fundamentals create confident players - proper technique from the start prevents bad habits",
    "Practice makes progress - I'll give you structured practice routines that fit your schedule",
    "All genres are welcome - from classical to metal, we'll explore what you love",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Teaching Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            My approach to teaching is built on patience, encouragement, and a genuine love for helping others discover
            their musical potential.
          </p>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
