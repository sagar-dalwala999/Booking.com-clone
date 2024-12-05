import { Button } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
const PropertyReviews = ({ data }) => {
  console.log(data);
  return (
    <div>
      <hr className="border-t border-gray-300 my-16" />
      <div className="bg-gray-100 py-8 mt-14 flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews </h2>
        <div>
          <Button variant="text" className="mx-auto border border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-500">
            Write a review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyReviews;
