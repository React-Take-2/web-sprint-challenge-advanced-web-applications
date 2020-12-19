import React, {useState} from "react";
import axios from 'axios'

const initialUserData = {
  username: "",
  password: ""
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState(initialUserData)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const loginUser = (e) => {
    e.preventDefault()
    console.log("submitted")
    axios
      .post('http://localhost:5004/api/login', user)
      .then(res=>{
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.setLoggedIn(true)
        props.history.push('/protected')
      })
      .catch(err=>{
        console.log(err)
      })
  }
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginUser}>
        <legend>User Login</legend>
        <label for="username">
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            id="username"
          />
        </label>
        <label for="password">
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            id="password"
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
