This is a to do app written in React and using Redux.

It consist of:
  An App component to hold all the other components.<br>
  A NavBar component to hold the title.
  An Input component with an input field and submit button.
  A NeedToDo component for rendering incomplete task with a button
    to mark a task as completed.
  A Done component for rendering completed task with a button to
    mark a task as incomplete.

When the buttons on the NeedToDo & Done components are clicked, it
 triggers an update function on the App component to set the state so
 that it will be re-rendered and the child components will reflect if
 the task has been completed or not.

 It uses 'react', 'react-dom', 'redux' & 'react-redux'.
