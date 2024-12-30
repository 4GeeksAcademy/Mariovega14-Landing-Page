import React from "react";
import "../../styles/index.css"

function Card() {
    return (
        <div className="card-group">
            <div className="card text-center">
                <img src="https://picsum.photos/seed/picsum/500/325" className="card-img-top" alt="fotooos" />
                <div className="card-body">
                    <h5 className="card-tittle">Card tittle</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem ea perferendis voluptatum ipsam magnam!</p>

                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Find Out MORE!</button>
                </div>
            </div>
        </div>
    )
}





export default Card