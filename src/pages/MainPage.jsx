/* eslint-disable no-undef */
import GridPage from "../components/GridPage";
import "../assets/css/main.css";
import { useState,useEffect } from "react";

export default function MainPage() {

    const [win, setWin] = useState(false);
    const [winInfo, setWinInfo] = useState(0);

    useEffect(function(){
        if(winInfo===1){
            setWin(true);
        }else{
            setWin(false)
        }
    },[winInfo])

    const winstatus = (win)=>{
        setWinInfo(win)
    }

    return (
        <div className="container-fluid">
            <div className={"main " +(win ? "celebration" : null)}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <GridPage winstatus={winstatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
} 