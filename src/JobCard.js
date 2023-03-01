import React from "react";
import { Button, Card } from "react-bootstrap";

/** Show information about a job.
 *
 * 
 * This is rendered by JobCardList.
 */

const JobCard = ({ id, title, salary, equity, companyName }) => {
    /** Render integer salary like '$1,250,343' */
    
    function formatSalary(salary) {
        let salaryString = salary.toString();

        let newSalaryString = "$";
        if (salaryString.length > 3) {
            let salaryArray = [];
            let counter = 0;
            for (let i = (salaryString.length - 1); i >= 0; i--) {
                counter += 1;
                salaryArray.push(salaryString[i]);
                if (i > 0 && counter === 3) {
                    salaryArray.push(",");
                    counter = 0;
                }
            }
            newSalaryString += salaryArray.reverse().join("");
        } else {
            newSalaryString += salaryString;
        }

        return newSalaryString;
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>{companyName}</p>
                    {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                    {equity && <div><small>Equity: {equity}</small></div>}
                </Card.Text>
                <Button variant="danger">Apply</Button>
            </Card.Body>
        </Card>
    );
}
    
    
    
    
export default JobCard;