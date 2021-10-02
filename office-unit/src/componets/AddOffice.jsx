import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from "react";
import { addOffice } from "../Service/api";
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
    officename: '',
    officetell: '',
    email: '',
    address: '',
    capacity:''
}

const AddOffice = () => {
    const [office, setOffice] = useState(initialValues);
    const { officename, officetell, email, address,capacity} = office;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setOffice({ ...office, [e.target.name]: e.target.value})
    }

    const addOfficeDetails = async() =>{
        await addOffice(office);
        history.push('./');
    }

    return (
        <FormGroup className = {classes.container}>
            <Typography variant = "h4">Add Office</Typography>
            <FormControl>
                <InputLabel>Office Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'officename' value={officename} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'Officetell' value={officetell}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'address' value={address}/>
            </FormControl>
            <FormControl>
                <InputLabel>Capacity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'capacity' value={capacity}/>
            </FormControl>
            <Button variant = "contained" onClick = {() => addOfficeDetails()} color="primary">Add Office</Button>
        </FormGroup>
    );
}

export default AddOffice;