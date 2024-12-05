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
          <Button
            variant="text"
            className="mx-auto border border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-500"
          >
            Write a review
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="max-w-screen-sm">
          <div className="flex flex-col px-2">
            <p className="text-lg font-bookingBold">Review Score</p>
            <div className="flex gap-2 py-2">
              <p className="text-lg text-gray-700">8.1</p>
              <p className="text-lg text-gray-700">Very Good</p>
              <p className="text-lg text-gray-700">: 484 reviews</p>
            </div>
          </div>
          <div className="px-2">
            <button className="text-blue-800">Read all reviews</button>
          </div>
        </div>

        <div className="max-w-screen-sm">
          <p className="text-gray-700">
            Guest review summary This is an automated summary based on 58
            reviews from the past 12 months. Guests highlighted the
            accommodations excellent location near Lal Chowk and Dal Lake. The
            staff received praise for their friendliness and helpfulness.
            Breakfast was appreciated for its quality. Room comfort and
            cleanliness received mixed reviews, with some guests noting the need
            for improvements. Was this guest review summary helpful? Yes /No
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyReviews;
