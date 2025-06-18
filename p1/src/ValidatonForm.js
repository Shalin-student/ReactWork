import React,{useState} from 'react';
function N  () {
    const [formData,setFormData] = useState({
        name : '',
        email : '',
        password : '',
    });

    const [errors,setErrors] =useState({});

    const validate = () => {
        const newErrors = {};

        if(!formData.name.trim()){
            newErrors.name = 'Name is Required';
        }
        if(!formData.email) {
            newErrors.email = 'Email is required ';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is Invalid';
        }
        if(!formData.password){
            newErrors.password='Password is required';
        } else if (formData.password.length<6){
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData ((prev) => ({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length==0){
            alert('form submitted successfully');
            console.log(formData);
        }
        else{
            setErrors(validationErrors);
        }
    };
    return(
        <form onSubmit={handleSubmit} style={{maxWidth : '400px' , margin : 'auto'}}>
            <h2>Signup Form</h2>
            <div>
                <label>Name:-</label>
                <input type='text' name='NA' value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{color : 'red'}}>{errors.name}</p>}
            </div>
            <div>
                <label>Email:-</label>
                <input type='email' name='Em' value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label>Password:-</label>
                <input type='password' name='Pa' value={formData.password} onChange={handleChange}/>
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>
            <button type='submit'>SubmitD</button>
        </form>
    );
    
}
export default N;
