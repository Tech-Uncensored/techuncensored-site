import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, graphql } from 'gatsby'


// import Header from '../Common/Header/Header'
// import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
import '../scss/Home.scss'


export default class Index extends React.Component {
    render() {
        
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
    
        return (
            <div>
                { /* HEADER SECTION */ }
                <header className="homepage">

                   { /* LOGO */ }
                    <div id="logo"></div>
                    
                    { /* NAVIGATION */ }
                    <nav>
                        <div className="item">
                            <div className="parent">
                                <span>Our Work</span>
                            </div>
                        </div>
                       <div className="item">
                            <div className="parent">
                                <span>About Us</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="parent">
                                <span>Our Blog</span>
                            </div>
                        </div>
                    </nav>
                    { /* END NAVIGATION */ }


                   <div id="banner-cta">
                        <div className="title">Real Developers <span>No Bullshit</span></div>
                        <div className="desc">All-in-one Solution for IoT Automation to ease your efforts. <br />Stop lettting other companies upsale bull$hit. Simplify your life.</div>
                        <div className="btn-wrap">
                            <div className="btn">
                                CALL: 215-515-8324
                                <a href="tel:+12155158324">Call</a>
                            </div>
                            <div className="btn">CHAT NOW</div> 
                        </div>
                        <div className="overlay"></div>
                    </div>
                    { /* END BANNER CTA */ }
                    
                    <video playsInline autoPlay muted loop poster="" id="bgvid">
                         { /* <source src="/techuncensored.webm" type="video/webm" /> */ }
                    </video>
                        
                </header>
                { /* END HEADER SECTION */ }
                    
                <div className="container-fluid">
                     { /* FEATURED BLOG / PODCAST */ }
                     <div className="container ptb20">
                         <Row>
                            <Col sm={12} md={8} id="featuredBlog">
                                <div id="featuredPost">
                                    <div className="featuredPostTitle"></div>
                                    <div className="featuredPostImage"></div>
                                    <div className="featuredPostBody"></div>
                                </div>
                                
                                <div id="latestPosts">        
                                 {posts
                                  .map(({ node: post }) => (
                                    <div className="post ptb30">
                                        <div className="postTitle fwb ffr fs30">
                                            <Link className="has-text-primary" to={post.fields.slug}>
                                              {post.frontmatter.title}
                                            </Link>
                                        </div>
                                        <div className="postBody">
                                            {post.excerpt}
                                        </div>
                                    </div>
                                  ))}
                                  </div>
                            </Col>
                            
                            { /* ANCHOR.FM */ }
                            <Col sm={12} md={4} id="anchorfm">
                                <iframe title="Spotify" src="https://open.spotify.com/embed/show/3yMZnF0xnB1r07PT7V8Dpl" width="300" height="380" frameBorder="0" scrolling="yes" allow="encrypted-media"></iframe>
                            </Col>
                         </Row>
                    </div> 
                    { /* END FEATURED BLOG SECTION */ }

                    { /* TWITCH */ }
                    <Row style={{ "background":"#6441A4", "borderBottom":"solid 5px #2c2F33" }} className="ptb50">
                        <Col sm={12}>
                            <div className="text-center ffr ptb20 fwb fs50">JOIN TECH UNCENSORED ON TWITCH</div>
                        </Col>
                        <div class="container">
                            <Row>
                                <Col sm={12} className="text-center ptb30 row">
                                        <iframe
                                            title="Twitch"
                                            src="https://player.twitch.tv/?channel=techuncensored&muted=true"
                                            height="400"
                                            width="600"
                                            frameBorder="0"
                                            scrolling="false"
                                            allowFullScreen={true}
                                            style={{ margin: "0 auto" }}>
                                        </iframe>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    { /* END TWITCH SECTION */ }
                    
                    { /* DISCORD */ }
                    <Row style={{ "background":"#99AAB5", color: "#2C2F33" }} className="ptb50">
                        <Col sm={12}>
                            <div className="text-center ffr ptb20 fwb fs50">JOIN THE FAM ON OUR COMMUNITY <span style={{color:"#7289DA"}}>DISCORD</span></div>
                        </Col>
                    </Row>
        
                    { /* FOOTER */ }
                    <Row id="footer">
                        <Col sm={12} id="social-wrapper">
                            <div className="social">
                                <div className="facebook">
                                    <a href="https://www.facebook.com/techuncensored/" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                                </div>
                                <div className="twitter">
                                    <a href="https://www.twitter.com/tech_uncensored/" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                                </div>
                                <div className="youtube">
                                    <a href="https://www.youtube.com/channel/UC44jpOmnvm-iTfkq-4Jj4CA" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                                </div>
                                <div className="github">
                                    <a href="https://www.github.com/techuncensored/" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                                </div>
                                <div className="email">
                                    <a href="mailto:uncensored@uncensored.tech">&nbsp;</a>
                                </div>
                            </div>
                            <div className="desc">
                            Educating and making programming fun on our forever learning adventure. <br />Covering all topics of programming &amp; technology. Let's build a community of talent.
                            </div>
                        </Col>
                    </Row>
                    { /* END FOOTER SECTION */ }
                </div>
                { /* END CONTAINER-FLUID SECTION */ }
            </div>
        )
    }
}
    
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
              slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`