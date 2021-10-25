import { green, neutral, purple, red, yellow } from './colors';

export const theme = {
  colors: {
    attention: yellow[100],
    black: neutral[800],
    clear: neutral[200],
    deep: neutral[500],
    error: red[100],
    light: neutral[300],
    medium: neutral[400],
    neutral: purple[100],
    success: green[100],
    white: neutral[100],
    asset_classes: {
      convertible: '#F375D0',
      convertible_contract: '#F375D0',
      option_contract: '#66DE3C',
      quota: '#00E4E4',
      share: '#00E4E4',
    },
  },

  styles: {
    border_radius: '8px',
    border_stroke: '2px',
    elevations: {
      small: '0px 4px 4px rgba(0, 0, 0, 0.25);',
      medium: '0px 4px 12px rgba(152, 152, 166, 0.25);',
      large: '0px 8px 20px rgba(152, 152, 166, 0.25);',
      card: '0px 4px 12px rgba(152, 152, 166, 0.25);',
      card_hover: '0px 4px 8px rgba(255, 255, 255, 0.25);',
      button_hover: '0px 4px 8px rgba(152, 152, 166, 0.45);',
    },
    gradient: 'linear-gradient(61.69deg, #70D1C9 0%, #7FF0A6 95.7%)',
  },

  text: {
    colors: {
      primary: neutral[800],
      secondary: neutral[500],
      disabled: neutral[300],
    },
  },
};
