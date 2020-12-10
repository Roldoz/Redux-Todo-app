import React from "react";
import { connect } from "react-redux";
import toggleTodo from '../redux/actions'
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Todo = (props) => {
  return (
    <>
      <li onClick={()=> props.toggleTodo(props.row.id)}>
        {props.row && props.row.complete ? (
          <CheckCircleIcon style={{ color: "#00b686"}}></CheckCircleIcon>
        ) : (
          <CancelIcon style={{ color: "#ff616f" }}></CancelIcon>
        )}  {props.row.content}
      </li>
    </>
  );
};

const mapDispatchToProps = dispatch =>{
    return{
        toggleTodo : id => dispatch(toggleTodo(id))
    }
}

export default connect(null,mapDispatchToProps)(Todo);
