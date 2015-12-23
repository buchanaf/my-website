import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from '../client/src/routes';
import path                      from 'path';
import app                       from '../server';
import webpackDev                from '../webpack/universal.server';

export default function render(app) {
  webpackDev(app);

  app.use(express.static(path.join(__dirname, 'dist')));

  app.use( (req, res) => {
    const location = createLocation(req.url);

    match({ routes, location }, (err, redirectLocation, renderProps) => {
      if(err) {
        return res.status(500).end('Internal server error');
      }

      if(!renderProps) {
        return res.status(404).end('Not found');
      }

      function renderView() {
        const view = ( <RoutingContext {...renderProps} /> );
        const componentHTML = renderToString(InitialView);

        const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Redux Demo</title>

            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="/bundle.js"></script>
          </body>
        </html>
        `;

        return HTML;
      }

      res.end(renderView())

    });
  });
};