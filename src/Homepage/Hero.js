
function Hero() {

    const myStyle = {
        zIndex: 50,
        fontSize: '40px',
        textAlign: 'center',
        marginLeft: '25%',
        paddingTop: '5%',
        width: '55%'
    };
    return (
        <div>

            {/* <img src='/img/immigration.png'
                alt="country immigration"
                width='40%'
                height='70%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '1%', marginTop: '5%'
                }}
            /> */}

            <h1 style={myStyle}>Welcome to Canadian Immigration Guide</h1>
            <h3 style={{ zIndex: 50, fontSize: '30px', textAlign: 'center', marginLeft: '25%', paddingTop: '', width: '55%', color: 'blueviolet' }}>Let's start to resolve your queries...</h3>
            <button style={{ zIndex: 50, fontSize: '20px', textAlign: 'center', marginLeft: '45%', paddingTop: '', width: '15%', color: 'white', backgroundColor: 'blueviolet', padding: '10px', border: '0', borderRadius: '10px' }}>Get Started</button>
        </div>
    )
}

export default Hero;