import './App.css';
import React,{useState} from "react"


function App() {
 let [name,setName]=useState("");
 let [department,setDepartment]=useState("");
 let [rating,setRating]=useState("");
 let [dataObj, setDataObj]=useState([])

const handleClick =(e)=>{
  e.preventDefault();
let tempobj ={name:name,department:department,rating:rating};
let temArr =[...dataObj,tempobj]
setDataObj(temArr)

}

  return (
  <>
  <center>
  <h1> <b> EMPLOYEE FEEDBACK FORM</b></h1>
  <form>
    <label htmlFor="name">Name : </label> 
    <input type="text" id='name' value={name}   onChange={(e)=>setName(e.target.value)}  /> <br /><br />
    <label htmlFor="department">Department:</label>
    <input type="text" id='department' value={department}  onChange={(e)=>setDepartment(e.target.value)}  /> <br /> <br />
    <label htmlFor="rating">Rating :</label>
    <input required type="number" value={rating}  onChange={e=>setRating(e.target.value)} /> <br /> <br />
    <button type="submit" onClick={(e)=>handleClick(e)} >Submit</button>
  </form>
  < div className='outer-box'> 
  {
    
    dataObj.map((n,i)=>
    {
      return <div  key={i}>
    <p className='data-box'>Name : {n.name} || Department : {n.department} || Rating : {n.rating}</p>
   </div>})
  }
   </div>
  </center>
  </>  

  );
}

export default App;
