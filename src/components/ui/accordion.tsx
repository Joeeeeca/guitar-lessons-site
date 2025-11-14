// src/components/ui/accordion.tsx

import * as React from "react"
import { cn } from "@/lib/utils"

// -----------------------------
// Context
// -----------------------------
type AccordionContextType = {
  openItem: string | null
  setOpenItem: React.Dispatch<React.SetStateAction<string | null>>
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

// -----------------------------
// Accordion Root
// -----------------------------
interface AccordionProps {
  type?: "single" | "multiple"
  className?: string
  children: React.ReactNode
}

export function Accordion({ type = "single", className, children }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, type }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

// -----------------------------
// Accordion Item
// -----------------------------
interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("AccordionItem must be used within <Accordion>")

  const { openItem, setOpenItem, type } = ctx
  const open = openItem === value

  const toggle = () => {
    if (type === "single") {
      setOpenItem(open ? null : value)
    } else {
      // Future multi-accordion support could use arrays here
    }
  }

  return (
    <div
      className={cn(
        "rounded-lg bg-[#faf6ef] px-6 py-2 shadow-sm transition-colors",
        open && "bg-[#f3ece3]",
        className
      )}
    >
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  )
}

// -----------------------------
// Accordion Trigger (+ / -)
// -----------------------------
interface AccordionTriggerProps {
  children: React.ReactNode
  open?: boolean
  toggle?: () => void
  className?: string
}

export function AccordionTrigger({ children, open, toggle, className }: AccordionTriggerProps) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-base font-medium",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-md",
        "cursor-pointer",
        className
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "text-xl font-bold leading-none transition-transform duration-200 select-none",
          "cursor-pointer",
          open ? "rotate-0" : "rotate-0"
        )}
      >
        {open ? "–" : "+"}
      </span>
    </button>
  )
}

// -----------------------------
// Accordion Content
// -----------------------------
interface AccordionContentProps {
  children: React.ReactNode
  open?: boolean
  className?: string
}

export function AccordionContent({ children, open, className }: AccordionContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden text-muted-foreground transition-all duration-300",
        open ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pr-8", className)}>{children}</div>
    </div>
  )
}
