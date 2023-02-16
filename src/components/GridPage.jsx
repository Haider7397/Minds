/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { data, winningCombination } from "../data/data";
import "../assets/css/GridPage.css";
import ModalPage from "./ModalPage";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GridPage({ winstatus }) {
    const [info, setinfo] = useState([]);
    const [player, setPlayer] = useState(1);
    const [playerOneClick, setPlayerOneClick] = useState([]);
    const [playerTwoClick, setPlayerTwoClick] = useState([]);
    const [combinations, setCombinations] = useState([]);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    useEffect(function () {
        data.forEach(elem => { elem.status = 0 });
        var random = shuffle(data);
        setinfo(random);
        setCombinations(winningCombination);
    }, [])

    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    const sendVal = (index) => {
        if (index === 12) {
            info[index].status = player;
            changePlayer(index)
        } else {
            if (info[index].status === 0) {
                info[index].status = player;
                changePlayer(index);
            } else {
                toast.info("Already Taken");
            }
        }
    }

    const changePlayer = (index) => {

        if (player === 1) {
            setPlayer(2);
            setPlayerOneClick([...playerOneClick, index]);
        } else {
            setPlayer(1);
            setPlayerTwoClick([...playerTwoClick, index]);

        }
    }

    useEffect(function () {
        checkWinning(playerOneClick, "Player One wins");
    }, [playerOneClick])

    useEffect(function () {
        checkWinning(playerTwoClick, "Player Two wins");
    }, [playerTwoClick])

    const checkWinning = (array, str) => {
        combinations.forEach(arr => {
            const hasAllElems = arr.every(elem => array.includes(elem));
            if (hasAllElems) {
                winstatus(1);
                setMsg(str)
                setShow(true)
                return str;
            }
        })

        return null;
    }

    const handleExit = () => {
        navigate('/');
    }

    const handleReset = () => {
        data.forEach(elem => { elem.status = 0 });
        var random = shuffle(data);
        setinfo(random);
        setPlayerOneClick([]);
        setPlayerTwoClick([]);
        setShow(false);
        setMsg(null);
        setPlayer(1);
        winstatus(0);
    }



    return (
        <div className="container">
            <div className="row bordering">
                {
                    info.map((item, index) =>
                        <div className={"col-3 textAlignment columnStyling mx-auto " + (item.status === 1 ? 'playerone' : item.status === 2 ? 'playertwo' : null)} key={index} onClick={() => sendVal(index)}>
                            <p className="textStyling text">{item.value}</p>
                        </div>
                    )
                }
            </div>
            <ModalPage show={show} message={msg} handleExit={handleExit} handleReset={handleReset} />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}