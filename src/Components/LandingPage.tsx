import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"
import { ReactComponent as Headerbackground } from "../../assets/Images/bg-curvy-desktop.svg"
import { ReactComponent as AccessAnywhereIcon } from "../../assets/Images/icon-access-anywhere.svg"
import { ReactComponent as SecurityIcon } from "../../assets/Images/icon-security.svg"
import { ReactComponent as CollaborationIcon } from "../../assets/Images/icon-collaboration.svg"
import { ReactComponent as AnyFileIcon } from "../../assets/Images/icon-any-file.svg"

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


                <div className="landing-page__get-started-text-container">
                    <img src="../../Assets/Images/illustration-intro.png" alt="illustration" className="landing-page__illustration-intro" />

                    <h1 className="heading heading--primary">All your files in one secure location, accessible anywhere.</h1>

                    <p className="paragraph paragraph--primary">
                        Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate
                        with friends family, and co-workers.
                    </p>

                    <button className="btn btn--primary">Get Started</button>

                </div>

            </header>


            <main>
                <section className="landing-page__features-container">
                    <div className="landing-page__feature">

                        <AccessAnywhereIcon className="landing-page__icon"/>

                        <h1 className="heading heading--secondary">Access your files, anywhere</h1>
                        <p className="paragraph paragraph--secondary">
                            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <SecurityIcon className="landing-page__icon"/>

                        <h1 className="heading heading--secondary">Security you can trust</h1>
                        <p className="paragraph paragraph--secondary">
                            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help
                            secure your files.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <CollaborationIcon className="landing-page__icon"/>

                        <h1 className="heading heading--secondary">Real-time collaboration</h1>
                        <p className="paragraph paragraph--secondary">
                            Securely share files and folders with friends. family and colleagues for live collaboration. No email attachments
                            required.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <AnyFileIcon className="landing-page__icon"/>

                        <h1 className="heading heading--secondary">Store any type of file</h1>
                        <p className="paragraph paragraph--secondary">
                            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types
                            to be securely stored and shared.
                        </p>
                    </div>

                </section>
            </main>
        </div>
    )
}
