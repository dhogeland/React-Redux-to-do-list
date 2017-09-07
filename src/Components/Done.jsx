import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markAsIncompleted } from '../Actions/actions';

class Done extends Component {

  markAsIncompleted(task) {
    //THIS MARK AS TASK AS INCOMPLETE
    //THEN IT CALLS TO THE PARENT TO UPDATE THE STATE
    //SO IT WILL TRIGGER A RERENDER AND MOVE THE TASK
    //FROM COMPLETED, TO NEED TO DO
    this.props.markAsIncompleted(task.i)
    this.props.update()
  }
  renderCompletedTask() {
    //THIS GOES THROUGH THE TASKLIST AND
    //MAPS OUT EACH ONE THAT HAS A
    //TRUTHY VALUE ON IT'S COMPLETED KEY
    return this.props.taskList.map(i => {
      return ( <div key={i.id}>
        {
          (i.completed
            ?
            <li key={i.id}>{i.task}
              <button
                onClick={() => this.markAsIncompleted({i})}>
                Not Quite Finished
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
      <div className="main-completed-div">
        This will be the completed task list...
        <ul>
          {this.renderCompletedTask()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   taskList: state.theTaskList
  };
}
const mapDispatchToProps =  {
 markAsIncompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(Done);
