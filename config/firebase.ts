// config/firebase.ts
// Zentrale Initialisierung der Firebase Web SDK v9+ (Modular)

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Konfiguration exakt wie in der Firebase-Konsole angezeigt
const firebaseConfig = {
  apiKey: "AIzaSyCCXjwzblic_Ea9Y00WIWR_XcMhe9DaX-E",
  authDomain: "krankenfahrten-001.firebaseapp.com",
  projectId: "krankenfahrten-001",
  storageBucket: "krankenfahrten-001.firebasestorage.app",
  messagingSenderId: "174445411029",
  appId: "1:174445411029:web:0052329ce105fd42ff005c",
  measurementId: "G-1JY4C0ZQTK",
};

// Singleton-Initialisierung (wichtig für Next.js / Hot Reload)
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Analytics nur im Browser (nicht auf Server-Seite von Next.js)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch {
    // Analytics ist optional – Fehler hier sollen die App nicht crashen
  }
}

export { app, analytics };
