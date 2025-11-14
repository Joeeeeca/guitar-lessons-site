import { Mail, MessageCircle, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out through any of these channels. I typically respond within 24 hours.
        </p>
      </div>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Mail aria-hidden="true" className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a
              href="mailto:guitarlessonsin@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              guitarlessonsin@gmail.com
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
            <a
              href="https://wa.me/447802622204"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +44 7802 622 204
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground">Online & In-Person Lessons Available</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
