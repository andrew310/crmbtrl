import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import {observer} from 'mobx-react';


@observer class InputTest extends Component {
  render () {
      return (
        <div>
          <section>
            <Input type='text' label='Name' name='name' value={this.props.store.name} onChange={this.handleNameChange.bind(this, 'name')}/>
          </section>
          <div>
          {this.props.store.name}
          </div>
        </div>
      );
  }

  handleNameChange = (name, value) => {
    this.props.store.setName(value);
  }
}

module.exports = InputTest;
