import React from "react"
import DogImage from "../components/DogImage"

/*
  SSR basic instructions:
  https://www.gatsbyjs.com/docs/how-to/rendering-options/using-server-side-rendering/
*/

const imageStyle = {
  maxWidth: "80%",
}

const RandomDogPage = ({ serverData }) => (
  <main>
    <h1>Dog Page fetching image with getServerData()</h1>
    <p>
      API endpoint hit for image:{" "}
      <a href="https://dog.ceo/api/breeds/image/random">
        https://dog.ceo/api/breeds/image/random
      </a>
    </p>
    <DogImage imageSrc={serverData.message} />
  </main>
)

export default RandomDogPage

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
