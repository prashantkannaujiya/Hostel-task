import { useState } from 'react';
import Admin from './Admin';
import Home from './Home';
import Slot from './Slot';
import './styles.css';
import Checkout from './Checkout'
import Record from './Record';
function App()
{
  var [nav,setnav]=useState(0);
  var [occupied,setoccupied]=useState(0);
  
  function update(k)
  {
    
setoccupied(k);
  }
  return(
<div id='app'>
  <div id='heading'>
    <div><span style={{fontSize:'45px'}}>Hostel</span><span style={{fontSize:'20px'}}>.com</span></div>
    <div>
      <button onClick={()=>{setnav(2)}}>Find a slot</button>
      <button onClick={()=>{setnav(3)}}>Check out</button>
      <button onClick={()=>{setnav(1)}}>Admin Login</button>
    </div>
  </div>
<div>
  {(()=>{
    document.body.style.backgroundColor='#2F2FA2';
    
if(nav==0)
{
  return(<Home></Home>)
}
else if(nav==1)
{
  return <Admin></Admin>
}
else if(nav==2){
return <Slot s={occupied} z={update}></Slot>
}
else
{
  return <Checkout></Checkout>
}
  })()}
    
  
</div>
</div>
  )
}
export default App;