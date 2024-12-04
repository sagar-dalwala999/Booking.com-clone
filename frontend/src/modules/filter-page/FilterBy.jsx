import {  Checkbox } from "@material-tailwind/react";
import { useState } from "react";
// import FilterByMobileView from "./FilterByMobileView";

// eslint-disable-next-line react/prop-types
const FilterBy = ({ isDrawerOpen, setIsDrawerOpen }) => {
  // Min and max price constants
  const minPrice = 2000;
  const maxPrice = 40000;

  const [showMoreFilters, setShowMoreFilters] = useState({});

  const [minSliderValue, setMinSliderValue] = useState(0); // Slider value for min price

  // Calculate price based on slider value
  const calculatePrice = (value) => {
    return minPrice + (value / 100) * (maxPrice - minPrice);
  };

  const minPriceValue = calculatePrice(minSliderValue);

  // Toggle "Show More" for a filter category
  const toggleShowMore = (category) => {
    setShowMoreFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Filter categories
  const filterCategories = {
    "Popular Filters": [
      "Sea view",
      "Free cancellation",
      "No prepayment",
      "Breakfast included",
      "Balcony",
      "Kitchen/kitchenette",
    ],
    Meals: ["Self catering", "Breakfast included", "All meals included"],
    Facilities: [
      "Parking",
      "Restaurant",
      "Pet allowed",
      "Room service",
      "24-hour front desk",
      "Fitness center",
      "Non-smoking rooms",
      "Airport shuttle",
      "Family rooms",
      "Spa and wellness center",
      "Free WiFi",
      "Electric vehicle charging",
      "Wheelchair accessible",
      "Swimming pool",
    ],
    "Property Type": ["Hotel", "Apartment", "Villa", "Hostel"],
    "Reviews Score": [
      "Excellent 4.5+",
      "Very Good 4+",
      "Good 3+",
      "Pleasant 2+",
    ],
    "Bed Preferences": ["Twin beds", "Double bed"],
  };

  return (
    <>
      {/* <div className="max-w-screen-xl mx-auto px-4"> */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar for Filters */}
        <aside className="w-full lg:w-[300px] bg-white rounded-lg border shadow-md p-4 space-y-6 my-6 hidden lg:block">
          <h2 className="font-bold text-lg mb-4">Filter by:</h2>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-2">Your Budget (per night)</h3>
            <div className="flex items-center gap-4">
              <input
                id="default-range"
                type="range"
                name="min-price"
                min={0}
                max={100}
                step={5}
                value={minSliderValue}
                onChange={(e) => setMinSliderValue(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              ₹{Math.round(minPriceValue)}
            </p>
          </div>

          {/* Filters */}
          {Object.entries(filterCategories).map(([category, filters]) => (
            <div key={category} className="flex flex-col">
              <h3 className="font-semibold">{category}</h3>
              {filters
                .slice(0, showMoreFilters[category] ? filters.length : 4)
                .map((label) => (
                  <Checkbox
                    key={label}
                    label={label}
                    color={"blue"}
                    className="h-5 w-5 "
                  />
                ))}
              {filters.length > 4 && (
                <button
                  onClick={() => toggleShowMore(category)}
                  className="text-blue-500 text-sm mt-2 hover:underline border p-2"
                >
                  {showMoreFilters[category] ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
      </div>
      {/* </div> */}

      {/* Drawer for Mobile/Tablet */}
      {/* <FilterByMobileView isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} /> */}
    </>
  );
};

export default FilterBy;
