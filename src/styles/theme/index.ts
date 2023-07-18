import {extendTheme} from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import config from './foundations/config';
import fonts from './foundations/fonts';
import colors from './foundations/colors';
import shadows from './foundations/shadows';
import breakpoints from './foundations/breakpoints';

// Component style overrides
import * as components from './components';

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  breakpoints,
  components: {
    ...components
  },
}

export default extendTheme(customTheme);