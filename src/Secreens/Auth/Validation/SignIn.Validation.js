export const signinValidate = values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    
    if (!values.password ){
      errors.password= 'Required'
    } 
    if(!values.confirmPassword){
      errors.confirmPassword= 'Required'
    }
    else if (values.password.length <8 ){
      errors.isMatchedPassword= 'Password must be 8 characters or more'
    }
    else if( values.password !== values.confirmPassword ){
      errors.isMatchedPassword= 'The password must be matched!'
    }

    return errors;
  };

