import Banner from './sections/Banner';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';
import Mision from './sections/Mision';
import Team from './sections/Team';

const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <Mision />
    <Team />
  </>
);

export default index;
