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
            <link href={assets.styles[style]} id={i} key={i} media="no-media"
                  rel="stylesheet" type="text/css"/>)}

          {/* resolves the initial style flash (flicker) on page load in development mode */}

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