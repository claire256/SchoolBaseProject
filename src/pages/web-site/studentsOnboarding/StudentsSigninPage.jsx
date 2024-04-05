import React from 'react';
import { Link } from 'react-router-dom';
import { Manlearning } from '../../../assets';

const StudentsSignin = () => {
  return (
    <div>
      <div>
      <img src={Manlearning} className=""/>
      </div>
      <form>
      <h1>Sign into your account</h1>
      <label for="School E-mail Address">School E-mail Address</label><br></br>
      <input id="School E-mail Address" placeholder="School E-mail Address" />
      <label for="Password">Password</label><br></br>
      <input id="Password" placeholder="Password" />
      <div>
        <div>
          <label></label>
          <input/>
        </div>
        <Link>Forgot Password?</Link>
      </div>
      <button>Sign In</button>
      </form>
    </div>
  )
}

export default StudentsSignin;