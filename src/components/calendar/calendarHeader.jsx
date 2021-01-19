import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CalendarHeader = (props) => {
  return (
    <div className="CalendarHeader">
      <button>
        <MdChevronLeft />
      </button>
      <span>Jan 2021</span>
      <button>
        <MdChevronRight />
      </button>
    </div>
  );
};

export default CalendarHeader;
