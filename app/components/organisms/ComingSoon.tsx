import React from 'react';
import ComingSoonItem, {
  ComingSoonItemProps,
} from 'components/molecules/ComingSoonItem';

function ComingSoon() {
  const soonToCome: ComingSoonItemProps[] = [
    {
      mediumTitle: 'Token',
      smallTitle: 'The Gateway token to the world of AI',
      description:
        'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
      image: '/images/token.svg',
    },
    {
      mediumTitle: 'Revenue',
      smallTitle: 'Driving income and growth through decentralization',
      description:
        'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
      image: '/images/revenue.svg',
    },
    {
      mediumTitle: 'Launchpad',
      smallTitle: 'Driving the future of AI Innovation',
      description:
        'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
      image: '/images/launchpad.svg',
    },
  ];
  return (
    <div className="min-h-screen flex flex-wrap gap-10 items-center justify-center py-[150px]">
      {soonToCome.map((item, index) => (
        <ComingSoonItem
          key={index}
          mediumTitle={item.mediumTitle}
          smallTitle={item.smallTitle}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ComingSoon;
