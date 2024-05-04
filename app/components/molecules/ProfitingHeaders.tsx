import LargeTitle from 'components/atoms/LargeTitle';
import MediumTitle from 'components/atoms/MediumTitle';
import React from 'react';

function ProfitingHeaders() {
  return (
    <div className="flex flex-col w-full mt-[6vh] gap-5">
      <LargeTitle title="Profiting Through" />
      <MediumTitle
        title="AI Innovation & Decentralization"
        className="ml-auto bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
}

export default ProfitingHeaders;
