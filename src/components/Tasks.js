import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks, onDelete, toggleReminder}) => {
    return (
        <>
          {tasks.map((task)=> (
            <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
          ))}  
        </>
    )
}

Tasks.propTypes = {

}

export default Tasks
