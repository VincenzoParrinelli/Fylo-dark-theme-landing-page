import { ReactComponent as ArrowIcon } from "../../assets/Images/icon-arrow.svg"

export default function StayProductive() {
    return (
        <section className="stay-productive">
            <img
                className="stay-productive__illustration"
                src="../../assets/Images/illustration-stay-productive.png" alt="stay-productive-illustration"
            />

            <div className="stay-productive__container">

                <div className="stay-productive__heading-container">
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

                    <ArrowIcon className="stay-productive__arrow-icon" />
                </a>
            </div>

        </section>
    )
}
