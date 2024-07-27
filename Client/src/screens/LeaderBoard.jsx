import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import bird from "/leaderBoard_bird.png";
import crownGold from "/leaderBoard_crown_r1.png";
import crownSilver from "/leaderBoard_crown_r2.png";
import crownBronze from "/leaderBoard_crown_r3.png";

const LeaderBoard = ({ stayAnonymous, isLoggedIn }) => {
  const navigate = useNavigate();
  const [playersData, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          "https://flappy-api.poseidon0z.com/api/gameusers"
        );
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="body leaderboard-bg m-0 p-0 overflow-x-hidden bg-cover bg-no-repeat lg:bg-[100%_100%] flex justify-center items-center min-h-screen w-full overflow-x-hidden">
      <div className="body leaderboard-bg m-0 p-0 overflow-x-visible hidden bg-cover bg-no-repeat lg:flex w-full max-w-[1200px] items-center flex-col p-6 rounded-3xl shadow-lg out bg-contain bg-no-repeat bg-center box-border max-w-[100%] w-[100%] mx-auto min-h-screen big">
        <div className="flex items-center t1 mt-[-30px]">
          <img
            src={bird}
            alt="CodeChef Bird"
            className="mx-10 w-[120px] h-[120px]"
          />
          <h2 className="text-2xl font-bold p-3 text-center lead mt-0 pl-2 rounded-custom text-custom-large tracking-wider mt-16 font-postNoBills bg-[#DCC131] pl-[80px] pr-[80px] pb-[23px] pt-[28px]">
            LEADERBOARD
          </h2>
          <img
            src={bird}
            alt="CodeChef Bird"
            className="transform scale-x-[-1] mx-10 w-[120px] h-[120px]"
          />
        </div>

        <ul className="list-none p-0 w-full">
          <div className="flex justify-center gap-20">
            {playersData[2] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 top-three-item r3 w-180px border border-black tracking-custom-spacing h-auto min-h-[150px] mt-130px rounded-[15px_50px_50px] bg-[#862220] relative over">
                <span className="font-bold relative text-center min-w-[70px]">
                  <img
                    src={crownBronze}
                    alt="Crown"
                    className="absolute crown3 h-80px top-[-45px] left-[-90px]"
                  />
                </span>
                <span className="text-center name-span text-[100%] font-extrabold text-white break-words w-full">
                  {playersData[2].username}
                </span>
                <span className="text-center txt3 score-span mb-4 text-custom-27px font-extrabold text-white">
                  {playersData[2].score}
                </span>
              </li>
            )}

            {playersData[0] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 top-three-item w-custom-width rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl mt-custom-margin-top border border-black tracking-custom-spacing bg-[gold] relative h-auto min-h-[170px]">
                <span className="font-bold txt1 relative text-center min-w-[80px]">
                  <img
                    src={crownGold}
                    alt="Crown"
                    className="absolute crown1 -top-45px -left-110px w-100px h-90px"
                  />
                </span>
                <span className="text-center name-span mt-4 text-custom-30px font-extrabold break-words w-full">
                  {playersData[0].username}
                </span>
                <span className="text-center score-span mt-3 mb-5 text-custom-30px font-extrabold">
                  {playersData[0].score}
                </span>
              </li>
            )}

            {playersData[1] && (
              <li className="flex flex-col items-center justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 bg-silver top-three-item w-200px h-auto min-h-[170px] mt-110px border border-black tracking-1px bg-[silver] relative rounded-[15px_50px_50px_50px]">
                <span className="font-bold relative text-center min-w-[70px]">
                  <img
                    src={crownSilver}
                    alt="Crown"
                    className="absolute crown2 w-90% h-80px top-[-45px] left-[-90px]"
                  />
                </span>
                <span className="text-center txt2 name-span text-custom-27px font-extrabold break-words w-full mt-2">
                  {playersData[1].username}
                </span>
                <span className="text-center txt2 score-span mt-2 mb-3 text-custom-27px font-extrabold">
                  {playersData[1].score}
                </span>
              </li>
            )}
          </div>

          <div className="list w-[62%] lg:w-[75%] text-white mx-auto max-h-[calc(100vh-500px)] overflow-y-auto mt-10">
            {playersData.slice(3).map((player, index) => (
              <li
                key={index + 3}
                className="bg-[#4D2E13] flex justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 w-full my-5"
              >
                <span className="translucent-bg relative text-center font-bold text-[22px]">
                  #{index + 4}
                </span>
                <span className="text-center translucent-bg font-bold text-[22px] name-span max-w-[40%]">
                  {player.username}
                </span>
                <span className="text-center translucent-bg font-bold text-[22px]">
                  {player.score}
                </span>
              </li>
            ))}
          </div>
        </ul>
        <button
          onClick={() => navigate("/play")}
          className="font-postNoBills bg-[#DCC131] text-black px-12 py-2 text-3xl rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >
          Close
        </button>
      </div>

      <div className="flex lg:hidden w-full max-w-[600px] items-center flex-col p-6 rounded-3xl shadow-lg out bg-contain bg-no-repeat bg-center box-border max-w-[100%] w-[100%] mx-auto min-h-screen bg-[calc(100%-1px)_calc(100%-1px)] bg-center bg-origin-content-box m-0 p-5">
        <div className="flex items-center mt-[-8px]">
          <img
            src={bird}
            alt="CodeChef Bird"
            className="mx-1 w-[70px] h-[70px] sm:w-[75px] sm:h-[75px]"
          />
          <h2 className="font-bold p-3 text-center lead rounded-custom tracking-wider mt-0 text-[30px] sm:text-[40px] font-postNoBills bg-[#DCC131] py-[2px] px-[10px]">
            LEADERBOARD
          </h2>
          <img
            src={bird}
            alt="CodeChef Bird"
            className="transform scale-x-[-1] mx-1 w-[70px] h-[70px] sm:w-[75px] sm:h-[75px]"
          />
        </div>

        <ul className="list-none p-0 w-full mt[-10px]">
          <div className="flex justify-center gap-10">
            {playersData[0] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing bg-[gold] w-[80%] mt-[35px] p-0 relative">
                <img
                  src={crownGold}
                  alt="Crown"
                  className="absolute top-0 left-0 w-16 h-auto translate-x-[-50%] translate-y-[-50%] mt-[10px] ml-[10px]"
                />

                <span className="text-center name-span mt-4 text-custom-27px font-extrabold w-full px-2">
                  {playersData[0].username}
                </span>
                <span className="text-center score-span mt-3 mb-5 text-custom-30px font-extrabold">
                  {playersData[0].score}
                </span>
              </li>
            )}
          </div>

          <div className="flex justify-center gap-5 mt-[-12px]">
            {playersData[2] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing bg-[#862220] w-[30%] mt-[65px] p-[3px] text-white relative">
                <img
                  src={crownBronze}
                  alt="Crown"
                  className="absolute top-0 left-0 w-16 h-auto translate-x-[-50%] translate-y-[-50%] mt-[10px] ml-[10px] w-[50px] top-[-10px] left-[-10px]"
                />

                <span className="text-center name-span mt-4 text-custom-22px font-bold w-full px-1">
                  {playersData[2].username}
                </span>
                <span className="text-center score-span mt-3 mb-5 text-custom-22px font-bold">
                  {playersData[2].score}
                </span>
              </li>
            )}

            {playersData[1] && (
              <li className="flex flex-col items-center justify-between border-b last:border-b-0 rounded-3xl top-three-item rounded-tl-custom-tl rounded-br-custom-br-tr rounded-tr-custom-br-tr rounded-bl-custom-bl border border-black tracking-custom-spacing bg-[silver] w-[40%] mt-[45px] p-[3px] relative">
                <img
                  src={crownSilver}
                  alt="Crown"
                  className="absolute top-0 left-0 w-16 h-auto translate-x-[-50%] translate-y-[-50%] mt-[10px] ml-[10px] top-[-10px] left-[-10px]"
                />

                <span className="text-center name-span mt-4 text-custom-27px font-bold w-full px-2">
                  {playersData[1].username}
                </span>
                <span className="text-center score-span mt-3 mb-6 text-custom-27px font-bold">
                  {playersData[1].score}
                </span>
              </li>
            )}
          </div>

          <div className="list w-[76%] text-white mx-auto max-h-[calc(100vh-450px)] overflow-y-auto mt-5">
            {playersData.slice(3).map((player, index) => (
              <li
                key={index + 3}
                className="bg-[#4D2E13] flex justify-between py-2 border-b last:border-b-0 rounded-3xl px-6 mb-4 w-full"
              >
                <span className="translucent-bg relative text-center font-bold text-[20px]">
                  #{index + 4}
                </span>
                <span className="text-center translucent-bg font-bold text-[20px] name-span max-w-[40%]">
                  {player.username}
                </span>
                <span className="text-center translucent-bg font-bold text-[20px]">
                  {player.score}
                </span>
              </li>
            ))}
          </div>
        </ul>
        <button
          onClick={() => navigate("/play")}
          className="font-postNoBills bg-[#DCC131] text-black px-12 py-2 text-3xl rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;