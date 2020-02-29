import './footer.less'
import React from 'react'
import './header.less'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = () => (
  <footer className="app--footer">
    <div className="app--footer-content ui container">
      <div className="ui stackable grid">
        <div className="thirteen wide column links">
          <ul className="links">
            <li>
              <OutboundLink href="https://docs.inkdrop.app/terms">
                Terms of Use
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://docs.inkdrop.app/privacy">
                Privacy Policy
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://docs.inkdrop.app/faq">
                FAQ
              </OutboundLink>
            </li>
            <li>
              <a href="mailto:contact@inkdrop.app">Contact</a>
            </li>
            <li>
              <OutboundLink
                href="https://twitter.com/inkdrop_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://blog.inkdrop.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className="three wide column text-left">
          <a href="https://www.inkdrop.app/">
            © {new Date().getFullYear()} Inkdrop
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
