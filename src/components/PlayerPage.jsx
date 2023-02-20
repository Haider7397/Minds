import "../assets/css/PlayerPage.css"

export default function PlayerPage({name, playerNumber,color}){


    return(
        <div>
            <div className="box">
                <div className="borderStyle">
                    <h5 className="name">{name}</h5>
                    <p className="number">{playerNumber}</p>
                    <p className="color">{color}</p>
                </div>
            </div>
        </div>
    )
}