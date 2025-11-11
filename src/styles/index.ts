// src/styles/index.ts
/**
 * Exportación centralizada de todos los estilos globales
 * Uso: import { colors, spacing, globalStyles } from '@/src/styles';
 */

export {
  animationDuration,
  borderRadius,
  colors,
  globalStyles,
  screenInfo,
  shadows,
  spacing,
  typography,
} from "./globalStyles";

export {
  breakpoints,
  getByBreakpoint,
  getColumnWidth,
  percentHeight,
  percentWidth,
  responsivePaddingHorizontal,
  responsivePaddingVertical,
  scaleFontSize,
  scaleSpacing,
  useResponsive,
} from "./responsive";

export { componentStyles } from "./components";
