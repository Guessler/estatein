import { Link } from "react-router-dom"
import  AnimatedSection  from "../components/common/Animated/AnimatedSection"

export const NotFoundPage = () => {
    return (
        <AnimatedSection className="container">
            <h1 className="second-heading">ERROR 404 This page is not found</h1>
            <h1 className="description-text">This page is not found</h1>
            <Link className="heading purple" to={"/"}>Go back to Home page</Link>
        </AnimatedSection>
    )
}