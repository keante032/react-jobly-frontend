import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <Container style={{ display: 'flex', minHeight: '100vh' }}>
            <Spinner animation="border" style={{ height: '10rem', width: '10rem', margin: 'auto' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default LoadingSpinner;