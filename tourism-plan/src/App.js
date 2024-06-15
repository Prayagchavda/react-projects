import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours';

const App = () => {
 
  const [tours,setTours] = useState(data)

  function removetour(id){
    const newtour=tours.filter(tour => tour.id !==id);
    setTours(newtour)
  }

  if(tours.length === 0){

    return(

      
      <div className="refresh">
      <h1>No data</h1>

      <button type="submit" onClick={()=>setTours(data)} className="refreshbtn"> Refresh</button>
      
    </div>
);

}

return(
    <div className="App">

    
      <Tours tours={tours} removetour={removetour}></Tours>
   
    </div>
  );

 
}

export default App;
