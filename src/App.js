import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {
    
  render() {
      
  return (
    <div className="container">
        <div className="text-center">
            <h1>Quản lý công việc</h1>
        </div><br/>
        
        <div className="row">
            {/* form */}
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                
                <TaskForm/>
                
            </div>
            
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>            
                <button type="button" className="btn btn-primary" ><i className="fas fa-plus"></i> Thêm công việc</button>
                <button type="button" className="btn btn-danger ml-15" >Thêm dữ liệu</button>
                
                <TaskControl/>
                <TaskList/>
                
            </div>
                        
        </div>
        
    </div>
    
  );
}
}

export default App;
