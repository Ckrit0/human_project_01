import { useEffect, useState } from "react"

function Ad({selectAd}){
    let [ads,setAds] = useState([
        {img:'내 손을 java.png',text1:'다시 찾는 아이유의 명곡중의 명곡~!!', text2:'프로그래밍 언어, 무엇을 배울까? 아이유가 추천하는 "내 손을 Java~!!!"',title:'내 손을 Java!!'},
        {img:'야 node.jpg',text1:'하루 30분이면 명령어가 툭~! 너도 진짜 프로그래밍에 필요한 코딩을 공부해!', text2:'야. node 할 수 있어~!!',title:'야 node!!'},
        {img:'json.png',text1:'쌓여가는 쓰레기 더미에서 해방되고 싶다면,', text2:'json의 가벼운 데이터를 당신의 가족에게 선물하세요.',title:'Json!!'},
        {img:'PHP.png',text1:'앞에서 읽어도 PHP 뒤에서 읽어도 PHP', text2:'기러기 토마토 스위스 인도인 별똥별.... PHP',title:'PHP!!'},
        {img:'이클립스.png',text1:'상쾌하게, 로맨틱하게!!', text2:'자바 프로그래밍엔 eclipse하세요~!',title:'eclipse!!'},
        {img:'aws.png',text1:'앞에~ 있는~ 안내 페이지의 안내를 받아~', text2:'코딩들어갑니다 쭉!쭉!쭉쭉!! 아마존의 웹 서비스~',title:'AWS!!'}
    ])
    let [showTitle,setShowTitle] = useState(true)
    console.log(selectAd)
    useEffect(()=>{
        let title = setTimeout(()=>{
            setShowTitle(!showTitle)
            return(
                clearTimeout(title)
            )
        },400)
        
    })
    return(
        <div className="adComp">
            <img className="adImg" src={"/ad/img/" + ads[selectAd].img} />
            <div className="adText">{ads[selectAd].text1}<br />{ads[selectAd].text2}</div>
            {showTitle? <div className="adTitle">{ads[selectAd].title}</div> : <div className="adTitle"></div>}
        </div>
    )
}
export default Ad