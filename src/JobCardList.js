import React from "react";
import { Col, Row } from "react-bootstrap";
import JobCard from "./JobCard";

/** Show list of job cards.
 *
 * This is rendered by both JobList and CompanyDetail.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs }) {

    return (
        <Row xs={1} sm={2} md={3} lg={4}>
            {jobs.map(job => (
                <Col>
                    <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        companyName={job.companyName}
                    />
                </Col>
            ))}
        </Row>
  );
}

export default JobCardList;