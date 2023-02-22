import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';
const FormComponent=(props)=>{
    const [title,setTitle]  =useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)
    const inputTitle=(e)=>{
        
        setTitle(e.target.value)
    }
    const inputAmont=(e)=>{ 
        setAmount(e.target.value)
        //console.log(e.target.value)
    }
    const saveItem=(e)=>{
        e.preventDefault();//ไม่ให้จอ refest
        const itemData={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        setTitle('')//set null
        setAmount('')//set null
        props.onAddItem(itemData)
        console.log("complete")
    }
    useEffect(()=>{
        const checkdate = title.trim().length > 0 && amount !==0
        if(amount !== 0){
            setFormValid(checkdate)
        }
    }) //เช็คแค่ ,[amount] state amount
    return(
    <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ </label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน </label>
                <input type="number" placeholder="(+ รายรับ,- รายจ่าย)" onChange={inputAmont} value={amount}/>
            </div>
            <div>
                <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
)}
export default FormComponent 