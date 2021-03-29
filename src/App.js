import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NaavBar from './components/NaavBar';
import TaskForm from './components/TaskForm';
import TaskListTable from './components/TaskListTable';

class App extends Component{
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <div className="container" style={{marginTop:20}}>
       <NaavBar/>
       <Switch>
       <Route exact path="/form" component={TaskForm}/>  
       <Route exact path="/form/:id" component={TaskForm}/> 
       <Route path="/" component={TaskListTable}/>
       </Switch>
       
      
       </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
