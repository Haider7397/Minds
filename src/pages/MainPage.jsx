/* eslint-disable no-undef */
import GridPage from "../components/GridPage"
import "../assets/css/main.css";
import { useState,useEffect } from "react";

export default function MainPage() {

    const [win, setWin] = useState(false);

    useEffect(function(){
        setWin(true)
    },[])

    return (
        <div className="container-fluid">
            <div className={"main " +(win ? "celebration" : null)}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <GridPage />
                    </div>
                </div>
            </div>
        </div>
    )
} 