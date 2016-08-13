import React from 'react';
import Input from 'react-toolbox/lib/input';

class InputTest extends React.Component {
  render () {
      return (
        <section>
          <Input type='text' label='Name'/>
          Hello
        </section>
      );
  }
}

module.exports = InputTest;
