export default function EarlyAccessForm() {
    return (
        <div className="early-access-form">

            <div className="early-access-form__container">

                <h1 className="heading-primary heading-primary--medium">Get early access today</h1>

                <p className="paragraph-secondary u-inline-size-large">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
                    our support team would be happy to help you.
                </p>

                <div className="early-access-form__email-container">
                    <input type="email" className="early-access-form__email-input" placeholder="email@example.com" />

                    <button className="btn btn--secondary">Get Started For Free</button>
                </div>

            </div>

        </div>
    )
}
