import Card from './Card'




function Tours({tours,removetour}){



    return(
        <div > 
        <h1 className='title'> Plan with love hi</h1>
        <div className='cardcontainer'>
        { 
            tours.map( (tours) => {
                return <Card {...tours} removetour={removetour}></Card>
            })
        }


        </div>
        </div>
    );

}

export default Tours;