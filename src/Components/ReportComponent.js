import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'
const ReportComponent=()=>{
  //const name = useContext(DataContext) ส่งมาค่าเดียวใช้แบบนี้ได้
  const {income,expense} = useContext(DataContext)
  return(
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{(income-expense).toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</h1>
      <div className="report-container" >
          <div>
            <h4>รับได้ทั้งหมด</h4>
            <p className="report plus">{income.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</p>
          </div>
          <div>
            <h4>รายจ่ายทั้งหมด</h4>
            <p className="report minus">{expense.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</p>
          </div>
      </div>
      {/*<p>สรุปยอด</p> {{name} เรียกใช้ค่าเดียวใช้แบบนี้ได้
       <DataContext.Consumer>
          {context=><p> รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
       </DataContext.Consumer>  เขียนได้ 2 แบบ useContext ,DataContext.Consumer
       <p> รายรับ : {income} รายจ่าย : {expense}</p>*/}
    </div>
  );
}
export default ReportComponent