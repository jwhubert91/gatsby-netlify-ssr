import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
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
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Gatsby Netlify SSR Example</h1>
      <ul>
        <li style={listItemStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            External route example
          </a>
        </li>
        <li style={listItemStyle}>
          <a style={linkStyle} href={`/static`}>
            Static page example
          </a>
        </li>
        <li style={listItemStyle}>
          <a style={linkStyle} href={`/ssr`}>
            Server side rendered page example
          </a>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
