import '../CSS/HeroServicesStyle.css'
export default function HeroServices() {

    return (
        <>
            <img src='/img/servicehome.jpg'
                alt="service"
                width='100%'
                height='135%'
                className="imgBack"
            />
            <div className="mainDiv">
                <div className="subDivStyle">

                    <div className="divStyle">
                        <img src='/img/visa.jpg' alt="visa" className="imageStyle" />
                        <img src='/img/visa1.png' alt="visa" className="logoStyle" />
                        <h3 className="h3"> Canadian Visitor Visa </h3>
                        <p style={{ textAlign: 'center' }}>Visit Canada temporarily for tourism, family visits, business, or conferences. </p>
                        <button className="button">Get Started</button>
                    </div>

                    <div className="divStyle">
                        <img src='/img/work.jpg' alt="work" className="imageStyle" />
                        <img src='/img/worklogo3.png' alt="work" className="logoStyle" />
                        <h3 className="h3"> Canadian Work Permit </h3>
                        <p style={{ textAlign: 'center' }}>Obtain authorization to work in Canada temporarily.</p>
                        <button className="button">Get Started</button>
                    </div>

                    <div className="divStyle">
                        <img src='/img/Immigration1.png' alt="express" className="imageStyle" />
                        <img src='/img/leaf2.jpg' alt="express" className="logoStyle" />
                        <h3 className="h3"> Express Entry </h3>
                        <p style={{ textAlign: 'center' }}> A system for skilled workers to apply for permanent residence based on their qualifications. </p>
                        <button className="button">Get Started</button>
                    </div>
                </div>

                <div className="subDivStyle">

                    <div className="divStyle">
                        <img src='/img/citizenship.jpg' alt="citizen" className="imageStyle" />
                        <img src='/img/citizenlogo1.png' alt="citizen" className="logoStyle" />
                        <h3 className="h3"> Citizenship </h3>
                        <p style={{ textAlign: 'center' }}>Attain Canadian citizenship with its associated rights and responsibilities. </p>
                        <button className="button">Get Started</button>
                    </div>

                    <div className="divStyle">
                        <img src='/img/family.jpg' alt="family" className="imageStyle" />
                        <img src='/img/familylogo2.png' alt="family" className="logoStyle" />
                        <h3 className="h3"> Family Sponsorship </h3>
                        <p style={{ textAlign: 'center' }}>Sponsor eligible family members for Canadian permanent residency. </p>
                        <button className="button">Get Started</button>
                    </div>

                    <div className="divStyle">
                        <img src='/img/study.jpg' alt="study" className="imageStyle" />
                        <img src='/img/studylogo2.png' alt="study" className="logoStyle" />
                        <h3 className="h3"> Study In Canada </h3>
                        <p style={{ textAlign: 'center' }}>Pursue high-quality education as an international student in Canada. </p>
                        <button className="button">Get Started</button>
                    </div>

                </div>
            </div>
        </>
    )
}