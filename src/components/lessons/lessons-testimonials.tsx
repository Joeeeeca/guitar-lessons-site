import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function LessonsTestimonials() {
  const testimonials = [
    {
      name: "Mike Pass",
      text: "I have been working with George for six months now and my playing has improved hugely with his help and direction. We use songs by artists that I like but always with a different technique that you can use in other songs, or if you write your own. The Zoom lessons have been great, no lateness! Added to this George sends videos to reinforce the lesson and I've really benefited from his help.",
      rating: 5,
    },
    {
      name: "Rebecca Walton",
      text: "We contacted George when my son wanted to learn to play the guitar, all I can say is George was the best decision we could have ever made. My son is thriving, he looks forward to every lesson. The lessons George delivers are outstanding and are always followed up by a WhatsApp message and video. George has not only given my son the confidence and love to carry out his newfound hobby. He has also given him the confidence to want to start learning to play the electric guitar as well which we have purchased for Christmas. Excellent value lessons. Thank you George.",
      rating: 5,
    },
    {
      name: "Louis Potter",
      text: "George has been a great help for me improving my guitar. I came in as an intermediate player and so he's really helped me focus on my technique as well as an understanding of music theory to take me to the next level.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testimonies</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take it from me, here are some reviews from some of my students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={20} aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed grow">
  “{testimonial.text}”
</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
