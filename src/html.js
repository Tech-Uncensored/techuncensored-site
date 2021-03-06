import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}


export default class HTML extends React.Component {
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
          css = (
            <style
              id="gatsby-inlined-css"
              dangerouslySetInnerHTML={{ __html: stylesStr }}
            />
          )
        }
    
        return (
            <html>
                <head>
                  <meta charSet="utf-8" />
                  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-grid.min.css" rel="stylesheet" />       
                  {this.props.headComponents}
                  {css}
                </head>
                <body>
                  {this.props.preBodyComponents}
                  <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: this.props.body }}
                  />
                  {this.props.postBodyComponents}
                </body>
            </html>    
        )
    }
}