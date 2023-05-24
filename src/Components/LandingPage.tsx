import Header from "./Header"
import Features from "./Features"
import StayProductive from "./StayProductive"
import Cards from "./Cards"
import EarlyAccessForm from "./EarlyAccessForm"
import Footer from "./Footer"

export default function LandingPage() {
    return (
        <div className="landing-page">

            <Header />

            <main>

                <Features />

                <StayProductive />

                <Cards />
            </main>

            <EarlyAccessForm />

            <Footer />
        </div>
    )
}
