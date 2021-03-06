import { useTheme } from '@material-ui/core';
import ShopOnlineBanner from '#Components/Banner';
import { bannerShopOnline } from '#constants/services/ShopOnline';
import { contactsLinks } from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();
  return (
    <ShopOnlineBanner
      backgroundImage={bannerShopOnline.backgroundImage}
      heightImage={bannerShopOnline.heightImage}
      titlePart1={bannerShopOnline.title}
      description={bannerShopOnline.description}
      image={bannerShopOnline.image}
      backgroundColor={palette.secondary.fade}
      hrefContactUs={contactsLinks.shopEcommercePage}
    />
  );
};

export default Banner;
