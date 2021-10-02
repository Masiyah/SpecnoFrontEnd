import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getOffice, deleteOffice } from "../Service/api";
import { Link } from 'react-router-dom';
import { Button, makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        width: '100%',
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

const OfficeLay  = () => {
   
    
    const [Offices, setOffice] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllOffice();
    }, [])

    const getAllOffice = async () =>{
        const responce = await getOffice();
        console.log(responce.data);
        setOffice(responce.data);
    }

    const deleteOfficeData = async (id) => {
        await deleteOffice(id);
        getAllOffice();
    }


    return(
        
        <Table className = {classes.table}>
            <TableHead>
                <TableRow className ={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Office Name</TableCell>
                    <TableCell>Office Tell</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Capacity</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
                   Offices.map(office =>(
                       <TableRow className ={classes.row}>
                           <TableCell>{office.id}</TableCell>
                           <TableCell>{office.officename}</TableCell>
                           <TableCell>{office.officetell}</TableCell>
                           <TableCell>{office.email}</TableCell>
                           <TableCell>{office.address}</TableCell>
                           <TableCell>{office.capacity}</TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${office.id}`}>EDIT</Button>
                               <Button variant="contained" color="secondary" onClick={()=> deleteOfficeData(office.id)}>DELETE</Button>
                           </TableCell>
                        </TableRow>

                   ))
               }
            </TableBody>
        </Table>

        
    );


}

export default OfficeLay;