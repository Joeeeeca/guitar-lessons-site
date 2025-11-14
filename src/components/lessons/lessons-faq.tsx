import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function LessonsFAQ() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8" aria-labelledby="lessons-faq-title">
      <div className="max-w-3xl mx-auto">
        <h2 id="lessons-faq-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Frequently Asked Questions</h2>
        <Accordion type="single" className="space-y-4">

          <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-left hover:no-underline">
              What if I'm a complete beginner?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              All abilities are welcome! I tailor each lesson to your current skill level and personal goals. Whether
              you've never picked up a guitar before or you're looking to refine your technique, we'll work at a pace
              that suits you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-left hover:no-underline">
              How does the free first lesson work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              I offer a free first lesson to all new students so we can meet, discuss your goals, and see if we're a
              good fit. There's no obligation to continue, and it gives you a chance to experience my teaching style
              before committing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-left hover:no-underline">
              What do I need for my first lesson?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Just bring your guitar (acoustic or electric) and enthusiasm to learn! For online lessons, you'll need a
              stable internet connection and a device with a camera. I'll provide guidance on everything else as we go.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-left hover:no-underline">
              Do you provide lesson materials and follow-up support?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! After each lesson, I send follow-up videos and materials via WhatsApp to help reinforce what we've
              covered. This ensures you have everything you need to practice effectively between lessons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border-0 shadow-sm">
            <AccordionTrigger className="text-left hover:no-underline">
              How often should I take lessons?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Most students benefit from weekly lessons, but I also offer fortnightly lessons too. The
              frequency depends on your goals, availability, and how much time you can dedicate to practice between
              sessions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
