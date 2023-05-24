import { ReactComponent as AccessAnywhereIcon } from "../../assets/Images/icon-access-anywhere.svg"
import { ReactComponent as SecurityIcon } from "../../assets/Images/icon-security.svg"
import { ReactComponent as CollaborationIcon } from "../../assets/Images/icon-collaboration.svg"
import { ReactComponent as AnyFileIcon } from "../../assets/Images/icon-any-file.svg"

export default function Features() {
    return (
        <section className="features">

            <div className="features__feature">

                <AccessAnywhereIcon className="features__icon" />

                <h1 className="heading-secondary">Access your files, anywhere</h1>
                <p className="paragraph-secondary">
                    The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                </p>
            </div>

            <div className="features__feature">

                <SecurityIcon className="features__icon" />

                <h1 className="heading-secondary">Security you can trust</h1>
                <p className="paragraph-secondary">
                    2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help
                    secure your files.
                </p>
            </div>

            <div className="features__feature">

                <CollaborationIcon className="features__icon" />

                <h1 className="heading-secondary">Real-time collaboration</h1>
                <p className="paragraph-secondary">
                    Securely share files and folders with friends. family and colleagues for live collaboration. No email attachments
                    required.
                </p>
            </div>

            <div className="features__feature">

                <AnyFileIcon className="features__icon" />

                <h1 className="heading-secondary">Store any type of file</h1>
                <p className="paragraph-secondary">
                    Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types
                    to be securely stored and shared.
                </p>
            </div>

        </section>
    )
}
