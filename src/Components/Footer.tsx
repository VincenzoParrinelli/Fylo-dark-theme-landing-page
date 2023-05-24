import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"
import { ReactComponent as PositionIcon } from "../../assets/Images/position-marker-svgrepo-com.svg"
import { ReactComponent as PhoneRingingIcon } from "../../assets/Images/phone-call-ringing-svgrepo-com.svg"
import { ReactComponent as GmailIcon } from "../../assets/Images/gmail-svgrepo-com.svg"
import { ReactComponent as FacebookIcon } from "../../assets/Images/facebook-176-svgrepo-com.svg"
import { ReactComponent as Twittericon } from "../../assets/Images/twitter-154-svgrepo-com.svg"
import { ReactComponent as Instagramicon } from "../../assets/Images/instagram-167-svgrepo-com.svg"

export default function Footer() {
    return (
        <footer className="footer">

            <Logo className="footer__logo" />

            <ul className="footer__info-navbar">

                <li className="footer__info">

                    <PositionIcon className="footer__icon" />

                    <p className="paragraph-secondary u-text-left u-inline-size-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat nostrum qui veniam delectus? Modi beatae sed asperiores?
                    </p>

                </li>

                <li className="footer__info">

                    <PhoneRingingIcon className="footer__icon" />

                    <p className="paragraph-secondary u-text-left">
                        +1-543-123-4567
                    </p>

                </li>

                <li className="footer__info">

                    <GmailIcon className="footer__icon" />

                    <p className="paragraph-secondary u-text-left">
                        example@fylo.com
                    </p>

                </li>

                <li className="footer__info">

                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">About us</a>
                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Jobs</a>
                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Press</a>
                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Blog</a>

                </li>

                <li className="footer__info">

                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Contact us</a>
                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Terms</a>
                    <a href="#" className="paragraph-secondary u-padding-bottom-small u-text-left">Privacy</a>

                </li>

                <li className="footer__info">

                    <div className="footer__social-icon-container">
                        <FacebookIcon className="footer__social-icon" />
                    </div>

                    <div className="footer__social-icon-container">
                        <Twittericon className="footer__social-icon" />
                    </div>

                    <div className="footer__social-icon-container">
                        <Instagramicon className="footer__social-icon" />
                    </div>

                </li>
            </ul>
        </footer>
    )
}
