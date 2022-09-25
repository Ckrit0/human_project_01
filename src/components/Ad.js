import { useEffect, useState } from "react"

function Ad({selectAd}){
    let [ads,setAds] = useState([ // 광고 목록
        {img:'내 손을 java.png',text1:'다시 찾는 아이유의 명곡중의 명곡~!!', text2:'프로그래밍 언어, 무엇을 배울까? 아이유가 추천하는 "내 손을 Java~!!!"',title:'내 손을 Java!!'},
        {img:'야 node.jpg',text1:'하루 30분이면 명령어가 툭~! 너도 진짜 프로그래밍에 필요한 코딩을 공부해!', text2:'야. node 할 수 있어~!!',title:'야 node!!'},
        {img:'json.png',text1:'쌓여가는 쓰레기 "더미"에서 해방되고 싶다면,', text2:'json의 가벼운 데이터를 당신의 프로그램에게 선물하세요.',title:'Json!!'},
        {img:'PHP.png',text1:'앞에서 읽어도 PHP 뒤에서 읽어도 PHP', text2:'기러기 토마토 스위스 인도인 별똥별.... PHP',title:'PHP!!'},
        {img:'이클립스.png',text1:'상쾌하게, 로맨틱하게!!', text2:'자바 프로그래밍엔 eclipse하세요~!',title:'eclipse!!'},
        {img:'aws.png',text1:'앞에~ 있는~ 안내 페이지의 안내를 받아~', text2:'코딩들어갑니다 쭉!쭉!쭉쭉!! 아마존의 웹 서비스~',title:'AWS!!'},
        {img:'Git발.jpg',text1:'10년동안 깃발만 만들어 온 기업, "Git 공유"~!', text2:'어디 한번, 나도 Git발 좀 받아볼까??',title:'Git 공유!!'},
        {img:'String치즈.jpg',text1:'몸에 좋고 맛도 좋은 우리 아이 영양간식, String 치즈!!', text2:'대관령 목장에서 직접 코딩하였습니다.',title:'String치즈!!'},
        {img:'seltos.jpg',text1:'보여? ... Main Class가 이 정도!!', text2:'Class가 다르다!! import해서 쓰자!!',title:'Class 토스!!'},
        {img:'ironmanmouse.jpg',text1:'골드 티타늄 합금으로 만들어 튼튼한 마우스!!', text2:'마우스, 이제 던지지 말고 때리세요!! Shot The Mouse!!',title:'Shot The Mouse!!'},
        {img:'',text1:'', text2:'',title:''},
    ])
    let [showTitle,setShowTitle] = useState(true)

    useEffect(()=>{ // 광고를 눈에 거슬리게 만들기
        let title = setTimeout(()=>{
            setShowTitle(!showTitle)
            if(showTitle){
                document.querySelector('.adComp').style.paddingTop = '1.1%'
            }else{
                document.querySelector('.adComp').style.paddingTop = '0.9%'
            }
            return(
                clearTimeout(title)
            )
        },400)
        
    })

    return(
        <div className="adComp" onClick={()=>{
            alert('실제 광고였다면 광고수익이 들어왔겠죠?\n문의는 환영합니다. 우선 카카오뱅크 3333....')
        }}>
            <img className="adImg" src={"/ad/img/" + ads[selectAd].img} />
            <div className="adText">{ads[selectAd].text1}<br />{ads[selectAd].text2}</div>
            {showTitle? <div className="adTitle">{ads[selectAd].title}</div> : <div className="adTitle"></div>}
        </div>
    )
}
export default Ad