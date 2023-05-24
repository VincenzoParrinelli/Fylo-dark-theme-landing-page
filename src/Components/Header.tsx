import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"

export default function Header() {
    return (
        <header className="header">

            <nav className="header__navbar">
                <Logo className="header__logo" />

                <div className="header__nav-items">
                    <a href="#" className="header__link">Features</a>
                    <a href="#" className="header__link">Team</a>
                    <a href="#" className="header__link">Sign In</a>
                </div>
            </nav>


            <div className="header__get-started-text-container">
                <img src="../../Assets/Images/illustration-intro.png" alt="illustration" className="header__illustration-intro" />

                <h1 className="heading-primary">
                    All your files in one secure location, <br /> accessible anywhere.

                </h1>

                <p className="paragraph-primary">
                    Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate
                    with friends family, and co-workers.
                </p>

                <button className="btn btn--primary">Get Started</button>

            </div>

        </header>
    )
}
