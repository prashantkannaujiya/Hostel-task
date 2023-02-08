import { useState } from 'react';
import './styles.css';
import Record from './Record';
function Admin()
{
    var [loggedin,setloggedin]=useState(false);
    function login()
    {
        var admin={
            username:'Hostel',
            password:'12345@123'
        }
var h=document.getElementsByName('log');
if(h[0].value==admin.username)
{
    if(h[1].value==admin.password)
    {
        alert('Welcome')
    }
    else
    {
        document.getElementById('err').style.display='block';
    }
}
else{
    document.getElementById('err').style.display='block';
}
setloggedin(true);
    }
return(
    <div>
          <div><span style={{fontSize:'45px'}}>Welcome To Hostel</span><span style={{fontSize:'20px'}}>.com</span></div>
        {(()=>{
if(loggedin==false)
{
    return(
        <div id='admin-subhead'>
      
        <div><h2>Kindly use your credentials to Login</h2></div>
        <form onSubmit={login}>
        <input type='text' name='log' placeholder='USER ID'/>
        <br/>
        <input type='password' name='log' placeholder='Password'/><br/>
        <p id='err'>Incorrect credentials</p>
        <button>Submit</button>
        </form>
       
        </div>
    )
}
else{
return(
    <div>
        <h1>Welcome Admin</h1>
        <h3>Your record</h3>
        {
console.log(Record)}
        <div>
            {
                Record.map((a)=>{
                    return(
<div id='admin-dashboard'><p><span>Booking id : </span><span>{a.bookingid}</span></p>
<p><span>Name : </span><span>{a.name}</span></p>
<p><span>Profession : </span><span>{a.profession}</span></p>
<p><span>Age : </span><span>{a.age}</span></p>
<p><span>Check in : </span><span>{a.checkin}</span></p>
<p><span>Check out : </span><span>{a.checkout}</span></p>
 </div>
                    )
                })
            }
            </div>
        </div>
        

)
}
    })()
        }
       
    </div>
)
}
export default Admin;