import React from "react"
import { connect } from "react-redux"
import { Button, Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  App,
  EmailForm,
  Icons,
  Image,
  ImageLink,
  PageSection,
  Profile,
} from "../components"
import { sections, WHITEPAPER_URL } from "../constants"
import { actions, actionTypes } from "../redux"

export const HomePageTemplate = ({
  hero = {},
  images = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
  team_section: teamSection = {},
  advisors_section: advisorsSection = {},
  supporters_section: supportersSection = {},
}) => {
  const handleSignupDiscord = ({ email }) => {
    signupMailingList({ email, discordSignup: true })
  }

  return (
    <div className="main-content">
      <PageSection id={sections.HOME}>
        <Row>
          <Col xs={12} sm={7}>
            <h1>{hero.title}</h1>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
          <Col xs={12} sm={5} className="col-circles">
            <Image imageData={images.textureCircle1} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.FEATURED_APPLICATION}>
        <Row className="featured-application">
          <Col xs={12} sm={12}>
            <h2>Featured Application</h2>

            <section className="application tbtc">
              <h3>
                Announcing tBTC: The first “killer app” built using the Keep
                Network
              </h3>

              <p>
                tBTC lets Bitcoin holders deposit and redeem BTC in DeFi without
                centralized intermediaries
              </p>

              <ul className="links">
                <li>
                  <a
                    className="primary"
                    rel="noopener noreferrer"
                    href="https://tbtc.network"
                  >
                    Go to tBTC Website
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://blog.keep.network/introducing-tbtc-the-safest-way-to-earn-with-your-bitcoin-fec077f171f4?"
                  >
                    Read blog post
                  </a>
                </li>
              </ul>
            </section>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.DISCORD}>
        <Row className="discord-signup">
          <Col xs={12} sm={7}>
            <EmailForm
              label="Discord Email"
              placeholder="you@example.com"
              onSubmit={handleSignupDiscord}
              requestStates={ajaxRequestStates}
              request={actionTypes.SIGNUP_MAILING_LIST}
            >
              <h3>
                Join our community on
                <span className="discord-logo">Discord</span>
              </h3>
            </EmailForm>
          </Col>
          <Col xs={12} sm={5} className="col-circles">
            <div>
              <Image imageData={images.textureCircle2} />
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.GITHUB}>
        <Row>
          <Col xs={12} md={12}>
            <h3>
              View the
              <a
                className="github-logo"
                href="https://github.com/keep-network"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              Repository
              <Button
                href="https://github.com/keep-network"
                color="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.ArrowRight />
              </Button>
            </h3>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.MAILING_LIST}>
        <Row>
          <Col sm={12} md={{ size: 8, offset: 2 }}>
            <EmailForm
              label="Email"
              placeholder="you@example.com"
              onSubmit={signupMailingList}
              requestStates={ajaxRequestStates}
              request={actionTypes.SIGNUP_MAILING_LIST}
            >
              <h3>Join our mailing list</h3>
            </EmailForm>
          </Col>
        </Row>
      </PageSection>
      <PageSection
        id={sections.DEFINITION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.CastleGate />
          </div>
          <div className="blurb-text">
            <p>
              Keep: <span>(n.)</span>
            </p>
            <p>
              The strongest or central tower of a castle, acting as a final
              refuge
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.USES}>
        <h2 className="h1">Keep Applications</h2>
        <div className="use-case">
          <Icons.Signing />
          <h4>Decentralized Signing</h4>
        </div>
        <div className="use-case">
          <Icons.Switch />
          <h4>Dead Man Switch</h4>
        </div>
        <div className="use-case">
          <Icons.Wallet />
          <h4>Custodial Wallets</h4>
        </div>
        <div className="use-case">
          <Icons.Cart />
          <h4>Marketplaces for Digital Goods</h4>
        </div>
        <div className="use-case">
          <Icons.BlockchainStorage />
          <h4>Blockchain Storage Encryption</h4>
        </div>
        <div className="use-case">
          <a
            href={WHITEPAPER_URL}
            download="Keep Whitepaper"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.Book color="#48dbb4" />
            <h4>Learn More in the Whitepaper</h4>
          </a>
        </div>
        <div className="blurb-panel blurb-mobile">
          <div className="blurb-icon">
            <Icons.CastleGate />
          </div>
          <div className="blurb-text">
            <p>
              Keep: <span>(n.)</span>
            </p>
            <p>
              The strongest or central tower of a castle, acting as a final
              refuge
            </p>
          </div>
        </div>
        <div className="blurb-panel blurb-mobile">
          <div className="blurb-icon">
            <Icons.Axe />
          </div>
          <div className="blurb-text">
            <p>
              Keeps provide a bridge between the world of public blockchains and
              private data. It enables a new wave of ground-up innovation for
              blockchain developers.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.TEAM} collapsible>
        <h2>{teamSection.title}</h2>
        {teamSection.team.map((member, i) => (
          <Profile
            key={`team-member-${i}`}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.social_links}
          />
        ))}
      </PageSection>
      <PageSection
        id={sections.DESCRIPTION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.Axe />
          </div>
          <div className="blurb-text">
            <p>
              Keeps provide a bridge between the world of public blockchains and
              private data. It enables a new wave of ground-up innovation for
              blockchain developers.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.ADVISORS} collapsible>
        <h2>{advisorsSection.title}</h2>
        {advisorsSection.advisors.map((advisor, i) => (
          <Profile
            key={`advisor-${i}`}
            name={advisor.name}
            title={advisor.title}
            image={advisor.image}
            socials={advisor.social_links}
          />
        ))}
      </PageSection>
      <PageSection id={sections.SUPPORTERS} convex>
        <h2>{supportersSection.title}</h2>
        <Row>
          {supportersSection.supporters.map((supporter, i) => (
            <ImageLink
              key={`supporter-${i}`}
              url={supporter.url}
              label={supporter.name}
              image={supporter.logo}
            />
          ))}
        </Row>
      </PageSection>
    </div>
  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  supporters_section: PropTypes.object,
  team_section: PropTypes.object,
  advisors_section: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedHomePage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(HomePageTemplate)

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    textureCircle1: data.textureCircle1,
    textureCircle2: data.textureCircle2,
  }
  return (
    <App>
      <ConnectedHomePage {...post.frontmatter} images={images} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureCircle1: PropTypes.object,
    textureCircle2: PropTypes.object,
  }),
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
        }
        team_section {
          title
          team {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 274, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            social_links {
              url
            }
          }
        }
        advisors_section {
          title
          advisors {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 274, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            social_links {
              url
            }
          }
        }
        supporters_section {
          title
          supporters {
            name
            url
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
    textureCircle1: file(relativePath: { regex: "/texture-circle.png/" }) {
      childImageSharp {
        fluid(maxWidth: 574, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    textureCircle2: file(relativePath: { regex: "/texture-circle-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
