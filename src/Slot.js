import './styles.css';
import Record from './Record';
function Slot(props)
{
    function book(ev){
ev.preventDefault();
var p=document.getElementsByName('book');
var date=new Date().toLocaleString();
console.log(date)
var customer={
    bookingid:(Record.length+1),
    name:p[0].value,
    profession:p[1].value,
    contact:p[2].value,
    age:p[3].value,
    checkin:date
}
Record.push(customer);
console.log(customer)
props.z(props.s + 1);
    }
    function fill()
    {
        return(
<div><form style={{marginTop:'.6cm',color:'white'}} onSubmit={(e)=>{book(e)}}>
    <label>Name</label><br/>
    <input type='text' name='book'/><br/>
    <label>Profession</label><br/>
    <input type='text' name='book'/><br/>
    <label>Contact</label><br/>
    <input type='tel' pattern='{0-9}5-{0-9}5' name='book' /><br/>
    <label>Age</label><br/>
    <input type='text' name='book' /><br/>
    <button>Submit</button>
<p><i>* You'll be treated as checked in as soon as you submit this form.</i></p>
    </form></div>
        )
    }
    return(
    <div id='slot'>
<div id='slot-head'><span style={{fontSize:'45px'}}>Welcome To Hostel</span><span style={{fontSize:'20px'}}>.com</span></div>
{(()=>{
if(props.s<10)
{
    return <div><h2>Rooms are available</h2><div id='slot-form'>{fill()}</div></div>
}
else{
    return <div><h1>Sorry, We are full.</h1><h2>Please try after sometime.</h2></div>
}
})()

}
    </div>
        )
}
export default Slot;