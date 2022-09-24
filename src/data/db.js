import { Accordion, Card, CardGroup, ListGroup, Toast } from 'react-bootstrap'
import create from 'zustand'

const database = create(()=>({ // 경로, 페이지 찾기 변수
    ca0se0 : {id:'ca0se0', category:'ca0', series:'se0', contentPath:<IntroduceIronMan />},
    ca1se1 : {id:'ca1se1', category:'ca1', series:'se1', contentPath:<IntroduceActorInIronMan1 />},
    ca1se2 : {id:'ca1se2', category:'ca1', series:'se2', contentPath:<IntroduceActorInIronMan2 />},
    ca1se3 : {id:'ca1se3', category:'ca1', series:'se3', contentPath:<IntroduceActorInIronMan3 />},
    ca2se1 : {id:'ca2se1', category:'ca2', series:'se1', contentPath:<PlotOfIronMan1 />},
    ca2se2 : {id:'ca2se2', category:'ca2', series:'se2', contentPath:<PlotOfIronMan2 />},
    ca2se3 : {id:'ca2se3', category:'ca2', series:'se3', contentPath:<PlotOfIronMan3 />},
    ca3se1 : {id:'ca3se1', category:'ca3', series:'se1', contentPath:<MusicInIronMan1 />},
    ca3se2 : {id:'ca3se2', category:'ca3', series:'se2', contentPath:<MusicInIronMan2 />},
    ca3se3 : {id:'ca3se3', category:'ca3', series:'se3', contentPath:<MusicInIronMan3 />},
    ca3se4 : {id:'ca3se4', category:'ca3', series:'se4', contentPath:<MusicInCrossOver />},
    ca4se1 : {id:'ca4se1', category:'ca4', series:'se1', contentPath:<TransformationOfIronMan1 />},
    ca4se2 : {id:'ca4se2', category:'ca4', series:'se2', contentPath:<TransformationOfIronMan2 />},
    ca4se3 : {id:'ca4se3', category:'ca4', series:'se3', contentPath:<TransformationOfIronMan3 />},
    ca4se4 : {id:'ca4se4', category:'ca4', series:'se4', contentPath:<TransformationOfCrossOver />},
    ca5se1 : {id:'ca5se1', category:'ca5', series:'se1', contentPath:<DirectorOfIronMan1 />},
    ca5se2 : {id:'ca5se2', category:'ca5', series:'se2', contentPath:<DirectorOfIronMan2 />},
    ca5se3 : {id:'ca5se3', category:'ca5', series:'se3', contentPath:<DirectorOfIronMan3 />},
    ca5se4 : {id:'ca5se4', category:'ca5', series:'se4', contentPath:<DirectorOfCrossOver />},
    ca6se0 : {id:'ca6se0', category:'ca6', series:'se0', contentPath:<Reference />}
}))

const menuButton = create(()=>({ // 메뉴버튼
    ca0Btn: {id:'ca0', btnUS:'/img/btn/ca0BtnUS.png', btnS:'/img/btn/ca0Btn.png', isSelect:false},
    ca1Btn: {id:'ca1', btnUS:'/img/btn/ca1BtnUS.png', btnS:'/img/btn/ca1Btn.png', isSelect:false},
    ca2Btn: {id:'ca2', btnUS:'/img/btn/ca2BtnUS.png', btnS:'/img/btn/ca2Btn.png', isSelect:false},
    ca3Btn: {id:'ca3', btnUS:'/img/btn/ca3BtnUS.png', btnS:'/img/btn/ca3Btn.png', isSelect:false},
    ca4Btn: {id:'ca4', btnUS:'/img/btn/ca4BtnUS.png', btnS:'/img/btn/ca4Btn.png', isSelect:false},
    ca5Btn: {id:'ca5', btnUS:'/img/btn/ca5BtnUS.png', btnS:'/img/btn/ca5Btn.png', isSelect:false},
    ca6Btn: {id:'ca6', btnUS:'/img/btn/ca6BtnUS.png', btnS:'/img/btn/ca6Btn.png', isSelect:false},
    se0Btn: {id:'se0', btnUS:'/img/btn/se0BtnUS.png', btnS:'/img/btn/se0Btn.png', isSelect:false},
    se1Btn: {id:'se1', btnUS:'/img/btn/se1BtnUS.png', btnS:'/img/btn/se1Btn.png', isSelect:false},
    se2Btn: {id:'se2', btnUS:'/img/btn/se2BtnUS.png', btnS:'/img/btn/se2Btn.png', isSelect:false},
    se3Btn: {id:'se3', btnUS:'/img/btn/se3BtnUS.png', btnS:'/img/btn/se3Btn.png', isSelect:false},
    se4Btn: {id:'se4', btnUS:'/img/btn/se4BtnUS.png', btnS:'/img/btn/se4Btn.png', isSelect:false}
}))

let contentsPath = create(()=>({ // 경로변수
    tempPath: '',
    tempPath2: ''
}))


export default database
export { menuButton }
export { contentsPath }


/* 화면 페이지 모음 */

function IntroduceIronMan(){ // 아이언맨 소개
    return(
        <Card className='outer'>
            <Card.Body>
                <Toast className='innerToast'>
                    <Toast.Body>
                        본 문서는 주로 시네마틱에서의 아이언맨을 소개하는 페이지입니다.<br />
                        캐릭터 성격 등이 원작과 차이가 있을 수 있습니다.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_00.png' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        마블 시네마틱 유니버스의 아이언맨이자, 아이언맨 실사영화 시리즈의 주인공.
                        캡틴 아메리카와 함께 마블 시네마틱 유니버스 인피니티 사가의 메인 히어로이자 동시에 진 주인공이다.
                        천재적인 두뇌와 재능으로 세계 최고의 군수산업체 '스타크 인더스트리'를 이끄는 CEO/엔지니어이자,
                        타고난 매력으로 웬만한 할리우드 스타 부럽지 않은 화려한 삶을 살아가던 억만장자였으나,
                        우연한 사건을 계기로 개심하고 또다른 삶을 살아간다.
                        원작과 마찬가지로 모델은 미국의 전설적인 괴짜 사업가 하워드 휴즈고,
                        추가적으로 세계 최고의 혁신가이자 스페이스X & 테슬라를 만든 일론 머스크도 어느 정도 영향을 주었다.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_01.png' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        로버트 다우니 주니어가 선보인 토니 스타크는 원작과 완벽한 싱크로율을 보여주기보다는,
                        영화의 흥행으로 마블 코믹스 쪽에서 배우와 흡사한 인상으로 작화를 바꿨다.
                        쉽게 말해 파생된 미디어믹스가 오히려 원작에게 영향을 준 것.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_02.png' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        그렇게 원작과는 약간 다르지만 원작자인 스탠 리는 딱 내가 생각한 토니 스타크다.
                        그는 아이언맨이 되기 위해 태어난 사람이다.라고 극찬했다.
                        배우 자체가 토니 스타크와 궁합이 잘 맞고 로버트 역시 작품과 캐릭터에 대한 이해도가 매우 높으며 연기력까지 받쳐주니,
                        원작자에게나 팬들에게나 매우 높은 평가를 받은 것으로 보인다.
                        사실 초창기 토니 스타크의 인상도 다우니의 토니와 비슷하며, 영화판의 캐릭터는 메인 유니버스보단 얼티밋 유니버스의 토니와 더 비슷하다.
                        그리고 작중에서 토니를 연기한 다우니와 평소 다우니의 말투도 비슷하다.
                        매사 촐랑거리고 안하무인으로 굴지만, 호 인센에게 가족이 있냐는 질문을 받았을 때 침묵하며 없다고 대답한 점,
                        페퍼에게 <span className='font'> "나에게는 당신밖에 없는데."(I don't have anyone, but you)</span>라고 말한 점,
                        그리고 아이언맨 3에서 만다린의 습격에서 도망친 후 자비스가 동력 부족으로 꺼질 때
                        <span className='font'> "자비스?" "날 떠나지마 친구" ("Jarvis?" "Don't leave me, buddy.")</span>등을 보면, 겉모습과는 달리 고독을 품고 있는 인물이다.
                        특히 가족이 없다는 고독감과 아버지에 대한 애증은 아이언맨의 이후 행적에 있어서 매우 중요한 역할을 하게 된다.
                        가정사에 대한 콤플렉스는 이후 어벤져스 팀원들에 대한 애착으로 이어지게 되는데,
                        슈퍼 히어로 팀을 꾸린다는 닉 퓨리의 설계에 의해 참가한 프로젝트의 일환으로 만나게 되었지만,
                        동료들과 오랜 시간을 함께 하며 이들을 자신의 가족으로 여기게 되었고,
                        가족이 없는 고독감에 대한 해답을 사실상 이들에게서 찾아낸 것이다.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_03.jpg' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        또한 아버지에 대한 애증은 이후 시빌워에서 캡틴 아메리카와의 갈등에서 가장 주요한 동기가 된다.
                        참고로 영화판 토니의 성격과 원작 토니의 성격은 아주 많이 다르다.
                        한마디로 원작 코믹스보다 영화판 토니가 더 인간적이고 착한 편이라고 할 수 있다.
                        코믹스의 토니와는 판이한, 시원시원하면서도 따뜻한 성격의 소유자이다.
                        우선 코믹스에서는 <span className='font'> '슈트가 없으면 일반인'</span> 열등감과 공포 때문에 동료들도 믿지 못한 데 비해,
                        영화에서는 그런 모습이 없다. 한 마디로 코믹스판은 알면 알수록 피곤한 인간인데 영화판은 맨날 사고치고 다녀도, 알고 보면 좋은 친구인 것.
                        물론 캡틴 아메리카와 삐걱거리는 것은 변하지 않았지만, 시빌 워 원작 등에서 치고 받고 한 것에 비하면 매우 사이가 좋아졌다.
                        로다주가 언급하기를 토니가 사람과의 관계에서 더 낮은 자리를 원한 적은 딱 두 번 밖에 없는데,
                        한 번은 연인 페퍼고 다른 한 명은 캡틴이다.
                        실제로 페퍼에게는 본인 회사의 CEO를 맡겼고, 캡틴을 상대로는 '어벤져스의 대장은 내가 아니라 캡틴이다'라고 본인 입으로 얘기했을 정도다.
                        이외에 친한 친구들이 고통 받는 것에 괴로워하는 모습도 많이 보인다.
                        인센의 죽음에 착잡해하는 것도 그렇고, 해피 호건이 중상을 당해 의식불명이 되자 병실에서 간호하는 모습도 보인데다,
                        분노를 참지 못하고 만다린에게 선전포고를 하는 등... 캡틴 아메리카: 시빌 워에서도 이는 마찬가지.
                        이런 인간적인 면모가 많은 토니 스타크의 모습 때문인지,
                        영화판 토니 스타크의 멘탈이 너무 좋은 것이 당위성이 없다는 지적을 하는 사람도 소수 있다.
                        다만 영화 속에서 드러나는 토니 스타크는 멘탈이 강하다기 보다는,
                        멘탈이 흔들리는 상황에서도 이를 촐랑거리고 철없는 겉모습으로 감추는 쪽에 더 가깝다.
                        아이언맨 3에 나오는 트라우마나 어벤져스: 에이지 오브 울트론에서의 강박증을 통해서 이를 짐작해볼 수 있다.
                        그리고 영화판 토니 스타크가 여전히 안하무인적인 면이 있지만 인간적으로 그렇게 비뚤어지지 않았던 사람이었던 것을 생각해 보면,
                        딱히 당위성을 지적할 만한 문제는 아니다.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_04.png' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        게다가 아이언맨 1편 초반부에 죽음의 위기에 처했던 이유가 자신의 안이함과 잘못된 판단 때문이었다는 것과,
                        아이언맨 2에서 자신의 기술이 잘못 이용됐을 때의 위험성을 경험한 것,
                        이 충격으로 바른 판단을 해야 한다는 강박관념도 깊게 새겨졌을 수 있다.
                        여기에서 코믹스판의 토니 스타크가 사람들에게 얼마나 인상이 안 좋은지 알 수 있다.
                        잘 알려졌다시피 마블 시네마틱 유니버스에서 최초로 영화화된 히어로인데,
                        MCU의 첫번째 작품이자 본인의 데뷔작이 초대박 나면서 전체 프랜차이즈가 흥하는데 지대한 공을 세워,
                        영화판 마블의 역사에서 특별한 의미를 가지는 캐릭터가 되었다.
                        캐릭터와 시리즈의 인기가 하늘을 찌르면서 배우인 로버트 다우니 주니어도 영화계에 화려하게 재기하게 됨은 물론,
                        영화의 성공으로 오히려 원작 만화 캐릭터의 인지도까지 올라가는 긍정적인 나비효과를 일으켰다.
                        이 덕분인지 MCU 세계관 내에서의 아이언맨은 비중 자체도 원작과는 비교도 안되게 높고 대접도 매우 좋다.
                        개개인 영화일 경우에는 아니지만 단체로 등장하는 작품에선 거의 진 주인공이나 메인 주인공급으로 묘사될 정도.
                        보면 알다시피 다른 캐릭터들에 비해 분량이 많고 단체영화 때마다 보스를 제압하거나 쓰러뜨릴 때 가장 큰 역할을 하거나,
                        결정적인 결말을 맺는 행동을 하기도 한다.
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body>
                        <img className='innerImg' src='/img/introduceIronMan/ca0se0_05.png' />
                    </Toast.Body>
                </Toast>
                <Toast className='innerToast'>
                    <Toast.Body className='left'>
                        더해서 MCU에서는 본작보다 두드러질 정도로 어벤져스의 주요 작전에 있어서도 빠질 수 없는 화끈한 공중 화력 지원을 워 머신과 함께 담당해왔는데,
                        더군다나 놀라운 점은 온갖 스마트 무기들이 날씬한 외양의 슈트 안에 다양하게 탑재된 것도 모자라
                        지식 뿐만 아니라 캡틴 다음갈 정도의 탁월하고 영리한 순간 보조 지휘 능력이라는 것.
                        자기주도적 성격이 캡틴과 다툴 정도이자, 캡틴이 스티브로서도 캡틴으로서도 이상적이고 인간적인 영웅적인 모습의 고결한 리더라면
                        토니는 아이언맨으로서도 토니로서도 이상적임과 동시에 타협적이고 현실적이며
                        더욱 감정적인 면들이 강하게 부각되는 캡틴의 안티테제격인 리더로서의 성향이 본작보다 두드러지게 나타난다.
                        본인이 주도적으로 빈틈을 메꾸는 순간적인 지휘 기량이 특히 뛰어나기에
                        온갖 지형지물 활용 연계들으로 영리한 작전들을 펼칠 수 있었다.
                        가히 캡틴의 참모와도 같은 어벤져스의 또 하나의 리더로서 다목적 공중 전투 기지같은 포지션과 동시에 탁월한 보조 지휘 능력도 갖춘,
                        그야말로 천공의 참모라 해도 손색없는 모습이다. 더욱이 한 회사의 CEO이기까지 하니 이 성향이 더욱 짙어질 수밖에 없는 것.
                        이러한 독특함을 로다주가 잘 살려냈기에 호평 일색이 이어지고 있다.
                        더욱이 지휘가 겹쳐 팀워크가 망하는 위험도가 없을 정도로 임무의 현장에서 말이 겹친 적이 없기에 어벤져스의 참모진으로서 가히 만점수준이다.
                    </Toast.Body>
                </Toast>
            </Card.Body>
        </Card>
            
)}

function IntroduceActorInIronMan1(){ // 배우 소개 아이언맨 1
    return(
        <Card className='outer'>
            <Card.Body>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_00.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>토니 스타크 /<br /> 아이언맨 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 로버트 존 다우니 주니어<br />(Robert John Downey Jr.)<br />
                            <br />출생 : 1965년 4월 4일<br />미국 뉴욕주 뉴욕시 맨해튼
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_01.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>페퍼 포츠 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 기네스 팰트로우<br />(Gwyneth Kate Paltrow)<br />
                            <br />출생 : 1972년 9월 27일<br />미국 캘리포니아 로스엔젤레스
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_02.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>해피 호건 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 조나단 콜리아 패브로<br />(Jonathan Kolia Favreau)<br />
                            <br />출생 : 1966년 10월 19일<br />뉴욕주 퀸즈 플러싱
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_03.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>제임스 로드 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 테렌스 데숀 하워드<br />(Terrence Dashon Howard)<br />
                            <br />출생 : 1969년 3월 11일<br />미국 일리노이 주 시카고
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_04.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>닉 퓨리 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 새뮤얼 리로이 잭슨<br />(Samuel Leroy Jackson)<br />
                            <br />출생 : 1948년 12월 21일<br />미국 워싱턴 D.C.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_05.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>필 콜슨 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 로버트 클라크 그래그<br />(Robert Clark Gregg)<br />
                            <br />출생 : 1962년 4월 2일<br />메사추세츠 주 보스턴 시 맨해튼
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_06.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>오베디아 스텐 /<br />아이언몽거 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 제프리 레옹 브리지스<br />(Jeffrey Leon Bridges)<br />
                            <br />출생 : 1949년 12월 4일<br />미국 캘리포니아 주 로스엔젤레스
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se1_07.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>호 인센 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 션 터브<br />(Shaun Toub)<br />
                            <br />출생 : 1963<br />이란
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
)}

function IntroduceActorInIronMan2(){ // 배우 소개 아이언맨 2
    return(
        <Card className='outer'>
            <Card.Body>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_00.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>토니 스타크 /<br /> 아이언맨 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 로버트 존 다우니 주니어<br />(Robert John Downey Jr.)<br />
                            <br />출생 : 1965년 4월 4일<br />미국 뉴욕주 뉴욕시 맨해튼
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_01.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>페퍼 포츠 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 기네스 팰트로우<br />(Gwyneth Kate Paltrow)<br />
                            <br />출생 : 1972년 9월 27일<br />미국 캘리포니아 로스엔젤레스
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_02.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>해피 호건 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 조나단 콜리아 패브로<br />(Jonathan Kolia Favreau)<br />
                            <br />출생 : 1966년 10월 19일<br />뉴욕주 퀸즈 플러싱
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_03.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>제임스 로드 /<br />워 머신 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 도널드 프랭크 치들 주니어<br />(Donald Frank Cheadle, Jr.)<br />
                            <br />출생 : 1964년 11월 29일<br />미국 미주리주 캔자스시티
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_04.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>닉 퓨리 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 새뮤얼 리로이 잭슨<br />(Samuel Leroy Jackson)<br />
                            <br />출생 : 1948년 12월 21일<br />미국 워싱턴 D.C.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_05.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>필 콜슨 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 로버트 클라크 그래그<br />(Robert Clark Gregg)<br />
                            <br />출생 : 1962년 4월 2일<br />메사추세츠 주 보스턴 시 맨해튼
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_06.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>나타샤 로마노프 /<br />블랙 위도우 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 스칼릿 잉그리드 조핸슨<br />(Scarlett Ingrid Johansson)<br />
                            <br />출생 : 1984년 11월 22일<br />미국 뉴욕 주 뉴욕 시 맨해튼
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_07.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>이반 반코 /<br />위플래시 역</span></Card.Title>
                        <Card.Text>
                            <br />이름 : 필립 안드레 루크 2세<br />(Phillip Andre Rourke Jr.)<br />
                            <br />출생 : 1952년 9월 16일<br />미국 뉴욕 주 스키넥터디
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='innerCard'>
                    <Card.Img variant="top" src="/img/actor/ca1se2_08.jpg" />
                    <Card.Body>
                        <Card.Title><span className='font big'>저스틴 해머 역</span></Card.Title>
                        <Card.Text>
                        <br />이름 : 샘 록웰<br />(Sam Rockwell)<br />
                        <br />출생 : 1968년 11월 5일<br />미국 캘리포니아 달리 시티
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
)}

function IntroduceActorInIronMan3(){ // 배우 소개 아이언맨 3
    return(
        <Card className='outer'>
        <Card.Body>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_00.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>토니 스타크 /<br /> 아이언맨 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 로버트 존 다우니 주니어<br />(Robert John Downey Jr.)<br />
                        <br />출생 : 1965년 4월 4일<br />미국 뉴욕주 뉴욕시 맨해튼
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_01.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>페퍼 포츠 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 기네스 팰트로우<br />(Gwyneth Kate Paltrow)<br />
                        <br />출생 : 1972년 9월 27일<br />미국 캘리포니아 로스엔젤레스
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_02.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>해피 호건 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 조나단 콜리아 패브로<br />(Jonathan Kolia Favreau)<br />
                        <br />출생 : 1966년 10월 19일<br />뉴욕주 퀸즈 플러싱
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_03.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>제임스 로드 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 테렌스 데숀 하워드<br />(Terrence Dashon Howard)<br />
                        <br />출생 : 1969년 3월 11일<br />미국 일리노이 주 시카고
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se1_04.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>알드리치 킬리언 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 가이 에드워드 피어스<br />(Guy Edward Pearce)<br />
                        <br />출생 : 1967년 10월 5일<br />영국 잉글랜드 케임브리지셔 주 일리
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_05.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>만다린 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 크리슈나 팬디트 반지<br />(Krishna Pandit Bhanji)<br />
                        <br />출생 : 1943년 12월 31일<br />영국 노스요크셔 주 스네인턴
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='innerCard'>
                <Card.Img variant="top" src="/img/actor/ca1se3_06.jpg" />
                <Card.Body>
                    <Card.Title><span className='font big'>매튜 엘리스(대통령) 역</span></Card.Title>
                    <Card.Text>
                        <br />이름 : 윌리엄 토마스 새들러<br />(William Thomas Sadler)<br />
                        <br />출생 : 1950년 4월 13일<br />뉴욕주 버팔로
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card.Body>
    </Card>
)}

function PlotOfIronMan1(){ // 아이언맨1 줄거리
    return(
        <Card className='outer'>
            <Card.Body style={{width:'80%'}}>
                <Toast className='innerToast'>
                    <Toast.Body>
                        이 문서에 스포일러가 포함되어 있습니다.<br />
                        이 문서가 설명하는 작품이나 인물 등에 대한 줄거리, 결말, 반전 요소 등을 직·간접적으로 포함하고 있습니다.
                    </Toast.Body>
                </Toast>
                <Accordion className='innerAccordion' defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1 프롤로그</Accordion.Header>
                        <Accordion.Body className='left'>
                            세계 최고의 무기 제조사인 스타크 인더스트리의 CEO인 토니 스타크는 미 공군과 함께 험비를 타고 아프가니스탄의 쿠나르 지역을 지나가고 있었다.
                            병사들과 동승해 잡담을 나누며 기념사진을 찍던중 테러리스트들의 기습공격을 받게되고,
                            공격을 피해 엄폐하여 구조요청을 시도하던 중, 자신의 회사마크가 박힌 포탄이 날아와 중상을 입으며 정신을 잃는다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_01.png' />
                                </Toast.Body>
                            </Toast>
                            시간이 흐르고 정신을 차린 토니 스타크는 자신이 납치되었다는 것을 알게된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_02.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2 갑부 천재 망나니 토니 스타크와 그의 유능한 비서 페퍼포츠</Accordion.Header>
                        <Accordion.Body className='left'>
                            이야기는 토니가 납치되기 36시간 전으로 돌아간다.
                            토니 스타크의 대학 동창이자 미 공군 중령인 제임스 로드는, 아포지 상의 수상자인 토니스타크에게 직접 트로피를 전달하려 시상자 역할까지 맡았지만,
                            정작 토니스타크는 그 시간에 카지노에서 놀고있었기 때문에, 스타크 인더스트리의 부회장인 오베디아 스탠이 대신 트로피를 받았다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_03.png' />
                                </Toast.Body>
                            </Toast>
                            여기서 오베디아 스탠은 토니는 일 중독이라서 오지 않았다며 토니 스타크를 변호한다.
                            제임스 로드는 시상식이 끝난 뒤 카지노로 가서, 시상식이 언제인지도 몰랐던 토니에게 트로피를 전해 준다.
                            카지노에서 나오는 토니에게 '베니티 페어'의 기자인 크리스틴 에버하트가 인터뷰 요청을 한다.
                            토니 스타크는 잠시 고민했지만, 수행원인 해피에게 기자가 예쁘다는 말을 듣고 인터뷰에 응한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_04.png' />
                                </Toast.Body>
                            </Toast>
                            크리스틴 에버하트는 무기를 만들어 아포지상을 받은 토니 스타크에게 비꼬듯이 질문을 던졌지만,
                            토니 스타크의 현란한 답변에 놀라고, 토니 스타크의 초대에 응하여 함께 하룻밤을 지낸다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_05.png' />
                                </Toast.Body>
                            </Toast>
                            다음날 아침, 토니 스타크의 집에서 자비스의 안내 음성을 듣고 깨어난 크리스틴 에버하트는, 능력이 뛰어나기로 유명한 토니 스타크의 비서인 페퍼 포츠에게 옷을 받고 돌아간다.
                            그 후, 페퍼 포츠는 토니 스타크에게 스케줄을 전달한 후 아프가니스탄 출장을 가야 한다고 채근한다.
                            이 날은 페퍼 포츠의 생일이었는데, 대화중에 그 사실을 알게 된 토니 스타크는 페퍼 포츠에게 자신의 카드로 원하는 선물을 사라고 하고,
                            페퍼 포츠는 이미 그렇게 했다며 감사의 인사를 건넨다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_06.png' />
                                </Toast.Body>
                            </Toast>
                            토니 스타크는 공항으로 이동하여 3시간을 기다린 제임스 로드와 함께 본인의 전용기를 타고 이동하는데,
                            그 안에서도 스튜어디스들이 음악에 맞춰 폴 댄스를 추는 것을 구경하고 사케를 마시며 방탕한 모습을 보여준다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_07.png' />
                                </Toast.Body>
                            </Toast>
                            아프가니스탄 바그람 공군 기지에 도착한 토니는 리펄서 기술을 활용한 신형 미사일 ‘제리코’를 소개하며 시연회를 한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_08.png' />
                                </Toast.Body>
                            </Toast>
                            시연이 끝난 후, 제임스 로드의 걱정을 뒤로하고, 험비를 타고 돌아가는 길에 테러리스트들의 기습공격을 받게되고, 납치를 당하게 된다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>#3 아프가니스탄 피랍</Accordion.Header>
                        <Accordion.Body className='left'>
                            시간은 다시 현재로 돌아온다.
                            토니 스타크가 정신을 잃은 사이 그와 마찬가지로 테러리스트들에게 피랍되어 있던 의사이자 과학자인 호 인센이 그를 수술하여 심장에 박혀 있던 포탄 파편 대부분을 제거했지만,
                            일부 파편이 남아 있어 파편이 심장으로 가는 것을 막기 위해 토니 스타크의 흉부에 자동차 배터리를 연결한 전자석을 심어 둔다.
                            정신을 차리고 깨어난 토니 스타크는 물을 마시려다 호 인센의 경고에 자신의 몸에 박힌 자동차 배터리가 연결된 전자석을 보게되고,
                            호 인센에게 전자석이 박힌 경위와 그게 없으면 일주일이면 죽게된다는 것을 알게된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_09.png' />
                                </Toast.Body>
                            </Toast>
                            그러던 중 동굴 벽에 있는 CCTV를 발견하고, 현재 자신의 상황을 직감한 토니 스타크.
                            그리고 동시에 그 상황을 눈치 챈 호 인센은 자신이 예전에 토니 스타크를 봤다고 이야기하며,
                            자신을 기억하지 못하는 토니 스타크에게 자신이 그렇게 취해있었으면 서있지도 못했을거라며 농담을 하며 긴장을 풀어주려 한다.
                            이때 동굴로 들어온 테러리스트 집단은 토니스타크에게 바그람 공군기지에서 시연한 ‘제리코’ 미사일을 만들기를 요구한다.
                            토니 스타크는 거절했지만, 고문을 당한 뒤 이를 수락하게 된다.
                            테러리스트 집단은 무기고를 보여주며 필요한 재료는 모두 조달해주겠다고 하고, 토니 스타크는 무기고에 쌓여있는 자신의 회사인 스타크 인더스트리의 무기들을 보게된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_10.png' />
                                </Toast.Body>
                            </Toast>
                            호 인센은, 어차피 저들 손에 죽게될거고 저들이 날 죽이지 않아도 자신을 일주일 뒤에 죽을거라며 자포자기한 토니 스타크에게,
                            그렇다면 그 일주일이 아주 중요하겠다며 토니 스타크를 깨우쳐준다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_11.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>#4 토니 스타크의 부활</Accordion.Header>
                        <Accordion.Body className='left'>
                            다시 기운을 얻은 토니 스타크는 우선적으로 아크리액터를 제작하게 된다.
                            아크리액터를 본 호 인센은 이것이 무엇인지를 물었을 때, 토니 스타크는 파편이 심장으로 가지 못하도록 막는 역할을 할것이라 대답하고,
                            그 용량을 듣게 된 호 인센이 50년은 사용하겠다고 이야기하자, 토니 스타크는 더 큰것은 15분정도 사용할 것이라며 의미 심장한 말을 남긴다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_12.png' />
                                </Toast.Body>
                            </Toast>
                            그 뒤에 토니 스타크는 호 인센에게 알아보기 어려운 자신의 설계도를 보여주는데, 불빛 위에 모두 겹쳐서 보니 사람의 모양을 한 로봇(Mk.1)이 나오게 된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_13.png' />
                                </Toast.Body>
                            </Toast>
                            호 인센이 토니 스타크의 전자석을 아크리액터로 교체하는 작업을 하고, 잠시 쉬며 대화를 나누는데,
                            호 인센이 굴미라라는 시골마을 출신이며, 가족을 물었을 때 이곳에서 탈출하면 만날 수 있을것이라 말한다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>#5 Mk.1의 탄생</Accordion.Header>
                        <Accordion.Body className='left'>
                            두 사람은 작업실에서 Mk.1 슈트를 제작하고 테러리스트들은 처음엔 미사일을 만들고 있겠거니 넘어가지만,
                            갈수록 토니 스타크와 호 인센이 만드는 것이 미사일과 영 딴판인 것을 알게 되자, 테러 조직의 두목인 라자가 작업실에 난입하여 무슨 작업을 하고있는건지 추궁을 한다.
                            호 인센의 목숨을 담보로 협박하며 물었지만, 호 인센은 계속 제리코 미사일을 만들고 있다고 대답하고,
                            그 모습을 본 토니 스타크는 호 인센이 필요하다고 말하고, 라자는 내일까지 미사일을 만들어 내라고 협박한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_14.png' />
                                </Toast.Body>
                            </Toast>
                            시간이 촉박해지자, 두 사람은 서둘러서 슈트를 조립한다. 계획은 토니 스타크가 슈트를 착용하고 인센을 엄호하며 나오는 것이었다.
                            그런데 토니 스타크가 슈트를 착용하는 동안 CCTV로 작업실을 감시하던 라자가 토니가 보이지 않자, 토니의 행방을 확인하라고 지시한다.
                            두 부하가 작업실 문을 열고 들어오려다 토니 스타크가 설치한 부비트랩 폭발로 인하여 저지당하고, 이 모습을 CCTV로 확인한 라자가 추가로 부하들을 보낸다.
                            슈트가 작동하는것보다 부하들이 먼저 올것임을 눈치 챈 호 인센이 시간을 끌기 위해 부하가 들고왔던 총을 들고 난사하며 먼저 밖으로 나간다.
                            하지만 이미 많은 부하들과 라자까지 도착해있었고, 호 인센은 그들을 맞닥뜨리게 된다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>#6 토니 스타크의 탈출</Accordion.Header>
                        <Accordion.Body className='left'>
                            Mk.1이 기동을 시작하면서 작업실 내부의 조명이 꺼지고, 어두워진 작업실로 테러리스트 셋이 들어와 상황을 살피다 Mk.1에게 제압당한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_15.png' />
                                </Toast.Body>
                            </Toast>
                            그렇게 모든 테러리스트들을 제압하며 동굴에서 나오던 중, 총에 맞고 쓰러진 인센을 발견한다.
                            이때 라자가 유탄 발사기로 기습 공격을 하지만, 피하고 소형 미사일로 반격하여 제압한다.
                            쓰러져있는 호 인센에게 계획대로 나가서 가족을 만나자는 말을 하지만, 호 인센은 가족은 이미 죽었고 이렇게 만나러 가는 것이 자신의 계획이었음을 밝힌다.
                            토니 스타크는 구해줘서 고맙다는 말을 하고, 호 인센은 당신의 삶을 낭비하지 말라며 다시 한번 토니 스타크를 깨우쳐주면서 숨을 거둔다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_16.png' />
                                </Toast.Body>
                            </Toast>
                            토니 스타크는 화염방사로 동굴 밖에 모여있던 테러리스트들과 스타크 인더스트리 로고가 박힌 테러리스트들의 무기들을 모조리 불태우고 날아서 탈출한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_17.png' />
                                </Toast.Body>
                            </Toast>
                            물론 완벽하지 못한 아크리액터와 슈트는 멀리까지 날아가지 못하고 사막에 파묻혔지만, 이후에 자신을 찾던 제임스 로드에게 발견되어 구출된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_18.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>#7 갑부 천재 망나니 토니 스타크.. 인데 이제 망나니는 아님.</Accordion.Header>
                        <Accordion.Body className='left'>
                            병원으로 가자는 페퍼 포츠의 제안을 거절하며, 토니는 원하는 것이 두가지가 있다고 말한다.
                            그 두가지는 바로, 아메리칸 치즈버거와 기자회견. 물론 치즈버거가 먼저였다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_19.png' />
                                </Toast.Body>
                            </Toast>
                            기자회견장에 도착한 토니는 치즈버거를 먹으며 자신을 반겨주는 오베디아를 뒤로 하고 기자회견장으로 들어간다.
                            ‘쉴드’의 필 콜슨 요원이 페퍼 포츠에게 접근하여 생환기를 듣고싶다 요청하지만, 페퍼포츠는 스케쥴을 잡아보겠다는 인사치레정도만 하게 된다.
                            토니 스타크는 ‘다 같이 앉아서 진행하자’며 기자들을 바닥에 앉힌다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_20.png' />
                                </Toast.Body>
                            </Toast>
                            아버지도 무기를 만드는 것에 회의를 느낀적이 있는지 모르겠다는 것으로 이야기를 시작하여,
                            내가 사람들을 지키려고 만든 무기에 사람들이 죽는것을 보며 깨닳음을 얻어, 군수 산업을 중단하고 다른 방법으로 사회에 공헌하는 방법을 찾겠다고 선언한다.
                            이 선언에 제임스 로드가 서운함을 느끼는 동안, 오베디아는 기자들을 진정시킨다.
                            오베디아는 회사 내부 아크 리액터 앞에 있는 토니를 찾아와서 토니를 달래보기도 하고 화를 내기도 하다가 자신이 해결할테니 잠시 자숙하라고 말한다.
                            저택으로 돌아온 토니 스타크는 스타크 인더스트리를 조롱하는 TV 프로그램을 보고있는 페퍼 포츠를 불러 아크 리액터를 교체해 주는 걸 도와 달라고 한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_21.png' />
                                </Toast.Body>
                            </Toast>
                            아크 리액터 교체가 끝난 뒤, 토니 스타크는 페퍼 포츠에게 구형 아크 리액터는 부수거나 태워버리라고 하지만, 페퍼 포츠는 이를 아쉬워한다.
                            토니 스타크는 제임스 로드를 찾아가 자신의 일에 도움을 요청했으나, 군을 위한 물건이 아니라는 말에 제임스 로드는 도움을 거절한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_22.png' />
                                </Toast.Body>
                            </Toast>
                            이후 도움을 청할 곳이 없어진 토니는 비밀리에 Mk.2 프로젝트를 시작한다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>#8 Mk.2의 탄생</Accordion.Header>
                        <Accordion.Body className='left'>
                            토니 스타크는 자숙하며 Mk.2 슈트를 설계하고 시험중에 찾아온 이사회에 다녀온 오베디아에게서 이사회에서 토니 스타크의 경영을 중지시키고 싶어한다는 말을 듣게된다.
                            관심사가 Mk.2에 몰려있었던 토니 스타크는 크게 신경쓰지 않고 계속 Mr.2 슈트 제작에만 몰두하며 마침내 Mk.2를 완성한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_23.png' />
                                </Toast.Body>
                            </Toast>
                            말리부 해변에서 Mk. 2를 착용하고 비행능력을 테스트하던 토니 스타크는 고고도 비행 기록을 깨기 위해 계속 상승하다가 슈트가 얼어붙어 추락했지만,
                            추락중에 얼음이 녹으면서 다행히도 무사히 비행을 끝마쳤다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_24.png' />
                                </Toast.Body>
                            </Toast>
                            시험 비행이 끝나고 돌아오니, 페퍼포츠가 가져다 놓은 유리상자 안에는 구형 아크리액터에 <span className='font'> ‘토니 스타크에게도 따듯한 심장이 있다는 증거’</span> 라는 글귀가 적혀있었다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_25.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>#9 Mk.3의 탄생과 아이언맨의 출현</Accordion.Header>
                        <Accordion.Body className='left'>
                            토니 스타크는 뉴스에서 본인 이름으로 주최된 파일럿과 가족들을 위한 행사에 자신이 PTSD로 입원해 나오지 못한다는 보도를 보게되고,
                            고고도 비행 시의 결빙 문제를 해결하기 위해 슈트의 재질을 티타늄으로 교체 및 색상을 정해서 도색하라고 시켜놓고, 그 행사에 간다.
                            행사에서 필 콜슨을 만난 토니는 인터뷰 일정을 조절한다는 핑계로 페퍼 포츠와 춤을 추러 가고, 테라스에서 페퍼 포츠와 단둘이 있다가 분위기가 묘해지게 되자,
                            페퍼 포츠는 술이 필요하다고 이야기하고, 토니 스타크는 술을 가지러 간다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_26.png' />
                                </Toast.Body>
                            </Toast>
                            마티니 주문을 하러 간 토니 스타크는 크리스틴 에버하트 기자를 만나게 되고,
                            그녀에게 인센의 고향인 굴미라가 공격당하고 있다는 사실과, 신무기인 제리코 미사일을 포함한 자신의 무기가 다시 테러리스트들에게 사용되고 있다는 사실을 알게된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_27.png' />
                                </Toast.Body>
                            </Toast>
                            토니 스타크는 급하게 오베디아를 찾아가 따졌지만, 오베디아는 회사에서 토니 스타크를 몰아내려는 사람이 자신임을 밝히며,
                            경영에서 물러나지 않으면 죽일 수도 있음을 돌려서 표현하고, 이를 통해 토니 스타크는 오베디아가 테러리스트에게 무기를 판매한 사실을 확실히 알게된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_28.png' />
                                </Toast.Body>
                            </Toast>
                            분을 삭히며 집으로 돌아온 토니 스타크는 굴미라의 참상을 뉴스로 보면서 리펄서의 파괴력을 테스트해 본 뒤,
                            즉시 굴미라로 날아가서 테러리스트들을 제압하고, 텐 링즈의 무기를 다시 한번 모조리 파괴한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_29.png' />
                                </Toast.Body>
                            </Toast>
                            그렇게 테러리스트를 제압하고 복귀하는 동안, 미 공군은 굴미라 지역에서 미확인 비행체인 토니 스타크를 발견하고 요격을 위해 F-22 두 기를 출격시킨다.
                            상황을 보고받은 제임스 로드는 토니 스타크에게 미확인 비행체의 식별을 위해 연락을 취하지만, 토니 스타크는 비아냥거리며 이전에 거절당했던 것을 소심하게 복수한다.
                            미심쩍지만, 토니 스타크가 아닐거라 판단한 제임스 로드는 전투 장면을 보고있는 동안, 상황이 어려워진 토니 스타크는 F-22의 바닥면에 붙어서 제임스 로드에게 전화를 건다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_30.png' />
                                </Toast.Body>
                            </Toast>
                            바닥면에 무언가 붙어있음을 알게 된 F-22는 회피 기동을 시도하고, 토니 스타크는 버티지 못하고 날아가면서 결국 뒤따라오던 다른 F-22의 날개에 부딪혀 해당 기체를 추락시킨다.
                            그제서야 미확인 비행물체가 토니 스타크임을 알게 된 제임스 로드는 격추를 중지시키려 하지만, 이미 한대가 파괴된 상황이라 작전을 멈출 수 없었는데,
                            추락하는 기체에서 비상탈출을 한 조종사의 낙하산이 펴지지 않았다.
                            미 공군 상황실의 이목이 해당 조종사의 낙하산으로 집중된 때, 토니 스타크는 조종사의 낙하산을 펼쳐주고는 유유히 사라졌다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>#10 아이언 몽거의 탄생</Accordion.Header>
                        <Accordion.Body className='left'>
                            한편 텐 링즈의 막사에 누군가가 도착하는데, 그것은 다름 아닌 오베디아 스탠이었다.
                            라자는 Mk.1의 잔해를 찾아 회수하여 복원하는 데 성공하고, 라자는 오베디아에게 Mk.1을 직접 보여주며며 설계도를 줄테니 자신에게도 몇개 만들어달라 요구했지만,
                            오베디아는 초음파로 신경을 마비시키는 장치로 라자를 제압하고, Mk.1을 회수해간다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_31.png' />
                                </Toast.Body>
                            </Toast>
                            그리고, 오베디아는 회사에 있는 대형 아크 리액터, 그 밑에 위치한 16구역에 비밀 연구소를 차려 Mk.1을 기반으로 한 '아이언 몽거'를 만들 계획을 세운다.
                            Mk.3를 수리하던 토니 스타크는 페퍼 포츠에게 오베디아의 암거래 내역을 해킹해 올 것을 요구하고, 페퍼 포츠는 토니 스타크를 위해 거절했지만,
                            토니 스타크가 납치되었을 때 자신은 죽었던 몸이었고, 새로운 삶의 목표를 깨닳았다는 말에 토니 스타크를 돕기로 결정한다.
                            페퍼 포츠가 회사 컴퓨터를 이용해 프로젝트를 해킹하던 중, 16구역에서 비밀 프로젝트를 진행중이라는 사실을 알게되고,
                            텐 링즈가 오베디아에게 보낸 영상으로 인해 토니 납치 사건의 배후에 오베디아가 있었다는 사실도 알게 된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_32.png' />
                                </Toast.Body>
                            </Toast>
                            그러던 중 오베디아가 들어와, 해킹에는 성공했지만, 그 사실은 이미 오베디아에게 들킨 상황. 서둘러 빠져 나왔는데, 우연히 필 콜슨 요원과 만나 그와 함께 서둘러 나간다.
                            오베디아는 16구역에서 아이언 몽거의 전원이 없어서 작동이 안된다는 연구원들의 말을 듣게되고, 곧 그 전원이 토니 스타크의 가슴에 있던 아크 리액터임을 알게 된다.
                            그리고 토니 스타크에게 찾아가, 라자에게 사용했던 초음파 마비 장치로 토니를 무력화시킨 후, 그의 가슴에서 아크 리액터를 뽑아 가고,
                            아이언 몽거에다 토니에게서 빼앗은 아크 리액터를 연결하여 아이언 몽거를 완성시킨다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_33.png' />
                                </Toast.Body>
                            </Toast>
                            아크 리액터가 뽑힌 토니 스타크는 힘겹게 지하 작업실로 내려가 페퍼 포츠가 선물해줬던 구형 아크 리액터를 끼우려 하지만, 체력이 바닥나서 가져가지 못하고 좌절하는 사이,
                            멍청한 짓을 많이 해서 대학에 기증해버릴거라 이야기하던 로봇팔 '더미'가 구형 아크 리액터를 집어다 준다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_34.png' />
                                </Toast.Body>
                            </Toast>
                            페퍼 포츠는 제임스 로드에게 전화하여 토니 스타크가 전화를 받지 않으니, 안부를 확인해달라고 하며, 필 콜슨을 필두로 다른 쉴드 요원들과 같이 16구역 조사에 나선다.
                            토니 스타크에게 도착한 제임스 로드는 처음 본 토니의 Mk.3 슈트에 감탄하며 자신이 할 일을 물으니, 토니 스타크는 하늘을 비워두라고 하고선 날아간다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_35.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>#11 아이언 몽거와의 전투</Accordion.Header>
                        <Accordion.Body className='left'>
                            16구역 문앞에 도착한 페퍼 포츠와 쉴드 요원들이 문을 부수고 진입하자, 오베디아는 침입을 눈치채고 아이언 몽거에 탑승했다.
                            내부를 살펴보던 요원들은 아이언 몽거가 나타나자 즉시 권총사격을 했지만, 아이언 몽거에게 모두 제압당했고, 페퍼 포츠는 서둘러 출입문 쪽으로 도망갔다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_36.png' />
                                </Toast.Body>
                            </Toast>
                            오베디아는 도로를 뚫고 올라와 도망간 페퍼 포츠를 죽이려 했지만 때마침 도착한 토니 스타크에 의해 저지당하고 토니 스타크와 오베디아는 결투를 벌인다.
                            하지만 아크 리액터가 구형인데다 이미 많이 사용한 것이라, 동력이 약했던 토니 스타크가 파워에서 밀리게 되고,
                            이에 토니 스타크는 Mk.2를 테스트하던 기억을 떠올려 공중으로 올라간다.
                            오베디아도 쫓아와 토니의 다리를 잡는데, 아이언 몽거는 고고도로 올라와본 적이 없었고 결빙문제를 몰랐다.
                            토니 스타크는 그런 오베디아를 여유 있게 약올리며, 결빙된 오베디아의 헬멧을 때려 떨어트린다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_37.png' />
                                </Toast.Body>
                            </Toast>
                            파워가 2%밖에 남지 않은 상태로 회사 건물 옥상으로 떨어진 토니 스타크는, 오베디아의 기습으로 위기에 처하고,
                            결국 페퍼 포츠에게 회사에 있는 대형 아크 리액터를 폭주시킬 것을 부탁한다.
                            토니 스타크는 플레어로 오베디아의 시야를 교란시킨 뒤, 조준 장치를 포함한 아이언 몽거의 주요 장치들을 무력화시키지만,
                            결국 오베디아에게 붙잡혀 회사 아크 리액터 위의 유리 천장으로 던져지고, 오베디아의 무차별 사격을 받다가 깨어진 유리 천장의 프레임에 매달리게 된다.
                            토니 스타크는 페퍼 포츠에게 회사 아크 리액터를 폭주시키라고 소리치고, 페퍼 포츠는 토니 스타크가 아직 옥상에 남아있는 상태였기에 버튼을 누르는 것을 거부하지만,
                            항상 그래왔듯, 결국엔 토니 스타크의 지시에 따라 누르게 된다.
                            이윽고 대형 아크 리액터에서 에너지가 폭주하면서 토니 스타크는 옥상 구석으로 튕겨져 나가고,
                            에너지를 정면으로 맞은 오베디아는 대형 아크 리액터로 추락하게되며, 그 충격으로 인해 대형 아크 리액터가 폭발해 결국 사망한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_38.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>#12 I am Iron Man</Accordion.Header>
                        <Accordion.Body className='left'>
                            다음 날, 신문에 등장한 Mk.3를 본 사람들은 그를 아이언맨이라고 불렀고,
                            신문으로 이것을 본 토니 스타크는 철이 아니라 골드 티타늄 합금이라고 정정하면서도 상상력을 자극하는 이름이라며 마음에 들어했다.
                            필 콜슨 요원이, 오베디아는 경비행기 사고로 사망한것으로 처리하고, 토니 스타크는 요트에 있었으며, 그 때 함께 요트에 있었던 50명의 진술서를 받아뒀다고 했다.
                            또한 아이언맨은 토니가 고용한 경호원 겸 장비 테스트 요원으로 신분은 회사기밀이라고 말하라는 등의 조작된 54가지 알리바이를 만들어 준다.
                            토니 스타크는 기자 회견에서 성명을 낭독하려다 크리스틴 에버하트의 질문을 받고 횡설수설하다가, 결국 필 콜슨이 준 메모를 들고 있다 내려 놓고는 이렇게 말한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman1/ca2se1_39.png' />
                                </Toast.Body>
                            </Toast>
                            <span className='font big'>"Truth is... I am Iron Man" (내가 아이언맨입니다.)</span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
                
            </Card.Body>
        </Card>

)}

function PlotOfIronMan2(){ // 아이언맨2 줄거리
    return(
        <Card className='outer'>
            <Card.Body style={{width:'80%'}}>
                <Toast className='innerToast'>
                    <Toast.Body>
                        이 문서에 스포일러가 포함되어 있습니다.<br />
                        이 문서가 설명하는 작품이나 인물 등에 대한 줄거리, 결말, 반전 요소 등을 직·간접적으로 포함하고 있습니다.
                    </Toast.Body>
                </Toast>
                <Accordion className='innerAccordion' defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1 프롤로그</Accordion.Header>
                        <Accordion.Body className='left'>
                            러시아에서는 과거 토니 스타크의 아버지이자 스타크 인더스트리의 창립자 하워드 스타크와 함께 활동했던 과학자 안톤 반코가
                            그의 아들 이반 반코에게 아크 리액터의 설계도를 남기고 사망한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_00.png' />
                                </Toast.Body>
                            </Toast>
                            아버지가 러시아로 추방당한 과거로 인해 스타크 가문에게 증오심을 가지고 있던 이반 반코는
                            독기를 품고 토니 스타크를 향한 복수의 칼날을 갈면서 아크 리액터를 제작하는 데 성공한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_01.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2 슈퍼스타의 삶의 이면</Accordion.Header>
                        <Accordion.Body className='left'>
                            자신이 아이언맨임을 밝힌 토니는 슈퍼히어로로써 최고의 인기를 누리며 지내지만 알고보면 큰 문제에 직면해 있었다.
                            자신의 생명 유지 장치라 할 수 있는 아크 리액터의 주요 물질인 팔라듐이 토니의 몸에 심각한 수준의 중독 증상을 유발하여
                            토니의 생명을 지켜주는 동시에 생명을 갉아 먹고 있었던 것.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_03.png' />
                                </Toast.Body>
                            </Toast>
                            게다가 미국 정부는 '벤 스턴'이라는 상원의원을 중심으로 아이언맨 슈트를 국가에 귀속시키려 한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_04.png' />
                                </Toast.Body>
                            </Toast>
                            토니는 이를 거절하고 자문위원으로 나온 경쟁사 해머 어드밴스드 웨폰스 시스템즈의 CEO 저스틴 해머를 농락한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_05.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>#3 이반 반코와의 첫 대면</Accordion.Header>
                        <Accordion.Body className='left'>
                            팔라듐 중독으로 죽음이 코앞에 닥친 토니는 막 나가기 시작하면서 멋대로 페퍼 포츠를 스타크 인더스트리의 CEO로 임명한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_06.png' />
                                </Toast.Body>
                            </Toast>
                            페퍼는 자신을 대신할 나탈리 러쉬만이라는 비서를 붙여주고, 토니가 그녀를 탐내자 절대 안 된다며 경고를 준다.
                            이후 토니는 모나코에서 열린 기업인들의 행사에 참석했다가 옆에서 열리던 레이싱 대회에서
                            자신의 회사에서 운영하는 팀의 기존 레이서를 밀어내고 레이서로 참가하는데,
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_07.png' />
                                </Toast.Body>
                            </Toast>
                            레이싱대회에 난입한 이반 반코가 아이언맨 슈트와 비슷한 원리의 아크 리액터 기술을 이용한 위플래시 슈트를 장착하고 등장해
                            깽판을 치면서 토니의 위상은 치명적인 타격을 입는다.
                            토니는 휴대용으로 개발된 Mk.5를 입고 그의 아크 리엑터를 뽑아 박살내며 그를 제압했지만,
                            자신의 기술은 아무도 흉내낼 수 없다고 정부에 큰소리쳤던 위신에는 금이 가게 되었다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_08.png' />
                                </Toast.Body>
                            </Toast>
                            그리고 그 현장을 TV 생중계로 목격한 저스틴 해머는 감옥 신세를 지던 이반 반코를 빼돌려,
                            그를 이용해 스타크 인더스트리를 누르고 압도해낼 개발을 하여 토니를 무너뜨릴 계획을 세운다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_09.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>#4 막나가는 토니스타크</Accordion.Header>
                        <Accordion.Body className='left'>
                            팔라듐 중독 수치가 계속 높아지자 점점 삶의 의지를 잃어가는 토니는 자신의 생일날 슈트를 입고 술을 마시며, 우스꽝스런 춤을 추고 있었다.
                            취기가 올라오자, 페퍼가 파티를 끝내려고 했지만, 토니는 2부가 시작된다며, 여성 관객들이 던져주는 술병을 리펄서건으로 깨고 앉아있다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_10.png' />
                                </Toast.Body>
                            </Toast>
                            토니가 리펄서건으로 태연하게 유리병을 깨고 있는것에 화가 난 로드는 Mk.2 슈트를 입고 겁을 줘 관객들을 모두 쫓아내고,
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_11.png' />
                                </Toast.Body>
                            </Toast>
                            도저히 정신을 차릴 기미가 안보이는 토니를 공격한다. 둘 다 별다른 타격없이 애꿎은 저택만 부서져 나갔다.
                            결국 서로 리펄서건을 날려 무승부로 끝났고, 실망한 로드는 슈트를 입은 채로 떠나버린다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_12.png' />
                                </Toast.Body>
                            </Toast>
                            로드는 슈트를 입고 공군 기지로 날아가 미군의 공식 군수업체인 해머 사에서 온갖 무기를 사서 달아 놓는다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>#5 닉 퓨리와 비서의 정체</Accordion.Header>
                        <Accordion.Body className='left'>
                            토니는 방황하면서 도넛 가게의 모형 간판 위에 앉아 도넛을 먹고 있는데,
                            이에 토니의 동향을 항상 주시하던 쉴드의 닉 퓨리는 방황하던 그를 찾아낸다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_13.png' />
                                </Toast.Body>
                            </Toast>
                            여기서 페퍼가 비서로 뽑았던 나탈리 러쉬만이라는 여자가 정체를 드러냈는데,
                            그녀는 바로 쉴드의 나타샤 로마노프 요원이었다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_14.png' />
                                </Toast.Body>
                            </Toast>
                            그는 토니에게 팔라듐 중독을 일시적으로 막아 주는 리튬 이산화물을 주사하고 하워드 스타크가 남겨둔 자료를 넘겨,
                            팔라듐의 대체 물질 개발을 촉구한다.
                            토니는 아버지가 남긴 자료 속에서 힌트를 얻어 자신의 기술을 바탕으로 팔라듐을 대체할 물질을 만들어 내고,
                            이에 맞는 새로운 슈트인 Mk.6을 개발한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_15.png' />
                                </Toast.Body>
                            </Toast>
                            하지만 숨 돌릴 틈도 없이 해머 회사의 지원을 이용해 자신의 슈트를 개발하던 반코가 도발을 걸어 오고,
                            그를 지원한 것이 해머라는 사실도 알게 된다.
                            한편 스타크 엑스포에서는 텔레비전 생중계로 저스틴이 반코의 도움으로 해머 사에서 제작한,
                            미군 보병을 대체할 차세대 병기인 해머 드론들을 시민들 앞에 거창하게 선보이는 것과 동시에
                            해머 드론과 로드가 착용하고 있는 워 머신 슈트까지 함께 소개하고 있는데
                            이에 토니는 새로운 수트를 입고 즉시 해머의 앞에 난입하여 그를 추궁한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_16.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>#6 위플래시&해머드론 VS 아이언맨&워머신</Accordion.Header>
                        <Accordion.Body className='left'>
                            하지만 해머와 반코의 사이는 이미 완전히 틀어진 뒤였고,
                            반코는 드론들과 워 머신 슈트에 미리 심어 둔 인공지능 소프트웨어를 원격으로 해킹해,
                            워 머신과 해머 드론을 멋대로 조종하며 행사장을 아수라장으로 만들고 아이언맨에 총 공격을 퍼부었다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_17.png' />
                                </Toast.Body>
                            </Toast>
                            같은 시각, 해머 사에 잠입한 나타샤 로마노프는 시리즈 내 아크로바틱 무쌍을 선보이며 회사에 보안요원들을 순식간에 쓰러뜨리고
                            반코가 있던 방까지 오는데 성공했다.
                            하지만 반코는 이미 직접 제작한 슈트를 입고 토니를 죽이러 간 후였다.
                            나탈리는 급한대로 컴퓨터를 조작해 워 머신 해킹부터 풀었고 덕분에 토니와 로디는 협력하여 해머 드론들을 부순다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_18.png' />
                                </Toast.Body>
                            </Toast>
                            이런 두 사람 앞에 반코가 나타났다. 반코는 직접 개발한 슈트의 힘으로 선전하며 잠시나마 토니와 로디를 털어버렸지만,
                            두 사람은 머신은 아까 파티장에서 서로 쌈박질 할때 서로에게 리펄서건을 날려 합쳐진 에너지 충격파 웨이브로 반코를 리타이어 시킨다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_19.png' />
                                </Toast.Body>
                            </Toast>
                            반코는 "You lost"라는 유언을 남기고 사망했고 죽으면서 주위에 있던 모든 해머 드론들을 자폭시킨다.
                            쓰러져 있던 드론들 몸에서 정체모를 알림이 울리자 로디는 단박에 드론들이 폭발할거라는걸 직감하고 어서 피해야 한다고 했다.
                            토니는 드론들이 널브러진 현장에 페퍼가 있다는걸 알고는 모든걸 제쳐놓고 페퍼가 있는 곳으로 날아가 그녀를 무사히 구출하는데 성공했다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_20.png' />
                                </Toast.Body>
                            </Toast>
                            그리고 저스틴 해머 역시 페퍼의 신고를 받고 출동한 경찰들에게 체포됐다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>#7 아이언맨은 합격, 토니는 불합격</Accordion.Header>
                        <Accordion.Body className='left'>
                            한편 블랙 위도우는 워 머신의 해킹을 푸는 것 이외에도 이반 반코의 기술을 쉴드에 전달했으며,
                            해머 사에 남아 있던 정보 역시 모두 삭제한다.
                            그리고 블랙 위도우의 평가에 따라 토니는 어벤져스에 불합격했지만, 아이언맨은 합격했다.
                            결국 토니는 닉 퓨리에 의해 컨설턴트로 채용된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman2/ca2se2_21.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>


)}

function PlotOfIronMan3(){ // 아이언맨3 줄거리
    return(
        <Card className='outer'>
            <Card.Body style={{width:'80%'}}>
                <Toast className='innerToast'>
                    <Toast.Body>
                        이 문서에 스포일러가 포함되어 있습니다.<br />
                        이 문서가 설명하는 작품이나 인물 등에 대한 줄거리, 결말, 반전 요소 등을 직·간접적으로 포함하고 있습니다.
                    </Toast.Body>
                </Toast>
                <Accordion className='innerAccordion' defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1 프롤로그</Accordion.Header>
                        <Accordion.Body className='left'>
                            아이언맨 Mk 1~7 슈트들이 폭발하는 장면과 함께 1999년 12월 31일 토니 스타크의 회상으로 영화가 시작된다.
                            토니 스타크는 해피 호건과 함께 스위스 베른의 신년 과학 포럼에 참석했는데,
                            여기서 호 인센과 우 박사 등 유명한 과학자들을 만난 후 마야 한센과 함께 모임을 빠져 나온다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_00.png' />
                                </Toast.Body>
                            </Toast>
                            그러던 중 추한 절름발이 과학자 킬리언을 만나는데, 킬리언은 토니와 한센에게 자신의 명함을 주면서
                            자신이 소속된 민간 싱크탱크 A.I.M.(Advanced Idea Mechanics)으로 와 달라고 얘기한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_01.png' />
                                </Toast.Body>
                            </Toast>
                            토니는 킬리언에게 같이 일하고 싶다며 나중에 옥상에서 만나자고 거짓말을 하고,
                            킬리언은 그 말을 믿고 아무도 없는 옥상으로 올라가서 한없이 기다리며 새해를 맞이한다.
                            한편 스타크와 한센은 밤늦게까지 한센이 만든 기술에 관해서 토론하는데, 도중에 해피가 건드린 익스트리미스를 주입받은 식물이 폭발한다.
                            이후 한센과 밤을 보낸 토니는 명함만 남겨두고 떠난다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_02.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2 불면증에 시달리는 토니스타크</Accordion.Header>
                        <Accordion.Body className='left'>
                            이후 시점은 현재. 토니는 뉴욕 사태의 트라우마로 불면증에 시달린다.
                            뿐만 아니라 뉴욕 전투 당시 웜홀에 들어간 일로 뉴욕에 관한 일에 관해서 얘기할 때면 제정신을 잃는다.
                            이 때문인지 토니는 피하에 제어 장치를 이식하여, 언제 어디서든 슈트를 착용할 수 있는 Mk.42를 개발한다.
                            토니는 음악을 들으면서 Mk.42를 착용하지만, 아직 시험단계라서 그런지 제대로 제어가 되지 않아서
                            거의 입자마자 마지막 남은 파츠가 등 뒤로 날아와서 직격하는 바람에 분해된다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_03.png' />
                                </Toast.Body>
                            </Toast>
                            이렇게 토니가 슈트를 만들면서 자신의 세계에 완전히 빠져 있는 사이, 만다린이 이끄는 텐 링즈는 미국 곳곳에 테러를 저지르고 있었다.
                            식당에서 제임스 로드와 만난 토니는 로드에게서 이제까지 총 9번의 테러가 있었고, 몇몇 테러는 폭탄의 흔적조차 남지 않았다는 정보를 얻는다.
                            그 와중에 토니는 싸인을 해달라는 아이의 어벤져스 때의 그림과 웜홀에서 어떻게 빠져나왔냐는 질문에
                            갑자기 호흡이 곤란해지는 극도의 스트레스를 겪기 시작하고 결국 자리를 뜬다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_04.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>#3 킬리언의 등장</Accordion.Header>
                        <Accordion.Body className='left'>
                            페퍼 포츠는 스타크 인더스트리의 보안 책임자로 승격한 호건과 함께 회사를 운영하고 있었다.
                            그러던 중 킬리언이 회사를 방문하는데, 그는 예전과 달리 잘생기고 자세도 똑바른 남자가 되어 있었다.
                            킬리언은 스타크 인더스트리의 지원을 얻기 위해 자신의 뇌 홀로그램을 이용해서 자신의 기술을 설명하지만,
                            페퍼는 이 기술이 무기로 악용될 가능성이 있다고 보고 거절한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_05.png' />
                                </Toast.Body>
                            </Toast>
                            한편, 호건은 토니에게 이 사실을 알리고 킬리언의 수상한 경호원에게 미심쩍은 태도를 보이며,
                            토니에게 페퍼에게 관심을 좀 가지라고 충고한다.
                            말리부 저택으로 돌아온 페퍼는 토니가 자신을 위해 거대한 토끼 인형을 사 둔 것을 발견하고,
                            토니가 슈트를 입은 채 자신을 기다리고 있는 것을 보고 기뻐하지만,
                            사실은 토니가 창고에서 슈트를 원격 조종하고 있던 것이었고,
                            페퍼가 이에 실망하자 토니는 페퍼에게 사과하면서 자신의 고뇌를 털어놓는다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_06.png' />
                                </Toast.Body>
                            </Toast>
                            그는 어벤져스에서 겪은 초현실적인 경험으로 인해 두려움을 갖게 되었고,
                            페퍼를 지켜야한다는 생각에 엄청난 스트레스를 받게 되었다고 얘기한다.
                            아이언맨 2 에서 끝까지 자신의 목숨이 위독하다는 사실을 숨겨왔던 토니와는 상당히 다른 모습이다.
                            페퍼는 이러한 토니를 안아주며 위로한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_07.png' />
                                </Toast.Body>
                            </Toast>
                            한편, 킬리언을 수상하게 여긴 호건은 그의 개인 경호원 에릭 사빈을 따라가다 만다린의 테러에 휘말린다.
                            호건은 여기서 폭발의 원인이 몸에 주입된 익스트리미스를 받아들이는 데 실패한 군인이 자폭한 것이란 걸 알게 되지만,
                            이 사건으로 중태에 빠져서 의식을 잃고 만다. 분노한 토니는 만다린을 도발하며, 자신의 집 주소를 알려 주는 실책을 저지른다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_08.png' />
                                </Toast.Body>
                            </Toast>
                            토니는 자비스와 함께 이와 유사한 폭발 사건을 조사하기 시작하고,
                            이번 사건과 제일 유사한 테네시 주 로즈힐에서 발생한 폭발 사건을 조사하기 위해 비행 경로를 지정해 둔다.
                            이때 갑자기 마야 한센이 토니를 만나러 저택에 찾아오고, 페퍼는 집 주소를 언론에 까발린 것 때문에 피하려고 짐을 싸며 토니와 싸우게 된다.
                            그때, 만다린이 보낸 헬기들이 말리부 저택에 미사일을 퍼부으며 공격하기 시작한다.
                            토니는 원격 조종으로 페퍼에게 Mk.42를 입혀 탈출시키고 다시 Mk.42를 입고 싸우지만 미완성 슈트라서 제대로 싸울 수 없었고,
                            결국 토니는 저택과 함께 바다로 가라앉는다. 바다에 빠진 토니의 의식이 흐려지며,
                            슈트가 계속 가라앉자 자비스가 모듈화된 Mk.42의 팔을 분리시켜 토니의 팔을 잡고 끌어 올려 살아남는다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_09.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>#4 할리 키너와의 만남</Accordion.Header>
                        <Accordion.Body className='left'>
                            이후 정신을 잃은 채 자동 비행 중이던 토니는 깨어나자마자 가장 최근에 목적지로 설정해 놓은 테네시 주에 불시착하면서
                            페퍼와 멀리 떨어지게 되고, 설상가상으로 자비스는 셧다운되고 Mk.42도 엉망이 되어 버린다.
                            토니는 슈트를 벗고 공중 전화로 페퍼에게 자신이 살아 있다는 것과 사과를 담은 메시지를 보낸다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_10.png' />
                                </Toast.Body>
                            </Toast>
                            그 후 슈트를 수리 및 충전할 장소를 찾다가 할리 키너라는 꼬마의 집에서 신세를 진다.
                            할리와 티격태격하며 코미디를 찍던 중 토니는 이곳에서 일어났던 고열 폭발 현장을 보고, 용의자의 어머니를 만나 받은 파일을 받는다.
                            이 파일은 폭발 사건의 용의자들인 익스트리미스 군인들의 파일이었는데,
                            이후 정부 요원으로 위장한 킬리언의 수하 엘런 브랜트와 에릭 사빈의 추격을 받지만
                            토니는 할리와 함께 이들을 제압한 후 혼자 마을을 떠난다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_11.png' />
                                </Toast.Body>
                            </Toast>
                            이후 토니는 MIA라는 글씨가 사실은 반대편에 쓰인 'AIM'임을 알게 되어 이 사건에 A.I.M이 개입해있다는 사실을 깨닫고,
                            A.I.M.이 개조한 아이언 패트리어트 슈트를 입은 로드에게 연락해 A.I.M. 서버에 들어갈 수 있는 아이디와 비밀번호를 얻어낸다.
                            그리고 근처에서 미녀 선발 대회를 취재 중인 방송국 밴의 컴퓨터로 A.I.M.의 서버에 접속해 익스트리미스 약물을 테스트하는 영상을 본 뒤,
                            킬리언이 모든 일의 흑막이었다는 사실을 깨닫는다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_12.png' />
                                </Toast.Body>
                            </Toast>
                            한편, 마야 한센과 함께 있던 페퍼는 킬리언이 흑막이라는 것을 알게 되자마자 납치당하고,
                            로드 역시 익스트리미스에게 공격을 받고 슈트와 함께 납치당한다.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>#5 만다린의 정체</Accordion.Header>
                        <Accordion.Body className='left'>
                            토니는 만다린의 아지트를 직접 공격해 들어갈 필요성을 느끼고, 할리에게 연락해 슈트를 준비하라고 말한다.
                            하지만 할리는 슈트의 충전이 제대로 이루어지지 않아 작동이 안된다고 대답하고, 그걸 들은 토니는 다시 불안증에 시달린다.
                            당장 슈트가 필요한 상황인데 슈트를 입을 수 없다는 사실에 불안증이 다시 엄습한 것.
                            그렇게 할리의 조언대로, 토니는 불안 증세를 이기기 위하여 '뭔가를 만드는 것에 열중'하기 위해,
                            네일 건과 섬광탄, 폭탄들, 전기 충격기, 그리고 일회용 리펄서 건까지 만들어내며 공학자로써의 실력을 뽐낸다.
                            이후 Mk.42가 충전될때까지 사제 무기로 싸우기로 결심한 토니는 만다린의 아지트인 플로리다까지 직접 운전해서 가며,
                            수제 무기들의 훌륭한 위력과 토니 본인의 발전한 피지컬로 한명 한명씩 슈트 없이 쓰려뜨려가면서 결국 만다린과 대면하지만,
                            TV에서 나오던 만다린은 가짜였다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_13.png' />
                                </Toast.Body>
                            </Toast>
                            사실 TV에 나오던 만다린은 그저 '트레버 슬래터리'라는 이름의 마약 중독자이자 희극 배우가 연기했던 캐릭터에 불과했던 것이며,
                            트레버는 '만다린'이라는 캐릭터가 TV에서 사람들을 죽이던 장면 역시 특수 효과였다고 밝힌다.
                            킬리언이 모든 것의 흑막임을 더욱 확신하게 된 토니는 계속해서 트레버를 심문하지만, 갑자기 등장한 사빈의 공격으로 납치당한다.
                            이후 만다린의 저택 지하에서 침대 프레임에 묶인 채 정신을 차린 토니는 마야 한센도 이들과 한 패라는 것을 깨닫는다.
                            마야는 토니에게 당신 덕분에 익스트리미스를 완성하였다며 이제 토니에게 익스트리미스를 안정화할 수 있게 도와달라고 한다.
                            하지만 토니는 거절하고 오히려 도덕적이며 사람들을 돕겠다는 이상을 가졌던 마야가 변했다며 킬리언을 막기위해 풀어달라고 한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_14.png' />
                                </Toast.Body>
                            </Toast>
                            마야가 망설이는 사이 킬리언이 들어온다. 킬리언은 토니에게 예전에 자신이 토니에게 속아 넘어간 뒤 자살을 시도하려 한 순간,
                            아무도 자기에게 눈길조차 주지 않는다는 것을 느끼고 이것을 역이용하여 투명인간처럼 뒤에서 지휘하는 방식을 떠올리고
                            이를 실행에 옮겼다고 말한다. 킬리언은 토니가 자신에게 절박함이라는 큰 선물을 주었다며 이제 자신이 받은 선물을 되갚아 주겠다고 한다.
                            그리고 페퍼가 익스트리미스를 주입당한 상태의 영상을 보여준다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_15.png' />
                                </Toast.Body>
                            </Toast>
                            킬리언은 익스트리미스에 몸이 적응하지 못하면 그 사람의 몸이 자폭하게 될 것이라고 한다.
                            이때 한센이 토니를 풀어 주라고 하면서 익스트리미스 약물을 자기에게 주입하겠다고 하면서 킬리언을 협박하지만
                            킬리언은 그 자리에서 눈 하나 깜짝하지 않고 그녀를 살해하고 조직에 들어올 자리가 생겼다며 협업을 제안하고 자리를 뜬다.
                            그 후 킬리언은 부하들이 벗겨 내지 못한 아이언 패트리어트 슈트를 열로 지져서 슈트가 자동으로 벗겨지게 하고,
                            아머에서 떨어져 나온 로드를 입에서 불을 뿜으며 위협한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_16.png' />
                                </Toast.Body>
                            </Toast>
                            사빈은 로드를 기절시킨 후, 자신이 대신 슈트를 입고 로드 행세를 하면서 대통령과 함께 에어 포스 원에 탑승한다.
                            한편, 지하에 감금되어 있던 토니는 할리의 집에 있던 Mk.42의 충전이 끝났음을 예감하고
                            슈트를 원격 조종으로 호출해 킬리언의 부하들을 제압한 후 탈출하고, 정신을 차린 로디도 탈출한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_17.png' />
                                </Toast.Body>
                            </Toast>
                            둘은 트레버를 심문해서 킬리언이 대통령을 납치할 계획임을 알아채고,
                            부통령까지 이 계획에 포함되어 있다는 말을 듣고는 부통령에게 킬리언이 대통령과 당신을 노리고 있다고 알린다.
                            그러나 계획에 포함되었다는 말이 사실 부통령이 킬리언과 손을 잡은 상태라는 말이였고 부통령은 당연히 이를 묵살한다. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>#6 최종전투</Accordion.Header>
                        <Accordion.Body className='left'>
                            한편, 에릭 사빈은 에어포스 원에 폭탄을 설치, 대통령의 경호원들을 살해하고 대통령을 납치한 후,
                            그에게 아이언 패트리어트 슈트를 입혀 킬리언에게 보낸다. 이후 Mk.42도 에어포스 원으로 진입했지만 이미 때는 늦었고,
                            사빈이 비행기를 폭파시켜버리며 승무원들이 모두 바깥으로 떨어져버린다.
                            에릭 사빈이 열로 토니를 제압하려는 순간 토니는 사빈의 가슴에 풀파워 유니빔을 쏴버려 한방에 제압해버리고,
                            추락하는 비행기의 승무원들을 모두 구출하는데 성공한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_18.png' />
                                </Toast.Body>
                            </Toast>
                            하지만 교각으로 가자마자 대형트럭과 충돌하면서 Mk. 42는 또 박살나버리지만, 그래도 원격 조종으로 움직이던 것이라서 토니는 멀쩡했다.
                            뒤따라 들어온 로디가 슈트를 입고 있는 상태에서도 대통령을 못 구했는데 이젠 슈트도 없으니 어쩔거냐며 핀잔을 주지만,
                            토니는 때가 됐다면서 자비스에게 '하우스 파티 프로토콜'을 지시한다.
                            이후 토니와 로드는 맨몸으로 킬리언이 있는 부두에 침입하지만, 그의 부하들에게 들키면서 수세에 몰리게 된다.
                            위기의 순간, '하우스 파티 프로토콜에 의해 수많은 아이언맨 슈트가 도착한다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_19.png' />
                                </Toast.Body>
                            </Toast>
                            도착한 슈트들은 자비스를 통해 익스트리미스 병사들의 열을 감지해 싸우기 시작한다.
                            토니는 슈트가 파괴될 때마다 다른 슈트로 바꿔 입으며 싸우고, 로드는 맨몸 으로 돌격해 대통령을 구출하고 슈트를 되찾는다.
                            워 머신이 대통령을 안전한 곳으로 피신시킨 사이 토니는 페퍼를 찾아내지만,
                            도중에 킬리언의 공격을 받아 구출이 지연되고 페퍼는 결국 화염 속으로 추락한다.
                            이에 절망한 토니를 나라면 잡았을 거라며 킬리언이 도발하자, 토니는 킬리언과 1:1로 싸우기 시작한다.
                            아이언맨 슈트들이 익스트리미스 능력자인 킬리언 앞에서 모두 고철 더미가 되어 가는 사이,
                            Mk.42가 등장하지만 자세 잡고 착륙하려다가 난간에 부딪혀서 또 산산조각 나고 만다.
                            이후 킬리언이 다가와서 토니를 죽이려고 하지만 토니는 킬리언에게 Mk.42 슈트를 입힌 후,
                            슈트를 자폭시키는 기지를 발휘한다. 이후 토니가 점프하면서 슈트를 입었으나,
                            애초에 한쪽 다리조차 잘린 상태로 날아온 상태가 매우 나쁜 수트였던 데다 구조물이 붕괴하며 이리저리 갈리며,
                            결국 팔 한개를 제외한 나머지 부분은 산산조각 난다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_20.png' />
                                </Toast.Body>
                            </Toast>
                            그러나 킬리언은 살아남았고 다시 토니를 공격한다.
                            그때 갑자기 누군가가 파이프로 킬리언을 후려치면서 그를 막는데, 그 정체는 익스트리미스에 적응하는 데 성공하여 살아남은 페퍼였다.
                            그러나 페퍼의 익스트리미스 신호를 적으로 인식한 아이언맨 마크 9가 페퍼를 공격하고,
                            토니는 자비스와 통신하는 통신기를 떨어뜨리는 바람에 슈트를 미처 제어할 수가 없었다.
                            그런데, 페퍼는 혼자서 슈트를 부수고 한쪽 팔을 뽑아 착용한 후 스마트 미사일을 투척한 뒤 리펄서 건을 쏴서 킬리언을 끝장낸다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_21.png' />
                                </Toast.Body>
                            </Toast>
                            토니는 페퍼에게 신경 쓰지 않고 위험에 처하게 했음을 사과하며, 페퍼의 익스트리미스는 자신이 고쳐주겠다고 약속하고,
                            자신도 슈트에서 좀 벗어나겠다며 그 표시로 그곳에 있던 모든 아이언맨 슈트를 불꽃놀이처럼 폭발시킨다. 이름하여 '새 출발 프로토콜'.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_22.png' />
                                </Toast.Body>
                            </Toast>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>#7 결말</Accordion.Header>
                        <Accordion.Body className='left'>
                            그 후 킬리언과 결탁한 트레버와 부통령은 체포됐으며, 호건도 의식을 회복했다.
                            페퍼도 수술을 통해 익스트리미스를 제거하며, 토니 또한 '아이언맨'이 아닌 '토니 스타크'로서의 삶으로 돌아가고자,
                            심장 수술을 받아 가슴에 박힌 폭탄 파편을 마침내 제거하고, 박살 난 옛 저택이 있던 바다에 아크 리액터를 던져 버린다.
                            <Toast className='innerToast'>
                                <Toast.Body>
                                    <img className='innerImg' src='/img/plot/ironman3/ca2se3_23.png' />
                                </Toast.Body>
                            </Toast>
                            하지만 토니는 자신의 장난감은 뺏어도 내가 아이언맨이란 사실은 뺏지 못한다.라고 독백한다.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

)}

function MusicInIronMan1(){ // 아이언맨1 OST / 삽입곡
    return(
        <div style={{backgroundColor: '#861313'}}>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/I9PhfUsFvj0" title="Iron Man OST - Driving With The Top Down" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />1. Driving With the Top Down
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/Ym2LDCeHOfE" title="Iron Man Score - John O'Brien & Rick Boston (2008 Version)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />2. Iron Man (2008 ver.)
                        </Card.Subtitle>
                    <Card.Text>
                        <br />John O'Brien & Rick Boston
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/K3pnZQFxKq0" title="Iron Man OST - Merchant Of Death" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />3. Merchant of Death
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/aC38Z88ZHLc" title="Iron Man OST - Trinkets to kill a Prince" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />4. Trinkets to Kill a Prince
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/6YEm6lRLzmU" title="Iron Man OST -  Mark I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />5. Mark I
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/6pZ0_4a6N3k" title="Iron Man Score - Fireman (Ramin Djawadi)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />6. Fireman
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/i-uQDt7h7I0" title="Ramin Djawadi - Vacation's Over" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />7. Vacation's Over
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/p5ncjGUeJUI" title="Ramin Djawadi - Golden Egg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />8. Golden Egg
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/8Ufqg06S_e4" title="09 Damn Kid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />9. Damn Kid
                    </Card.Subtitle>
                    <Card.Text>
                        <br />DJ Boroboro
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/9NxrQipUkwg" title="Iron Man OST -  Mark II" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />10. Mark II
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/G6hP7JRkd0U" title="11. Extra Dry, Extra Olives (Iron Man Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />11. Extra Dry, Extra Olivers
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/u-9xmevqHu0" title="Iron Man- Ramin Djawadi (Original Motion Picture Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />12. Iron Man
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/CjWpWIw4bzc" title="Iron Man OST -  Gulmira" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />13. Gulmira
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/RdIPYXbVGRs" title="14. Are Those Bullet Holes? (Iron Man Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />14. Are Those Bullet Holes?
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/gTWxus1Z9Q0" title="15. Section 16 (Iron Man Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />15. Section 16
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/ST5bFzu3o2U" title="Ramin Djawadi - Iron Monger" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />16. Iron Monger
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/1JlfK_waz2g" title="17 Arc Reaktor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />17. Arc Reactor
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramin Djawadi
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/AdUBTE9JpgI" title="Institutionalized" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />18. Institutionalized
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Suicidal Tendencies
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/ZrajbDZANUA" title="Iron Man - The Classic Theme Song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />19. Iron Man 60s Theme
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Jack Urbont
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/pAgnJDJN4VA" title="AC/DC - Back In Black (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 1. Back In Black
                    </Card.Subtitle>
                    <Card.Text>
                        <br />AC/DC
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/05CIjUow7yk" title="Slept On Tony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 2. Slept On Tony
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ghostface Killah
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
)}

function MusicInIronMan2(){ // 아이언맨2 OST / 삽입곡
    return(
        <div style={{backgroundColor: '#861313'}}>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/txKp72MaPWk" title="01 Ivan's Metamorphosis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />1. Ivan's Metamorphosis
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/KmUrXNC6McQ" title="02 House Fight MK1 by John Debney (Iron Man 2 Score) Soundtrack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />2. House Fight V1
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/jjt4gGkqfW8" title="John Debney - Making Pepper CEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />3. Making Pepper CEO
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/xU5NgAbrBf8" title="04. Senate / Ivan Creates Drones (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />4. Senate/Ivan Creates Drones
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/1ZrWQr5l7rk" title="05. Make Way for Tomorrow (Expo Version) (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />5. Make Way For Tomorrow (Expo Version)
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Richard Sherman
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/vO420t_SwH4" title="06 Rhodey Dons Suit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />6. Rhodey Dons Suit
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/RibnmwzoxFk" title="07. Dying Hero (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />7. Dying Hero
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/VNVx3tnMBo8" title="08 Natalie Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />8. Natalie Intro
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/A_lrY14iX1k" title="09 Monaco Drive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />9. Monaco Drive
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/VtnYzLIYVnU" title="10. Mayhem in Monaco (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />10. Mayham in Monaco
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/S27L8OSGkHg" title="11. Jailhouse Talk (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />11. Jailhouse Talk
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/R_SdZkqFZ4M" title="12. Ivan Escapes (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />12. Ivan Escapes
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/HM8kuvEiiIk" title="13. Gun Show (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />13. Gun Show
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/-1V9Lynvw8c" title="14. Tony Discovers Dad's Secret (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />14. Tony Discovers Dad's Secret
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/mIDb_mnJLmg" title="15. Sledgehammer V2 (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />15. Sledgehammer V2
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/knzdWeFLKsM" title="16. Nick Fury (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />16. Nick Fury
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/o9I7_byuvqI" title="17. New Element / Particle Accelerator (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />17. New Element / Particle Accelerator
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/1KzhnsidPoI" title="18 Sledgehammer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />18. Sledgehammer
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/1OC_vWJgHtU" title="19 New RT / To the Expo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />19. New RT / To The Expo
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/QvnOLHMGM_4" title="20. Black Widow Kicks Ass (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />20. Black Widow Kicks Ass
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/lfBpAP68eKE" title="21. Iron Man Battles the Drones (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />21. Iron Man Battles The Drones
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/RNcpNCGdaHU" title="22. Ivan's Demise / The Kiss (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />22. Ivan's Demise / The Kiss
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/2mO8aTzTUsY" title="23. Thor (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />23. Thor
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/63S6aAinq-w" title="24. I Am Iron Man (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />24. I Am Iron Man
                    </Card.Subtitle>
                    <Card.Text>
                        <br />John Debney
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/preBdo4NLvU" title="25. Make Way for Tomorrow Today (Iron Man 2 Soundtrack)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />25. Make Way for Tomorrow Today
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Richard Sherman
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/xRQnJyP77tY" title="AC/DC - Shoot To Thrill (Iron Man 2 Version)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 1. Shoot To Thrill
                    </Card.Subtitle>
                    <Card.Text>
                        <br />AC/DC
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/BN1WwnEDWAM" title="The Clash - Should I Stay or Should I Go (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 2. Should I Stay or Shold I Go
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Crash
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/dj1Nf850Lys" title="The Clash - The Magnificent Seven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 3. The Magnificent Seven
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Crash
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/IBzYnu14rPM" title="Ironman 2 Monaco by The Declanator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 4. Monaco
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Declanator
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/k5UN0EEUMAs" title="Good Old Days" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 5. Good Old Days
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brad Hatfield
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/omfz62qu_Bc" title="2Pac ft. Dr. Dre - California Love (Official Video) [Full Length Version]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 6. California Love
                    </Card.Subtitle>
                    <Card.Text>
                        <br />2Pac (feat. Dr.Dre)
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/rY0WxgSXdEE" title="Queen - Another One Bites the Dust (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 7. Another One Bites the Dust
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Queen
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/phOW-CZJWT0" title="Rob Base & DJ EZ Rock - It Takes Two" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 8. It Takes Two
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Rob Base & DJ EZ Rock
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/sFZjqVnWBhc" title="Daft Punk - Robot Rock (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 9. Daft Punk
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Daft Punk
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/OPwUpIr6KRY" title="Groove Holmes (Remastered 2009)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 10. Groove Holmes
                    </Card.Subtitle>
                    <Card.Text>
                        <br />BeastieBoys
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/jykehJELPBk" title="Ironman 2 Pimpin Guns Cue by The Declanator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 11. Ironman 2 Pimpin Guns Cue
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Declanator
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/FnH_zwVmiuE" title="Average White Band - Pick Up The Pieces" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 12. Pick Up The Pieces
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Average White Band
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/l482T0yNkeo" title="AC/DC - Highway to Hell (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 13. Highway To Hell
                    </Card.Subtitle>
                    <Card.Text>
                        <br />AC/DC
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
)}

function MusicInIronMan3(){ // 아이언맨3 OST / 삽입곡
    return(
        <div style={{backgroundColor: '#861313'}}>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/wL6jh9thk8Q" title="Brian Tyler - Iron Man 3 Recording Session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />1. Iron Man 3
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/NM14FzEOIJ0" title="War Machine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />2. War Machine
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/p976FNQpy0E" title="Attack on 10880 Malibu Point" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />3. Attack On 10880 Malibu Point
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/G9TK-HOLMbs" title="Isolation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />4. Isolation
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/moeRRZR2Wfc" title="Dive Bombers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />5. Dive Bombers
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/PCR24d-seKY" title="New Beginnings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />6. New Beginnings
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/NyjqAtDOb-g" title="Extremis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />7. Extremis
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/JX9SBRdMz5M" title="Stark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />8. Stark
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/zX8Ka15EQKw" title="Leverage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />9. Leverage
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/tIc9wsxESQE" title="The Mandarin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />10. The Mandarin
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/2X6k4aC9qlM" title="Heat and Iron" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />11. Heat And Iron
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/RXT9QphhiWw" title="Misfire" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />12. Misfire
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/uGNgOtygEzo" title="Culmination" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />13. Culmination
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/nQk-JeyoYpg" title="The Mechanic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />14. The Mechanic
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/94rSR4O-msM" title="Hot Pepper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />15. Hot Pepper
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/H8godlVd8po" title="Another Lesson From Mandy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />16. Another Lesson From The Mandarin
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/rUR1gsuR5SM" title="Dr. Wu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />17. Dr Wu
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/TcTxiDdM660" title="Return" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />18. Return
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/xRDmkntI7vM" title="Battle Finale" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />19. Battle Finale
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/OsSHmKU0t7w" title="Can You Dig It (Iron Man 3 Main Titles)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />20. Can You Dig it
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Brian Tyler
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/zA52uNzx7Y4" title="Eiffel 65 - Blue (Da Ba Dee)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 1. Blue (Da Ba Dee)
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Eiffel 65
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/EK_LN3XEcnw" title="Lou Bega - Mambo No. 5 (A Little Bit of...) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 2. Mambo No. 5 (A Little Bit of...)
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Lou Bega
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/Ry2bSgai62M" title="Jingle Bells (Bombay Dub Orchestra Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 3. Jingle Bells (Bombay Dub Orchestra Remix)
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Joe Williams
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/x3qR62oLEFY" title="Some Kind of Joke" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 4. Some Kind of Joke
                    </Card.Subtitle>
                    <Card.Text>
                        <br />AWOLNATION
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/hUHLveKrBiE" title="Jingle Bells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 5. Jingle Bells
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Vinnie Zummo
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/VjJ83j21tD8" title="Santa Claus Is Back in Town" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 6. Santa Claus Is Back in Town
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Dwight Yoakam
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/G1BpLy2Nw0Y" title="Jingle Bells" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 7. Jingle Bells
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Herb Alpert
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/498MOIJdwEo" title="Anderlecht Champion aka Olé Olé Olé, We Are The Champions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 8. Anderlecht Champion aka Olé Olé Olé, We Are The Champions
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Various Artist
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/_fh133ZO1AE" title="Vince Guaraldi Trio - O Tannenbaum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />ex 9. O Tannenbaum
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Vince Guaraldi Trio
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
)}

function MusicInCrossOver(){ // 크로스오버 삽입곡
    return(
        <div style={{backgroundColor: '#861313'}}>
            <Toast className='innerToast'>
                <Toast.Body>
                    양이 너무 많아, 두곡씩만 가져왔습니다. 모든 곡이 너무 좋아서 정말 어려운 작업이었던..ㅠㅡㅜ
                </Toast.Body>
            </Toast>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        1. 어벤져스(2012)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/QtxeJ703w18" title="The Avengers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />1-1. The Avengers
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Alan Silvestri
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/D3ZNtOcY_1A" title="Soundgarden - Live to Rise (From Marvel's THE AVENGERS) - Official Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />1-2. Live To Rise
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Soundgarden
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        2. 어벤져스: 에이지 오브 울트론(2015)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/93_rWpdKxH0" title="I Can't Get Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />2-1. I Can't Get Started
                    </Card.Subtitle>
                    <Card.Text>
                        <br />BBC Big Band Orchestra
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/nEqPcTSnZY4" title="I've Got No Strings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />2-2. I've Got No Strings
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Dickie Jones
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        3. 캡틴 아메리카 : 시빌워(2016)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/92UC43cCSWg" title="Try to Remember" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />3-1. Try To Remember
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Tom Jones and Harvey schmidt
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/NRWUoDpo2fo" title="alt-J - Left Hand Free (Official Video) 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />3-2. Left Hand Free
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Alt-J
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        4. 스파이더맨 : 홈커밍(2017)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/skdE0KAFCEA" title="Blitzkrieg Bop (2016 Remaster)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />4-1. Blitzkrieg Bop
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Ramones
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/HK5drdux-Eg" title="SWJ Mafia - La Consequencia (From Spider-Man: Homecoming)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />4-2. La Consequencia
                    </Card.Subtitle>
                    <Card.Text>
                        <br />SWJ Mafia
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        5. 어벤져스 : 인피니티 워(2018)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/KSMVflSBKx8" title="The Rubberband Man" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />5-1. The Rubberband Man
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Spinners
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/NaMmX7OCyCA" title="Could It Be I'm Falling in Love" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />5-2. Could It Be I'm Falling In Love
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Spinners
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        6. 어벤져스 : 엔드게임(2019)
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/1DWiB7ZuLvI" title="The Rolling Stones - Doom And Gloom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />6-1. DOOM AND GLOOM
                    </Card.Subtitle>
                    <Card.Text>
                        <br />The Rolling Stones
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='ostCard'>
                <Card.Body>
                    <Card.Title>
                        <iframe src="https://www.youtube.com/embed/bc0KhhjJP98" title="Redbone - Come and Get Your Love (Single Edit - Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card.Title>
                    <Card.Subtitle>
                        <br />6-2. Come And Get Your Love
                    </Card.Subtitle>
                    <Card.Text>
                        <br />Redbone
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
)}

function TransformationOfIronMan1(){ // 아이언맨1 변신장면 (깃 업로드 불가로 동영상 사용은 나중으로)
    return(
        <div>
            
        </div>
)}

function TransformationOfIronMan2(){ // 아이언맨2 변신장면 (깃 업로드 불가로 동영상 사용은 나중으로)
    return(
        <div>

        </div>
)}

function TransformationOfIronMan3(){ // 아이언맨3 변신장면 (깃 업로드 불가로 동영상 사용은 나중으로)
    return(
        <div>

        </div>
)}

function TransformationOfCrossOver(){ // 크로스오버 변신장면 (깃 업로드 불가로 동영상 사용은 나중으로)
    return(
        <div>
            1. 어벤져스(2012)
            2. 어벤져스: 에이지 오브 울트론(2015)
            3. 캡틴 아메리카 : 시빌워(2016)
            4. 스파이더맨 : 홈커밍(2017)
            5. 어벤져스 : 인피니티 워(2018)
            6. 어벤져스 : 엔드게임(2019)
        </div>
)}

function DirectorOfIronMan1(){ // 아이언맨1 감독
    return(
        <Card className='outer'>
            <Card style={{ width: '80%' }}>
                <Card.Img variant="top" src="/img/director/IronMan1.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className='font big'>이름 : 조나단 콜리아 패브로<br />(Jonathan Kolia Favreau)</span>
                    </Card.Title>
                    <Card.Text>
                        출생 : 1966년 10월 19일, 미국 뉴욕주 퀸즈<br />
                        직업 : 배우, 영화감독, 각본가, 성우
                    </Card.Text>
                    <Card.Text>
                        활동 : 배우로 활동하면서 각본가로도 활동하였는데, 초기에는 코미디 영화들을 주로 썼다.
                        1996년작 더그 라이먼 감독의 《스윙어즈》가 대표작이다.
                        2003년작 《엘프》는 케빈 파이기가 그를 아이언맨 1의 감독으로 발탁하는 데 결정적인 영향을 준 작품으로도 알려져 있다.
                        《아이언맨》의 감독으로 잘 알려져 있다.
                        당시 주연이었던 로버트 다우니 주니어와 긴밀한 논의와 상의를 거쳐 엉망이었던 원래 각본을 대폭 수정해 영화를 재창조하다시피 찍었다.
                        덕분에 아이언맨은 세계적 흥행 대작이 되었고, 마블 히어로 시리즈의 성공적인 출발에 큰 기여를 했다.
                        하지만 《아이언맨 2》 연출을 맡은 후에는 마블 스튜디오의 간섭에 질려서 이후 후속작에서는 손을 때게 된다.
                        감독을 때려치우기는 했어도 여전히 해피 호건 역으로 출연은 계속하고 있다.
                        어벤져스 실사영화 시리즈와 《아이언맨 3》에서 총괄 제작자(executive producer)로 이름이 올라가기는 했지만,
                        이는 전편을 만들어 기반을 마련해 준 공을 인정해 예우상 넣어 주는 경우도 많은 직함이라서 실제 제작에 영향을 얼마나 미치는지는 불명.
                        2014년에는 아예 독립 영화인 《아메리칸 셰프》의 제작, 감독, 각본, 주연을 전부 맡기도 했다.
                        2016년 연출작인 《정글북》은 큰 호평을 받아 《아이언맨》 이후 영화 감독의 입지를 굳힐 수 있었다.
                        2016년 4월 18일 올라온 기사에 따르면 마블 시네마틱 유니버스에 복귀한다고 한다.
                        연출가로서의 재능이 상당하다. 지금까지 감독으로 참여한 영화 중 평가가 눈에 띄게 안 좋은 것은
                        《자투라: 스페이스 어드벤쳐》, 《아이언맨 2》, 《카우보이 & 에일리언》뿐인데,
                        자투라는 첫 작품이니 경험부족이라 치고 넘어갈 수 있고,
                        아이언맨 2는 앞서 언급된대로 마블 스튜디오가 지나치게 간섭을 한 영화라서 자신은 거의 허수아비나 마찬가지인 영화였고,
                        반대로 아이언맨 1은 MCU에서도 두드러지는 평을 받았던 것을 고려하면 그의 실력이 제대로 발휘되지 못한 편이라고 판단된다.
                        연출 외에도 이전부터 여러 영화(주로 로맨틱 코미디)에 조연 급으로 출연해온 잔뼈 굵은 배우다.
                        배트맨 포에버에서 브루스 웨인의 수행원으로 잠시 나온 적이 있고,
                        벤 애플렉 주연의 《데어데블》에선 맷 머독의 변호사 친구 포기 넬슨 역으로 출연하기도 하는 등 히어로물과의 인연도 꽤 많은 편이다.
                        《딥 임팩트》에서도 탐사선 "메시아" 호 승무원 크루 중 거스 파텐자로 출연하기도 했다.
                        특히 자신이 감독한 영화에 배우로도 출연하는 경우가 상당히 많다.
                        아이언맨 시리즈에서도 해피 호건 캐릭터를 자기가 직접 연기했으며, 《메이드》, 《아메리칸 셰프》에서는 아예 주연을 맡았다.
                        시트콤 《프렌즈》에 모니카 겔러의 남자친구로 몇 에피소드에 출연하기도 했다.
                        성공한 IT 재벌이란 설정으로 모니카와 사귀게 되자 갑자기 UFC 선수가 되겠다는 캐릭터로 등장했다.
                        남자친구가 매번 얻어터지는 걸 볼 수 없었던 모니카와 결별하고, 마지막 경기에서 상대선수에게 그곳 (...)을 크게 다친다.
                        프렌즈 멤버들의 대사를 들어보면 고자가(...)
                        《소프라노스》 시즌 2 7화에 본인역으로 출연하기도 했다.
                        2017년 11월, 디즈니 역대 최고 제작비가 투입된 스타워즈 실사 드라마 《만달로리안》의 제작 총괄 및 각본가로 확정되었다.
                        2019년 《정글북》에 이어 다시 한번 원작 애니메이션을 실사화한 《라이온 킹》을 제작해 북미에서만 5억달러를 돌파하며,
                        10억 달러 흥행을 넘겼다. 이렇게 지금까지의 공로를 인정받아 2019년 5월에 디즈니 레전드로 선정되었다.
                        이 해에는 함께 MCU의 초석을 다진 로버트 다우니 주니어도 올랐다.
                        상술한 《만달로리안》이 평단의 호평에 더불어 흥행까지 대성공하였고,
                        이에 대해 당시 디즈니 CEO였던 밥 아이거는 그에게 신세대 조지 루카스라는 평을 내렸다고 한다.
                        참고로 MCU에 관여할 때 케빈 파이기에게 "작품을 만들때 언제나 오래된 팬을 생각해야 한다"는 작품정신을 강조했다고.
                        이를 투영한 《만달로리안》은 올드팬들을 위한 팬서비스가 꽤 많은데,
                        이 팬서비스를 작품의 서사에 자연스럽게 스며들게 하는 전략이 잘 먹혀서 올드팬들과 신규팬들 모두를 만족시켰다.
                        그 덕에 시즌 3까지 확정한 상태.
                        만달로리안의 첫 스핀오프 시리즈인 《북 오브 보바 펫》 역시 제작과 연출을 맡았다.
                        다만 대호평을 받은 만달로리안과는 달리 제목은 보바 펫인데 보바 펫이 카메오로 나오는 시리즈라는 혹평을 들어야만 했다.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card>
)}

function DirectorOfIronMan2(){ // 아이언맨2 감독
    return(
        <Card className='outer'>
            <Card style={{ width: '80%' }}>
                <Card.Img variant="top" src="/img/director/IronMan1.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className='font big'>이름 : 조나단 콜리아 패브로<br />(Jonathan Kolia Favreau)</span>
                    </Card.Title>
                    <Card.Text>
                        출생 : 1966년 10월 19일, 미국 뉴욕주 퀸즈<br />
                        직업 : 배우, 영화감독, 각본가, 성우
                    </Card.Text>
                    <Card.Text>
                        활동 : 배우로 활동하면서 각본가로도 활동하였는데, 초기에는 코미디 영화들을 주로 썼다.
                        1996년작 더그 라이먼 감독의 《스윙어즈》가 대표작이다.
                        2003년작 《엘프》는 케빈 파이기가 그를 아이언맨 1의 감독으로 발탁하는 데 결정적인 영향을 준 작품으로도 알려져 있다.
                        《아이언맨》의 감독으로 잘 알려져 있다.
                        당시 주연이었던 로버트 다우니 주니어와 긴밀한 논의와 상의를 거쳐 엉망이었던 원래 각본을 대폭 수정해 영화를 재창조하다시피 찍었다.
                        덕분에 아이언맨은 세계적 흥행 대작이 되었고, 마블 히어로 시리즈의 성공적인 출발에 큰 기여를 했다.
                        하지만 《아이언맨 2》 연출을 맡은 후에는 마블 스튜디오의 간섭에 질려서 이후 후속작에서는 손을 때게 된다.
                        감독을 때려치우기는 했어도 여전히 해피 호건 역으로 출연은 계속하고 있다.
                        어벤져스 실사영화 시리즈와 《아이언맨 3》에서 총괄 제작자(executive producer)로 이름이 올라가기는 했지만,
                        이는 전편을 만들어 기반을 마련해 준 공을 인정해 예우상 넣어 주는 경우도 많은 직함이라서 실제 제작에 영향을 얼마나 미치는지는 불명.
                        2014년에는 아예 독립 영화인 《아메리칸 셰프》의 제작, 감독, 각본, 주연을 전부 맡기도 했다.
                        2016년 연출작인 《정글북》은 큰 호평을 받아 《아이언맨》 이후 영화 감독의 입지를 굳힐 수 있었다.
                        2016년 4월 18일 올라온 기사에 따르면 마블 시네마틱 유니버스에 복귀한다고 한다.
                        연출가로서의 재능이 상당하다. 지금까지 감독으로 참여한 영화 중 평가가 눈에 띄게 안 좋은 것은
                        《자투라: 스페이스 어드벤쳐》, 《아이언맨 2》, 《카우보이 & 에일리언》뿐인데,
                        자투라는 첫 작품이니 경험부족이라 치고 넘어갈 수 있고,
                        아이언맨 2는 앞서 언급된대로 마블 스튜디오가 지나치게 간섭을 한 영화라서 자신은 거의 허수아비나 마찬가지인 영화였고,
                        반대로 아이언맨 1은 MCU에서도 두드러지는 평을 받았던 것을 고려하면 그의 실력이 제대로 발휘되지 못한 편이라고 판단된다.
                        연출 외에도 이전부터 여러 영화(주로 로맨틱 코미디)에 조연 급으로 출연해온 잔뼈 굵은 배우다.
                        배트맨 포에버에서 브루스 웨인의 수행원으로 잠시 나온 적이 있고,
                        벤 애플렉 주연의 《데어데블》에선 맷 머독의 변호사 친구 포기 넬슨 역으로 출연하기도 하는 등 히어로물과의 인연도 꽤 많은 편이다.
                        《딥 임팩트》에서도 탐사선 "메시아" 호 승무원 크루 중 거스 파텐자로 출연하기도 했다.
                        특히 자신이 감독한 영화에 배우로도 출연하는 경우가 상당히 많다.
                        아이언맨 시리즈에서도 해피 호건 캐릭터를 자기가 직접 연기했으며, 《메이드》, 《아메리칸 셰프》에서는 아예 주연을 맡았다.
                        시트콤 《프렌즈》에 모니카 겔러의 남자친구로 몇 에피소드에 출연하기도 했다.
                        성공한 IT 재벌이란 설정으로 모니카와 사귀게 되자 갑자기 UFC 선수가 되겠다는 캐릭터로 등장했다.
                        남자친구가 매번 얻어터지는 걸 볼 수 없었던 모니카와 결별하고, 마지막 경기에서 상대선수에게 그곳 (...)을 크게 다친다.
                        프렌즈 멤버들의 대사를 들어보면 고자가(...)
                        《소프라노스》 시즌 2 7화에 본인역으로 출연하기도 했다.
                        2017년 11월, 디즈니 역대 최고 제작비가 투입된 스타워즈 실사 드라마 《만달로리안》의 제작 총괄 및 각본가로 확정되었다.
                        2019년 《정글북》에 이어 다시 한번 원작 애니메이션을 실사화한 《라이온 킹》을 제작해 북미에서만 5억달러를 돌파하며,
                        10억 달러 흥행을 넘겼다. 이렇게 지금까지의 공로를 인정받아 2019년 5월에 디즈니 레전드로 선정되었다.
                        이 해에는 함께 MCU의 초석을 다진 로버트 다우니 주니어도 올랐다.
                        상술한 《만달로리안》이 평단의 호평에 더불어 흥행까지 대성공하였고,
                        이에 대해 당시 디즈니 CEO였던 밥 아이거는 그에게 신세대 조지 루카스라는 평을 내렸다고 한다.
                        참고로 MCU에 관여할 때 케빈 파이기에게 "작품을 만들때 언제나 오래된 팬을 생각해야 한다"는 작품정신을 강조했다고.
                        이를 투영한 《만달로리안》은 올드팬들을 위한 팬서비스가 꽤 많은데,
                        이 팬서비스를 작품의 서사에 자연스럽게 스며들게 하는 전략이 잘 먹혀서 올드팬들과 신규팬들 모두를 만족시켰다.
                        그 덕에 시즌 3까지 확정한 상태.
                        만달로리안의 첫 스핀오프 시리즈인 《북 오브 보바 펫》 역시 제작과 연출을 맡았다.
                        다만 대호평을 받은 만달로리안과는 달리 제목은 보바 펫인데 보바 펫이 카메오로 나오는 시리즈라는 혹평을 들어야만 했다.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card>
)}

function DirectorOfIronMan3(){ // 아이언맨3 감독
    return(
        <Card className='outer'>
            <Card style={{ width: '80%' }}>
                <Card.Img variant="top" src="/img/director/IronMan3.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className='font big'>이름 : 셰인 블랙<br />(ShaneBlack)</span>
                    </Card.Title>
                    <Card.Text>
                        출생 : 1961년 12월 16일, 미국 펜실베니아주 피츠버그<br />
                        직업 : 배우, 영화감독, 각본가
                    </Card.Text>
                    <Card.Text>
                        본래 프레데터 1편의 조연 역으로 출연한 배우였지만, 원래 리썰 웨폰의 각본으로 유명했고 훗날 아이언맨 3와 나이스 가이즈 등을 감독하였다.
                        아이언맨 같은 작품은 호불호는 갈렸지만 어쨌든 리썰 웨폰의 각본가답게 대부분의 작품들을 완급있게 잘 연출해 호평을 받은 감독이였다.
                        그러나 이후 전의 경력들이 무색하게도 프레데터 시리즈의 더 프레데터를 처참하게 말아먹은 원흉 중 하나로 낙인이 찍혔다.
                        아니나 다를까 마지막 장면에 프레데터가 아이언맨 코스프레를 하는 장면에서,
                        프레데터 영화를 딴 동네 영화로 착각하고 있는 게 아닌가 의심받을 정도였다.
                        게다가 출연배우들 대부분이 이전작에서 나름대로 연기력으로 호평받은 베테랑들임을 고려하면,
                        셰인 블랙의 연기 디렉션이 엉망진창이었으리라는 합리적인 의심을 할 수 밖에 없다.
                        셰인 블랙이 미성년자 대상 성범죄자인 친구를 오디션 없이 단역으로 꽂아 넣었다가,
                        사실을 알아챈 올리비아 문의 지적으로 출연 장면을 전부 삭제한 것이 알려져 논란이 되었다.
                        갈채를 받았다는 토론토 영화제를 비롯한 각종 홍보행사에서 남배우들이 전부 감독 편을 들고 올리비아 문을 따돌렸다는 사실이 SNS로 퍼지면서,
                        관람 거부 운동이 일었고 흥행에 악영향을 끼친 듯하다.
                        거대 프랜차이즈 영화에는 진중함도 필요한데 감독 본인부터가 제어를 못하면 무슨 소용이 있겠는가?
                        아이언맨 3에 이어 인기가 많은 시리즈의 속편, 훌륭한 빌런(만다린, 프레데터)이 있어서 기본만 해도 좋은 영화가 될 텐데,
                        쓸데없는 B급 개그와 내용 뒤틀기로 망쳐버리면서 감독 본인도 평판이 나락으로 떨어지고, 커리어에 큰 타격을 받았다.
                        프레데터 시리즈는 정체불명의 존재에게 사냥당하는 데서 나오는 긴장감이 핵심인데,
                        본작에서 그렇게 욕설 드립이 난무하여 분위기를 파토내 놓고 있으며,
                        감독이 1탄에서 출연했을 때 쓸데없는 개그 치고 다니던 배역이었던 걸 보면 뭔가 안 좋은 뜻으로 의미심장하다.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card>
)}

function DirectorOfCrossOver(){ // 크로스오버 감독
    return(
        <div>
            <Card className='outer'>
                <Card.Body>
                    <Card className='innerCard'>
                        <Card.Img variant="top" src="/img/director/Crossover_1.jpg" />
                        <Card.Body>
                            <Card.Title><span className='font big'>조스 웨던</span></Card.Title>
                            <Card.Text>
                                <br />이름 : 조지프 힐 휘던<br />(Joseph Hill Whedon)<br />
                                <br />출생 : 1964년 6월 23일<br />미국 뉴욕
                            </Card.Text>
                            <Card.Text>
                                <br />작품 :<br />
                                어벤져스(2012)<br />
                                어벤져스 : 에이지 오브 울트론(2015)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='innerCard'>
                        <Card.Img variant="top" src="/img/director/Crossover_2.jpg" />
                        <Card.Body>
                            <Card.Title><span className='font big'>루소 형제</span></Card.Title>
                            <Card.Text>
                            <br />이름 : (형,오른쪽) 앤서니 루소<br />(Anthony Russo)<br />
                            <br />출생 : 1971년 7월 8일<br />미국<br />

                            <br />이름 : (동생,왼쪽) 조 루소<br />(Joe Russo)<br />
                            <br />출생 : 1970년 2월 3일<br />미국
                            </Card.Text>
                            <Card.Text>
                                <br />작품 :<br />
                                캡틴 아메리카 : 시빌워(2016)<br />
                                어벤져스 : 인피니티 워(2018)<br />
                                어벤져스 : 엔드게임(2019)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='innerCard'>
                        <Card.Img variant="top" src="/img/director/Crossover_3.jpg" />
                        <Card.Body>
                            <Card.Title><span className='font big'>존 왓츠</span></Card.Title>
                            <Card.Text>
                            <br />이름 : 존 왓츠<br />(Jon Watts)<br />
                            <br />출생 : 1981년 6월 28일
                            </Card.Text>
                            <Card.Text>
                                <br />작품 :<br />
                                스파이더맨 : 홈커밍(2017)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div>
)}

function Reference(){ // 참고자료
    return(
        <div style={{fontWeight:'bold'}}>
            <ListGroup style={{backgroundColor:'#861313', padding:'10px'}}>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    No.1 <span className='font big'>휴먼교육센터</span>의 이름하야 <span className='font big'>정!</span> tothe <span className='font big'>용!</span> tothe <span className='font big'>진!</span> 선생님의 강좌
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    사진 및 영상 참조 : 디즈니 - 마블 / 구글
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨 소개<br />
                    <a href='https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8(%EB%A7%88%EB%B8%94%20%EC%8B%9C%EB%84%A4%EB%A7%88%ED%8B%B1%20%EC%9C%A0%EB%8B%88%EB%B2%84%EC%8A%A4)' target='_blank'>
                        https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8(%EB%A7%88%EB%B8%94%20%EC%8B%9C%EB%84%A4%EB%A7%88%ED%8B%B1%20%EC%9C%A0%EB%8B%88%EB%B2%84%EC%8A%A4)
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    로버트 존 다우니 주니어 소개<br />
                    <a href='https://namu.wiki/w/%EB%A1%9C%EB%B2%84%ED%8A%B8%20%EB%8B%A4%EC%9A%B0%EB%8B%88%20%EC%A3%BC%EB%8B%88%EC%96%B4' target='_blank'>
                        https://namu.wiki/w/%EB%A1%9C%EB%B2%84%ED%8A%B8%20%EB%8B%A4%EC%9A%B0%EB%8B%88%20%EC%A3%BC%EB%8B%88%EC%96%B4
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    기네스 팰트로우 소개<br />
                    <a href='https://namu.wiki/w/%EA%B7%80%EB%84%A4%EC%8A%A4%20%ED%8C%B0%ED%8A%B8%EB%A1%9C?from=%EA%B8%B0%EB%84%A4%EC%8A%A4%20%ED%8C%B0%ED%8A%B8%EB%A1%9C' target='_blank'>
                        https://namu.wiki/w/%EA%B7%80%EB%84%A4%EC%8A%A4%20%ED%8C%B0%ED%8A%B8%EB%A1%9C?from=%EA%B8%B0%EB%84%A4%EC%8A%A4%20%ED%8C%B0%ED%8A%B8%EB%A1%9C
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    조나단 콜리아 패브로 소개<br />
                    <a href='https://namu.wiki/w/%EC%A1%B4%20%ED%8C%A8%EB%B8%8C%EB%A1%9C' target='_blank'>
                        https://namu.wiki/w/%EC%A1%B4%20%ED%8C%A8%EB%B8%8C%EB%A1%9C
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    테렌스 데숀 하워드 소개<br />
                    <a href='https://namu.wiki/w/%ED%85%8C%EB%A0%8C%EC%8A%A4%20%ED%95%98%EC%9B%8C%EB%93%9C' target='_blank'>
                        https://namu.wiki/w/%ED%85%8C%EB%A0%8C%EC%8A%A4%20%ED%95%98%EC%9B%8C%EB%93%9C
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    새뮤얼 L. 잭슨 소개<br />
                    <a href='https://namu.wiki/w/%EC%83%88%EB%AE%A4%EC%96%BC%20L.%20%EC%9E%AD%EC%8A%A8' target='_blank'>
                        https://namu.wiki/w/%EC%83%88%EB%AE%A4%EC%96%BC%20L.%20%EC%9E%AD%EC%8A%A8
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    클라크 그래그 소개<br />
                    <a href='https://namu.wiki/w/%ED%81%B4%EB%9D%BC%ED%81%AC%20%EA%B7%B8%EB%A0%88%EA%B7%B8' target='_blank'>
                        https://namu.wiki/w/%ED%81%B4%EB%9D%BC%ED%81%AC%20%EA%B7%B8%EB%A0%88%EA%B7%B8
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    제프리 레옹 브리지스 소개<br />
                    <a href='https://namu.wiki/w/%EC%A0%9C%ED%94%84%20%EB%B8%8C%EB%A6%AC%EC%A7%80%EC%8A%A4' target='_blank'>
                        https://namu.wiki/w/%EC%A0%9C%ED%94%84%20%EB%B8%8C%EB%A6%AC%EC%A7%80%EC%8A%A4
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    션 터브 소개<br />
                    <a href='https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=139537&qvt=0&query=%EC%85%98%20%ED%84%B0%EB%B8%8C%20%ED%94%84%EB%A1%9C%ED%95%84' target='_blank'>
                        https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=139537&qvt=0&query=%EC%85%98%20%ED%84%B0%EB%B8%8C%20%ED%94%84%EB%A1%9C%ED%95%84
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    돈 치들 소개<br />
                    <a href='https://namu.wiki/w/%EB%8F%88%20%EC%B9%98%EB%93%A4' target='_blank'>
                        https://namu.wiki/w/%EB%8F%88%20%EC%B9%98%EB%93%A4
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    미키 루크 소개<br />
                    <a href='https://namu.wiki/w/%EB%AF%B8%ED%82%A4%20%EB%A3%A8%ED%81%AC' target='_blank'>
                        https://namu.wiki/w/%EB%AF%B8%ED%82%A4%20%EB%A3%A8%ED%81%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    샘 록웰 소개<br />
                    <a href='https://namu.wiki/w/%EC%83%98%20%EB%A1%9D%EC%9B%B0' target='_blank'>
                        https://namu.wiki/w/%EC%83%98%20%EB%A1%9D%EC%9B%B0
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    가이 피어스 소개<br />
                    <a href='https://namu.wiki/w/%EA%B0%80%EC%9D%B4%20%ED%94%BC%EC%96%B4%EC%8A%A4' target='_blank'>
                        https://namu.wiki/w/%EA%B0%80%EC%9D%B4%20%ED%94%BC%EC%96%B4%EC%8A%A4
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    벤 킹슬리 소개<br />
                    <a href='https://namu.wiki/w/%EB%B2%A4%20%ED%82%B9%EC%8A%AC%EB%A6%AC?from=%EB%B2%A4%20%ED%82%B9%EC%A6%90%EB%A6%AC' target='_blank'>
                        https://namu.wiki/w/%EB%B2%A4%20%ED%82%B9%EC%8A%AC%EB%A6%AC?from=%EB%B2%A4%20%ED%82%B9%EC%A6%90%EB%A6%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    윌리엄 새들러 소개<br />
                    <a href='https://namu.wiki/w/%EC%9C%8C%EB%A6%AC%EC%97%84%20%EC%83%88%EB%93%A4%EB%9F%AC' target='_blank'>
                        https://namu.wiki/w/%EC%9C%8C%EB%A6%AC%EC%97%84%20%EC%83%88%EB%93%A4%EB%9F%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨1 줄거리<br />
                    <a href='https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8(%EC%98%81%ED%99%94)/%EC%A4%84%EA%B1%B0%EB%A6%AC' target='_blank'>
                        https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8(%EC%98%81%ED%99%94)/%EC%A4%84%EA%B1%B0%EB%A6%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨2 줄거리<br />
                    <a href='https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8%202/%EC%A4%84%EA%B1%B0%EB%A6%AC' target='_blank'>
                        https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8%202/%EC%A4%84%EA%B1%B0%EB%A6%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨3 줄거리<br />
                    <a href='https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8%203/%EC%A4%84%EA%B1%B0%EB%A6%AC' target='_blank'>
                        https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8%203/%EC%A4%84%EA%B1%B0%EB%A6%AC
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨 삽입곡 정리<br />
                    <a href='https://mystee.tistory.com/' target='_blank'>
                        https://mystee.tistory.com/
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨 변신장면 모음<br />
                    <a href='https://www.youtube.com/watch?v=cfgfLyU8gs8' target='_blank'>
                        https://www.youtube.com/watch?v=cfgfLyU8gs8
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨 1,2 감독<br />
                    <a href='https://namu.wiki/w/%EC%A1%B4%20%ED%8C%A8%EB%B8%8C%EB%A1%9C#s-3.2' target='_blank'>
                        https://namu.wiki/w/%EC%A1%B4%20%ED%8C%A8%EB%B8%8C%EB%A1%9C#s-3.2
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    아이언맨 3 감독<br />
                    <a href='https://namu.wiki/w/%EC%85%B0%EC%9D%B8%20%EB%B8%94%EB%9E%99' target='_blank'>
                        https://namu.wiki/w/%EC%85%B0%EC%9D%B8%20%EB%B8%94%EB%9E%99
                    </a>
                </ListGroup.Item>
                <ListGroup.Item style={{width:'80%',backgroundColor:'#210000', color:'#861313', overflowWrap:'break-word'}}>
                    크로스오버 감독<br />
                    
                    조스 웨던 : <a href='https://namu.wiki/w/%EC%A1%B0%EC%8A%A4%20%EC%9B%A8%EB%8D%98' target='_blank'>
                        https://namu.wiki/w/%EC%A1%B0%EC%8A%A4%20%EC%9B%A8%EB%8D%98</a><br />
                    
                    루소 형제 : <a href='https://namu.wiki/w/%EB%A3%A8%EC%86%8C%20%ED%98%95%EC%A0%9C' target='_blank'>
                        https://namu.wiki/w/%EB%A3%A8%EC%86%8C%20%ED%98%95%EC%A0%9C</a><br />
                    
                    존 왓츠 : <a href='https://namu.wiki/w/%EC%A1%B4%20%EC%99%93%EC%B8%A0' target='_blank'>https://namu.wiki/w/%EC%A1%B4%20%EC%99%93%EC%B8%A0</a><br />
                </ListGroup.Item>
            </ListGroup>
        </div>
)}