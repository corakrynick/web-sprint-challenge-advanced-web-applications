import React, {useState} from "react";
import axiosWithAuth from './axiosWithAuth'
import { useHistory} from 'react-router-dom'


export default function Login(props) {
  const [form, setForm] = useState({ username: '', password: ''})
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/login', form)
      .then(res => {
        localStorage.getItem(res.data.payload)
        history.push('/login')
      })
      .catch((err) => console.log(err))
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        placeholder='username'
        />
        <input 
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder='password'
        type='password'
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

