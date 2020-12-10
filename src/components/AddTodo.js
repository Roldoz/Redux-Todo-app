import React, { Component } from 'react';
import { connect } from 'react-redux';
import { insertTodo } from "../redux/actions"
import { TextField, Button,Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class AddTodo extends Component {
    state = { 
        input : ""
     }

     
     handleChange = (e) => {
         this.setState({
             input : e.target.value
         })
     }

     handleClick = () =>{
         this.props.insertTodo(this.state.input)
         this.setState({input : ''})
     }
    render() { 
        return ( 
            <div className='addTodo'>
                <TextField id="standard-basic" label="New Todo" value={this.state.input} onChange={this.handleChange} />
                
        <Fab color="primary" onClick={this.handleClick}  >
          <AddIcon />
        </Fab>
        
                {/* <input type="text" value={this.state.input} onChange={this.handleChange} /> */}
                {/* <button className="button" onClick={this.handleClick}>Add New</button> */}
            </div>
         );
    }
}
 
export default connect(null,{insertTodo}) (AddTodo);