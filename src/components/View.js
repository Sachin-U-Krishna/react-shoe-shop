import React from 'react'
import Err from './Err'

export default function View(props) {
	let addId = window.location.pathname
	addId = addId.split('/')[2]

	let s = props.addidas.filter((add) => add.id === parseInt(addId, 10))[0] //selected shoe
	if (!s) {
		return <Err />
	}

	let mrp = s.mrp
	let dis = s.dis

	let price = mrp - (mrp * (dis / 100)) // after disc price
	price = parseInt(price, 10)

	return (
		<>
			<hr />
			<div className='container' id='view'>
				<div className='row'>
					<div className='col-md-6' id='view-c1'>
						<br />
						<h1 className='text-center'>{s.name}</h1> <br />
						<h4 className='text-center'>RS.{s.mrp} DIS {s.dis}%</h4> <br />
						<h2 className='text-center'>RS.{price}</h2> <br /> <br />

						<div className='h1 px-5 fst-italic'>COLOUR <br />
							<div className='text-center my-4'>
								<span className='color px-3 gray'></span>
								<span className='color px-3 red'></span>
								<span className='color px-3 yellow'></span>
								<span className='color px-3 blue'></span>
							</div>
						</div> <br />
						<div className='h1 px-5 fst-italic mb-5'>SIZE <br />
							<div className='text-center my-4 mb-5'>
								<span className='size px-3'>7</span>
								<span className='size px-3'>8</span>
								<span className='size px-3'>9</span>
							</div>
						</div>
					</div>

					<div className='offset-md-1 col-md-5 my-4 my-md-0'>
						<div className='text-center'>
							<img src={s.image} alt={s.name} /> <br />
							<div className='text-center my-3'><button className='button btn btn-lg'><b>BUY</b></button></div>
						</div>
					</div>
				</div>
			</div>
			<img src="../images/grahics-right.png" alt="graphics" className="graphics d-none d-lg-block"></img>

		</>
	)
}
