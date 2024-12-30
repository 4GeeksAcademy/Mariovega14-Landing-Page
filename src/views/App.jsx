import React from "react"
import Navbar from "../js/components/Navbar.jsx"
import Jumbotron from "../js/components/Jumbotron.jsx"
import Card from "../js/components/Card.jsx"
function app() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row d-flex justify-content-center my-4">
                    <Jumbotron />
                </div>
<div className="row d-flex justify-content-center mb-4">
<div className="col-md-6 col-xxl-3">
<Card/>
</div>
<div className="col-md-6 col-xxl-3">
<Card/>
</div>
<div className="col-md-6 col-xxl-3">
<Card/>
</div>
<div className="col-md-6 col-xxl-3">
<Card/>
</div>



</div>


            </div>
        </>
    )
}
export default app