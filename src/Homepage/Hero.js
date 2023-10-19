import '../CSS/HeroStyle.css'

function Hero() {
    return (
        <div>
            <img src='/img/Hero1.jpg'
                alt="background"
                width='100%'
                height='70%'
                className='imgStyle'
            />

            <h1 className="myStyle">Canadian Immigration Guide</h1>
            <h3 className='myStyleSub'>Solution to your queries...</h3>
            {/* <button style={{ zIndex: 50, fontSize: '20px', textAlign: 'center', marginLeft: '45%', paddingTop: '', width: '15%', color: 'white', backgroundColor: 'blueviolet', padding: '10px', border: '0', borderRadius: '10px' }}>Get Started</button> */}
        </div>
    )
}

export default Hero;