import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import path                      from 'path';

import routes                    from '../../src/routes';
import Html                      from '../helpers/html';

export default function render(req, res) {
  const location = createLocation(req.url);

  if (__DEVELOPMENT__) {
    isomorphicTools.refresh();
  }

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      return res.status(500).end('Internal server error');
    }

    if(!renderProps) {
      return res.status(404).end('Not found');
    }

    res.end(renderView(renderProps))

  });
};

function renderView(renderProps) {
  const component = ( <RoutingContext {...renderProps} /> );
  const html = '<!DOCTYPE html>' + renderToString(
    <Html assets={isomorphicTools.assets()} component={component} />
  );

  return html;
}

