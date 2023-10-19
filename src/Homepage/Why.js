export default function Why() {
    const myStyle = {
        zIndex: 50,
        fontSize: '40px',
        textAlign: 'center',
        marginLeft: '1%',
        marginTop: '70%',
        width: '55%'
    };
    return (
        <div>

            <h1 style={myStyle}>Why Immigration Guide</h1>
            <p style={{ width: '48%', marginLeft: '7%', fontSize: '18px' }}>Our website is designed to assist individuals seeking to immigrate to Canada. We provide comprehensive guidance on immigration services and consolidate valuable resources in one place. Our forum allows users to ask immigration-related questions and receive answers from experienced individuals. We understand the challenges of the immigration process firsthand and are dedicated to providing accurate information and a supportive community to make your journey smoother. Join us and achieve your dreams of immigrating to Canada.</p>
            <img src='/img/why1.jpg  '
                alt="country immigration"
                width='35%'
                height='68%'
                style={{
                    position: "absolute", marginLeft: '60%', marginTop: '-26%', border: 0, borderRadius: '1%', opacity: '50%'
                }}
            />
        </div>
    )
}