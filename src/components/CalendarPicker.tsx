"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarPickerProps {
  onSelect: (date: Date) => void;
  onCancel: () => void;
  selectedDate?: Date;
}

const CalendarPicker = ({
  onSelect,
  onCancel,
  selectedDate,
}: CalendarPickerProps) => {
  const [tempDate, setTempDate] = useState<Date | undefined>(selectedDate);

  return (
    <div className="absolute bg-white border border-[#EAECF0] rounded-2xl shadow-lg p-4 w-[340px] font-inter">
      {/* Calendar */}
      <DayPicker
        mode="single"
        selected={tempDate}
        onSelect={setTempDate}
        fromYear={2020}
        toYear={2030}
        captionLayout="dropdown-buttons"
        showOutsideDays
        classNames={{
          months: "flex flex-col items-center",
          caption:
            "flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-800",
          caption_label: "text-gray-900 font-medium text-base",
          nav: "flex items-center gap-2",
          nav_button:
            "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700",
          table: "w-full border-collapse table-fixed text-center text-sm",
          head_row: "text-gray-500 text-xs font-medium",
          head_cell: "py-2 w-10",
          row: "",
          day: "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100 cursor-pointer transition-all",
          day_selected:
            "bg-[#101928] text-white hover:bg-[#101928] rounded-lg font-semibold",
          day_today: "border border-[#101928] text-[#101928] font-semibold",
          day_outside: "text-gray-300",
        }}
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4 border-t border-gray-200 pt-3">
        <button
          className="text-gray-500 text-sm font-medium hover:text-gray-700"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-[#101928] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90"
          onClick={() => tempDate && onSelect(tempDate)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CalendarPicker;
