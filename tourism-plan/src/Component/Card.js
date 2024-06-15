import { useState } from "react";

function Card({id,image,info,price,name,removetour}){

    const [readmore,setreadmore] = useState(false)
    const desc= readmore ? info :`${info.substring(0,200)}.....`
    function readmorehandler(){
        setreadmore(!readmore)
    }

    

    return(
    <div className="Card">


        <div >
            <img src={image} className="image"></img>


            <div className="tourdetails">


                <h4 className="tourprice">{price}</h4>
                 <h4 className="namecity">{name}</h4>


                <div className="desc">

                    {desc}
                <span className="spantag" onClick={readmorehandler}>
                {readmore ? 'show less' : 'read more'}

                </span>
            </div>
       </div>
         </div>

         <div className="notbtn">

        <button onClick={ ()=> removetour(id)} className="notbtnbtn">
            Not Interested
        </button>
         </div>
    </div>

    );

}

export default Card;