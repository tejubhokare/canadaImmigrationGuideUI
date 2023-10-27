
function Header() {
    const myStyle = {
        zIndex: 50,
        fontSize: '15px',
        marginLeft: '2.1%',
        paddingTop: '4.5%',
        width: '30%',
        color: 'black',
    };
    const navigationStyle = {
        display: 'inline-block',
        padding: '7px',
        //border: '1px solid black',
        width: '9%',
        textAlign: 'center',
        margin: '0',
        cursor: 'pointer',
        color: 'Black',
        //backgroundColor: 'blueviolet',
        textDecoration: 'none',
        fontSize: '20px'
    };

    const item1Navigation = {
        textDecoration: 'none',
        margin: 0,
        marginLeft: '20%',
        display: 'inline-block',
        //border: '1px solid black',
        width: '9%',
        textAlign: 'center',
        padding: '7px',
        cursor: 'pointer',
        color: 'black',
        fontSize: '20px'
        //backgroundColor: 'blueviolet',

    };

    const sharedButtonStyle = {
        position: "absolute",
        fontSize: '14px',
        marginTop: '-1%',
        padding: '3px',
        width: '6%',
        color: 'white',
        border: '0',
        borderRadius: '10px',
        backgroundColor: 'olive',
        cursor: 'Pointer',
    }

    const buttonStyle1 = {
        ...sharedButtonStyle,
        marginLeft: '86%'

    };
    const buttonStyle2 = {
        ...sharedButtonStyle,
        marginLeft: '93%'
    };

    const hyperlinkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const searchStyle = {
        position: "absolute",
        marginLeft: '86%',
        padding: '5px',
        width: '12%',
        marginTop: '-4%'
    }
    return (
        <header >

            <div>
                <img src='/img/canada.png'
                    alt="country"
                    width='16%'
                    height='13%'
                    style={{
                        position: "absolute", zIndex: -1, marginLeft: '2%', marginTop: '-1%'
                    }}
                />
                <h1 style={myStyle}>Canadian Immigration Guide</h1>

                <nav style={{ position: 'relative' }}>
                    <ul style={{ listStyleType: 'none', textDecoration: 'none', padding: '', marginTop: '-6%' }}>

                        <a href="/" style={hyperlinkStyle}><li style={item1Navigation}><b>Home</b></li></a>
                        <a href="/services" style={hyperlinkStyle}><li style={navigationStyle}><b>Services</b></li></a>
                        <a href="/forum" style={hyperlinkStyle}><li style={navigationStyle}><b>Forum</b></li></a>
                        <li style={navigationStyle}><b>Tracker </b></li>
                        <li style={navigationStyle}><b>About</b></li>
                        <li style={navigationStyle}><b>Contact Us</b></li></ul>
                </nav>
                <input style={searchStyle} type="search" placeholder="Search here" />
                <a href="/login" style={{ textDecoration: 'none', color: 'blue' }}><button style={buttonStyle1} ><b>Login</b></button ></a>
                <a href="/register" style={{ textDecoration: 'none', color: 'blue' }}><button style={buttonStyle2} ><b>Register</b></button ></a>


            </div>
        </header >

    );
};

export default Header;


