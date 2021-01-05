import Banner from './sections/Banner';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';
import Mision from './sections/Mision';
import Team from './sections/Team';
import Culture from './sections/Culture';

const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <Mision />
    <Team />
    <Culture />
  </>
);

export default index;
