import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button text='Add' color='green' onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    title: "task tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'grey'
// }

export default Header
