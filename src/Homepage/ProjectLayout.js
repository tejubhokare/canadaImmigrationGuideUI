import Header from "./Header";
import Footer from './Footer'

export function ProjectLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
