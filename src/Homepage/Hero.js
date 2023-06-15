
function Hero() {

    const myStyle = {
        zIndex: 50,
        fontSize: '40px',
        textAlign: 'center',
        marginLeft: '30%',
        paddingTop: '5%',
        width: '40%',
        color: 'black'
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
            <img src='/img/Hero1.jpg'
                alt="background"
                width='100%'
                height='70%'
                style={{
                    position: "absolute", zIndex: -1, backgroundSize: 'cover',
                    backgroundPosition: 'center', marginTop: '0.5%', opacity: '60%'
                }}
            />

            {/* <img src='/img/Que.jpg'
                alt="background"
                width='20%'
                height='40%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '1%',
                    border: '0',
                    borderRadius: '10px',
                    marginTop: '8%'
                }}
            /> */}
            {/* <img src='/img/ans2.jpg'
                alt="background"
                width='20%'
                height='40%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '15%',
                    border: '0',
                    borderRadius: '10px',
                    marginTop: '23%'
                }}
            /> */}

            <h1 style={myStyle}>Canadian Immigration Guide</h1>
            <h3 style={{ zIndex: 50, fontSize: '30px', textAlign: 'center', marginLeft: '23%', paddingTop: '', width: '55%', color: 'black' }}>Solution to your queries...</h3>
            {/* <button style={{ zIndex: 50, fontSize: '20px', textAlign: 'center', marginLeft: '45%', paddingTop: '', width: '15%', color: 'white', backgroundColor: 'blueviolet', padding: '10px', border: '0', borderRadius: '10px' }}>Get Started</button> */}
        </div>
    )
}

export default Hero;