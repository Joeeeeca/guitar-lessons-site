import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Guitar Lessons. All rights reserved.
          </div>

          <div className="flex gap-6">
            <NavLink
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </NavLink>
          </div>

        </div>
      </div>
    </footer>
  )
}
