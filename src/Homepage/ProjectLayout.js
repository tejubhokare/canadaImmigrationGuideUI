import Header from "./Header";
import Footer from './Footer'
import HeroServices from "./HeroServices";

export function ProjectLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
                <HeroServices />
            </div>
            <Footer />
        </div>
    )
}
