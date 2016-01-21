import React, {Component, PropTypes} from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

export default class html extends Component {
  static propTypes = {
    assets    : PropTypes.object,
    component : PropTypes.object,
  };

  render() {
    const { assets, component, store } = this.props;
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/dist/favicon.ico" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>)}

          {/* resolves the initial style flash (flicker) on page load in development mode */}
          { <style dangerouslySetInnerHTML={{__html: require('../../src/css/main.css')}}/>}
          <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-72758609-1', 'auto');
            ga('send', 'pageview');
          </script>
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: renderToString(component)}}/>
          {Object.keys(assets.javascript).map((script, i) =>
            <script src={assets.javascript[script]} key={i}/>
          )}
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(assets)};`}} charSet="UTF-8"/>
        </body>
      </html>
    )
  }
}