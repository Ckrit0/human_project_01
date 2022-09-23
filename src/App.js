import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Contents from './components/Contents';
import NotFound from './components/NotFound';
import database,{ menuButton , contentsPath } from './data/db';

// 이펙트 : 페이지 전환, 로그남기기, 마우스 커서
// title icon, notfound
function App() {
  const DB = database()
  const MENU_BTN = menuButton()
  const PATH = contentsPath()
  let navigate = useNavigate()
  let menu1 = [ // 메뉴리스트
    MENU_BTN.ca0Btn, MENU_BTN.ca1Btn, MENU_BTN.ca2Btn,
    MENU_BTN.ca3Btn, MENU_BTN.ca4Btn, MENU_BTN.ca5Btn, MENU_BTN.ca6Btn
  ]
  let [menu2, setMenu2] = useState([]) // 상위메뉴 선택에 따른 하위메뉴 리스트

  let btnImg = (data) => { // 버튼 선택 이미지 지정
    if(data.isSelect){
      return(
        {backgroundImage:'url(' + data.btnS + ')', border:'1px solid #ffd700'}
      )
    }
      return(
      {backgroundImage:'url(' + data.btnUS + ')'}
    )}
  
  let [scrX, setScrX] = useState(0)

  let [scrImg,setScrImg] = useState('stop')

  let scrollNow = () => { // 스크롤바 진행
    let scrXString = scrX+'%'
    return(
      {width:scrXString, height:'30px', backgroundColor:'#861313',
      margin:'0px', display:'inline-block', textAlign:'right'}
    )
  }

  window.addEventListener("scroll", (event) => { // 스크롤 액션리스너
    var temp = (window.scrollY / (document.querySelector('.container').scrollHeight - window.innerHeight)) * 100
    if(temp <= 5){
      setScrImg('stop')
    }else if(temp >= 99){
      setScrImg('end')
    }else{
      setScrImg('move')
    }
    setScrX(temp)
  });


  return (
    <div className='container'>
      {/* 헤더 */}
      <div className='header' onClick={()=>{ // 동영상 헤더, 온클릭에 홈화면으로
        navigate('/')
        setMenu2([])
      }}>
        <video src='/img/header.mp4' typeof='video/mp4' muted autoPlay loop width='100%'
          style={{display:'inline-block', position: 'relative', top:'-10% '}}></video>
      </div>

      {/* 상단바 */}
      <div className='upperMenu'>
        {/* 스크롤바 */}
        <div className='scroll'>
          <div style={scrollNow()}>
            <img src={'/img/scrollImage/' + scrImg + '.png'} width='50px' height='50px' />
          </div>
        </div>
        {/* 상위메뉴바 */}
        <div className='menuBar1'>
          {menu1.map((data,i)=>{
            return(
              <div key={data.id} className='menuBtn' style={btnImg(data)} onClick={()=>{
                menu1.map((innerData,innerI)=>{
                  innerData.isSelect = false
                })
                menu2.map((innerData,innerI)=>{
                  innerData.isSelect = false
                })
                
                data.isSelect = true
                PATH.tempPath = data.id
                setMenu2(selectMenu2(data.id))
              }}></div>
              )
            })}
        </div>
        {/* 메뉴바 구분선 */}
        <div style={{backgroundColor:'#ffd700', width:'100%', height:'1px'}}></div>
        {/* 하위메뉴바 */}
        <div className='menuBar2'>
          {menu2.map((data,i)=>{return(
              <div key={data.id} className='menuBtn menuBtn2' style={btnImg(data)} onClick={()=>{
                menu2.map((innerData,innerI)=>{
                  innerData.isSelect = false
                })
                data.isSelect = true
                PATH.tempPath2 = data.id
                navigate('/contents/' + PATH.tempPath + PATH.tempPath2)
              }}></div>
          )})}
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className='contents' style={{display:'inline-block'}}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/contents/:path" element={<Contents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* 푸터 */}
      <div className='footer'>
        <img src='/img/tempimg/HD-wallpaper-iron-man-helmet-mask.jpg' width="10%"
          style={{float:'left'}}></img>
            제작자 : 홍준표 | 제작날짜 : 2022년 9월 28일 <br />
            제작장소 : 휴먼교육센터 | 주소 : 충남 천안시 동남구 대흥로 215, 7층 | 전화번호 : 041-561-1122<br />
            문의 : mito0525@naver.com <br />
            본 사이트의 콘텐츠는 저작권법의 보호를 받지 못하므로, 무단 전재, 복사, 배포 등을 해도 어쩔 수 없습니다.<br />
            그냥 집에서 울고있겠죠 뭐, 심지어 저도 퍼온것들이라 저부터 조심해야합니다.<br />
            게다가 아이언맨은 마블, 마블은 디즈니꺼라서 얘네 겁나 빡시게 볼거니까, 퍼갈거면 각오하고 퍼가셔야합니다.<br /><br/>
            2022 Copyrightⓒ CkriT. All rights reserved.<br />
            Just wrote a little bit of fancy English. I am not good at English.

          <div style={{clear:'both'}} />
      </div>
    </div>
  );
  
  function selectMenu2(path){ // 메뉴 이동경로 지정
    var tempMenuList = []
    for(var key in DB){
      if(DB[key].category === path){
        if(DB[key].series === 'se0'){
          tempMenuList.push(MENU_BTN.se0Btn)
        }else if(DB[key].series === 'se1'){
          tempMenuList.push(MENU_BTN.se1Btn)
        }else if(DB[key].series === 'se2'){
          tempMenuList.push(MENU_BTN.se2Btn)
        }else if(DB[key].series === 'se3'){
          tempMenuList.push(MENU_BTN.se3Btn)
        }else if(DB[key].series === 'se4'){
          tempMenuList.push(MENU_BTN.se4Btn)
        }
      }
    }
    return tempMenuList
  }


}// App 종료
export default App;
