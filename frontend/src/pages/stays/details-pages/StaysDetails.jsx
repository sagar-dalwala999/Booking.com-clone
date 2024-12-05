import { useLocation } from "react-router-dom";
import StaysForm from "../../../modules/stays/StaysForm";
import PropertyName from "../../../modules/details-page/PropertyName";
import PropertyImages from "../../../modules/details-page/PropertyImages";
import PropertyDescription from "../../../modules/details-page/PropertyDescription";
import PropertyAvalibility from "../../../modules/details-page/PropertyAvalibility";
import PropertyReviews from "../../../modules/details-page/PropertyReviews";
// import PropertyReservation from "../../../modules/details-page/PropertyReservation";

const StaysDetails = () => {
  const location = useLocation();
  const data = location.state;

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const openModal = (image) => {
  //   setSelectedImage(image);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="bg-gray-100 min-h-screen">
      <StaysForm data={data} />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Title Section */}
        <PropertyName data={data} />

        {/* Image Gallery */}
        <PropertyImages data={data} />

        {/* Modal for Image Preview */}
        {/* {isModalOpen && (
          <Modal onClose={closeModal}>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-w-3xl mx-auto"
            />
          </Modal>
        )} */}

        {/* Description and Amenities */}
        <PropertyDescription data={data} />

        {/* Availability */}
        <PropertyAvalibility data={data} />

        {/* Booking Section
        <PropertyReservation data={data} /> */}

        {/* Review Section */}
        <PropertyReviews data={data} />
      </div>
    </div>
  );
};

export default StaysDetails;
