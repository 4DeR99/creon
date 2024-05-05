import ComingSoon from 'components/organisms/ComingSoon';
import CreonPass from 'components/organisms/CreonPass';
import MainSection from 'components/organisms/MainSection';
import OurMission from 'components/organisms/OurMission';
import Profiting from 'components/organisms/Profiting';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <MainSection />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
    </>
  );
}
