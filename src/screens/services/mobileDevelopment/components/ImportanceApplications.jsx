import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Hidden,
} from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/ImportanceApplications';

const useStyles = makeStyles(styles);

const ImportanceAplications = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container fixed className={classes.mainContent}>
        <Grid container>
          <Grid item xs={false} md={1} />
          <Grid item xs={12} md={5} className={classes.gridImage}>
            <Box component="figure">
              <Image
                src="/assets/images/importancia-aplicaciones-moviles.png"
                width={504}
                height={694}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} className={classes.gridContent}>
            <Box component="article">
              <Typography variant="h2" className={classes.title}>
                Importancia de las aplicaciones móviles
              </Typography>
              <Typography variant="body1">
                Crear una aplicación móvil para tu empresa te conecta con tus
                clientes y mejora la experiencia en la compra de productos y
                servicios.
              </Typography>
              <Box className={classes.images}>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/google-play.png"
                    width={88}
                    height={88}
                  />
                </Box>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/apple-store.png"
                    width={88}
                    height={88}
                  />
                </Box>
              </Box>
              <Typography variant="body1">
                Tus productos en las tiendas de aplicaciones móviles a nivel
                mundial
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={1} />
        </Grid>
      </Container>
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image
            src="/assets/images/figures/bloque2.png"
            layout="fill"
            className={classes.backgroundImage}
          />
        </Box>
      </Hidden>
    </Box>
  );
};

export default ImportanceAplications;
