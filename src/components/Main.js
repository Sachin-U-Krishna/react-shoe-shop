import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        function Submit(e) {
            e.preventDefault()
        }
        return (
            <>
                <div className="container-fluid my-3 mb-0 pb-0">
                    <div className="row mb-0 pb-0">
                        <div className="col-lg-8 ps-lg-5 pe-lg-4">
                            <img src="../images/featured.png" className="featured" alt="Featured" />
                                <div className="offset-md-2 mb-0 pb-0">
                                    <span className="f-brand mx-5">NIKE&emsp;LSMP</span> <br />
                                    <span className="f-amt">FLAT 20% OFF</span>
                                </div>
                        </div>
                        <div className="col-lg-4 align-self-center pe-lg-5">
                            <form id="create" onSubmit={Submit}>
                                <div className="text-center">
                                    <input type="text" placeholder="USER NAME" className="input" required /> <br />
                                    <input type="password" placeholder="PASSWORD" className="my-3 input" required/> <br />
                                    <input type="submit" name="submit" id="submit" className="my-2" value="SIGN IN" /> <br />

                                </div>
                                <a href="#">CREATE AN ACCOUNT</a>
                            </form>
                        </div>
                    </div>

                </div>
                {/* Graphics */}
                <img src="../images/grahics-right.png" alt="graphics" className="graphics d-none d-lg-block"></img>
            </>
        )
    }
}
