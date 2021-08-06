import React, {useState} from 'react';
import axios from 'axios';

export const Register = () => {
    return <div>
            <div className="header">Register</div>
            <div className="content">
                <div className = "form">
                    <div className = "form-group">
                        <label htmlFor = "username">Username</label>
                        <input type="text" name="username" placeholder="username"></input>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "password">Password</label>
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>

}


export default Register;




// const [form, setForm] = useState({ username: '', password: ''});

// const handleInput = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value});
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const res = await axios.post('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
//             username: form.username,
//             password: form.password
//         });
//         console.log(res.data);

//         setUser(res.data.user)
//     } catch (error) {
//         console.error(error)
//     }
// }


// console.log(form);

// return (
//     // <div id="Registration">
//     //     <h1>
//     //         Registration
//     //     </h1>
//     // </div>
//     <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input name="username" value={form.username} onInput={handleInput} />
//         <label>Password</label>
//         <input name="password" value={form.password} onInput={handleInput} type="password"/>
//         <button type="submit">SUBMIT</button>
//     </form>
// );