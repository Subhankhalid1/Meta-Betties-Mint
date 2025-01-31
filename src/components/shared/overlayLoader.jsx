import { useContext } from 'react';
import { OverlayLoaderContext } from '../../contexts/overlayLoaderContext';
import classes from './loader.module.css';

const OverlayLoader = () => {
  const { isLoading } = useContext(OverlayLoaderContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.overlay__inner}>
        <div className={classes.overlay__content}>
          <span className={classes.spinner} />
        </div>
      </div>
    </div>
  );
};

export default OverlayLoader;

