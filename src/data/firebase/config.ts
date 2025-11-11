// src/data/firebase/config.ts
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// ⚠️ Configuración de Firebase ⚠️
const firebaseConfig = {
  apiKey: "AIzaSyC68myZQSvBWrG5X338LD9ZMPf3cq4r-Xg",
  authDomain: "debern5.firebaseapp.com",
  projectId: "debern5",
  storageBucket: "debern5.firebasestorage.app",
  messagingSenderId: "1012315698993",
  appId: "1:1012315698993:web:83addf43d8692e20a0a210",
};

let FIREBASE_AUTH: Auth | any = null;
let isFirebaseReady = false;

try {
  const app = initializeApp(firebaseConfig);
  FIREBASE_AUTH = getAuth(app);

  isFirebaseReady = true;
  console.log("✅ Firebase inicializado correctamente");
  console.log("✅ Email/Contraseña habilitado como método de autenticación");
} catch (error: any) {
  console.warn("⚠️ Firebase error:", error.message);
  console.warn("📝 Usando modo DEMO");

  // Modo demo: crear un objeto mock
  FIREBASE_AUTH = {
    currentUser: null,
    isDemo: true,
  };
}

export { FIREBASE_AUTH, isFirebaseReady };
