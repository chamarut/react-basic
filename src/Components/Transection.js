import Item from "./Item";
import './Transection.css'

const Transection=(props)=>{
    const {items} = props
    /*const name = useContext(DataContext)*/
      return(
        <div>
        <ul className="item-list">
         {/* <h1 style={{color:'red'}}>แอพบัญชีรับ-จ่าย</h1>    
          <Item title={data[1].title} amount={data[0].amount} />propoties นิยามและส่งค่าไป companent*/}
          {items.map((e)=>{
            {/* return  <Item title ={e.title} amount={e.amount}/> ถ้าชื่อตัวแปลเหมือนกันให้ลดรูปเหลือ จุด 3 จุด title ={e.title} --> {...e}  key={uuidv4()}*/}
            return <Item {...e} key={e.id}/>
          })
          }
        </ul>
       {/* <p>{name}</p>*/}
        </div>
    );
  }

  export default Transection