import React from "react";
import { Table } from "react-bootstrap";

const ListArray = () => {
  const students = [
    {
      name: "anil",
      email: "anil@abc.com",
      address: [
        { hn: "20", city: "doon", country: "india" },
        { hn: "10", city: "hld", country: "india" },
        { hn: "50", city: "delhi", country: "india" },
        { hn: "80", city: "dwt", country: "india" },
      ],
    },
    {
      name: "rajat",
      email: "rjt@abc.com",
      address: [
        { hn: "20", city: "doon", country: "india" },
        { hn: "10", city: "hld", country: "india" },
        { hn: "50", city: "delhi", country: "india" },
        { hn: "80", city: "dwt", country: "india" },
      ],
    },
    {
      name: "guddu",
      email: "guddu@abc.com",
      address: [
        { hn: "20", city: "doon", country: "india" },
        { hn: "10", city: "hld", country: "india" },
        { hn: "50", city: "delhi", country: "india" },
        { hn: "80", city: "dwt", country: "india" },
      ],
    },
  ];
  return (
    <div>
      <h1>nested array list </h1>
      <Table bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  variant="dark"
                  responsive="sm"
                >
                  <tbody>
                    {" "}
                    {item.address.map((addData, j) => (
                      <tr key={j}>
                        <td>house no.:{addData.hn}</td>
                        <td>city:{addData.city}</td>
                        <td>country:{addData.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListArray;
