# Lipari Bank Dashboard (Angular 19 - Standalone)

Piccolo progetto didattico Angular 19 standalone con Signals, routing e layout a shell per simulare un dashboard bancario.

## Requisiti

- Node.js recente (>= 18 consigliato)
- npm

## Installazione & Avvio

1. Installa le dipendenze:

   ```bash
   npm install
   ```

2. Avvia il server di sviluppo:

   ```bash
   npx ng serve
   ```

   oppure, se hai Angular CLI globale:

   ```bash
   ng serve
   ```

L'applicazione sarà disponibile (di default) su `http://localhost:4200`.

## Struttura principale

- `src/app/app.component.*`: AppShell con header, sidebar e `<router-outlet>`.
- `src/app/core/layout/header`: header con pulsante Logout.
- `src/app/core/layout/sidebar`: sidebar con voci di menu.
- `src/app/core/services/user.service.ts`: servizio utente che espone `getCurrentUser()`.
- `src/app/features/dashboard/dashboard.component.ts`: dashboard minimale.
- `src/app/app.routes.ts`: definizione delle route principali.
- `src/main.ts`: bootstrap dell'applicazione standalone.

## 🐛 3 MISSIONI DI DEBUG

Nel progetto sono stati inseriti **3 bug intenzionali** per esercitarti nel debug di un'app Angular standalone con Signals e Router.

### MISSIONE 1

> **Problema:** "Il pulsante Logout è sempre visibile anche senza login."

### MISSIONE 2

> **Problema:** "La navigazione non funziona e c'è un NullInjectorError in console."

### MISSIONE 3

> **Problema:** "Le voci di menu della Sidebar non navigano. C'è un errore 'Can't bind to routerLink'."

