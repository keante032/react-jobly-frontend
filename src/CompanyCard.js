import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/** Show limited information about a company.
 *
 * The button links to the CompanyDetail.
 * 
 * This is rendered by CompanyList.
 */

const CompanyCard = ({ name, description, logoUrl, handle }) => {
    if (logoUrl === null) logoUrl = '/logos/logo_blank.png';
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logoUrl} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <LinkContainer to={`/companies/${handle}`}>
                    <Button variant="primary">See company detail</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}

export default CompanyCard;