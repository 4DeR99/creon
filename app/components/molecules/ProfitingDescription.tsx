import React from 'react';
import SmallTitle from 'components/atoms/SmallTitle';

function ProfitingDescription() {
  const title = 'The dynamic community driven business model of the future.';
  const body =
    'At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.';

  return (
    <div className="flex flex-col grow justify-center gap-7">
      <SmallTitle title={title} className="" />
      <p className="font-satoshi text-[18px] leading-[1.3]">{body}</p>
    </div>
  );
}

export default ProfitingDescription;
