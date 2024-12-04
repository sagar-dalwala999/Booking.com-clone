/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ListAndGridView from "./ListAndGridView";
import { LuArrowDownUp } from "react-icons/lu";

const FilterData = ({ view, setView, data, setIsDrawerOpen }) => {
  const mockData = [
    {
      id: 1,
      name: "WelcomHeritage Panjim Inn",
      price: 7000,
      rating: 8.1,
      type: "Hotel",
      location: "Fontainhas, Panaji",
      amenities: ["Breakfast included", "Free cancellation", "Free Wi-Fi"],
      description: "Only 1 room left at this price on our site.",
      image: "https://via.placeholder.com/400x300?text=Krakow",
    },
    {
      id: 2,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      type: "Hotel",
      location: "Anjuna, Goa",
      amenities: ["Breakfast included", "Free cancellation", "Sea view"],
      description: "Limited-time Deal, Only 5 rooms left.",
      image: "https://via.placeholder.com/400x300?text=Krakow",
    },
    {
      id: 3,
      name: "Luxury Villa Goa",
      price: 18000,
      rating: 9.2,
      type: "Villa",
      location: "Vagator, Goa",
      amenities: ["Private Pool", "Beachfront", "Free Wi-Fi"],
      description: "Luxurious stay with private beach access.",
      image: "https://via.placeholder.com/400x300?text=Krakow",
    },
    {
      id: 4,
      name: "Cozy Beachfront Apartment",
      price: 12000,
      rating: 8.5,
      type: "Apartment",
      location: "Calangute, Goa",
      amenities: ["Ocean view", "Self-catering", "Air conditioning"],
      description: "Perfect for a relaxing beach holiday.",
      image: "https://via.placeholder.com/400x300?text=Krakow",
    },
  ];

  const [filteredData, setFilteredData] = useState(mockData);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    const sortedData = [...mockData].sort((a, b) => {
      if (sortValue === "priceLowHigh") return a.price - b.price;
      if (sortValue === "priceHighLow") return b.price - a.price;
      if (sortValue === "rating") return b.rating - a.rating;
      return 0;
    });

    setFilteredData(sortedData);
  };

  return (
    <main className="w-full lg:w-3/4 p-4 space-y-4">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          <strong>{filteredData.length}</strong> properties found in{" "}
          {data?.destination || "your search location"}
        </p>
        {/* List/Grid View */}
        <ListAndGridView view={view} setView={setView} />
      </div>

      {/* Sort By Menu (Responsive Fixed Position) */}
      <div className="flex justify-end lg:fixed lg:bottom-4 lg:w-3/4">
        <Menu>
          <MenuHandler>
            <Button
              variant="outlined"
              className="rounded-full border border-gray-600 p-2 flex gap-2 items-center shadow-md text-gray-600"
            >
              <LuArrowDownUp className="w-5 h-5" /> Sort by:{" "}
              {sortOption || "Price"}
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              onClick={() =>
                handleSortChange({ target: { value: "priceLowHigh" } })
              }
            >
              Price: Low to High
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleSortChange({ target: { value: "priceHighLow" } })
              }
            >
              Price: High to Low
            </MenuItem>
            <MenuItem
              onClick={() => handleSortChange({ target: { value: "rating" } })}
            >
              Rating
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Mock Data Display */}
      <div
        className={`grid ${
          view === "list"
            ? "grid-cols-1" // For list view, only one column
            : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grid for larger screens (3 columns)
        } gap-4`}
      >
        {filteredData.map((property) => (
          <div
            key={property.id}
            className={`flex flex-col ${
              view === "grid" ? "lg:flex-col" : "lg:flex-row p-4"
            } border rounded-lg shadow-md bg-white`}
          >
            {/* Image Section (Grid: Above, List: Left) */}
            <div
              className={`relative w-full ${
                view === "grid" ? "h-auto" : "lg:w-auto lg:h-auto"
              } lg:mr-4`}
            >
              <img
                src={property.image}
                alt={property.name}
                className={`w-full h-full object-cover ${
                  view === "grid" ? "rounded-t-lg" : "rounded-lg"
                } `}
              />
              <IconButton
                variant="filled"
                color="red"
                className="absolute top-2 right-2 rounded-full p-2"
              >
                <AiOutlineHeart className="w-5 h-5" />
              </IconButton>
            </div>

            {/* Details Section (For grid, at the bottom, for list view, to the right) */}
            <div
              className={`flex flex-col justify-between w-full ${
                view === "grid" ? "lg:mt-4 p-4" : ""
              }`}
            >
              <div>
                <h3 className="font-semibold text-xl">{property.name}</h3>
                <p className="text-gray-600 text-sm">{property.location}</p>
                <p className="text-gray-800 font-semibold mt-2">
                  ₹{property.price} per night
                </p>
                <p className="text-yellow-500 mt-1">
                  Rating: {property.rating}
                </p>
                <p className="text-gray-500 mt-1">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold">Amenities:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>• {amenity}</li>
                  ))}
                </ul>
              </div>

              {/* Book Now Button */}
              <Button variant="filled" color="blue" className="mt-4" fullWidth>
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FilterData;
