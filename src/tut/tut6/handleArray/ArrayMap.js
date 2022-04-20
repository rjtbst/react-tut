import { Table } from "react-bootstrap";


const ArrayMap = () => {
  // const students = ['anil', 'rajat', 'kannu', 'guddu'];
  const students = [
    { name: "anil", email: "asdf@sadf.com", contact: 123456 },
    { name: "rajat", email: "rajatf@sdf.com", contact: 56789 },
    { name: "kannu", email: "kannuf@sdf.com", contact: 56789 },
    { name: "guddu", email: "gudduf@sdf.com", contact: 56789 }
  ];
  //map looping
  //for loop doesnt support in return
  return (
    <>
      <h1>handle array with map</h1>
      <Table striped bordered hover size="sm" variant="dark" responsive="sm" >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {
            students.map((data, i) =>
              data.contact === 56789 ?
                <tr key={i}>
                  <td>{i}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                </tr> : null
            )
          }
        </tbody>
      </Table>
    </>
  );
};
export default ArrayMap;
