import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Contents from './components/Contents';
import Main from './components/Main';
import database,{ menuButton , contentsPath } from './data/db';

// 이펙트 : 로딩스피너, 스크롤바, 페이지 전환, 메뉴바 상단고정, 로그남기기
// 메뉴버튼 이미지, 헤더 동영상, 메인화면 동영상, 푸터주저리, 유니크키 오류, title icon
function App() {
  const DB = database()
  const MENU_BTN = menuButton()
  const PATH = contentsPath()
  let menu = [MENU_BTN.ca0Btn, MENU_BTN.ca1Btn, MENU_BTN.ca2Btn, MENU_BTN.ca3Btn, MENU_BTN.ca4Btn, MENU_BTN.ca5Btn, MENU_BTN.ca6Btn ]
  let [menu2, setMenu2] = useState([])
  let navigate = useNavigate()

  return (
    <div className='container'>
      {/* 헤더 */}
      <div className='header' onClick={()=>{ // 동영상 준비
        navigate('/')
        setMenu2([])
      }}>header</div>

      {/* 메뉴바 */}
      <div className='menuBar'>
        <Navbar className='noMaPa'>
          <Container>
            <Nav>
              {menu.map((data,i)=>{return(
                <Nav.Link className='noMaPa' onClick={()=>{
                  PATH.tempPath = menu[i].id
                  setMenu2(selectMenu2(PATH.tempPath))
                }}>{menu[i].btn}</Nav.Link>
              )})}
            </Nav>
          </Container>
        </Navbar>
      </div>
      {/* 하위메뉴바 */}
      <div className='menuBar2'>
        <Navbar className='noMaPa'>
            <Container>
              <Nav>
                {menu2.map((data,i)=>{return(
                  <div key={data.id} >
                    <Nav.Link className='noMaPa' onClick={()=>{
                      // console.log(contPath)
                      PATH.tempPath2 = data.id
                      navigate('/contents/' + PATH.tempPath + PATH.tempPath2)
                    }}>{data.btn}</Nav.Link>
                  </div>
                )})}
              </Nav>
            </Container>
          </Navbar>
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
  

  function selectMenu2(cPath){ // 이동경로 지정
    var tempMenuList = []
    for(var key in DB){
      if(DB[key].category == cPath){
        if(DB[key].series == 'se0'){
          tempMenuList.push(MENU_BTN.se0Btn)
        }else if(DB[key].series == 'se1'){
          tempMenuList.push(MENU_BTN.se1Btn)
        }else if(DB[key].series == 'se2'){
          tempMenuList.push(MENU_BTN.se2Btn)
        }else if(DB[key].series == 'se3'){
          tempMenuList.push(MENU_BTN.se3Btn)
        }else if(DB[key].series == 'se4'){
          tempMenuList.push(MENU_BTN.se4Btn)
        }
      }
    }
    return tempMenuList
  }



}// App 종료
export default App;
