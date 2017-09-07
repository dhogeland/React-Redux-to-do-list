import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  markAsCompleted } from '../Actions/actions';


class NeedToDo extends Component {

  markAsCompleted(task) {
    //THIS MARKS THE TASK AS COMPLETED
    //THEN IT CALLS TO THE PARENT TO UPDATE THE STATE
    //SO IT WILL TRIGGER A RERENDER AND MOVE THE TASK
    //FROM NEED TO DO, TO COMPLETED
    this.props.markAsCompleted(task.i)
    this.props.update()
  }
  renderTodoTask() {
    //THIS GOES THROUGH THE TASKLIST AND
    //MAPS OUT EACH ONE THAT HAS A
    //FALSEY VALUE ON IT'S COMPLETED KEY
    return this.props.taskList.map(i => {
      return ( <div key={i.id}>
        {
          (!i.completed
            ?
            <li key={i.id}>{i.task}
              <button
                onClick={() => this.markAsCompleted({i})}>
                Completed
              </button>
            </li>
            :
            null
          )
        } </div>
      )
    })
  }
  render() {
    return (
      <div className="main-to-do-div">
        This will be the to do task...
        <ul>
            {this.renderTodoTask()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  //THIS IS TO GET THE STORE PROPS
  //AND ASSIGN THEM TO THE COMPONENT PROPS
  return {
   taskList: state.theTaskList
  };
}
const mapDispatchToProps =  {
 markAsCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedToDo);
