import { ReactComponent as Logo } from "../assets/Images/logo.svg"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-page__header">
                <Logo className="landing-page__logo"/>

                <nav className="landing-page__navbar">
                    <a href="#" className="landing-page__link">Features</a>
                    <a href="#" className="landing-page__link">Team</a>
                    <a href="#" className="landing-page__link">Sign In</a>
                </nav>
            </header>
        </div>
    )
}
