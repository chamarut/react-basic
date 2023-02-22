import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect,reduce, useReducer} from 'react';
import Transection from './Components/Transection'
import FormComponent from './Components/FormComponent';
import DataContext from './data/DataContext';
import ReportComponent from './Components/ReportComponent'
//component
//const Title=()=><h1>โปรแกรมบัญชี รับ จ่าย</h1>
const design ={color:"blue",fontSize:'2rem'}
function App() {
  const initState = [
    {id:1,title:"รายได้อื่นๆ", amount:1000},
    {id:2,title:"รายได้ค่าเช่า", amount:20000},
    {id:3,title:"รายได้ส่งออก1", amount:950000},
    {id:4,title:"ค่าอาหาร", amount:3000}
  ]
  const [items,setItem]  = useState([])  //initState  ใส่แทน [] กรณีที่มีค่าตั้งต้นให้
  const [reportIncome,setReportIncome]=useState(0)
  const [reportExpense,setReportExpense]=useState(0)
  const onAddNewItem=(newItem)=>{
      setItem((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
 useEffect(()=>{
   const amount = items.map(items=>items.amount)
   const income = amount.filter(e=>e>0).reduce((total,e)=>total = e+total ,0)
   const expense = (amount.filter(e=>e<0).reduce((total,e)=>total=e + total,0))*-1
   console.log(expense)
   setReportIncome(income)
   setReportExpense(expense)
 },[items,reportIncome,reportExpense])

 const [count,setCount] = useState(0) 
 const reducer =(state,action)=>{
  switch(action.type){
      case "ADD" : return state + action.payload
      case "SUB" : return state - action.payload
      case "CLEAR" : return 0
      case "SHOW" : return setShowReport(true)
      case "HIDE" : return setShowReport(false)
  }
 }
 const [showReport,setShowReport]=useState(false)
 const [result,dispatch]= useReducer(reducer,showReport) //dispatch call action type
  return ( 
    
       <DataContext.Provider value={
        {
          income:reportIncome,
          expense:reportExpense
        }
      }>
        <div className='container'>
          <h1>โปรแกรมบัญชี รับ จ่าย</h1>
          {showReport && <ReportComponent/>}
          <FormComponent onAddItem={onAddNewItem}/>
          <Transection items={items}/> {/* //prop arrar properties name = item/external */}
        </div>
        <div align="center">
          <h1>{result}</h1>
          <button onClick={()=>dispatch({type:"ADD",payload:10})}>เพิ่ม</button>
          <button onClick={()=>dispatch({type:"SUB",payload:5})}>ลบ</button>
          <button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>
          <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
          <button onClick={()=>dispatch({type:"HIDE"})}>ไม่แสดง</button>
        </div>
      </DataContext.Provider>
      
       
      /*<h2 style={design}>โปรแกรมบัญชี รับ จ่าย</h2> inline
     
      <section>
        <article>
        <h1>โปรแกรมบัญชี รับ จ่าย</h1>
        <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+1000000</span></li>
        <li>ค่าอาหาร <span>-20000</span></li>
        </article>
      </section>
      
      //<></> or React.Fragment
      <> 
      <h1>โปรแกรมบัญชี รับ จ่าย</h1>
        <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+1000000</span></li>
        <li>ค่าอาหาร <span>-20000</span></li>
    </> */
  );
}

export default App;

