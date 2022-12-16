import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 36,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const pageHeaderStyles = {
  marginTop: 0,
  marginBottom: 24,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const listItemStyle = {
  marginTop: 10,
  marginBottom: 10,
}
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const IndexPage = () => {
  return <Home path="/" />
}

function Home() {
  const [dogBreeds, setDogBreeds] = useState([])

  useEffect(() => {
    const getDoggos = async () => {
      const res = await fetch(`https://dog.ceo/api/breeds/list/all`)
      const doggos = await res.json()
      if (!!doggos) {
        const doggoStrings = Object.keys(doggos.message)
        setDogBreeds(doggoStrings)
      }
    }
    getDoggos()
  }, [])
  return (
    <main style={pageStyles}>
      <h1 style={pageHeaderStyles}>Gatsby Netlify SSR Example</h1>
      <p>
        Fetching dogs from:{" "}
        <a href="https://dog.ceo/dog-api/documentation/">
          https://dog.ceo/dog-api/documentation/
        </a>
      </p>
      <h2>Some static links:</h2>
      <ul>
        <li style={listItemStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            External link example
          </a>
        </li>
        <li style={listItemStyle}>
          <a style={linkStyle} href={`/static`}>
            Static page example
          </a>
        </li>
        <li style={listItemStyle}>
          <a style={linkStyle} href={`/random`}>
            Random dog page using SSR with static route
          </a>
        </li>
      </ul>
      <h2>Available dog breeds using SSR with dynamic routes:</h2>
      {dogBreeds ? (
        <>
          <ul>
            {dogBreeds.map((breed, idx) => (
              <li key={idx} style={listItemStyle}>
                <Link style={linkStyle} to={`/dogs/${breed}`}>
                  {breed}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h4>No dogs are currently available (the fetch failed)</h4>
      )}
    </main>
  )
}

export default IndexPage

/*

package.json before deletion:

{
  "name": "gatsby-netlify-ssr",
  "version": "1.0.0",
  "private": true,
  "description": "gatsby-netlify-ssr",
  "author": "James Hubert",
  "keywords": [
    "gatsby"
  ],
  "scripts": {
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean"
  },
  "dependencies": {
    "gatsby": "^4.25.0",
    "gatsby-cli": "^5.3.0",
    "gatsby-plugin-netlify": "^5.1.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  }
}

*/
