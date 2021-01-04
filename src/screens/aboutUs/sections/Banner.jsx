import { useTheme } from '@material-ui/core';
import AbautUsBanner from '../components/Banner';
import { bannerAboutUs } from '#constants/aboutUs';
import { contactsLinks } from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();

  return (
    <AbautUsBanner
      backgroundImage={bannerAboutUs.backgroundImage}
      heightImage={bannerAboutUs.heightImage}
      title={bannerAboutUs.title}
      description={bannerAboutUs.description}
      image={bannerAboutUs.image}
      backgroundColor={palette.primary.fade}
      hrefContactUs={contactsLinks.seoPage}
      buttonColor={bannerAboutUs.buttonColor}
    />
  );
};

export default Banner;
