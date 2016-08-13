import React from 'react';
import {render} from 'react-dom';

const Input = require('./form.js');

class App extends React.Component {
    render(){
        return (
            <div>
              <Input />
              <p>React Rocks!</p>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
