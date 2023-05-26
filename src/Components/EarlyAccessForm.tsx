import { useState, useRef, useEffect } from "react"

export default function EarlyAccessForm() {

    const [isInvalid, setIsInvalid] = useState(false)

    const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const errorMessageRef = useRef() as React.MutableRefObject<HTMLParagraphElement>

    // Upon isInvalid changes, set opacity respectively, in order to get the error element to appear 
    useEffect(() => {

        if (isInvalid) errorMessageRef.current.style.opacity = "1"
        else errorMessageRef.current.style.opacity = "0"

    }, [isInvalid])

    const handleForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        // Check if emailInput is empty or has a type mismatch.
        // If one of these 2 conditions is true set isInvalid flag to true else set it to false
        if (!emailInputRef.current.value || emailInputRef.current.validity.typeMismatch) setIsInvalid(true)
        else setIsInvalid(false)
    }

    return (
        <div className="early-access-form">

            <div className="early-access-form__container">

                <h1 className="heading-primary heading-primary--medium">Get early access today</h1>

                <p className="paragraph-secondary u-inline-size-large">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
                    our support team would be happy to help you.
                </p>

                <div className="early-access-form__email-container">
                    <input
                        ref={emailInputRef}
                        type="email"
                        className="early-access-form__email-input"
                        placeholder="email@example.com"
                    />

                    <button
                        className="btn btn--secondary"
                        onClick={e => handleForm(e)}
                    >
                        Get Started For Free
                    </button>
                </div>

            </div>

            <p ref={errorMessageRef} className="paragraph-tertiary paragraph-tertiary--error-paragraph">Please enter a valid email address</p>

        </div>
    )
}
