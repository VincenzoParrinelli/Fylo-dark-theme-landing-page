import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"
import { ReactComponent as AccessAnywhereIcon } from "../../assets/Images/icon-access-anywhere.svg"
import { ReactComponent as SecurityIcon } from "../../assets/Images/icon-security.svg"
import { ReactComponent as CollaborationIcon } from "../../assets/Images/icon-collaboration.svg"
import { ReactComponent as AnyFileIcon } from "../../assets/Images/icon-any-file.svg"
import { ReactComponent as ArrowIcon } from "../../assets/Images/icon-arrow.svg"
import { ReactComponent as PositionIcon } from "../../assets/Images/position-marker-svgrepo-com.svg"
import { ReactComponent as PhoneRingingIcon } from "../../assets/Images/phone-call-ringing-svgrepo-com.svg"
import { ReactComponent as GmailIcon } from "../../assets/Images/gmail-svgrepo-com.svg"
import { ReactComponent as FacebookIcon } from "../../assets/Images/facebook-176-svgrepo-com.svg"
import { ReactComponent as Twittericon } from "../../assets/Images/twitter-154-svgrepo-com.svg"
import { ReactComponent as Instagramicon } from "../../assets/Images/instagram-167-svgrepo-com.svg"

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

            <main>

                <section className="landing-page__features-container">

                    <div className="landing-page__feature">

                        <AccessAnywhereIcon className="landing-page__icon" />

                        <h1 className="heading-secondary">Access your files, anywhere</h1>
                        <p className="paragraph-secondary">
                            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <SecurityIcon className="landing-page__icon" />

                        <h1 className="heading-secondary">Security you can trust</h1>
                        <p className="paragraph-secondary">
                            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help
                            secure your files.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <CollaborationIcon className="landing-page__icon" />

                        <h1 className="heading-secondary">Real-time collaboration</h1>
                        <p className="paragraph-secondary">
                            Securely share files and folders with friends. family and colleagues for live collaboration. No email attachments
                            required.
                        </p>
                    </div>

                    <div className="landing-page__feature">

                        <AnyFileIcon className="landing-page__icon" />

                        <h1 className="heading-secondary">Store any type of file</h1>
                        <p className="paragraph-secondary">
                            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types
                            to be securely stored and shared.
                        </p>
                    </div>

                </section>

                <section className="landing-page__stay-productive-section">
                    <img
                        className="landing-page__stay-productive-illustration"
                        src="../../assets/Images/illustration-stay-productive.png" alt="stay-productive-illustration"
                    />

                    <div className="landing-page__stay-productive-container">

                        <div className="landing-page__stay-productive-heading-container">
                            <h1 className="heading-primary heading-primary--left u-clear-line-height">Stay productive, wherever you are</h1>
                        </div>

                        <p className="paragraph-secondary u-margin-bottom-small u-text-left">
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your life storage needs.
                        </p>

                        <p className="paragraph-secondary u-text-left">
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments
                            required.
                        </p>

                        <a href="#" className="paragraph-tertiary paragraph-tertiary--anchor">

                            See how Fylo works

                            <ArrowIcon className="landing-page__arrow-icon" />
                        </a>
                    </div>

                </section>


                <section className="landing-page__cards-section">
                    <div className="landing-page__card">

                        <p className="paragraph-secondary u-text-left u-margin-bottom-medium">
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>

                        <div className="landing-page__card-review-container">

                            <img className="landing-page__card-profile-icon" src="../../Assets/Images/profile-1.jpg" alt="profile1" />

                            <div className="landing-page__card-user-details">
                                <h3 className="heading-tertiary u-margin-bottom-smallest">Satish Patel</h3>
                                <p className="paragraph-tertiary">Founder & CEO, Huddle</p>
                            </div>

                        </div>

                    </div>

                    <div className="landing-page__card">

                        <p className="paragraph-secondary u-text-left u-margin-bottom-medium">
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>


                        <div className="landing-page__card-review-container">

                            <img className="landing-page__card-profile-icon" src="../../Assets/Images/profile-2.jpg" alt="profile2" />


                            <div className="landing-page__card-user-details">
                                <h3 className="heading-tertiary u-margin-bottom-smallest">Bruce McKenzie</h3>
                                <p className="paragraph-tertiary">Founder & CEO, Huddle</p>
                            </div>

                        </div>

                    </div>

                    <div className="landing-page__card">

                        <p className="paragraph-secondary u-text-left u-margin-bottom-medium">
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>

                        <div className="landing-page__card-review-container">

                            <img className="landing-page__card-profile-icon" src="../../Assets/Images/profile-3.jpg" alt="profile3" />

                            <div className="landing-page__card-user-details">
                                <h3 className="heading-tertiary u-margin-bottom-smallest">Iva Boyd</h3>
                                <p className="paragraph-tertiary">Founder & CEO, Huddle</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <div className="landing-page__early-access-form">

                <div className="landing-page__early-access-form-container">

                    <h1 className="heading-primary heading-primary--medium">Get early access today</h1>

                    <p className="paragraph-secondary u-inline-size-large">
                        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
                        our support team would be happy to help you.
                    </p>

                    <div className="landing-page__email-container">
                        <input type="email" className="landing-page__email-input" placeholder="email@example.com" />

                        <button className="btn btn--secondary">Get Started For Free</button>
                    </div>

                </div>

            </div>

            <footer className="landing-page__footer">

                <Logo className="landing-page__footer-logo" />

                <ul className="landing-page__footer-info-navbar">

                    <li className="landing-page__footer-info">

                        <PositionIcon className="landing-page__footer-icon" />

                        <p className="paragraph-secondary u-text-left u-inline-size-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat nostrum qui veniam delectus? Modi beatae sed asperiores?
                        </p>

                    </li>

                    <li className="landing-page__footer-info">

                        <PhoneRingingIcon className="landing-page__footer-icon" />

                        <p className="paragraph-secondary u-text-left">
                            +1-543-123-4567
                        </p>

                    </li>

                    <li className="landing-page__footer-info">

                        <GmailIcon className="landing-page__footer-icon" />

                        <p className="paragraph-secondary u-text-left">
                            example@fylo.com
                        </p>

                    </li>

                    <li className="landing-page__footer-info">

                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">About us</a>
                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Jobs</a>
                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Press</a>
                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Blog</a>

                    </li>

                    <li className="landing-page__footer-info">

                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Contact us</a>
                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Terms</a>
                        <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Privacy</a>

                    </li>

                    <li className="landing-page__footer-info">

                        <div className="landing-page__footer-social-icon-container">
                            <FacebookIcon className="landing-page__footer-social-icon" />
                        </div>

                        <div className="landing-page__footer-social-icon-container">
                            <Twittericon className="landing-page__footer-social-icon" />
                        </div>

                        <div className="landing-page__footer-social-icon-container">
                            <Instagramicon className="landing-page__footer-social-icon" />
                        </div>

                    </li>
                </ul>
            </footer>
        </div>
    )
}
