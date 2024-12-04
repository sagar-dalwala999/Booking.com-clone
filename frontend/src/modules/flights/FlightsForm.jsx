import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormHeader from "../../components/form-header/FormHeader";

const FlightsForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGuestsToggle = () => setIsGuestsOpen(!isGuestsOpen);
  const handleGuestsClose = () => setIsGuestsOpen(false);

  return (
    <div className="bg-[#003b94] text-white">
      {/* Header */}
      <FormHeader
        title={"Find your next flight"}
        description={"Search low prices on flights, hotels, and much more..."}
      />

      <div className="bg-white px-6 py-2 shadow-lg rounded-t-lg border border-b-2 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Radio Buttons for Round Trip or One Way */}
        <div className="md:col-span-4 flex items-center">
          <label htmlFor="roundtrip" className="text-gray-600 cursor-pointer">
            <input name="trip" id="roundtrip" type="radio" className="me-2" />
            Round Trip
          </label>
          <label
            htmlFor="singletrip"
            className="text-gray-600 cursor-pointer ms-4"
          >
            <input name="trip" id="singletrip" type="radio" className="me-2" />
            One Way
          </label>
        </div>

        {/* Dropdown for flight class */}
        <div>
          <select
            id="flightclass"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          >
            <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
          </select>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white px-6 py-6 shadow-lg rounded-b-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Destination - From */}
        <div>
          <input
            id="from"
            type="text"
            placeholder="Where from?"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Destination - To */}
        <div>
          <input
            id="to"
            type="text"
            placeholder="Where to?"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Dates */}
        <div className="relative">
          {isMobile ? (
            <>
              {/* Check-in Date */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setDateRange([date, endDate])}
                minDate={new Date()}
                placeholderText="Check-in Date"
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                wrapperClassName="mt-2 w-full"
              />

              {/* Check-out Date */}
              <DatePicker
                selected={endDate}
                onChange={(date) => setDateRange([startDate, date])}
                minDate={startDate || new Date()}
                placeholderText="Check-out Date"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                wrapperClassName="mt-2 w-full"
              />
            </>
          ) : (
            <DatePicker
              selected={startDate}
              onChange={(update) => setDateRange(update)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              minDate={new Date()}
              monthsShown={2}
              placeholderText="Check-in-Date -- Check-out-Date"
              className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              calendarClassName="shadow-lg bg-white text-black border border-gray-300 rounded-lg"
              wrapperClassName="w-full"
              //! set that in all the form page where i have use the DatePicker.
            />
          )}
        </div>

        {/* Guests & Rooms */}
        <div className="relative">
          <button
            className="p-3 border border-gray-300 rounded-lg flex justify-between items-center w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            onClick={handleGuestsToggle}
          >
            {`${adults} Adults, ${children} Children`}
            <svg
              className="h-5 w-5 ml-2 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isGuestsOpen && (
            <div
              className="absolute z-10 p-4 bg-white shadow-lg rounded-md mt-2 text-black w-full"
              onMouseLeave={handleGuestsClose}
            >
              <div className="mb-4">
                <label htmlFor="adults" className="text-sm">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  value={adults}
                  min="1"
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="children" className="text-sm">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  value={children}
                  min="0"
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div>
          <button
            type="submit"
            className="p-3 bg-[#003b94] text-white rounded-lg w-full hover:bg-[#002a6b] focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsForm;
