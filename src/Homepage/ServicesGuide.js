
function ServicesGuide() {
    const navigationStyle = {
        display: 'inline-block',
        padding: '10px',
        border: '1px solid black',
        width: '15%',
        textAlign: 'center',
        marginLeft: '7%',
        marginTop: '2%'
    };
    const myStyle = {
        zIndex: 50,
        fontSize: '15px',
        marginLeft: '3.1%',
        paddingTop: '7%',
        width: '30%',
        color: 'black',

    };
    return (
        <div>
            <img src='/img/canada.png'
                alt="country"
                width='16%'
                height='13%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '3%', marginTop: '1%'
                }}
            />
            <h1 style={myStyle}>Canadian Immigration Guide</h1>
            <img src='/img/services.png'
                alt="country immigration services"
                width='20%'
                height='40%'
                style={{ position: "absolute", zIndex: -1, marginLeft: '70%' }}
            />

            <h1 style={{ textAlign: 'center' }}>Our Services...</h1>
            <button style={navigationStyle}>Visitor Visa</button><br /><br />
            <button style={navigationStyle}>Work Permit</button><br /><br />
            <button style={navigationStyle}>Perment Residence</button><br /><br />
            <button style={navigationStyle}>CitizenShip</button>

        </div >
    )
}

export default ServicesGuide;