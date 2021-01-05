import CultureSection from '../components/Culture';
import { cultureOptions } from '#app/constants/aboutUs';

const Mision = () => (
  <CultureSection
    titlePart1={cultureOptions.title}
    options={cultureOptions.options}
    heightImage={cultureOptions.heightImage}
    backgroundImage={cultureOptions.backgroundImage}
  />
);

export default Mision;
