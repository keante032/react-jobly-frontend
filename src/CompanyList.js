import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "./LoadingSpinner";
import SearchForm from "./SearchForm";

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        search();
    }, []);

    /** Triggered by search form submit; reloads companies. */
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return (
        <Container>
            <SearchForm searchFor={search} />
            {companies.length ? (
                <Row xs={1} sm={2} md={3} lg={4}>
                    {companies.map(c => (
                        <Col>
                            <CompanyCard
                                key={c.handle}
                                handle={c.handle}
                                name={c.name}
                                description={c.description}
                                logoUrl={c.logoUrl}
                            />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p>No results found.</p>
            )}
            
        </Container>
    )
}

export default CompanyList;