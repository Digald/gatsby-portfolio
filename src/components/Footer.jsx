import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import logo from "../images/ma-logo.svg"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 50px;
  }
`

const FooterAuthor = styled("p")`
  margin: 0;
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const FooterSpooch = styled("img")`
  max-width: 33px;
  margin-top: 0.25em;
`

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <FooterSpooch src={logo} />
    </Link>
    <FooterAuthor href="https://github.com/digald">
      © 2019 — Mark Alaniz, Developer
    </FooterAuthor>
    <FooterAuthor>
      Credits for design and development go to Marguerite Roth
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
