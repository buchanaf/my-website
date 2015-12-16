import React, { Component } from 'react';

import Masthead from 'components/masthead';
import Button from 'components/button';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Masthead />
        <Button>
            Test
        </Button>
        <Button>
          Test
        </Button>
      </div>
    );
  }
}
