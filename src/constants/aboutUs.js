export const bannerAboutUs = {
  backgroundImage: '/assets/images/figures/shopOnline/bloque1.png',
  heightImage: 660,
  title: '¿Quiénes somos?',
  description: 'Conoce un poco sobre InitGrammers',
  image: '/assets/images/equipo-de-desarrollo.png',
  buttonColor: 'primary',
};

const misionTypes = [
  {
    path: '/assets/images/mision.svg',
    title: 'Misión',
    description:
      'Brindar soluciones de alto impacto mediante el uso de la tecnología.',
  },
  {
    path: '/assets/images/vision.svg',
    title: 'Visión',
    description:
      'Ser un referente de innovación de Latinoamérica que impulse el desarrollo tecnológico del mundo',
  },
];

export const optionmisionTypes = {
  imageSizes: {
    xs: {
      width: 288,
      height: 283,
    },
    sm: {
      width: 414,
      height: 386,
    },
    md: {
      width: 414,
      height: 386,
    },
    lg: {
      width: 582,
      height: 542,
    },
  },
  misionTypes,
};




















export const onlineSolution = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque2.png',
  heightImage: 628,
  title: 'Encuentra la solución en línea',
  description:
    'Fusionamos el diseño y el desarrollo en cada uno de los proyectos. Nuestro trabajo es asesorarte en todo el proceso para que puedas elegir la mejor opción para llevar a cabo esa idea que tienes en mente. A través de la tecnología te ayudamos a cumplir tus objetivos con un trabajo a tiempo y orientado a resultados.',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839438/LandingPage/solucion-en-linea.png',
  titlePrimaryMain: true,
  descriptionBlack: true,
  imageSizes: {
    xs: {
      width: 288,
      height: 308,
    },
    sm: {
      width: 412,
      height: 442,
    },
    md: {
      width: 544,
      height: 539,
    },
    lg: {
      width: 504,
      height: 500,
    },
  },
  isImageRight: true,
};

const partnershipModels = [
  {
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/proyecto-precio-fijo.png',
    title: 'Proyecto a precio fijo',
    description:
      'Sin cargos ocultos u adicionales, una vez que se ha firmado un contrato con precio definido. ',
  },
  {
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/extension-de-tu-equipo.png',
    title: 'Extensión de tu equipo',
    description:
      'Te ayudamos a no perder oportunidades y aprovechar el potencial del mercado. Nos unimos a tu equipo de desarrollo para ayudarte a completar tareas.',
  },
  {
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/nos-convertimos-en-tu-equipo.png',
    title: 'Nos convertimos en tu equipo',
    description:
      'Comprometidos con ayudarte a alcanzar el éxito, trabajamos como tu equipo de tecnología, desarrollo y/o  programación. ',
  },
];

export const partnershipModel = {
  title: 'Modelos de partnership',
  description:
    'Una asociación perfecta que entrega los resultados esperados de acuerdo a tus necesidades. Tenemos todo lo que necesitas.',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839598/LandingPage/modelo-partnership.png',
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque4.png',
  heightImage: 1262,
  partnershipModels,
};

const services = [
  {
    href: '/services/WebDevelopment',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-web.png',
    service: 'Desarrollo Web',
  },
  {
    href: '/services/UXUIDesign',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/diseno-ux-ui.png',
    service: 'Diseño UX / UX',
  },
  {
    href: '/services/MobileDevelopment',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-movil.png',
    service: 'Desarrollo Móvil',
  },
  {
    href: '/services/Tranings',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/capacitaciones.png',
    service: 'Capacitaciones',
  },
  {
    href: '/services/Marketing',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/marketing.png',
    service: 'Marketing',
  },
  {
    href: '/services/SEO',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/posicionamiento-buscadores.png',
    service: 'Posicionamiento en buscadores',
  },
  {
    href: '/services/E-commerce',
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/e-commerce.png',
    service: 'E-commerce',
  },
];

export const servicesInitgrammers = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque3.png',
  heightImage: 665,
  title: 'Integramos diseño y desarrollo para entregar el mejor proyecto',
  services,
};

const clients = [
  {
    label: 'Atenas Education',
    image: '/assets/images/atenas-education.png',
  },
  {
    label: 'La Casa del Carpintero',
    image: '/assets/images/la-casa-del-carpintero.png',
  },
  {
    label: 'JRTEC',
    image: '/assets/images/JRTEC.png',
  },
  {
    label: 'Escuela Politécnica Nacional',
    image: '/assets/images/Escuela-Politecnica-Nacional.png',
  },
  {
    label: 'Solufer Ecuador',
    image: '/assets/images/solufer.png',
  },
];

export const clientsInitgrammers = {
  title: 'Quienes confiaron en nosotros:',
  variantTitle: 'h4',
  titleBlack: true,
  clients,
};

export const carryOutProject = {
  titlePart1: 'Estamos pendientes de ti ',
  titlePart2: 'soporte sin coste adicional',
  description:
    'En todos nuestros proyectos ofrecemos soporte durante todo el año y mantenimiento de tus productos sin recargo. ',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839634/LandingPage/pensado-como-llevar-a-cabo-tu-proyecto.png',
};

const questions = [
  {
    id: 0,
    title: '¿Puedo recibir pagos a través de mi aplicación móvil?',
    details:
      'Si, durante el desarrollo de aplicaciones móviles podemos integrar una pasarela de pagos a tu aplicación móvil para que puedas vender productos o servicios.',
  },
  {
    id: 1,
    title: '¿A qué tiendas de aplicaciones móviles se puede subir mi producto?',
    details:
      'Dependiendo del tipo de aplicación que desees,  el desarrollo de aplicaciones móviles puede ser dirigido para que se pueda desplegar la aplicación móvil en una o todas las tiendas de aplicaciones móviles como Google Play Store, App Store de Apple, entre otras, según los requerimientos que tengas.',
  },
  {
    id: 2,
    title:
      '¿Puedo agregar más funcionalidades a mi aplicación después de terminado el desarrollo?',
    details:
      'Si, creamos aplicaciones modulares, que permiten que se agreguen nuevas funcionalidades en el futuro, trabajamos con buenas prácticas de código para desarrollar las aplicaciones móviles, lo que te permitirá escalar tu producto en el futuro.',
  },
  {
    id: 3,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos.',
  },
  {
    id: 4,
    title: '¿En qué dispositivos se puede utilizar mi aplicación móvil?',
    details:
      'Desarrollamos aplicaciones móviles para todos los dispositivos móviles: tablets, celulares, computadoras.',
  },
  {
    id: 5,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos. ',
  },
];

export const FAQLandingPage = {
  titlePart1: 'Preguntas',
  titlePart2: 'frecuentes',
  questions,
};