import PropTypes from 'prop-types'

export default function Navbar() {
    return (
        <>
   <nav className='mb-2'>
        <button className="menu_icon">
            <i className="fa fa-bars"></i>
        </button>

        {/* <button>
            <img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy logo" />
        </button> */}
{/* 
        <button className="cat" type="button">Categories</button> */}

        
        {/* <form>
            <button type="button" onclick="search()">
                <i className="fa fa-search"></i>
            </button>
            <input id="search_query" type="text" placeholder="Search for anything" />
        </form>
        */}

     
        <button className="login" type="button">Login</button>
        <button className="sign_up" type="button">Sign Up</button>



    </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}