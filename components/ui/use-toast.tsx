"use client"

// Simplified version of shadcn/ui toast
import { useState, useEffect } from "react"

export function toast({ title, description }) {
  const event = new CustomEvent("toast", {
    detail: {
      title,
      description,
    },
  })
  window.dispatchEvent(event)
}

export function useToast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToast = (event) => {
      const { title, description } = event.detail
      setToasts((prev) => [...prev, { id: Date.now(), title, description }])
    }

    window.addEventListener("toast", handleToast)
    return () => window.removeEventListener("toast", handleToast)
  }, [])

  return {
    toasts,
    dismiss: (id) => setToasts((prev) => prev.filter((toast) => toast.id !== id)),
  }
}

