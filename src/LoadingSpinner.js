import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <Container class="text-center mt-5">
            <Spinner animation="border" style={{ height: '5rem', width: '5rem' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default LoadingSpinner;