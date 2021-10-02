import axios from 'axios';


const url = 'http://localhost:3003/employees';

export const getEmployees = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`); //'http://localhost:3003/employees' 
}

export const addEmployee = async(employee) =>{
    return await axios.post(url, employee);
}

export const editEmployee = async(id, employee) =>{
    return await axios.put(`${url}/${id}`, employee);
}

export const deleteEmployee = async(id) => {
    return await axios.delete(`${url}/${id}`);
}


//Office

const url2 = 'http://localhost:3003/Offices';

export const getOffice = async (id) =>{
    id = id || '';
    return await axios.get(`${url2}/${id}`);  
}

export const addOffice = async(office) =>{
    return await axios.post(url2, office);
}

export const editOffice = async(id, office) =>{
    return await axios.put(`${url2}/${id}`, office);
}

export const deleteOffice = async(id) => {
    return await axios.delete(`${url2}/${id}`);
}