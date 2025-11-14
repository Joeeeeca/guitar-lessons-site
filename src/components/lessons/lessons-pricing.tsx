import { Check, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function LessonsPricing() {
  return (
    <section className="py-16 px-4 bg-card"
    aria-labelledby="lessons-pricing-title">
      <div className="container mx-auto max-w-4xl">
        <h2 id="lessons-pricing-title" className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Lessons Start From £20</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-background border-2 border-border hover:border-primary transition-colors">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">30 Minutes</h3>
              <p className="text-4xl font-bold text-primary mb-4">£20</p>
            </div>
          </Card>

          <Card className="p-8 bg-background border-2 border-border hover:border-primary transition-colors">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">1 Hour</h3>
              <p className="text-4xl font-bold text-primary mb-4">£30</p>
            </div>
          </Card>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
            <div className="text-primary mt-1">+</div>
            <div>
              <p className="font-semibold text-foreground">£5 For In Person</p>
              <p className="text-sm text-muted-foreground">Face-to-face lessons at your location</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
            <div className="text-primary mt-1">+</div>
            <div>
              <p className="font-semibold text-foreground">£5 For Fortnightly</p>
              <p className="text-sm text-muted-foreground">Lessons every two weeks</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <Check className="text-primary shrink-0" size={24} />
            <p className="text-foreground font-semibold">I offer a free first lesson to all new students</p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
            <Shield className="text-primary shrink-0" size={24} />
            <p className="text-foreground font-semibold">I Have Been CRB Checked</p>
          </div>
        </div>
      </div>
    </section>
  )
}
