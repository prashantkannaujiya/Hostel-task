import Record from "./Record";
function Checkout()
{
    function leave()
    {
        var date=new Date().toLocaleString();
        var p=document.getElementsByName('leave');
        console.log(p[0].value);
        var z=Record.find((a)=>{
            return a.bookingid==p[0].value
        })
        console.log(z);
        if(z==null)
        {
            alert('invalid input')
        }
        else{
            Record[p[0].value-1].checkout=date;
            alert("please visit again");
        }
        console.log(Record);
    }
    return(
        <div>
<div id='checkout-head'><span style={{fontSize:'45px'}}>Welcome To Hostel</span><span style={{fontSize:'20px'}}>.com</span></div>
        <div>
            <h2>Please provide the following detail to check out</h2>
            <label>Booking id</label>
            <input type='text' name='leave' />
            <button onClick={leave}>Submit</button>
        </div>
        </div>
    )
}
export default Checkout;