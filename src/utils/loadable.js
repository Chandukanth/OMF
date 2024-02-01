
import Loadable from 'react-loadable';

const LoadableComponent = (loader) => {
  return Loadable({
    loader,
    loading: () => null,
  });
};

export default LoadableComponent;
