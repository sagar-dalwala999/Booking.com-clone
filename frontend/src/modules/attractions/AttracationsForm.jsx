import DatePicker from "react-datepicker";
import FormHeader from "../../components/form-header/FormHeader";
import { useState } from "react";

const AttracationsForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="bg-[#003b94] text-white">
      {/* Header */}
      <FormHeader
        title={"Up to 20% off attractions"}
        description={
          "Make exploring easy with discounts on top global attractions"
        }
      />

      {/* Form */}
      <div className="bg-white px-6 py-6 shadow-lg rounded-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pickup Location */}
        <div>
          <label
            htmlFor="pickup-location"
            className="block text-gray-600 mb-2"
          ></label>
          <input
            id="pickup-location"
            type="text"
            placeholder="Where are you going?"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label
            htmlFor="pickup-date"
            className="block text-gray-600 mb-2"
          ></label>
          <DatePicker
            selected={startDate}
            onChange={(update) => setDateRange(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={new Date()}
            monthsShown={2}
            placeholderText="Select your dates"
            className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            calendarClassName="shadow-lg bg-white text-black border border-gray-300 rounded-lg"
            wrapperClassName="w-full"
          />
        </div>

        {/* Search Button */}
        <div className="col-span-1 mt-2">
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

export default AttracationsForm;
