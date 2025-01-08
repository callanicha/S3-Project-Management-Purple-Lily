'use client'

import { createContext, useState, useContext } from 'react'

type FormData = {
  occasion: string
  recipient: string
  budget: string
  symbolicMeaning: string
  longevity: string
  colorScheme: string
  style: string
  fragrance: string
  sustainable: string
  flowerType: string
}

type FormContextType = {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    recipient: '',
    budget: '',
    symbolicMeaning: '',
    longevity: '',
    colorScheme: '',
    style: '',
    fragrance: '',
    sustainable: '',
    flowerType: '',
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

