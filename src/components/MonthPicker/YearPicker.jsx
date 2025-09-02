/** @jsxImportSource @emotion/react */
import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

function YearPicker({ value = dayjs().format("YYYY"), onChange }) {
  const [internalValue, setInternalValue] = useState(dayjs(value));

  const handleChange = (newValue) => {
    if (!newValue) return;

    setInternalValue(newValue);

    if (onChange) {
      onChange(newValue.format("YYYY"));
    }
  };

  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year"]}
        value={internalValue}
        onChange={handleChange}
        minDate={today.subtract(5, "year")}
        maxDate={today.add(5, "year")}
        slotProps={{
          textField: {
            size: "small",
            sx: {
              "& .MuiOutlinedInput-root": {
                height: "50px",
                width: "200px",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                border: "1px solid #e5e5e5",
                transition: "all 0.2s ease-in-out",

                "& input": {
                  color: "#222",
                  fontSize: "14px",
                },

                "& fieldset": {
                  border: "none",
                },

                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },

                "&.Mui-focused": {
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #c9c9c9",
                  boxShadow: "inset 0 0 0 1px #c9c9c9",
                },
              },

              "& .MuiInputLabel-root": {
                color: "#888",
                fontSize: "13px",
              },
              "& .Mui-focused.MuiInputLabel-root": {
                color: "#555",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default YearPicker;
