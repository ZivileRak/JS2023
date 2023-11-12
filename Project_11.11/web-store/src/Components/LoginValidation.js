function Validation(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Enter email';
    }
  
    if (!values.password) {
      errors.password = 'Enter password';
    }
  
    return errors;
  }
  
  export default Validation;
  