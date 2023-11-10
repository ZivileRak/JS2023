function Validation(values){
    let error= {}
  

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