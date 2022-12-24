import { useState } from "react";
import Input from "../form/input/Input";

type DateRangeProps = {
  startDateLabel?: string;
  endDateLabel?: string;
  onChange?: Function;
};

const DateRange = ({
  startDateLabel = "",
  endDateLabel = "",
  onChange = (startDate: string, endDate: string) =>
    console.error("DateRange onChange not defined", startDate, endDate)
}: DateRangeProps) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const [startDate, setStartDate] = useState(
    firstDay.toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(lastDay.toISOString().slice(0, 10));

  const handleChange = (value: string, type: "end" | "start") => {
    if (type === "end") {
      setEndDate(value);
      onChange(startDate, endDate);
      return;
    }

    setStartDate(value);
    onChange(startDate, endDate);
  };

  return (
    <div className="flex flex-col md:flex-row pt-5 md:pt-0 justify-center items-center gap-5">
      <Input
        name={"start_date"}
        bgColor={"bg-white"}
        type={"date"}
        height={"h-10"}
        label={startDateLabel}
        value={startDate}
        onChange={(e: any) => handleChange(e.target.value, "start")}
      />
      <Input
        name={"end_date"}
        bgColor={"bg-white"}
        type={"date"}
        height={"h-10"}
        value={endDate}
        label={endDateLabel}
        onChange={(e: any) => handleChange(e.target.value, "end")}
      />
    </div>
  );
};

export default DateRange;
