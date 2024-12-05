import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const AirportTaxisForm = () => {
  const passengerOptions = Array.from({ length: 16 }, (_, i) => i + 1);
  const [tripType, setTripType] = useState("one-way");
  const [pickupDate, setPickupDate] = useState(null); // State for pickup date

  return (
    <div className="bg-gray-100 font-booking pb-8">
      {/* Header */}
      <div className="flex flex-col p-8 md:p-12 w-full max-w-screen-xl mx-auto font-booking">
        <h1 className="text-xl md:text-3xl font-bookingBold">{`Book your airport taxi`}</h1>
        <h3 className="text-md md:text-lg mt-2 mb-8">
          {`Easy airport transfers to and from your accommodation`}
        </h3>

        {/* Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-screen-xl mx-auto">
          {/* Trip Type */}
          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
                className="accent-[#003b94]"
              />
              <span className="text-black">One-way</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="return"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
                className="accent-[#003b94]"
              />
              <span className="text-black">Return</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
            {/* Pickup Location - From */}
            <div className="col-span-2">
              <input
                id="from"
                type="text"
                placeholder="Enter pickup location"
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Destination - To */}
            <div className="col-span-2">
              <input
                id="to"
                type="text"
                placeholder="Enter destination"
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Date */}
            <div>
              <DatePicker
                selected={pickupDate} // Set the selected date
                onChange={(date) => setPickupDate(date)} // Update state when a date is selected
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                placeholderText="Select pickup date"
                wrapperClassName="w-full"
              />
            </div>

            {/* Time */}
            <div>
              <input
                id="time"
                type="time"
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Number of Passengers */}
            <div>
              <select
                label="Number of passengers"
                className="text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003b94] w-full p-3 rounded-lg"
              >
                {passengerOptions.map((num) => (
                  <option key={num} value={num} className="text-black">
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Return Date (if Return trip is selected) */}
            {tripType === "return" && (
              <>
                <div className="col-span-2">
                  <input
                    id="from"
                    type="text"
                    placeholder="Enter pickup location"
                    className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                  />
                </div>

                <div className="col-span-2">
                  <input
                    id="to"
                    type="text"
                    placeholder="Enter destination"
                    className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                  />
                </div>

                <div>
                  <DatePicker
                    selected={pickupDate} // Set the selected date
                    onChange={(date) => setPickupDate(date)} // Update state when a date is selected
                    className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                    placeholderText="Select pickup date"
                    wrapperClassName="w-full"
                  />
                </div>

                <div>
                  <input
                    id="time"
                    type="time"
                    className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                  />
                </div>

                <div>
                  <select
                    label="Number of passengers"
                    className="text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003b94] w-full p-3 rounded-lg"
                  >
                    {passengerOptions.map((num) => (
                      <option key={num} value={num} className="text-black">
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Search */}
            <div className="col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="p-3 bg-[#003b94] text-white rounded-lg w-full hover:bg-[#002a6b] focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisForm;
