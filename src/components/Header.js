import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ onAdd, showAddTask }) => {


    return (
        <header>
            <h1>Task Tracker</h1>
            <Button
                text={showAddTask ? 'Close' : 'Add'}
                color={showAddTask ? 'red' : 'green'}
                onClick={onAdd}
            />
        </header>
    );
};

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'grey'
// }

export default Header
