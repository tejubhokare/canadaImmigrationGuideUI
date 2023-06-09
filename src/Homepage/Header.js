import Hero from "./Hero";
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
        border: '1px solid black',
        width: '10%',
        textAlign: 'center',
        margin: '0',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'blueviolet',
        textDecoration: 'none'

        //borderRadius: '5px',
    };

    const item1Navigation = {
        textDecoration: 'none',
        margin: 0,
        marginLeft: '20%',
        display: 'inline-block',
        border: '1px solid black',
        width: '10%',
        textAlign: 'center',
        padding: '7px',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'blueviolet',
        //borderRadius: '5px',
    };

    const buttonStyle = {
        fontSize: '17px',
        marginLeft: '3%',
        padding: '10px',
        width: '10%',
        color: 'white',
        display: 'inline-block',
        //margin: '0',
        border: '0',
        borderRadius: '10px',
        backgroundColor: 'blueViolet',
        cursor: 'Pointer'

    };

    const hyperlinkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    return (
        <header >

            <div>
                {/* <img src='/img/front.jpg'
                    alt="background"
                    width='100%'
                    height='100%'
                    style={{
                        position: "absolute", zIndex: -1, backgroundSize: 'cover',
                        backgroundPosition: 'center', marginTop: '-1.5%', opacity: '35%'
                    }}
                /> */}
                <img src='/img/canada.png'
                    alt="country"
                    width='16%'
                    height='13%'
                    style={{
                        position: "absolute", zIndex: -1, marginLeft: '2%', marginTop: '-1%'
                    }}
                />
                <h1 style={myStyle}>Canadian Immigration Guide</h1>

                <nav >
                    <ul style={{ listStyleType: 'none', textDecoration: 'none', padding: '', marginTop: '-6%' }}>

                        <li style={item1Navigation}><b>Home</b></li>
                        <a href="/services" style={hyperlinkStyle}><li style={navigationStyle}><b>Services</b></li></a>
                        <a href="/forum" style={hyperlinkStyle}><li style={navigationStyle}><b>Forum</b></li></a>
                        <li style={navigationStyle}><b>Tracker </b></li>
                        <li style={navigationStyle}><b>About</b></li>
                        <a href="/login" style={{ textDecoration: 'none', color: 'blue' }}><button style={buttonStyle} ><b>Login</b></button ></a>

                    </ul>
                </nav>
                <Hero />
            </div>
        </header >

    );
};

export default Header;


