import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({task, onDelete, toggleReminder}) => {
    return (
        <div className = 'task'>
            <h3 
                onDoubleClick={() => toggleReminder(task.id)} 
                style = {task.reminder ? {border:'5px green solid'} : {border:'0px'}}>
                {task.text} 
                <FaTimes style={{color:'red', cursor:'pointer'}} 
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.propTypes = {

}

export default Task
