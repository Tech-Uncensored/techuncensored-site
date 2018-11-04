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
                <div className="container-fluid">
                    <header className={(window.location.pathname.substr(1) === '') ? 'homepage' : 'subpage'}>
                        <video playsInline autoPlay muted loop poster="" id="bgvid">
                             { /* <source src="/techuncensored.webm" type="video/webm" /> */ }
                        </video>
                                   
                        <div className='header'>
                            <div id="logo"></div>
                            <nav className="nav container-fluid" id="nav">
                                <div className="item">
                                    <div className="parent">
                                        <span>What We Do</span>
                                    </div>
                                    
                                    <Row className="children" style={ {'display':'none'} }>
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="nav-section-title">Services</div>
                                                <ul className="nav-section-list hide"></ul>
                                        </Col>
                                        
                                        <Col sm={12} md={6} lg={3}>
                                            <div className="nav-section-title">Highlighted Skills</div>
                                                <ul className="nav-section-list hide"></ul>
                                        </Col>
                                        
                                        <Col sm={12} lg={6} id="showcase">
                                            <div className="row">
                                                <div className="col-md-12 showcase one">
                                                    <div className="title">IOT Automation</div>
                                                </div>
                                                
                                                <div style={ { padding:'40px 0', width:'100%' } }></div>
                                               
                                                <div className="col-md-5 showcase two">
                                                    <div className="title">A/V Reality</div>
                                                </div>
                                                <div className="col-md-5 offset-md-2 showcase three">
                                                    <div className="title">all the things</div>
                                                </div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </div>
                                <div className="item">
                                    <div className="parent">
    
                                        <span>Our Work</span>
    
                                    </div>
                                </div>
                               <div className="item ">
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
                                
                            <div className="mobile-menu"></div>
                                
                        </div>                            
    
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
    
            
                    </header>
                    
                     { /* FEATURED BLOG / PODCAST */ }
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
                                <div className="post">
                                    <div className="postTitle">
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
                    

                    { /* TWITCH */ }
                    <Row style={{ "background":"#6441A4" }}>
                        <Col sm={12}>
                            <div className="text-center ptb50 ffr fwb">JOIN US ON TWITCH</div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="text-center ptb30 row">
                            <Col sm={12} md={7}>
                                <iframe
                                    title="Twitch"
                                    src="https://player.twitch.tv/?channel=techuncensored&muted=true"
                                    height="400"
                                    width="600"
                                    frameBorder="0"
                                    scrolling="false"
                                    allowFullScreen={true}>
                                </iframe>
                            </Col>
                            <Col sm={12} md={5}>TWITCH</Col>
                        </div>
                    </Row>
                    
                    { /* DISCORD */ }
                    <Row style={{ "background":"#99AAB5" }}>
                        <Col sm={12}>
                            <div className="text-center ptb50 ffr fwb">JOIN US ON DISCORD</div>
                        </Col>
                    </Row>

                    <Row className="service-row">
                        <Col sm={12} lg={6} className="bg1">
                            <div className="service-box">
                                <h2 className="service-title">
                                    Automation saves money!
                                </h2>
                                <div className="service-description">
                                   <h4>Invest in automating repetitive, manual tasks in your workplace and see an incredible long-term ROI.</h4>
                                    <div className="service-btn"></div>
                                </div>                        
                            </div>
                            <div className="overlay"></div>
                        </Col>
                        
                        <Col sm={12} lg={6} className="bg2">
                            <div className="service-box">
                                <h2 className="service-title">
                                    Custom Software Development
                                </h2>
                                <div className="service-description">
                                   <h4>Tech_Uncensored creates applications customized to your business. Updated performance and security comes standard.</h4>
                                    <div className="service-btn"></div>
                                </div>                        
                            </div>
                            <div className="overlay"></div>
                        </Col>
                    </Row>
        
                    <Row className="callout fs30 fwb ptb50">
                        <Col sm={12}>
                            <div className="text-center">
                                50% of statistics are made up according to several unconfirmed sources
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="service-row">
                        <Col sm={12} lg={6} className="bg3">
                            <div className="service-box">
                                <h2 className="service-title">
                                    Website Development
                                </h2>
                                <div className="service-description">
                                    <h4>Web Development standards are changing regularly, and Tech_Uncensored commits to keeping your application current with Responsive and Progressive implemtations.</h4>
                                    <div className="service-btn"></div>
                                </div>                        
                            </div>
                            <div className="overlay"></div>
                        </Col>
                        <Col sm={12} lg={6} className="bg4">
                            <div className="service-box">
                                <h2 className="service-title">
                                    Digital Signage
                                </h2>
                                <div className="service-description">
                                    <h4>IoT is cost-effective and efficient. Plug-and-play solutions for Digital Signage and other IoT enhancements can help enhance your business and Tech_Uncensored can help!</h4>
                                    
                                </div>                        
                            </div>
                            <div className="overlay"></div>
                        </Col>
                    </Row>
                    
                </div>
        
                <div className="container">
                    <Row className="ptb20">
                        <Col sm={12} className="text-center fwl fs30 ffr">
                            Read Tech Uncensored Publications
                        </Col>
                    </Row>
                </div>
            
                
        
        
                <div id="homesplash-footer">
           
                    <div className="footerContent">
                    <Row className="navigation">
                        <Col sm={12} md={6}>
                            <ul>
                                <li>Tech Uncensored Blog</li>                            
                                <li>Custom IoT Development</li>
                                <li>Custom Software Engineering</li>
                                <li>Education / Speaking Opportunities</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6}>
                            <ul>
                                <a href="https://twitter.com/tech_uncensored"><li>Twitter</li></a>
                                <a href="https://snapchat.com"><li>Snapchat</li></a>
                                <a href="https://www.facebook.com/techuncensored/"><li>Facebook</li></a>
                                <a href="https://www.instagram.com/tech_uncensored/"><li>Instagram</li></a>
                            </ul>
                        </Col>
                       
                    </Row>
                    <div className="greybar"></div> 
                    <div className="ctaFooter">
                    Educating and making programming fun on our forever learning adventure. <br /> Covering all topics of programming & technology. Let's build a community of talent.
                    </div>
                 </div>
                   
            </div>
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