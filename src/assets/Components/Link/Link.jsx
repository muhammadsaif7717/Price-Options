import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div>
            <li className="mx-2" key={route.id}><a href={route.path}></a>{route.name}</li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.array.isRequired,
}
export default Link;