export default function Why() {
    const myStyle = {
        zIndex: 50,
        fontSize: '40px',
        textAlign: 'center',
        marginLeft: '-15%',
        paddingTop: '23%',
        width: '55%'
    };
    return (
        <div>
            <img src='/img/why.jpg  '
                alt="country immigration"
                width='20%'
                height='20%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '3%', marginTop: '15%', border: 0, borderRadius: '5%'
                }}
            />
            <h1 style={myStyle}>Immigration<br /> Guide</h1>
        </div>
    )
}