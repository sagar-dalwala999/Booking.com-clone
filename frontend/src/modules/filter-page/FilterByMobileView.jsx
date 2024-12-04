import { Drawer } from "@material-tailwind/react";
import FilterBy from "./FilterBy";

// eslint-disable-next-line react/prop-types
const FilterByMobileView = ({ isDrawerOpen, onClose }) => {
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => onClose(false)}
      placement="bottom"
      className="p-4 w-full h-auto"
    >
      <FilterBy />
    </Drawer>
  );
};

export default FilterByMobileView;
