/* eslint-disable no-undef */
import GridPage from "../components/GridPage";
import "../assets/css/main.css";
import { useState,useEffect } from "react";
import PlayerPage from "../components/PlayerPage";

export default function MainPage() {

    const [win, setWin] = useState(false);
    const [winInfo, setWinInfo] = useState(0);
    const [playerOneName , setPlayerOneName] = useState("");
    const [playerTwoName , setPlayerTwoName] = useState("");

    useEffect(function(){
        if(winInfo===1){
            setWin(true);
        }else{
            setWin(false)
        }
    },[winInfo])

    useEffect((function(){
        var array = JSON.parse(localStorage.getItem("players"))
        setPlayerOneName(array.playerOne)
        setPlayerTwoName(array.playerTwo)
    }))

    const winstatus = (win)=>{
        setWinInfo(win)
    }

    return (
        <div className="container-fluid">

            <div className={"mainer " +(win ? "celebration" : null)}>
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
                    <div className="col-md-2 col-sm-12 mx-auto">
                        <PlayerPage name={playerOneName} playerNumber="Player 1" color="Pink"/>
                    </div>
                    <div className="col-md-8 col-sm-12 mx-auto">
                        <GridPage winstatus={winstatus}/>
                    </div>
                    <div className="col-md-2 col-sm-12 pad mx-auto">
                        <PlayerPage name={playerTwoName} playerNumber="Player 2" color="Purple"/>
                    </div>
                </div>
            </div>
        </div>
    )
} 