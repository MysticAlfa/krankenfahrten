// design-system.ts
// Zentrale, technikagnostische Design-Tokens für krankenfahrten.io
// - Kann in Tailwind (theme.extend) gemappt werden
// - Kann in Flutter (ThemeData / ColorScheme) nachgebaut werden
// - Dient BindAI als „Single Source of Truth“ für Layout-Entscheidungen

export const DesignSystem = {

  // ────────────────────────────────
  // 1. Farben – Light Theme
  // ────────────────────────────────
  //
  // Idee:
  // - „colors“ beschreibt dein aktuelles Live-Design (heller Hintergrund).
  // - Schlüsselnamen sind bewusst generisch, damit du sie in Tailwind
  //   direkt als Custom Colors registrieren kannst (theme.extend.colors).
  //
  // Beispiel-Mapping in Tailwind:
  // theme.extend.colors = {
  //   brand: {
  //     green:      DesignSystem.colors.green,
  //     greenHover: DesignSystem.colors.greenHover,
  //     yellow:     DesignSystem.colors.yellow,
  //     yellowHover:DesignSystem.colors.yellowHover,
  //   }
  // }
  //
  // Nutzung in JSX:
  // <button className="bg-brand-green hover:bg-brand-greenHover text-white" />
  //
  colors: {
    // Primär- und Akzentfarben (Brand)
    green:      "#166D5B",   // Primäre Markenfarbe – Call-to-Action, Links, Icons
    greenHover: "#114e44",   // Hover-Zustand für primäre Interaktionen
    yellow:     "#FFCB17",   // Sekundärfarbe – Login-Button, H2-Hinterlegung
    yellowHover:"#e6b015",   // Hover für gelbe Buttons / Badges

    // Flächen
    background: "#FFFFFF",   // Seitenhintergrund – 100 % Weiß
    surface:    "#FAFAFA",   // leicht abgesetzte Kacheln / Karten
    border:     "#E5E7EB",   // dezente Rahmenlinien, Trennlinien, Tabellen-Gitter

    // Textfarben
    text: {
      heading: "#1F2937",    // Überschriften – sehr dunkles Grau, nicht „rein Schwarz“
      body:    "#374151",    // Fließtext – etwas heller, angenehm für lange Absätze
      muted:   "#6B7280",    // Hilfstexte, Meta-Infos, Captions
      onGreen: "#FFFFFF",    // Text auf grünen Flächen (Buttons, Badges)
      onYellow:"#000000",    // Text auf gelben Flächen
    },

    // Statusfarben (Fehler, Erfolg, Warnung, Info)
    status: {
      error:   "#DC2626",    // Fehlermeldungen, Validierungsfehler
      success: "#166D5B",    // Erfolgsmeldungen (bewusst an Brand-Grün angelehnt)
      warning: "#F59E0B",    // Warnungen / Hinweise
      info:    "#2563EB"     // neutrale Info-States (z. B. Banner-Hinweise)
    }
  },

  // ────────────────────────────────
  // 1b. Farben – Dark Theme (optional, vorbereitet)
  // ────────────────────────────────
  //
  // Idee:
  // - Dark-Variante, die du später aktivieren kannst (z. B. via CSS-Variable
  //   oder Tailwind „dark“-Variant).
  // - Brand-Farben bleiben ähnlich, Flächen/Text werden invertiert.
  //
  // Tailwind-Mapping analog:
  // theme.extend.colors.brandDark = { ... }
  //
  darkColors: {
    green:      "#166D5B",   // Brand bleibt konsistent (wiedererkennbar)
    greenHover: "#1F8A70",
    yellow:     "#FACC15",
    yellowHover:"#EAB308",

    background: "#020617",      // sehr dunkler Grundton (Fast-Schwarz / Navy)
    surface:    "#020617",      // Vollflächiger Hintergrund
    surfaceElevated: "#0B1120", // Raised-Karten / Modale
    border:     "#1F2937",      // dezente, dunkle Rahmen

    text: {
      heading: "#F9FAFB",    // fast Weiß – Überschriften
      body:    "#E5E7EB",    // normaler Text
      muted:   "#9CA3AF",    // Meta-Infos
      onGreen: "#FFFFFF",
      onYellow:"#000000",
    },

    status: {
      error:   "#F87171",
      success: "#4ADE80",
      warning: "#FBBF24",
      info:    "#60A5FA"
    }
  },

  // ────────────────────────────────
  // 2. Typografie – skaliert für Zielgruppe 50+
  // ────────────────────────────────
  //
  // Grundprinzip:
  // - Body-Text größer als Standard-Web.
  // - Zeilenhöhe relativ groß, damit Zeilen nicht „kleben“.
  // - H1 deutlich dominant, aber nicht extrem überzogen.
  //
  // Umsetzung in Tailwind:
  // - Entweder über globale CSS-Klassen (z. B. .typo-body)
  // - oder über Tailwind theme.extend.fontSize (custom sizes).
  //
  typography: {
    fontFamily: "Inter, system-ui, sans-serif", // Konsistenter Font-Stack über alle Plattformen

    headings: {
      // Hero-Titel oben auf der Seite („Fahrdienst bestellen: einfach online“)
      h1: { size: "56px", weight: 900, lineHeight: 1.2 },

      // Abschnittsüberschriften („Wie es funktioniert“, „Unsere Vorteile“)
      h2: { size: "42px", weight: 900, lineHeight: 1.25, color: "#FFCB17" },

      // Unterüberschriften, z. B. Kachel-Titel / kleinere Zwischenüberschriften
      h3: { size: "28px", weight: 700, lineHeight: 1.35 },
      h4: { size: "24px", weight: 600, lineHeight: 1.4 },
      h5: { size: "20px", weight: 600, lineHeight: 1.5 },
      h6: { size: "18px", weight: 600, lineHeight: 1.5 },
    },

    text: {
      // Standard-Fließtext – Haupttexte auf der Seite
      body:     { size: "20px", weight: 400, lineHeight: 1.75 }, // leicht höhere Zeilenhöhe – leichter lesbar für Ältere

      // Prominenter Fließtext – z. B. Einleitung unter Hero-Titel oder
      // wichtige Erklärabsätze („Wie funktioniert die Krankenbeförderung?“)
      bodyLg:   { size: "22px", weight: 400, lineHeight: 1.75 },

      // Kleinere Texte – z. B. in Kacheln, Meta-Infos im Footer
      small:    { size: "16px", weight: 400, lineHeight: 1.5 },

      // Untertitel / Labels mit sehr geringer Priorität
      caption:  { size: "14px", weight: 400, lineHeight: 1.4 },
    },

    // Standard für Button-Text – wird mit components.button.base kombiniert
    button: {
      size: "18px", weight: 700, lineHeight: 1.5
    }
  },

  // ────────────────────────────────
  // 3. Abstände & Layout
  // ────────────────────────────────
  //
  // spacing:
  // - 8px-Grid für alle Komponenten.
  // - „section“ gibt vertikale Abstände zwischen Hauptabschnitten vor.
  // - „container“ definiert die max. Inhaltsbreite auf Desktop.
  //
  // layout:
  // - Container-Padding = Innenabstand zum Viewportrand.
  // - grid = abstrakte Beschreibung für Spalten-Layout (z. B. Hero 2-spaltig).
  //
  spacing: {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    8: "64px",
    section: "96px",      // Luft zwischen Sektionen („Wie es funktioniert“ → „Unsere Vorteile“)
    container: "1200px",  // max-width des Inhaltsbereichs auf großen Screens
  },

  // Breakpoints sind 1:1 auf Tailwind abgestimmt:
  // sm → 640px, md → 768px, lg → 1024px, xl → 1280px, 2xl → 1536px
  //
  // Nutzung in Tailwind:
  // className="text-base md:text-lg lg:text-xl"
  //
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  layout: {
    containerPadding: {
      mobile: "16px", // Innenabstand links/rechts auf Handy
      desktop: "32px" // Innenabstand links/rechts auf Desktop
    },
    grid: {
      columns: 12,        // 12-Spalten-Layout als Basis (z. B. 6/6 oder 4/4/4)
      gutter: "24px",     // Abstand zwischen Spalten
      sectionGap: "96px"  // Standard-Abstand zwischen Sektionen (vertikal)
    }
  },

  // ────────────────────────────────
  // 4. Border & Shadow
  // ────────────────────────────────
  //
  // borderRadius:
  // - Einheitliche Radii für Inputs, Karten, Buttons.
  //
  // shadows:
  // - „card“ für leicht schwebende Kacheln.
  // - „button“ für Call-to-Action mit leichter Tiefe.
  //
  borderRadius: {
    sm: "8px",    // z. B. kleine Badges / Chips
    md: "12px",   // z. B. Inputs, FAQ-Boxen
    lg: "24px",   // z. B. große Kacheln („Unsere Vorteile“)
    pill: "999px" // für „Tablet“-Buttons (voll gerundet)
  },

  shadows: {
    card: "0 4px 20px rgba(0,0,0,0.08)",              // Standard-Karten-Schatten
    button: "0 8px 25px rgba(22,109,91,0.25)"         // prominenter CTA-Shadow
  },

  // ────────────────────────────────
  // 5. Barrierefreiheit
  // ────────────────────────────────
  //
  // focusRing:
  // - einheitlicher Fokusstil für alle interaktiven Elemente (Buttons, Links,
  //   Inputs, Accordions).
  //
  // reducedMotion:
  // - Wenn true, sollte die Implementierung `prefers-reduced-motion` respektieren
  //   und Animationen reduzieren.
  //
  // minTouchTarget:
  // - Mindestgröße von interaktiven Flächen (Höhe/Breite) für Touch-User.
  //
  accessibility: {
    focusRing: "0 0 0 3px rgba(255,203,23,0.8)", // gelber Ring – sichtbar, aber subtil
    reducedMotion: true,
    minTouchTarget: "48px" // WCAG 2.5.5 – min. Größe für Buttons/Links
  },

  // ────────────────────────────────
  // 6. Komponenten-Regeln
  // ────────────────────────────────
  //
  // Ziel:
  // - Wiederkehrende UI-Elemente bekommen festen „Bauplan“.
  // - BindAI / Code-Gen kann sich daran orientieren, statt jedes Mal
  //   frei zu interpretieren.
  //
  components: {

    // ------------------------------
    // 6.1 Buttons
    // ------------------------------
    //
    // Idee:
    // - „base“: alles, was für beide Varianten gilt (Größe, Radius, Typo).
    // - „primary“ / „secondary“: Farben + Shadow je Variante.
    //
    button: {
      base: {
        fontSize: "18px",     // nimmt typography.button.size auf
        fontWeight: 700,
        lineHeight: 1.5,
        minHeight: "52px",    // ausreichend groß für Touch & ältere Nutzer
        paddingInline: "32px",
        radius: "30px"        // pillenartig, aber nicht komplett rund
      },
      primary: {
        bg: "#166D5B",        // DesignSystem.colors.brand[600]
        text: "#FFFFFF",
        hover: "#114e44",     // DesignSystem.colors.greenHover
        shadow: "0 8px 25px rgba(22,109,91,0.25)"
      },
      secondary: {
        bg: "#FFCB17",        // DesignSystem.colors.yellow
        text: "#000000",
        hover: "#e6b015",     // DesignSystem.colors.yellowHover
        shadow: "0 6px 16px rgba(0,0,0,0.12)"
      }
    },

    // ------------------------------
    // 6.2 Links
    // ------------------------------
    //
    // default:
    // - normale Links im Fließtext, z. B. im Footer oder in Artikeln.
    //
    // muted:
    // - dezenter, z. B. für sekundäre Navigation oder Hinweise.
    //
    link: {
      default: {
        color: "#166D5B",
        hoverColor: "#114e44",
        underline: "none",
        hoverUnderline: "underline"
      },
      muted: {
        color: "#6B7280",
        hoverColor: "#166D5B",
        underline: "none"
      }
    },

    // ------------------------------
    // 6.3 Karten / Kacheln
    // ------------------------------
    //
    // base:
    // - allgemeine Karten (z. B. Vorteile-Kacheln).
    //
    // feature:
    // - spezielle Feature-Kacheln (größeres Icon, klarer Titel).
    //
    // faq:
    // - Container für FAQ-Elemente (Akkordeon).
    //
    card: {
      base: {
        bg: "#FAFAFA",
        padding: "40px",
        radius: "24px",
        shadow: "0 4px 20px rgba(0,0,0,0.08)"
      },
      feature: {
        iconSize: "40px",
        titleMarginBottom: "8px",
        textColor: "#374151"
      },
      faq: {
        bg: "#FFFFFF",
        padding: "24px 32px",
        radius: "16px",
        border: "1px solid #E5E7EB"
      }
    },

    // ------------------------------
    // 6.4 Accordion / FAQ
    // ------------------------------
    //
    // header:
    // - klickbarer Bereich, der die Frage und das Icon (+/-) enthält.
    //
    // body:
    // - die Antwort, die ein- und ausgeklappt wird.
    //
    accordion: {
      header: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: 1.5,
        iconSize: "20px",
        padding: "16px 0"
      },
      body: {
        fontSize: "16px",
        lineHeight: 1.6,
        paddingBottom: "16px"
      },
      border: "1px solid #E5E7EB",
      radius: "12px",
      gap: "8px" // Abstand zwischen mehreren FAQ-Items
    },

    // ------------------------------
    // 6.5 Formulare (Inputs, Dropdowns)
    // ------------------------------
    //
    // field:
    // - grundlegende Gestalt von Input- und Select-Feldern.
    //
    // label:
    // - Beschriftung über dem Feld.
    //
    // error:
    // - Fehlertext unter dem Feld.
    //
    form: {
      field: {
        height: "52px",               // große Click-/Tap-Fläche
        paddingInline: "16px",
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
        bg: "#FFFFFF",
        textColor: "#374151",
        placeholderColor: "#9CA3AF"
      },
      label: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#374151",
        marginBottom: "4px"
      },
      error: {
        color: "#DC2626",
        fontSize: "14px",
        marginTop: "4px"
      }
    }
  }
} as const;