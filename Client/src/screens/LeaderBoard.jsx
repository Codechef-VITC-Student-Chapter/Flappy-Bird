import React from "react";
import bird from "../assets/leaderBoard_bird.png";
import crownGold from "../assets/leaderBoard_crown_r1.png";
import crownSilver from "../assets/leaderBoard_crown_r2.png";
import crownBronze from "../assets/leaderBoard_crown_r3.png";

const LeaderBoard = ({ setScreen, players }) => {
  return (
    <div className="body leaderboard-bg m-0 p-0 overflow-x-hidden bg-cover bg-no-repeat lg:bg-[100%_100%] flex justify-center items-center min-h-screen w-full overflow-x-hidden">
      {/* Div for larger screens */}
      <div className="body leaderboard-bg m-0 p-0 overflow-x-visible hidden bg-cover bg-no-repeat lg:flex w-full max-w-[1200px] items-center flex-col p-6 rounded-3xl shadow-lg out bg-contain bg-no-repeat bg-center box-border max-w-[100%] w-[100%] mx-auto min-h-screen big">
        <div className="flex items-center t1" style={{marginTop: '-30px'}}>
          <img src={bird} alt="CodeChef Bird" className="mx-10" style={{ width: '120px', height: '120px' }}/>
          <h2 className="text-2xl font-bold p-3 text-center lead mt-0 pl-2 rounded-custom text-custom-large tracking-wider mt-16 font-postNoBills" style={{ backgroundColor: '#DCC131', padding: '23px 80px', paddingTop: '28px' }}>
            LEADERBOARD
          </h2>
          <img
            src={bird}
            alt="CodeChef Bird"
            className="transform scale-x-[-1] mx-10"
            style={{ width: '120px', height: '120px' }}
          />
        </div>

        <ul className="list-none p-0 w-full">
          <div className="flex justify-center gap-20">
            {players[2] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 top-three-item r3 w-180px border border-black tracking-custom-spacing h-150px mt-130px" style={{borderRadius: '15px 50px 50px', backgroundColor: '#862220', position: 'relative'}}>
                <span className="font-bold relative text-center" style={{ minWidth: '70px' }}>
                  <img src={crownBronze} alt="Crown" className="absolute crown3 h-80px" style={{top: '-45px',left: '-90px'}}/>
                </span>
                <span className="text-center txt3 name-span text-custom-27px font-extrabold text-white">{players[2].name}</span>
                <span className="text-center txt3 score-span mb-4 text-custom-27px font-extrabold text-white">{players[2].score}</span>
              </li>
            )}

            {players[0] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 top-three-item w-custom-width rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl mt-custom-margin-top border border-black tracking-custom-spacing" style={{backgroundColor: 'gold', position: 'relative'}}>
                <span className="font-bold txt1 relative text-center" style={{ minWidth: '80px' }}>
                  <img src={crownGold} alt="Crown" className="absolute crown1 -top-45px -left-110px w-100px h-90px" />
                </span>
                <span className="text-center name-span mt-4 text-custom-30px font-extrabold">{players[0].name}</span>
                <span className="text-center score-span mt-3 mb-5 text-custom-30px font-extrabold">{players[0].score}</span>
              </li>
            )}

            {players[1] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 bg-silver top-three-item w-200px h-150px mt-110px border border-black tracking-1px" style={{ borderRadius: '15px 50px 50px 50px',backgroundColor: 'silver', position: 'relative' }}>
                <span className="font-bold relative text-center" style={{ minWidth: '70px' }}>
                  <img src={crownSilver} alt="Crown" className="absolute crown2 w-90% h-80px" style={{ top: '-45px', left: '-90px' }}/>
                </span>
                <span className="text-center txt2 name-span text-custom-30px font-extrabold">{players[1].name}</span>
                <span className="text-center txt2 score-span mt-0 mb-3 text-custom-30px font-extrabold">{players[1].score}</span>
              </li>
            )}
          </div>

          <div className="list w-[62%] text-white mx-auto max-h-[calc(100vh-500px)] overflow-y-auto mt-10">
            {players.slice(3).map((player, index) => (
              <li
                key={index + 3}
                className="flex justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 w-full my-5"
                style={{backgroundColor: '#4D2E13'}}
              >
                <span className="translucent-bg relative text-center font-bold text-[22px]">
                  #{index + 4}
                </span>
                <span className="text-center translucent-bg font-bold text-[22px]">{player.name}</span>
                <span className="text-center translucent-bg font-bold text-[22px]">{player.score}</span>
              </li>
            ))}
          </div>
        </ul>
        <button
          onClick={()=>setScreen("gameover")}
          className="font-postNoBills bg-[#DCC131] text-black px-12 py-2 text-3xl rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >
          Close
        </button>
      </div>

      {/* Div for smaller screens */}
      <div className="flex lg:hidden w-full max-w-[600px] items-center flex-col p-6 rounded-3xl shadow-lg out bg-contain bg-no-repeat bg-center box-border max-w-[100%] w-[100%] mx-auto min-h-screen bg-[calc(100%-1px)_calc(100%-1px)] bg-center bg-origin-content-box m-0 p-5">
        {/* Mobile version content */}
        <div className="flex items-center mt-0" style={{marginTop:'-8px'}}>  
        <img src={bird} alt="CodeChef Bird" className="mx-1 w-[70px] h-[70px] sm:w-[75px] sm:h-[75px]"/>
            <h2 className="font-bold p-3 text-center lead rounded-custom tracking-wider mt-0 text-[30px] sm:text-[40px] font-postNoBills" style={{backgroundColor: '#DCC131', padding: '2px 10px' }}>
                LEADERBOARD
            </h2>
            <img src={bird} alt="CodeChef Bird" className="transform scale-x-[-1] mx-1 w-[70px] h-[70px] sm:w-[75px] sm:h-[75px]"/>
        </div>

        <ul className="list-none p-0 w-full" style={{marginTop:'-10px'}}>
        <div className="flex justify-center gap-10">
            {players[0] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing" style={{backgroundColor: 'gold',width:'80%',marginTop:'35px',padding:'0px', position: 'relative'}}>
                <img src={crownGold} alt="Crown" className="absolute top-0 left-0 w-16 h-auto" style={{ transform: 'translate(-50%, -50%)', marginTop: '10px', marginLeft: '10px' }} />
            
                <span className="text-center name-span mt-4 text-custom-27px font-extrabold">{players[0].name}</span>
                <span className="text-center score-span mt-3 mb-5 text-custom-30px font-extrabold">{players[0].score}</span>
              </li>
            )}
          </div>

          <div className="flex justify-center gap-5" style={{marginTop:'-12px'}}>
            {players[2] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing" style={{backgroundColor: '#862220',width:'30%',marginTop:'65px',padding:'3px',color:'white', position: 'relative'}}>
                <img src={crownBronze} alt="Crown" className="absolute top-0 left-0 w-16 h-auto" style={{ transform: 'translate(-50%, -50%)', marginTop: '10px', marginLeft: '10px',width:'50px',top:'-10px',left:'-10px' }} />
              
                <span className="text-center name-span mt-4 text-custom-22px font-bold">{players[2].name}</span>
                <span className="text-center score-span mt-3 mb-5 text-custom-22px font-bold">{players[2].score}</span>
              </li>
            )}

            {players[1] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing" style={{backgroundColor: 'silver',width:'40%',marginTop:'45px',padding:'3px', position: 'relative'}}>
                <img src={crownSilver} alt="Crown" className="absolute top-0 left-0 w-16 h-auto" style={{ transform: 'translate(-50%, -50%)', marginTop: '10px', marginLeft: '10px',top:'-10px',left:'-10px' }} />
             
                <span className="text-center name-span mt-4 text-custom-27px font-bold">{players[1].name}</span>
                <span className="text-center score-span mt-3 mb-6 text-custom-27px font-bold">{players[1].score}</span>
              </li>
            )}
          </div>

          <div className="list w-[78%] text-white mx-auto max-h-[calc(100vh-450px)] overflow-y-auto mt-5">
            {players.slice(3).map((player, index) => (
              <li
                key={index + 3}
                className="flex justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 w-full"
                style={{backgroundColor: '#4D2E13'}}
              >
                <span className="translucent-bg relative text-center font-bold text-[20px]">
                  #{index + 4}
                </span>
                <span className="text-center translucent-bg font-bold text-[20px]">{player.name}</span>
                <span className="text-center translucent-bg font-bold text-[20px]">{player.score}</span>
              </li>
            ))}
          </div>
        </ul>
        <button
          onClick={()=>setScreen("gameover")}
          className="font-postNoBills bg-[#DCC131] text-black px-12 py-2 text-3xl rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >Close</button>
      </div>
    </div>
  );
};

export default LeaderBoard;