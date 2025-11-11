// src/styles/globalStyles.ts
import { Dimensions, Platform, StyleSheet } from "react-native";

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

// Detectar si es un dispositivo pequeño (teléfono) o grande (tablet)
const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 768;
const isLargeDevice = width >= 768;

// Colores globales
export const colors = {
  primary: "#007AFF",
  primaryDark: "#0051D5",
  secondary: "#5AC8FA",
  success: "#34C759",
  warning: "#FF9500",
  danger: "#FF3B30",
  light: "#F5F5F5",
  lightGray: "#EFEFEF",
  gray: "#8E8E93",
  darkGray: "#333333",
  white: "#FFFFFF",
  black: "#000000",
  border: "#EEEEEE",
};

// Espaciado (padding/margin)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

// Tipografía responsive
export const typography = {
  h1: {
    fontSize: isSmallDevice ? 24 : isMediumDevice ? 28 : 32,
    fontWeight: "700" as const,
    lineHeight: isSmallDevice ? 30 : isMediumDevice ? 34 : 39,
  },
  h2: {
    fontSize: isSmallDevice ? 20 : isMediumDevice ? 24 : 28,
    fontWeight: "600" as const,
    lineHeight: isSmallDevice ? 26 : isMediumDevice ? 30 : 34,
  },
  h3: {
    fontSize: isSmallDevice ? 18 : isMediumDevice ? 20 : 24,
    fontWeight: "600" as const,
    lineHeight: isSmallDevice ? 24 : isMediumDevice ? 26 : 30,
  },
  body: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: "400" as const,
    lineHeight: isSmallDevice ? 20 : 24,
  },
  bodySmall: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: "400" as const,
    lineHeight: isSmallDevice ? 16 : 20,
  },
  caption: {
    fontSize: isSmallDevice ? 11 : 12,
    fontWeight: "500" as const,
    lineHeight: isSmallDevice ? 14 : 16,
  },
};

// Bordes y radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Sombras
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
};

// Estilos globales reutilizables
export const globalStyles = StyleSheet.create({
  // Contenedores
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.light,
  },

  // Layout
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },

  // Headers
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    ...shadows.sm,
  },
  headerTitle: {
    ...typography.h2,
    color: colors.darkGray,
    fontWeight: "600",
  },

  // Cards
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    ...shadows.md,
  },
  cardSmall: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginVertical: spacing.xs,
    ...shadows.sm,
  },

  // Botones
  button: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutline: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
    fontWeight: "600",
  },

  // Inputs
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: typography.body.fontSize,
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
  inputFocused: {
    borderColor: colors.primary,
  },

  // Texto
  textPrimary: {
    color: colors.darkGray,
    ...typography.body,
  },
  textSecondary: {
    color: colors.gray,
    ...typography.bodySmall,
  },
  textCaption: {
    color: colors.gray,
    ...typography.caption,
  },

  // Divisor
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  // Lista
  listItem: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listItemText: {
    ...typography.body,
    color: colors.darkGray,
  },

  // Badges/Tags
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  badgeText: {
    color: colors.white,
    ...typography.caption,
    fontWeight: "600",
  },

  // Errores
  errorContainer: {
    backgroundColor: "#ffebee",
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.danger,
    marginVertical: spacing.md,
  },
  errorText: {
    color: "#c62828",
    ...typography.body,
    fontWeight: "500",
  },

  // Éxito
  successContainer: {
    backgroundColor: "#e8f5e9",
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    marginVertical: spacing.md,
  },
  successText: {
    color: "#2e7d32",
    ...typography.body,
    fontWeight: "500",
  },
});

// Información de pantalla
export const screenInfo = {
  width,
  height,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isPortrait: height > width,
  isLandscape: width > height,
  safeAreaInsets: {
    top: Platform.OS === "android" ? 0 : 44,
    bottom: Platform.OS === "android" ? 0 : 34,
  },
};

// Animaciones comunes
export const animationDuration = {
  fast: 150,
  normal: 300,
  slow: 500,
};
