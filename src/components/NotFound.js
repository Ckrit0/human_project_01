import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import database from "../data/db";

function NotFound(){
    let navigate = useNavigate()
    let timer = setTimeout(()=>{
        navigate('/')
        return(
            clearTimeout(timer)
        )
    },5000)

    return(
        <div style={{color:'red'}}>
            <div>
                잠깐~!!! 이곳은 없는 페이지입니다.<br />
                404 Not Found 라고도 하죠~!!<br />
                잠시 후, 홈화면으로 돌아갑니다!!
            </div>
            <img src={process.env.PUBLIC_URL + "/img/tempImg/notFound.png"} width='500vw' height='850vw' />
        </div>
    )
}

export default NotFound