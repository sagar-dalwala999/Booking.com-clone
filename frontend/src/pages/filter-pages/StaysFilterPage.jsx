import { useLocation } from "react-router-dom";
import StaysForm from "../../modules/stays/StaysForm";
import FilterBy from "../../modules/filter-page/FilterBy";
import { useState } from "react";
import FilterData from "../../modules/filter-page/FilterData";

const StaysFilterPage = () => {
  const location = useLocation();
  const data = location.state;

  const [view, setView] = useState("list");
  // State for drawer, price range, and "Show More" functionality
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <StaysForm data={data} />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <FilterBy
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <FilterData
            view={view}
            setView={setView}
            data={data}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default StaysFilterPage;
