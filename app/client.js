import React from 'react';
import {render} from 'react-dom';
import { observable } from 'mobx';


const Input = require('./form.js');

const appState = observable({
  name : '',
  description : ''
})

appState.setName = function(n){
  this.name = n;
}

appState.setDescription = function(d){
  this.description = d;
}

class App extends React.Component {
    render(){
        return (
            <div>
            <section>
              <Input store={appState}/>
            </section>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
