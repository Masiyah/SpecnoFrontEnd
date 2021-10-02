import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useEffect, useState } from "react";
import { editEmployee, getEmployees } from "../Service/api";
import { useHistory, useParams } from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    surname: '',
    email: '',
    address: ''
}

const EditEmployee = () => {
    const [employee, setEmployee] = useState(initialValues);
    const { name, surname, email, address} = employee;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() =>{
        loadEmployeeData();
    }, []);

    const loadEmployeeData = async() => {
        const responce = await getEmployees(id);
        setEmployee(responce.data);
    }

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value})
    }

    const editEmployeeDetails = async() => {
        await editEmployee(id, employee);
        history.push('./all');
    }

    return (
        <FormGroup className = {classes.container}>
            <Typography variant = "h4">Edit Employee</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Surname</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'surname' value={surname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'address' value={address}/>
            </FormControl>
            <Button variant = "contained" onClick = {() => editEmployeeDetails()} color="primary">Edit Employee</Button>
        </FormGroup>
    );
}

export default EditEmployee;