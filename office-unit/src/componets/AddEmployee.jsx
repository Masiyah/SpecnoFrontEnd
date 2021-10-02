import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from "react";
import { addEmployee } from "../Service/api";
import { useHistory } from 'react-router-dom';

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

const AddEmployee = () => {
    const [employee, setEmployee] = useState(initialValues);
    const { name, surname, email, address} = employee;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value})
    }

    const addEmployeeDetails = async() =>{
        await addEmployee(employee);
        history.push('./all');
    }

    return (
        <FormGroup className = {classes.container}>
            <Typography variant = "h4">Add Employee</Typography>
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
            <Button variant = "contained" onClick = {() => addEmployeeDetails()} color="primary">Add Employee</Button>
        </FormGroup>
    );
}

export default AddEmployee;