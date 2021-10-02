import { Table, TableBody, TableCell, TableHead, TableRow , makeStyles, Button} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../Service/api";
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead:{
        '& > *':{
            background:'#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    row:{
        '& > *':{
            fontSize: 20
        }
    }
})

const AllEmployees = () => {

    const [employees, setEmployees] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = async () =>{
        const responce = await getEmployees();
        console.log(responce.data);
        setEmployees(responce.data);
    }

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    return(
        <Table className = {classes.table}>
            <TableHead>
                <TableRow className ={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
                   employees.map(employee =>(
                       <TableRow className ={classes.row}>
                           <TableCell>{employee.id}</TableCell>
                           <TableCell>{employee.name}</TableCell>
                           <TableCell>{employee.surname}</TableCell>
                           <TableCell>{employee.email}</TableCell>
                           <TableCell>{employee.address}</TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${employee.id}`}>EDIT</Button>
                               <Button variant="contained" color="secondary" onClick={()=> deleteEmployeeData(employee.id)}>DELETE</Button>
                           </TableCell>
                        </TableRow>

                   ))
               }
            </TableBody>
        </Table>
    );
}

export default AllEmployees;