import ComingSoon from 'components/organisms/ComingSoon';
import CreonPass from 'components/organisms/CreonPass';
import MainSection from 'components/organisms/MainSection';
import More from 'components/organisms/More';
import OurMission from 'components/organisms/OurMission';
import Profiting from 'components/organisms/Profiting';

export default function Home() {
  return (
    <>
      <MainSection />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <More />
    </>
  );
}
