import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, graphql } from 'gatsby'


// import Header from '../Common/Header/Header'
// import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
import '../scss/Home.scss'


export default class Index extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
        twitchVideos: []
    }
    }
    componentDidMount() {
        fetch('https://api.twitch.tv/kraken/channels/134825589/videos', {
             headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/vnd.twitchtv.v5+json",
            "Client-ID": process.env.GATSBY_CLIENT_ID
        },
        })
        .then(res => res.json())
        .then(data => this.setState({twitchVideos: data.videos}))
    }
    
    render() {
        console.log(this.state.twitchVideos)
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
                    <Row>
                        <Col sm={2} className="offset-md-8">
                            <div className="text-center" style={{padding:"0px 10px 0px 15px",border: "2px solid #FFF", background:"#2C2F33", color: "#FFF", lineHeight: "normal", marginTop: "0.5em"}}>
                            <a href="https://discordapp.com/invite/4k4Sx5b" target="_blank">
                                <span>
                                
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 130"><path class="st0" d="M53.2 20.3H20v37.6l22.1 20V41.4H54c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7H20v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V50.2c0-20.8-16.7-29.9-34.5-29.9zm174.1 60.1V49.6c0-11.1 19.8-13.7 25.8-2.5l18.3-7.5C264.3 23.7 251.1 19 240.2 19c-17.8 0-35.4 10.4-35.4 30.6v30.8c0 20.3 17.6 30.6 35 30.6 11.2 0 24.6-5.6 32-20.1l-19.6-9.1c-4.8 12.4-24.9 9.4-24.9-1.4zm-60.6-26.6c-6.9-1.5-11.5-4-11.8-8.3.4-10.4 16.3-10.7 25.6-.8l14.7-11.4C186 22 175.6 19 164.8 19c-16.3 0-32.1 9.2-32.1 26.8 0 17.1 13 26.2 27.3 28.4 7.3 1 15.4 3.9 15.2 9-.6 9.6-20.2 9.1-29.1-1.8L132 94.8c8.3 10.7 19.6 16.2 30.2 16.2 16.3 0 34.4-9.5 35.1-26.8 1-22-14.8-27.5-30.6-30.4zm-66.9 55.9h22.4V20.3H99.8v89.4zm377.7-89.4h-33.2v37.6l22.1 20V41.4h11.8c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7h-34v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V50.2c.1-20.8-16.6-29.9-34.4-29.9zM314.6 19c-18.4 0-36.7 10.1-36.7 30.7v30.6c0 20.5 18.4 30.7 36.9 30.7 18.4 0 36.7-10.2 36.7-30.7V49.7c0-20.5-18.5-30.7-36.9-30.7zM329 80.3c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.2-14.4-9.7V49.7c0-6.6 7-10.1 14-10.1 7.3 0 14.7 3.2 14.7 10.1v30.6zm102.8-30.6c-.5-21-14.7-29.4-33-29.4h-35.5v89.5H386V81.3h4l20.6 28.4h28L414.4 79c10.8-3.4 17.4-12.7 17.4-29.3zm-32.6 12.1H386V41.4h13.2c14.2 0 14.2 20.4 0 20.4z"/></svg>
                                </span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    
                        {/*<div className="item">
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
                        </div>*/}
                    </nav>
                    { /* END NAVIGATION */ }


                   <div id="banner-cta">
                        <div className="title">Real Developers <span>No Bullshit</span></div>
                        <div className="desc">All-in-one Solution for IoT Automation to ease your efforts. <br />Stop lettting other companies upsale bull$hit. Simplify your life.</div>
                        <div className="overlay"></div>
                    </div>
                    { /* END BANNER CTA */ }
                    
                    <video playsInline autoPlay muted loop poster="" id="bgvid">
                          { /* <source src="https://www.uncensored.tech/techuncensored.webm" type="video/webm" /> */ }
                    </video>
                        
                </header>
                { /* END HEADER SECTION */ }
                    
                <div className="container-fluid">
                     { /* FEATURED BLOG / PODCAST */ }
                     <div className="container ptb20">
                         <Row>
                            <Col sm={12} md={8} id="featuredBlog">
                                <div id="featuredPost" className="p30" style={{ border: "1px solid #FFF" }}>
                                    <div className="postTitle ptb20 fwb ffr fs30">Something About JavaScript</div>
                                    <div className="postImage" style={{ display: "none" }}>
                                        <img alt="post" src="https://s3-us-west-2.amazonaws.com/cosmicjs/60a9c670-2af6-11e7-ae54-e9a1fc58ec22-repetition-success-tech-uncensored.jpg" />
                                    </div>
                                    <div className="postBody fs22">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.
                                    </div>
                                </div>
                                
                                <div id="latestPosts">        
                                 {posts
                                  .map(({ node: post }) => (
                                    <div className="post ptb30">
                                        <div className="postDetails">
                                            <div className="postTitle ptb20 ffr fs30">
                                                <Link className="has-text-primary" to={post.fields.slug}>
                                                  {post.frontmatter.title}
                                                </Link>
                                            </div>
                                            <div className="postBody fs18">
                                                {post.excerpt}
                                            </div>
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
                    <Row id="twitch" style={{ "background":"#6441A4", "borderBottom":"solid 5px #2c2F33" }} className="ptb50">
                        <Col sm={12}>
                            <div className="text-center ffr ptb20 fwb fs50">JOIN TECH UNCENSORED ON TWITCH</div>
                        </Col>
                        <div class="container">
                        {
                            chunkArray(this.state.twitchVideos, 4).map( (chunk, i) => (
                                <Row className="twitchVideo ptb20">
                                {
                                    chunk.map( video => (
                                        <Col sm={12} md={3}>
                                            <div className="twitchVideoImage">
                                                <a href={video.url} target="_blank"><img src={video.preview.large} alt="" /></a>
                                            </div>
                                            <div className="twitchVideoTitle ffr fwb text-center">{video.title}</div>
                                        </Col>                            
                                    ) )
                                }
                                </Row>
                            ) )
                        }
                        
                        {
                            /*
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
                            */
                        }
                            <Row>
                                <Col sm={12} className="text-center ptb30 row">
                                       
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    { /* END TWITCH SECTION */ }
                    
                    { /* REST OF POSTS */ }
                    <div className="container">
                        <Row className="ptb30">
                            <Col md={3}>
                                  <div className="postTitle ptb20 fwb ffr fs30">Something about Javascript</div>
                            </Col>
                            <Col md={5}>
                                  <div className="postBody fs18">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.
                                </div>
                            </Col>
                            <Col md={4}>
                                <img src="http://placehold.it/600x400" alt="picture" />
                            </Col>
                        </Row> 
                        <Row className="ptb30 bt">
                            <Col md={3}>
                                  <div className="postTitle ptb20 fwb ffr fs30">Something about Javascript</div>
                            </Col>
                            <Col md={5}>
                                  <div className="postBody fs18">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.
                                </div>
                            </Col>
                            <Col md={4}>
                                <img src="http://placehold.it/600x400" alt="picture" />
                            </Col>
                        </Row>
                    </div>
                    { /* END POSTS */ }
                    
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

function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
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