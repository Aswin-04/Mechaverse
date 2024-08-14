// px-3 py-6 xxs:px-5 xxs:py-10 xs:px-6 xs:py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-11 lg:py-22 xl:px-12 xl:py-24 wide:px-14 wide-py-28
const CountdownCard = ({countdownValue, label}) => {
  return (
    <div className=" bg-card text-center backdrop-blur-md rounded-lg px-4 padding-y-countdown">
      <span className="h2 text-tc ">{countdownValue}</span>
      <br />
      <span className="text-[8px] xxs:text-[10px] xs:text-xs sm:text-sm md:text-base">{label}</span> 

    </div>
  )
}

export default CountdownCard

// py-6 xxs:py-10 xs:py-12 sm:py-16 md:py-20 lg:py-22 xl:py-24 wide-py-28