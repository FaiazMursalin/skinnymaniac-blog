import {Link} from 'react-router-dom';
const Navbar = () => {
    /*const styles =  {color: 'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'};*/

    return (
        <nav className="navbar">
            <h1> The Skinnymaniac Blog</h1>
            <div className="links">
                <Link to="/" /*style={styles}*/>Home</Link>
                <Link to="/create" /*style={styles}*/>New Blog</Link>

            </div>

        </nav>
    );
}
 
export default Navbar
