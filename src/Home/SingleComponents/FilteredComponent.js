import React from "react";
import { FilteredContainer } from "../../StyleComponent";
import DogProducts from './DogProducts'

const FilteredComponent = ({ dogs }) => {
  return (
    <div>
      <FilteredContainer>
        {dogs.map(dog => (
          <DogProducts key={dog._id} pet={dog} />
        ))}
      </FilteredContainer>
    </div>
  );
};

export default FilteredComponent;
