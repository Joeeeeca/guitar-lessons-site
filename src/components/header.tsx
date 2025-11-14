import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  /* -------------------------------
     STEP 3 – Focus Trap for Mobile Menu
  ----------------------------------- */
  useEffect(() => {
    if (!isMenuOpen) return

    const focusable = menuRef.current?.querySelectorAll(
      "a, button"
    ) as NodeListOf<HTMLElement>

    if (!focusable || focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on ESC
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }

      // Trap focus inside menu
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // SHIFT+TAB on first -> go to last
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          // TAB on last -> go to first
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // Auto-focus first menu item
    first.focus()

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Guitar Lessons
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
            >
              About
            </NavLink>

            <NavLink
              to="/lessons"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2                `
              }
            >
              Lessons
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
            >
              Contact
            </NavLink>

            <NavLink to="/contact">
              <Button size="sm">Book a Lesson</Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ⭐ Animated Mobile Navigation */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`
            md:hidden overflow-hidden transition-all duration-300 
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col gap-4 py-4">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/lessons"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Lessons
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `
                text-sm px-2 py-1 rounded-md
                ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
                `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

          </nav>
        </div>
      </div>
    </header>
  )
}
