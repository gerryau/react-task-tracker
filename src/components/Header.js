// convention for components is uppercase
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <div>
            <header className ='header'>
                <h1>{title}</h1>
                <Button color='green' text='Add' onClick= {onClick}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color:'red',backgroundColor:'black'
// }

export default Header
