import React from "react"
import { useParams } from "@reach/router"
import DogImage from "../../components/DogImage"

function BreedPage() {
  const params = useParams()
  console.log(params)
  return (
    <div>
      Breed Page
      <DogImage />
    </div>
  )
}

export default BreedPage
