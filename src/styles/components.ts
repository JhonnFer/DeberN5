// src/styles/components.ts
import { StyleSheet } from "react-native";
import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from "./globalStyles";

/**
 * Estilos para componentes comunes reutilizables
 */

export const componentStyles = StyleSheet.create({
  // ========== CONTAINER ==========
  screenContainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  screenContainerWhite: {
    flex: 1,
    backgroundColor: colors.white,
  },
  paddedContainer: {
    padding: spacing.lg,
  },

  // ========== HEADER ==========
  headerContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    ...shadows.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    ...typography.h2,
    color: colors.darkGray,
    fontWeight: "600",
  },

  // ========== CARD ==========
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    ...shadows.md,
  },
  cardImage: {
    width: 120,
    height: 100,
    borderRadius: borderRadius.md,
    backgroundColor: colors.lightGray,
  },
  cardContent: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: "center",
  },
  cardTitle: {
    ...typography.body,
    fontWeight: "600",
    color: colors.darkGray,
    marginBottom: spacing.xs,
  },
  cardSubtitle: {
    ...typography.bodySmall,
    color: colors.gray,
    marginBottom: spacing.xs,
  },

  // ========== BOTONES ==========
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    ...shadows.sm,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  buttonOutline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  buttonText: {
    color: colors.white,
    ...typography.body,
    fontWeight: "600",
  },
  buttonTextOutline: {
    color: colors.primary,
    ...typography.body,
    fontWeight: "600",
  },

  // ========== INPUTS ==========
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    ...typography.body,
    color: colors.darkGray,
    backgroundColor: colors.white,
  },
  textInputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputLabel: {
    ...typography.body,
    color: colors.darkGray,
    fontWeight: "600",
    marginBottom: spacing.sm,
  },
  inputError: {
    borderColor: colors.danger,
  },
  inputHelpText: {
    ...typography.caption,
    color: colors.gray,
    marginTop: spacing.xs,
  },

  // ========== TEXTO ==========
  headingLarge: {
    ...typography.h1,
    color: colors.darkGray,
    fontWeight: "700",
  },
  headingMedium: {
    ...typography.h2,
    color: colors.darkGray,
    fontWeight: "600",
  },
  headingSmall: {
    ...typography.h3,
    color: colors.darkGray,
    fontWeight: "600",
  },
  bodyText: {
    ...typography.body,
    color: colors.darkGray,
  },
  bodyTextSecondary: {
    ...typography.body,
    color: colors.gray,
  },
  captionText: {
    ...typography.caption,
    color: colors.gray,
  },

  // ========== ALERTS ==========
  alertContainer: {
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginVertical: spacing.md,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  alertError: {
    backgroundColor: "#ffebee",
    borderLeftWidth: 4,
    borderLeftColor: colors.danger,
  },
  alertSuccess: {
    backgroundColor: "#e8f5e9",
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  alertWarning: {
    backgroundColor: "#fff3e0",
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  alertInfo: {
    backgroundColor: "#e3f2fd",
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  alertText: {
    ...typography.body,
    fontWeight: "500",
    flex: 1,
  },
  alertTextError: {
    color: "#c62828",
  },
  alertTextSuccess: {
    color: "#2e7d32",
  },
  alertTextWarning: {
    color: "#e65100",
  },
  alertTextInfo: {
    color: "#1565c0",
  },

  // ========== SEPARADORES ==========
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  dividerVertical: {
    width: 1,
    backgroundColor: colors.border,
  },

  // ========== BADGES ==========
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
  },
  badgeText: {
    color: colors.white,
    ...typography.caption,
    fontWeight: "600",
  },
  badgeSecondary: {
    backgroundColor: colors.secondary,
  },
  badgeDanger: {
    backgroundColor: colors.danger,
  },
  badgeSuccess: {
    backgroundColor: colors.success,
  },

  // ========== LISTA ==========
  listItem: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: "center",
  },
  listItemContent: {
    flex: 1,
  },
  listItemTitle: {
    ...typography.body,
    color: colors.darkGray,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  listItemSubtitle: {
    ...typography.bodySmall,
    color: colors.gray,
  },

  // ========== EMPTY STATE ==========
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: spacing.lg,
  },
  emptyStateTitle: {
    ...typography.h3,
    color: colors.darkGray,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  emptyStateDescription: {
    ...typography.body,
    color: colors.gray,
    textAlign: "center",
    lineHeight: 24,
  },

  // ========== MODAL ==========
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: colors.lightGray,
    borderRadius: borderRadius.full,
    alignSelf: "center",
    marginBottom: spacing.md,
  },

  // ========== LOADER ==========
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // ========== SPACING UTILITIES ==========
  mb4: { marginBottom: spacing.xs },
  mb8: { marginBottom: spacing.sm },
  mb12: { marginBottom: spacing.md },
  mb16: { marginBottom: spacing.lg },
  mb24: { marginBottom: spacing.xl },

  mt4: { marginTop: spacing.xs },
  mt8: { marginTop: spacing.sm },
  mt12: { marginTop: spacing.md },
  mt16: { marginTop: spacing.lg },
  mt24: { marginTop: spacing.xl },

  ph8: { paddingHorizontal: spacing.sm },
  ph12: { paddingHorizontal: spacing.md },
  ph16: { paddingHorizontal: spacing.lg },
  ph24: { paddingHorizontal: spacing.xl },

  pv8: { paddingVertical: spacing.sm },
  pv12: { paddingVertical: spacing.md },
  pv16: { paddingVertical: spacing.lg },
});
