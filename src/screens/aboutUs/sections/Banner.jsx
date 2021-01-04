import { useTheme } from '@material-ui/core';
import AbautUsBanner from '#Components/Banner';
import { bannerAboutUs } from '#constants/aboutUs';
import { contactsLinks } from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();

  return (
    <AbautUsBanner
      backgroundImage={bannerAboutUs.backgroundImage}
      heightImage={bannerAboutUs.heightImage}
      titlePart2={bannerAboutUs.title}
      description={bannerAboutUs.description}
      image={bannerAboutUs.image}
      backgroundColor={palette.secondary.gray}
      hrefContactUs={contactsLinks.general}
      buttonColor={bannerAboutUs.buttonColor}
    />
  );
};

export default Banner;
