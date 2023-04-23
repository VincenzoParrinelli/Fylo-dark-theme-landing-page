import { ReactComponent as Logo } from "../../public/Assets/Images/logo.svg"
import { ReactComponent as Headerbackground } from "../../public/assets/Images/bg-curvy-desktop.svg"

export default function LandingPage() {
    return (
        <div className="landing-page">

            <header className="landing-page__header">

                <nav className="landing-page__navbar">
                    <Logo className="landing-page__logo" />

                    <div className="landing-page__nav-items">
                        <a href="#" className="landing-page__link">Features</a>
                        <a href="#" className="landing-page__link">Team</a>
                        <a href="#" className="landing-page__link">Sign In</a>
                    </div>
                </nav>


                <div className="landing-page__test">
                    <img src="../../public/Assets/Images/illustration-intro.png" alt="illustration" className="landing-page__illustration-intro" />

                    <h1 className="heading-primary">All your files in one secure location, accessible anywhere.</h1>
                </div>


            </header>


            <main>

            </main>
        </div>
    )
}
