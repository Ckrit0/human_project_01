import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Contents from './components/Contents';
import NotFound from './components/NotFound';
import database,{ menuButton , contentsPath } from './data/db';

// 이펙트 : 페이지 전환, 메뉴바 상단고정, 로그남기기, 마우스 커서
// 메인화면 동영상, 푸터주저리, 유니크 키 오류, title icon, notfound, 버튼 줄이기
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
    <div className='container noMaPa'>
      {/* 헤더 */}
      <div className='header noMaPa' onClick={()=>{ // 동영상 준비
        navigate('/')
        setMenu2([])
      }}>
        <video src='/img/header.mp4' typeof='video/mp4' muted autoPlay loop width='100%' height='80%'
          style={{display:'inline-block', position: 'relative', top:'-10% '}}></video>
      </div>

      {/* 상단바 */}
      <div className='upperMenu noMaPa'>
        {/* 스크롤바 */}
        <div className='scroll noMaPa'>
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
            footer(제작자..블라블라)
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
