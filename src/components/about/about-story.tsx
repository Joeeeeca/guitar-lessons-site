import { Music, Award, Users, Heart } from "lucide-react"

export default function AboutStory() {
  const highlights = [
    {
      icon: Music,
      title: "5+ Years Teaching",
      description: "Helping students achieve their musical goals since 2020",
    },
    {
      icon: Award,
      title: "Professional Musician",
      description: "Performed with various bands and at venues across the region",
    },
    {
      icon: Users,
      title: "50+ Students",
      description: "Taught students from ages 10 to 70, all skill levels",
    },
    {
      icon: Heart,
      title: "Passion for Music",
      description: "Dedicated to sharing the joy and art of guitar playing",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f9f5ef]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            My Musical Journey
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
            <p>
              ​I'm a grade 8 guitar player/singer-songwriter, and teacher, with a degree in music performance & recording from the London College of Music. Originally from the Isle of Wight, I started teaching in 2018 after moving to Greater Manchester from London the September before.
            </p>
            <p>
             Once I started teaching I immediately realized it was for me, giving people the tools that they need to succeed with the guitar was very fulfilling to me. Whether it was a young person with heaps of potential, a complete beginner looking to start a new hobby, or even a long-time player looking to eliminate any bad habits they may have accumulated over the years. Helping people reach their guitar-playing goals has always felt like it was an extremely rewarding thing to do.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f2e4d9] mb-4">
                  <Icon className="w-8 h-8 text-[#b84f15]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
