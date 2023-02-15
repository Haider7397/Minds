
import { useState } from "react";
import "../assets/css/InfoPage.css";
import { useNavigate } from 'react-router-dom';

export default function InfoPage() {

    const [formVal, setFormVal]= useState({playerOne:"", playerTwo:""})
    const navigate = useNavigate(); 

    const handleChange = event => {
        const {name, value} = event.target;
        setFormVal({...formVal, [name]:value})
    }

    const save = () => {
        localStorage.setItem("players",JSON.stringify(formVal))
        navigate("/main");
    }

    return (
        <div className="container">
            <div className="main">
            <div className="row">
                <div className="box">
                    <h1><span>B</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                        <span>O</span>
                        <span> </span>
                        <span>A</span>
                        <span>P</span>
                        <span>P</span>
                    </h1>
                </div>
            </div>
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="heading">Enter players names</h4>
                                <div>
                                    <form>
                                        <div className="row pad">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control inputStyling" id="playerOneName" name="playerOne" placeholder="Player One" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pad">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control inputStyling" id="playerOneName" name="playerTwo" placeholder="Player Two" onChange={handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttonPosition">
                                            <button type="button" className="btn btn-primary btn-lg btn-block btnStyle" onClick={()=>save()} disabled={formVal.playerOne==="" && formVal.playerTwo}>Start</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 