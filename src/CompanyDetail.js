import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import JoblyApi from "./api";
// import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }

        getCompany();
    }, [handle]);

    if (!company) return <LoadingSpinner />;

    return (
        <Container>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            {/* <JobCardList jobs={company.jobs} /> */}
        </Container>
    );
}

export default CompanyDetail;
