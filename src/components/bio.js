/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex mb-16">
      <StaticImage
        className="mr-4 mb-0 rounded-full min-w-50"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          <br />
          <a
            className="m-2"
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          </a>
          {` `}
          <a
            className="my-2"
            href={`https://linkedin.com/in/${social?.linkedin || ``}`}
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          {` `}
          <a
            className="m-2"
            href={`https://github.com/${social?.github || ``}`}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
