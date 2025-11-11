// src/styles/responsive.ts
import { Dimensions, Platform, useWindowDimensions } from "react-native";

const { width, height } = Dimensions.get("window");

/**
 * Hook personalizado para obtener información responsive
 */
export const useResponsive = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return {
    width: windowWidth,
    height: windowHeight,
    isSmallDevice: windowWidth < 375,
    isMediumDevice: windowWidth >= 375 && windowWidth < 768,
    isLargeDevice: windowWidth >= 768,
    isPortrait: windowHeight > windowWidth,
    isLandscape: windowWidth > windowHeight,
  };
};

/**
 * Calcular porcentaje de ancho de pantalla
 * @param percent Porcentaje (0-100)
 */
export const percentWidth = (percent: number): number => {
  return (width * percent) / 100;
};

/**
 * Calcular porcentaje de alto de pantalla
 * @param percent Porcentaje (0-100)
 */
export const percentHeight = (percent: number): number => {
  return (height * percent) / 100;
};

/**
 * Escalar fuentes basado en tamaño de pantalla
 * @param baseSize Tamaño base (para dispositivos de 375px)
 */
export const scaleFontSize = (baseSize: number): number => {
  const scale = width / 375;
  const newSize = baseSize * scale;

  // Límites para que no sea demasiado pequeño o grande
  if (Platform.OS === "ios") {
    return Math.round(newSize);
  } else {
    return Math.round(newSize) - 2; // Android suele ser un poco más grande
  }
};

/**
 * Escalar espaciado basado en tamaño de pantalla
 * @param baseSize Tamaño base
 */
export const scaleSpacing = (baseSize: number): number => {
  const scale = width / 375;
  return baseSize * scale;
};

/**
 * Obtener padding horizontal responsive
 */
export const responsivePaddingHorizontal = (): number => {
  if (width < 375) return 12;
  if (width < 768) return 16;
  return 24;
};

/**
 * Obtener padding vertical responsive
 */
export const responsivePaddingVertical = (): number => {
  if (width < 375) return 10;
  if (width < 768) return 12;
  return 16;
};

/**
 * Calcular ancho de columna para grid
 * @param columnas Número de columnas
 * @param gap Espacio entre columnas
 */
export const getColumnWidth = (columnas: number, gap: number = 8): number => {
  const totalGap = gap * (columnas - 1);
  const availableWidth = width - responsivePaddingHorizontal() * 2;
  return (availableWidth - totalGap) / columnas;
};

/**
 * Breakpoints para media queries
 */
export const breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
};

/**
 * Función para obtener valor según breakpoint
 */
export const getByBreakpoint = <T extends any>(values: {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}): T => {
  if (width >= breakpoints.xl && values.xl !== undefined) return values.xl;
  if (width >= breakpoints.lg && values.lg !== undefined) return values.lg;
  if (width >= breakpoints.md && values.md !== undefined) return values.md;
  if (width >= breakpoints.sm && values.sm !== undefined) return values.sm;
  return values.xs || (values.sm as T);
};

export default {
  percentWidth,
  percentHeight,
  scaleFontSize,
  scaleSpacing,
  responsivePaddingHorizontal,
  responsivePaddingVertical,
  getColumnWidth,
  getByBreakpoint,
  breakpoints,
};
