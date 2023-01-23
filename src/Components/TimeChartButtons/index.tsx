import React from "react";
import { Box } from "../Box";

const timeRange = [1, 7, 30, 180, 360];
interface IProp {
  time: number;
  setTime(day: number): void;
}

const TimeChartButtons: React.FC<IProp> = ({ setTime, time }) => {
  return (
    <Box as="ul" m="-5px" display="flex" justifyContent="center">
      {timeRange.map((day) => (
        <Box as="li" m="5px" key={day}>
          <button
            type="button"
            style={{
              color: "white",
              outline: "none",
              backgroundColor:
                day === time ? "rgb(53, 162, 235)" : "rgba(170, 216, 247, 0.5)",
            }}
            onClick={() => {
              setTime(day);
            }}
          >
            {day}
            {day === 1 ? " Day" : " Days"}
          </button>
        </Box>
      ))}
    </Box>
  );
};
export default TimeChartButtons;
