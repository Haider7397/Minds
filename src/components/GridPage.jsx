/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import {data, winningCombination} from "../data/data";
import "../assets/css/GridPage.css";

export default function GridPage(){
    const [info, setinfo] = useState([]);
    const [player, setPlayer] = useState(1);
    const [playerOneClick, setPlayerOneClick] = useState([]);
    const [playerTwoClick, setPlayerTwoClick] = useState([]);
    const [combinations, setCombinations] = useState([]);

    useEffect(function(){
        var random= shuffle(data);
        setinfo(random);
        setCombinations(winningCombination);
    },[])

    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }

        return array;
    }

    const sendVal = (index)=>{
        if(index === 12){
            changePlayer(index)
        }else{
            if(info[index].status===0){
                info[index].status = player;
                changePlayer(index);
            }else{
                console.log("Already Taken")
            }
        }
    }

    const changePlayer = (index)=>{
        
        if(player===1){
            setPlayer(2);
            setPlayerOneClick([...playerOneClick,index]);
        }else{
            setPlayer(1);
            setPlayerTwoClick([...playerTwoClick,index]);
            
        }
    }

    useEffect(function(){
        checkWinning(playerOneClick, "Player One wins")
    },[playerOneClick])

    useEffect(function(){
        checkWinning(playerTwoClick, "Player Two wins")
    },[playerTwoClick])

    const checkWinning = (array,str)=>{ 
        combinations.forEach(arr=>{
            const hasAllElems = arr.every(elem => array.includes(elem));
            if(hasAllElems){
                console.log(str)
                return str;
            }
        })

        return null;
    }



    return(
        <div className="container">
            <div className="row bordering">
                        {
                            info.map((item,index) => 
                                <div className={"col-3 textAlignment columnStyling mx-auto " + (item.status === 1? 'playerone' : item.status === 2? 'playertwo' : null)} key={index} onClick={()=>sendVal(index)}>
                                    <p className="textStyling">{item.value}</p>
                                </div>
                            )
                        }
            </div>
            {/* <div>
                <img src={require('../assets/images/giphy2.gif')} alt=""/>
            </div> */}
        </div>
    )
}