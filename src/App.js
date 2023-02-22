import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect} from 'react';
import Transection from './Components/Transection'
import FormComponent from './Components/FormComponent';
import DataContext from './data/DataContext';
import ReportComponent from './Components/ReportComponent'
import { BrowserRouter as Router,  Route, Link ,Routes} from 'react-router-dom';
import { element } from 'prop-types';
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
    const income = amount.filter(element=>element>0).reduce((total,element)=>total += element ,0)
    const expense = amount.filter(element=>element<0).reduce((total,element)=>total += Math.abs(element),0)  
    console.log(amount)
    console.log(income)
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])
  return ( 
       <DataContext.Provider value={ {income:reportIncome,expense:reportExpense}  }>
        <div className='container'>
          <h1>โปรแกรมบัญชี รับ จ่าย</h1>
          <Router>
          <div>
            <ul className='horizontal-manu'>
              <li><Link to="/" >Data Account</Link></li>
              <li><Link to="/insert">Insert Data</Link></li>
            </ul>
            <Routes>
              <Route path='/' element={<ReportComponent/>} />
              <Route path='/insert' element={
                <div>
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transection items={items}/> 
                 </div>
              } />              
            </Routes>
          </div>
          </Router>
        </div>
      </DataContext.Provider>
  );
}

export default App;

