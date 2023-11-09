function Validation(values){
    let error= {}
  
    if (values.name==="") {
        error.name ="Enter name"
    }
    else {error.name=""}

    if (values.surname==="") {
        error.surname ="Enter srurname"
    }
    else {error.surname=""}


    if (values.email==="") {
        error.email ="Enter email"
    }
    else {error.email=""}


    if(values.password===""){
        error.password= "Enter password"
    }
    else {error.password=""}

   
return error;
}
 
export default Validation;