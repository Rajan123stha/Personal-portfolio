"use client"

import { useToast } from "./use-toast"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Create a local helper function with a different name to avoid conflicts
function mergeClasses(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full max-w-md">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  )
}

function Toast({ toast, onDismiss }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onDismiss, 300)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div
      className={`bg-background border rounded-lg shadow-lg p-4 flex items-start gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="flex-1">
        {toast.title && <h3 className="font-medium">{toast.title}</h3>}
        {toast.description && <p className="text-sm text-muted-foreground">{toast.description}</p>}
      </div>
      <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

