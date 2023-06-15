export default function HeroServices() {
    const divStyle = {
        flex: '1 0 80px',
        margin: '10px',
        padding: '1px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '20px',
        width: '40%',
        minHeight: '350px',
        //backgroundColor: 'gray'
    }

    const subDivStyle = {
        display: 'flex',
        flexWrap: '',
        justifyContent: 'center',
        marginTop: '30px',
        alignItems: 'flex-start'
    }

    const button = {
        marginLeft: '36%',
        textAlign: 'center',
        width: '30%',
        color: 'white',
        backgroundColor: 'blueviolet',
        padding: '10px',
        border: '0',
        borderRadius: '10px'
    }

    return (
        <>
            <img src='/img/heroServiceBack1.jpg'
                alt="background"
                width='100%'
                height='150%'
                style={{
                    position: "absolute", zIndex: -1, backgroundSize: 'cover',
                    backgroundPosition: 'center', marginTop: '4%', opacity: '90%'
                }}
            />
            <div style={{
                width: '93%', border: '', backgroundColor: '',
                padding: '25px', marginLeft: '2%', marginTop: '6%', height: '800px', justifyContent: 'center',
            }}>
                <div style={subDivStyle}>
                    <div style={divStyle}>
                        <img src='/img/visa.jpg'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'
                            }}
                        />
                        <img src='/img/visa1.png'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Canadian Visitor Visa </h3>
                        <p style={{ textAlign: 'center' }}>Visit Canada temporarily for tourism, family visits, business, or conferences. </p>
                    </div>

                    <div style={divStyle}>
                        <img src='/img/work.jpg'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'

                            }}
                        />
                        <img src='/img/worklogo3.png'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Canadian Work Permit </h3>
                        <p style={{ textAlign: 'center' }}>Obtain authorization to work in Canada temporarily.</p>

                        <button style={button}>Get Started</button>
                    </div>

                    <div style={divStyle}>
                        <img src='/img/Immigration1.png'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'
                            }}
                        />
                        <img src='/img/leaf2.jpg'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Express Entry </h3>
                        <p style={{ textAlign: 'center' }}> A system for skilled workers to apply for permanent residence based on their qualifications. </p>
                    </div>
                </div>
                <div style={subDivStyle}>
                    <div style={divStyle}>
                        <img src='/img/citizenship.jpg'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'
                            }}
                        />
                        <img src='/img/citizenlogo1.png'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Citizenship </h3>
                        <p style={{ textAlign: 'center' }}>Attain Canadian citizenship with its associated rights and responsibilities. </p>

                    </div>

                    <div style={divStyle}>
                        <img src='/img/family.jpg'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'
                            }}
                        />
                        <img src='/img/familylogo2.png'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Family Sponsorship </h3>
                        <p style={{ textAlign: 'center' }}>Sponsor eligible family members for Canadian permanent residency. </p>
                    </div>

                    <div style={divStyle}>
                        <img src='/img/study.jpg'
                            alt="background"
                            style={{
                                width: '95%',
                                height: '150px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                padding: '10px'
                            }}
                        />
                        <img src='/img/studylogo2.png'
                            alt="background"
                            style={{
                                width: '25%',
                                height: '50px',
                                border: '0',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                marginLeft: '40%',
                                marginTop: '-7%'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', marginTop: '1%' }}> Study In Canada </h3>
                        <p style={{ textAlign: 'center' }}>Pursue high-quality education as an international student in Canada. </p>
                    </div>

                </div>
            </div>
        </>
    )
}