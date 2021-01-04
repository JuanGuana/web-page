import Banner from './sections/Banner';
import OnlineSolution from './sections/OnlineSolution';
import Services from './sections/Services';
import PartnershipModel from './sections/PartnershipModel';
import SliderClients from './sections/SliderClients';
import CarryOutThatProject from './sections/CarryOutThatProject';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';
import Mision from './sections/Mision';


const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <Mision />
    
    <OnlineSolution />
    <Services />
    <PartnershipModel />
    <SliderClients />
    <CarryOutThatProject />
    <Questions />
  </>
);

export default index;