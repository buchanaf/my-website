import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from '../client/src/routes';
import path                      from 'path';
import webpackDev                from '../webpack/universal.server';
import Html                      from './html';

const PORT = process.env.PORT || 3000;
const app = new express();

webpackDev(app);

app.use(express.static(path.join(__dirname, 'dist')));
app.use( (req, res) => {
  const location = createLocation(req.url);
  isomorphicTools.refresh();

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      return res.status(500).end('Internal server error');
    }

    if(!renderProps) {
      return res.status(404).end('Not found');
    }

    res.end(renderView(renderProps))

  });
});

function renderView(renderProps) {
  const component = ( <RoutingContext {...renderProps} /> );
  const html = '<!DOCTYPE html>' + renderToString(
    <Html assets={isomorphicTools.assets()} component={component} />
  );

  return html;
}

app.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});