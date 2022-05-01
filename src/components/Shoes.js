import { Link } from 'react-router-dom'
import React from 'react'

function Shoes(props) {
    const shoes = props.addidas.map((add) => {
        return (
            <div key={add.id} className="col-12 col-md-6 col-lg-3 my-4" id='item'>
                <Link to={`/addidas/${add.id}`} >
                    <img src={add.image} alt='add.name' height='280' /> <br /><br />
                    <div className='text-center'><b>{add.name}</b> <br /> RS.{add.mrp} DIS {add.dis}% </div>
                </Link>
            </div>
        )
    });
    return (
        <>
            <hr className='mb-0 pb-0' />
            <div className='row container-fluid'> 
                <div className='col-lg-2 d-none d-lg-block' id='filter'>
                    <div className='line'></div>
                    <br />  <b>CATEGORIES</b> <br />
                    <p className='my-2'>FOOTWEAR</p>
                    <b>PRICE</b> <br />
                    <input type="number" placeholder="MIN" className="input" /> TO <input type="number" placeholder="MAX" className="my-3 input" /> 
                    <br />
                    <br />
                    <b>COLOUR</b>
                    <ul className='my-3'>
                        <li><i class="fa fa-circle blue" aria-hidden="true"></i> BLUE</li>
                        <li><i class="fa fa-circle green" aria-hidden="true"></i> GREEN</li>
                        <li><i class="fa fa-circle orange" aria-hidden="true"></i> ORANGE</li>
                        <li><i class="fa fa-circle pink" aria-hidden="true"></i> PINK</li>
                        <li><i class="fa fa-circle yellow" aria-hidden="true"></i> YELLOW</li>
                    </ul>
                </div>
                <div className='col-lg-10 my-4' id='list'>
                    <div className='container'>
                        <h3>ADDIDAS MEN'S SHOES</h3>
                        <div className='row'>{shoes}</div>
                    </div>
                </div>
            </div>
            <img src="../images/grahics-right.png" alt="graphics" className="graphics-b d-none d-lg-block mb-0 pb-0"></img>
        </>
    )

}

export default Shoes;

