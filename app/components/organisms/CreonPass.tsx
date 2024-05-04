import CreonPassDetails from 'components/molecules/CreonPassDetails';
import CreonVideo from 'components/molecules/CreonVideo';
import Image from 'next/image';
import React from 'react';

function CreonPass() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-11 ">
        <CreonPassDetails />
        <div className="2xl:flex w-full hidden">
          <CreonVideo width={808} height={808} />
        </div>
      </div>
    </div>
  );
}

export default CreonPass;
