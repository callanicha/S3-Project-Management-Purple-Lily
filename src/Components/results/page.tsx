'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormContext } from '../../Provider'

type Bouquet = {
  name: string
  description: string
  flowers: string[]
  meaning: string
  image: string
}

const bouquets: Bouquet[] = [
  {
    name: "Romantic Bliss",
    description: "A classic arrangement of red roses and white lilies",
    flowers: ["Red Roses", "White Lilies", "Baby's Breath"],
    meaning: "Deep love and purity",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Sunshine Delight",
    description: "A vibrant mix of sunflowers and daisies",
    flowers: ["Sunflowers", "Daisies", "Yellow Tulips"],
    meaning: "Happiness and new beginnings",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Serene Sympathy",
    description: "A calming arrangement of white roses and lavender",
    flowers: ["White Roses", "Lavender", "White Carnations"],
    meaning: "Peace and remembrance",
    image: "/placeholder.svg?height=200&width=200"
  },
]

export default function ResultsPage() {
  const router = useRouter()
  const { formData } = useFormContext()
  const [recommendedBouquet, setRecommendedBouquet] = useState<Bouquet | null>(null)

  useEffect(() => {
    if (!formData.occasion) {
      router.push('/questionnaire/1')
      return
    }

    // Simple recommendation algorithm (replace with more sophisticated logic)
    const bouquetIndex = Math.floor(Math.random() * bouquets.length)
    setRecommendedBouquet(bouquets[bouquetIndex])
  }, [formData, router])

  if (!recommendedBouquet) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center">Your Perfect Bouquet</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img src={recommendedBouquet.image} alt={recommendedBouquet.name} className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-8" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{recommendedBouquet.name}</h2>
            <p className="text-gray-600 mb-4">{recommendedBouquet.description}</p>
            <h3 className="text-xl font-semibold mb-2">Flowers:</h3>
            <ul className="list-disc list-inside mb-4">
              {recommendedBouquet.flowers.map((flower, index) => (
                <li key={index}>{flower}</li>
              ))}
            </ul>
            <p className="text-gray-600"><strong>Meaning:</strong> {recommendedBouquet.meaning}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <span className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">Start Over</span>
          </Link>
          <Link href="/flower-shops">
            <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">Find Flower Shops</span>
          </Link>
        </div>
      </div>
    </div>
  )
}