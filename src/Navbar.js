const Navbar = () => {
    /*const styles =  {color: 'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'};*/

    return (
        <nav className="navbar">
            <h1>The Skinnymaniac Blog</h1>
            <div className="links">
                <a href="/" /*style={styles}*/>Home</a>
                <a href="/create" /*style={styles}*/>New Blog</a>

            </div>

        </nav>
    );
}
 
export default Navbar
