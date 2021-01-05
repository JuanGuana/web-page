import MisionSection from '../components/Mision';
import { optionmisionTypes } from '#app/constants/aboutUs';

const Mision = () => (
  <MisionSection
    imageSizes={optionmisionTypes.imageSizes}
    options={optionmisionTypes.misionTypes}
  />
);

export default Mision;
