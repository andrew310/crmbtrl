import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { observer } from 'mobx-react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';
import { Button } from 'react-toolbox/lib/button';

var styles = {

  input : {
    'padding' : '20px'
  }
}

@observer class InputTest extends Component {

  render () {
      return (
        <div>
          <div class="mdl-grid">
            <div >
            <Card raised='true'>

              <CardTitle title='New Crumb' />

              <CardText>
              <Input type='text' icon='link' label='Url' name='name' value={this.props.store.name} onChange={this.handleNameChange.bind(this, 'name')} />
              <Input type='text' icon='edit' label='Description' name='description' multiline='true' value={this.props.store.description} onChange={this.handleDescriptionChange.bind(this, 'description')}/>
              </CardText>

              <CardActions >
                <Button icon='add' label='Save Crumb' raised accent />
                <Button icon='cancel' label='Cancel' flat />
              </CardActions>

            </Card>
            </div>
          </div>
        </div>
      );
  }

  handleNameChange = (name, value) => {
    this.props.store.setName(value);
  }

  handleDescriptionChange = (description, value) => {
    this.props.store.setDescription(value);
  }
}

module.exports = InputTest;
