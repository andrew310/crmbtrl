import React from 'react';
import {render} from 'react-dom';
import { observable } from 'mobx';
import { Layout, AppBar, Navigation } from 'react-toolbox';
import theme from './theme/AppBar.scss';

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
          <Layout>
            <AppBar theme={theme} fixed>
              <div>crmbtrl</div>
              <Navigation />
            </AppBar>
            <section style={{'padding-top': '100px'}}>
            <Input store={appState}/>
            </section>
          </Layout>
        );
    }
}

render(<App/>, document.getElementById('app'));
