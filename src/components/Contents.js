import React, { useState } from "react";
import { useParams } from "react-router-dom";
import database from "../data/db";
import NotFound from "./NotFound";

function Contents(){
    const DB = database()
    let {path} = useParams()
    let contents_path = ''
    for(var key in DB){ // path에 맞는 페이지 찾기
        if(DB[key].id == path){
            contents_path = DB[key].contentPath
        }
    }
    if(contents_path == ''){ // 없는 경로 거르기
        return(
            <NotFound />
        )
    }

    return( // 해당 path 노출
        <div>{contents_path}</div>
    )
}




export default Contents