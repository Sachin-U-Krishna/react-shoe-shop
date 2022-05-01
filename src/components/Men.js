import { Link } from 'react-router-dom'

import React from 'react'

export default function Men() {
    return (
        <>
            <hr />
            <div className="container my-3">

                <div className="row">
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <Link to='/addidas'><img src="../images/addidas.png" className="logos" alt='addidas' /></Link>
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/nike.png" className="logos" alt='nike' />
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/puma.png" className="logos" alt='puma' />
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/crocs.png" className="logos" alt='crocs' />
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/reebok.png" className="logos" alt='reebok' />
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/walkaro.png" className="logos" alt='walkaro' />
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/sparx.png" className="logos" alt='sparx' />
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                        <img src="../images/bata.png" className="logos" alt='bata' />
                    </div>
                </div>

            </div>

            <img src="../images/grahics-left.png" alt="graphics" className="graphics-l d-none d-lg-block" />

        </>
    )
}

