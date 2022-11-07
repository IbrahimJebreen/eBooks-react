import React,{useState} from 'react';
// import './App.css';
import JSONDATA from './data.json';
function Home() {
  const [bookData,setBookData] = useState(JSONDATA.eBooks)
  function handelSearch(e){
    const resultSearch=JSONDATA.eBooks.filter((book)=>{
      return book.language.toLowerCase().includes(e.toLowerCase());
      })
      setBookData(resultSearch);
  }

  function handelSelect(e){
    const price = e.split('-');
    console.log(price);
    const resultFilter = JSONDATA.eBooks.filter((book) => {
        return book.price >= price[0] && book.price <= price[1]
        })
        setBookData(resultFilter);
  }
  return (
      <><input type="text" placeholder="seach..." onChange={e=>handelSearch(e.target.value)} />
      <select onClick={e=>handelSelect(e.target.value)} >
        
        <option value="0-40">All</option>
        <option value="0-10">0-10</option>
        <option value="10-20">10-20</option>
        <option value="20-30">20-30</option>
      </select>
    <div class="row">
      
      {bookData.map((val,key)=>{
        return  <div class="col-sm-3 mt-3">
                              <div class="card" style={{width: "18rem" }}>
  <img class="card-img-top" src={val.img} style={{height:"400px"}} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{val.language}</h5>
    <p class="card-text">{val.edition}</p>
    <p class="card-text">{val.price}</p>
    
  </div>
</div>
               </div>
      })}
    </div>
    </>
  );
}
export default Home;
















// import React from 'react';
// import data from './data.json';
// function Home() {
//     // console.log(data);
//     return (

//         // )
//         <>

            



//                 <div class="row">
//             {data.eBooks.map((record) => {
//                 return (
//                     // console.log(record.language);
//                     <div class="col-sm-3 mt-3">
//                       <div class="card">
//                         <div class="card-body">
//                           <h5 class="card-title">Language : {record.language}</h5>
//                           <p class="card-text">Edition : {record.edition}</p>
//                           <p class="card-text">Price : {record.price}</p>
                        
//                         </div>
//                       </div>
//                     </div>
                    
                    
//                     )
//                 })}
//                 </div>
//         </>
//     );
// }


// export default Home;




// {/* <h5 className="card-title">{record.language}</h5>
// <p claclassNames="card-text">{record.edition}</p>
// <p claclassNames="card-text">{record.price}</p> */}

