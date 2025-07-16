"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function FeedbackPopup() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm">
      <div className="relative rounded-lg border bg-card p-4 text-card-foreground shadow-lg">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeTVya7JLj3SMMiizhp6rMAlpoBJN-fmvwm5Ywon0CEZfsHmw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="pr-6 text-sm text-muted-foreground hover:text-primary transition-colors">
            Help improve this site! Click here to give feedback.
          </p>
        </Link>
      </div>
    </div>
  )
}
