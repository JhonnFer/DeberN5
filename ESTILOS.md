# 🎨 Guía de Estilos Global - Digimon App

## 📁 Estructura de Estilos

```
src/styles/
├── globalStyles.ts    # Colores, espaciado, tipografía base
├── responsive.ts      # Funciones para diseño responsive
├── components.ts      # Estilos reutilizables de componentes
└── index.ts          # Exportación centralizada
```

## 🚀 Quick Start

### 1. Importar Estilos Globales

```typescript
import { colors, spacing, typography, globalStyles } from "../../src/styles";

const MyComponent = () => {
  return (
    <View style={[globalStyles.container, { padding: spacing.lg }]}>
      <Text style={typography.h1}>Título</Text>
    </View>
  );
};
```

### 2. Usar Estilos de Componentes

```typescript
import { componentStyles } from "../../src/styles";

const MyButton = () => {
  return (
    <Pressable style={componentStyles.buttonPrimary}>
      <Text style={componentStyles.buttonText}>Presionar</Text>
    </Pressable>
  );
};
```

### 3. Diseño Responsive

```typescript
import {
  useResponsive,
  scaleFontSize,
  responsivePaddingHorizontal,
} from "../../src/styles";

const ResponsiveComponent = () => {
  const { isSmallDevice, isLargeDevice } = useResponsive();

  return (
    <View
      style={{
        paddingHorizontal: responsivePaddingHorizontal(),
        fontSize: scaleFontSize(16),
      }}
    >
      {isSmallDevice && <Text>Dispositivo pequeño</Text>}
      {isLargeDevice && <Text>Dispositivo grande</Text>}
    </View>
  );
};
```

---

## 🎯 Referencia de Colores

```typescript
colors = {
  primary: "#007AFF", // Azul principal
  primaryDark: "#0051D5", // Azul oscuro
  secondary: "#5AC8FA", // Azul secundario
  success: "#34C759", // Verde
  warning: "#FF9500", // Naranja
  danger: "#FF3B30", // Rojo
  light: "#F5F5F5", // Gris muy claro
  lightGray: "#EFEFEF", // Gris claro
  gray: "#8E8E93", // Gris
  darkGray: "#333333", // Gris oscuro
  white: "#FFFFFF", // Blanco
  black: "#000000", // Negro
  border: "#EEEEEE", // Para bordes
};
```

---

## 📏 Espaciado (Padding/Margin)

```typescript
spacing = {
  xs: 4, // Muy pequeño
  sm: 8, // Pequeño
  md: 12, // Medio
  lg: 16, // Grande
  xl: 24, // Muy grande
  xxl: 32, // Enorme
};
```

Ejemplo:

```typescript
<View style={{ padding: spacing.lg }}>
  <Text>Contenido</Text>
</View>
```

---

## 🔤 Tipografía

```typescript
// Tamaños responsive según dispositivo
typography = {
  h1: { fontSize: 24 - 32, fontWeight: "700" }, // Títulos principales
  h2: { fontSize: 20 - 28, fontWeight: "600" }, // Subtítulos
  h3: { fontSize: 18 - 24, fontWeight: "600" }, // Headers pequeños
  body: { fontSize: 14 - 16, fontWeight: "400" }, // Texto normal
  bodySmall: { fontSize: 12 - 14, fontWeight: "400" }, // Texto pequeño
  caption: { fontSize: 11 - 12, fontWeight: "500" }, // Captions
};
```

Ejemplo:

```typescript
<Text style={typography.h1}>Título Grande</Text>
<Text style={typography.body}>Texto normal</Text>
<Text style={typography.caption}>Texto pequeño</Text>
```

---

## 🔘 Componentes Estilizados

### Botón Primario

```typescript
<Pressable style={componentStyles.buttonPrimary}>
  <Text style={componentStyles.buttonText}>Aceptar</Text>
</Pressable>
```

### Botón Secundario

```typescript
<Pressable style={componentStyles.buttonSecondary}>
  <Text style={componentStyles.buttonText}>Cancelar</Text>
</Pressable>
```

### Botón Outline

```typescript
<Pressable style={componentStyles.buttonOutline}>
  <Text style={componentStyles.buttonTextOutline}>Más opciones</Text>
</Pressable>
```

### Card

```typescript
<View style={componentStyles.cardContainer}>
  <Image source={{ uri: url }} style={componentStyles.cardImage} />
  <View style={componentStyles.cardContent}>
    <Text style={componentStyles.cardTitle}>Título</Text>
    <Text style={componentStyles.cardSubtitle}>Subtítulo</Text>
  </View>
</View>
```

### Input

```typescript
<TextInput style={componentStyles.textInput} placeholder="Ingresa texto..." />
```

### Alert Éxito

```typescript
<View style={[componentStyles.alertContainer, componentStyles.alertSuccess]}>
  <Text style={[componentStyles.alertText, componentStyles.alertTextSuccess]}>
    ✅ Operación exitosa
  </Text>
</View>
```

### Alert Error

```typescript
<View style={[componentStyles.alertContainer, componentStyles.alertError]}>
  <Text style={[componentStyles.alertText, componentStyles.alertTextError]}>
    ❌ Ocurrió un error
  </Text>
</View>
```

### Badge

```typescript
<View style={componentStyles.badge}>
  <Text style={componentStyles.badgeText}>Nuevo</Text>
</View>
```

---

## 📱 Responsive Design

### Detectar Tamaño de Dispositivo

```typescript
import { screenInfo, useResponsive } from "../../src/styles";

// Forma 1: Valores estáticos
console.log(screenInfo.isSmallDevice); // true si < 375px
console.log(screenInfo.isMediumDevice); // true si 375-768px
console.log(screenInfo.isLargeDevice); // true si >= 768px

// Forma 2: Hook reactivo (actualiza con rotación)
const { isSmallDevice, isPortrait, isLandscape } = useResponsive();
```

### Funciones de Cálculo

```typescript
import {
  percentWidth,
  percentHeight,
  scaleFontSize,
  getColumnWidth,
} from "../../src/styles";

// Calcular porcentaje de pantalla
const halfWidth = percentWidth(50); // 50% del ancho
const quarterHeight = percentHeight(25); // 25% del alto

// Escalar fuente automáticamente
const fontSize = scaleFontSize(16); // Se ajusta según pantalla

// Calcular ancho de columnas para grid
const columnWidth = getColumnWidth(2, 8); // 2 columnas con gap de 8
```

### Usar Valores por Breakpoint

```typescript
import { getByBreakpoint, breakpoints } from "../../src/styles";

const padding = getByBreakpoint({
  xs: 8, // Móviles pequeños
  sm: 12, // Móviles
  md: 16, // Tablets
  lg: 24, // Computadoras
  xl: 32, // Pantallas grandes
});
```

---

## 🎨 Sombras

```typescript
shadows = {
  sm: { elevation: 1, shadowOpacity: 0.1 }, // Sombra pequeña
  md: { elevation: 3, shadowOpacity: 0.15 }, // Sombra media
  lg: { elevation: 5, shadowOpacity: 0.2 }, // Sombra grande
};
```

Ejemplo:

```typescript
<View style={[globalStyles.card, shadows.md]}>
  <Text>Contenido con sombra</Text>
</View>
```

---

## 📝 Espaciado Utilities

Ya vienen incluidos en `componentStyles`:

```typescript
// Margin bottom
mb4: {
  marginBottom: 4;
}
mb8: {
  marginBottom: 8;
}
mb12: {
  marginBottom: 12;
}
mb16: {
  marginBottom: 16;
}
mb24: {
  marginBottom: 24;
}

// Margin top
mt4, mt8, mt12, mt16, mt24;

// Padding horizontal
ph8, ph12, ph16, ph24;

// Padding vertical
pv8, pv12, pv16;
```

Ejemplo:

```typescript
<View style={componentStyles.mb16}>
  <Text>Con margen abajo de 16</Text>
</View>
```

---

## 💡 Ejemplos Completos

### Pantalla Simple

```typescript
import {
  globalStyles,
  colors,
  spacing,
  componentStyles,
} from "../../src/styles";
import { View, Text, Pressable } from "react-native";

export const MyScreen = () => {
  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>Mi Pantalla</Text>
      </View>

      {/* Contenido */}
      <View style={{ padding: spacing.lg }}>
        <Text style={typography.h2}>Bienvenido</Text>

        {/* Card */}
        <View style={componentStyles.cardContainer}>
          <Text style={componentStyles.cardTitle}>Información</Text>
        </View>

        {/* Botones */}
        <Pressable style={componentStyles.buttonPrimary}>
          <Text style={componentStyles.buttonText}>Aceptar</Text>
        </Pressable>
      </View>
    </View>
  );
};
```

### Componente Responsive

```typescript
import { useResponsive, percentWidth, componentStyles } from "../../src/styles";

export const ResponsiveGrid = () => {
  const { isSmallDevice } = useResponsive();
  const columns = isSmallDevice ? 1 : 2;

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {items.map((item) => (
        <View key={item.id} style={{ width: `${100 / columns}%` }}>
          <View style={componentStyles.cardContainer}>
            <Text>{item.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
```

---

## 🔗 Breakpoints (Tamaños de Dispositivo)

```typescript
xs:  0 px    (Móviles muy pequeños)
sm:  375 px  (Móviles estándar)
md:  768 px  (Tablets)
lg:  1024 px (Computadoras)
xl:  1280 px (Pantallas grandes)
```

---

## ✨ Tips

1. **Siempre usa `spacing`** para márgenes y paddings, no números mágicos
2. **Combina estilos** con arrays: `style={[style1, style2]}`
3. **Para responsive**, usa `useResponsive()` hook dentro de componentes
4. **Reutiliza componentes estilizados** de `componentStyles`
5. **Respeta los breakpoints** para diseño consistente
6. **Las tipografías ya son responsive** automáticamente

¡Ahora tu app se verá bien en todos los dispositivos! 📱💻🖥️
