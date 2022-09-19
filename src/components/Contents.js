import React, { useState } from "react";
import { useParams } from "react-router-dom";
import database from "../data/db";

function Contents(){
    const DB = database()
    let {path} = useParams()
    let contents_path = ''
    for(var key in DB){
        if(DB[key].id == path){
            contents_path = DB[key].contentPath
        }
    }

    return(
        <div>{contents_path}</div>
    )
}




export default Contents