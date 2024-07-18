

export default function CountDown(props){
    return(<>
        {!props.gameStarted && <div className="absolute w-full h-full font-postNoBills font-bold tracking-[3px] flex flex-col  align-middle bg-black bg-opacity-65">    
        <div className="bg-transparent flex flex-col align-middle justify-center mt-[30%] sm:mt-[10%] ">
        <h1 className="text-[#DCC131] text-[70px] md:text-[90px] countdown-text flex flex-col sm:flex-row align-middle justify-center ">
        <h1 className="flex align-middle justify-center">   Get ready to</h1> <h1 className="flex align-middle justify-center sm:ml-4 ">flap in</h1></h1>
        <h1 className="text-[#DCC131] text-[70px] md:text-[90px] countdown-text m-auto">{props.count}</h1></div>
        </div>}

    </>)
}