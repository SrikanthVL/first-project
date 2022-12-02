import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Login.css";

function Login () {
    
    const {register,handleSubmit,formState:{errors}} = useForm("");
    const [Email,setEmail] =useState("")
    const [Password,setPassword] = useState("");

    const onSubmit = (data) =>{
        let inputJson = {"Email":data.email,"Password":data.password};
        console.log(inputJson);
    }
    return (
      <div >
    <div className="page container bg-green">
           <div className="row">

            <div className="card col-sm-4 col-md-4 col-lg-4">

                <div className="cards">
                    <br></br>
                    <h1 className="title-card"><b>Login</b></h1>
         
                    <form className="myform" onSubmit={handleSubmit(onSubmit)}>
                      
                      <div className="icon">
                         <i> <BsFacebook className="fb"/> </i>
                         <i> <AiFillTwitterCircle className="twitter"/> </i>
                      </div>
                      
                      <div>
                          <p>or use your account</p>
                      </div>
      
                       <div className="mb-4">     
                          <input type="email" className={`form-control ${errors.email?"is-invalid":""}`} {...register("email", { required: true })} defaultValue={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="email"></input>  
                          {errors.email && <span className="error-msg text-start text-danger" >Email is required.</span>}
                       </div>
                    
                       <div className="mb-4">
                          <input type="password" className={`form-control ${errors.password?"is-invalid":""}`}  {...register("password", { required: true })} defaultValue={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Re-Type Password" name="confirmpassword"></input>
                          {errors.password && <span className="error-msg text-start text-danger">confirm your password.</span>}
                       </div>
  
                     <div>
                       <p>Forgot your password</p>
                     </div>
  
                    <div className="mb-4">
                       <button className="btn btn bg-danger bg-gradient text-white " type="submit" >LOG IN</button>
                    </div>
               </form>
           </div>
     </div>


     <div className="side col-sm-4 col-md-4 col-lg-4">
       
          <h3 className="heading2"><b>HTML CSS Login<br></br> Form</b></h3><br></br>
          <p className="para">This login form is created by using pure HTML and CSS.For social icons,FontAwesome is used.</p>

     </div>




</div>
    </div>
    </div>
    );
}

export default Login;
