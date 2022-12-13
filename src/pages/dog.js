import React from "react"

/*
  SSR basic instructions:
  https://www.gatsbyjs.com/docs/how-to/rendering-options/using-server-side-rendering/
*/

const DogPage = ({ serverData }) => (
  <main>
    <h1>Dog Page fetching image with getServerData()</h1>
    <img alt="Happy dog" src={serverData.message} />
  </main>
)

export default DogPage

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
