import Header from "./Header";
import Footer from './Footer'
import HeroServices from "./HeroServices";
import Hero from "./Hero";
import Why from "./Why";



export function ProjectLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}

                <Hero />
                <HeroServices />
                <Why />

            </div>
            <Footer />
        </div>
    )
}
