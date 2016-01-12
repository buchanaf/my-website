import React, {Component, PropTypes} from 'react';

export default class html extends Component {
  static propTypes = {
    assets    : PropTypes.object,
    component : PropTypes.object,
  };

  render() {
    const { assets, component, store } = this.props;

    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          <title>Alex's Website</title>

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>)}

          {/* resolves the initial style flash (flicker) on page load in development mode */}
          { <style dangerouslySetInnerHTML={{__html: require('../../src/css/main.css')}}/>}
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
          {Object.keys(assets.javascript).map((script, i) =>
            <script src={assets.javascript[script]} key={i}/>
          )}
        </body>
      </html>
    )
  }
}