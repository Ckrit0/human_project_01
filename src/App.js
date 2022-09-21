import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Contents from './components/Contents';
import Main from './components/Main';
import database,{ menuButton , contentsPath } from './data/db';

// 이펙트 : 로딩스피너, 스크롤바, 페이지 전환, 메뉴바 상단고정, 로그남기기
// 메뉴버튼 이미지, 헤더 동영상, 메인화면 동영상, 푸터주저리, 유니크 키 오류, title icon
// 브렌치 사용하기 테스트
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

  let btnImg = (data)=> { // 버튼 선택 이미지 지정
    if(data.isSelect){
      return(
        {backgroundImage:'url(' + data.btnS + ')', border:'1px solid #ffd700'}
      )
    }
      return(
      {backgroundImage:'url(' + data.btnUS + ')'}
    )}

  return (
    <div className='container'>
      {/* 헤더 */}
      <div className='header' onClick={()=>{ // 동영상 준비
        navigate('/')
        setMenu2([])
      }}>header</div>

      {/* 상위메뉴바 */}
      <div className='menuBar'>
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

      {/* 하위메뉴바 */}
      <div className='menuBar2'>
        {menu2.map((data,i)=>{return(
            <div key={data.id} className='menuBtn' style={btnImg(data)} onClick={()=>{
              menu2.map((innerData,innerI)=>{
                innerData.isSelect = false
              })
              data.isSelect = true
              PATH.tempPath2 = data.id
              navigate('/contents/' + PATH.tempPath + PATH.tempPath2)
            }}></div>
        )})}
      </div>

      {/* 스크롤바 */}
      <div className='scroll'>scroll</div>

      {/* 컨텐츠 */}
      <div className='contents' style={{display:'inline-block'}}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contents/:path" element={<Contents />} />
        </Routes>
      </div>

      {/* 푸터 */}
      <div className='footer'>footer(제작자..블라블라)</div>
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
