# 🎨 ChatOFriend — Frontend

This is the Angular-based frontend application for **ChatOFriend**, a premium real-time chat experience.

---

## 🚀 Getting Started

This application is part of an Nx monorepo. It is recommended to run commands from the root directory.

### Serving the Application
```bash
npx nx serve frontend
```

### Building for Production
```bash
npx nx build frontend
```

---

## 🛠️ Key Technologies

- **Angular 17+**: Utilizing standalone components and signals for efficient state management.
- **Vanilla CSS**: Custom styling with CSS Variables for theme support.
- **Socket.io-Client**: Handling real-time communication with the backend.

---

## 🎨 Design System

The application uses a custom-built design system focused on **Glassmorphism**. Key tokens are defined in `src/styles.css`:

- `--primary`: Main accent color.
- `--secondary`: Sub-accent for gradients.
- `--glass-bg`: Semi-transparent background for cards.
- `--glass-border`: Thin border for the glass effect.

### Themes
Themes are applied via the `data-theme` attribute on the `body` tag:
- `midnight`
- `neon`
- `emerald`
- `sunset`

---

## 📁 Folder Structure

- `src/app/components/`: UI components (Chat, Landing).
- `src/app/services/`: Core business logic and shared state (Chat, Theme).
- `src/styles.css`: Global styles and design tokens.

---

For full project documentation, see the [Root README](../../README.md).
