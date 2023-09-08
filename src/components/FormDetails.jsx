

const FormDetails = (props) => {
    return ( 
        <div>
            <p>Your Form Data:</p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confPassword}</p>
        </div>
    );
}
export default FormDetails;