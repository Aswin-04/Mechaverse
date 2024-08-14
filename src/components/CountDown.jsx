  import { useEffect, useState } from "react";
  import CountdownCard from "./CountdownCard";

  const CountDown = () => {
    const [expiryTime, setExpiryTime] = useState("18 sep 2024 09:30:00");
    const [countdownTime, setCountdownTime] = useState({
      countdownDays: "00",
      countdownHours: "00",
      countdownMinutes: "00",
      countdownSeconds: "00",
    });

    useEffect(() => {
      const countdownTimer = () => {
        const countdownDateTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = countdownDateTime - currentTime;

        if (remainingTime > 0) {
          const totalDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          const totalHours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const totalMinutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          const totalSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

          setCountdownTime({
            countdownDays: String(totalDays).padStart(2, "0"),
            countdownHours: String(totalHours).padStart(2, "0"),
            countdownMinutes: String(totalMinutes).padStart(2, "0"),
            countdownSeconds: String(totalSeconds).padStart(2, "0"),
          });
        } else {
          setCountdownTime({
            countdownDays: "00",
            countdownHours: "00",
            countdownMinutes: "00",
            countdownSeconds: "00",
          });
          clearInterval(timeInterval);
        }
      };

      const timeInterval = setInterval(countdownTimer, 1000);

      return () => clearInterval(timeInterval); // Cleanup interval on component unmount
    }, [expiryTime]); // Dependency array

    return (
      <>
        <CountdownCard label="Days   " countdownValue={countdownTime.countdownDays} />
        <CountdownCard label="Hours  " countdownValue={countdownTime.countdownHours} />
        <CountdownCard label="Minutes" countdownValue={countdownTime.countdownMinutes} />
        <CountdownCard label="Seconds" countdownValue={countdownTime.countdownSeconds} />
      </>
    );
  };

  export default CountDown;
