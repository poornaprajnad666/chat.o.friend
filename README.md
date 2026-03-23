# 🚀 ChatOFriend — Connect with Style

![ChatOFriend UI Preview](file:///C:/Users/Poorna%20Prajna%20D/.gemini/antigravity/brain/def0e81e-5054-423f-ae0c-c118bbd25f13/chat_o_friend_ui_preview_1774291847382.png)

**ChatOFriend** is a premium, real-time chat application designed with a focus on modern aesthetics and seamless user experience. Built on a powerful Nx monorepo architecture, it combines the robustness of Angular with the real-time capabilities of Socket.io and Node.js.

---

## ✨ Key Features

- **🌐 Real-Time Connectivity**: Experience instantaneous messaging powered by Socket.io, ensuring zero-latency communication.
- **🎨 Multi-Theme Experience**: Switch between four stunning, curated themes:
  - 🌌 **Midnight**: Deep blues and purples for a classic dark mode.
  - 💖 **Neon**: Vibrant pinks and cyan for a high-energy look.
  - 🍃 **Emerald**: Calming greens for a focused environment.
  - 🌅 **Sunset**: Warm ambers and browns for a cozy feel.
- **💎 Glassmorphic UI**: A state-of-the-art interface featuring backdrop blurs, soft shadows, and semi-transparent panels.
- **👥 Active Presence**: Real-time user list to see who's online at a glance.
- **⚡ Modern Architecture**: Leverages Nx for a scalable monorepo setup, sharing logic and maintaining consistency.
- **💅 Premium Polish**: Custom animations, floating objects on the landing page, and responsive design across all devices.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Angular 17+](https://angular.io/), [Signals](https://angular.io/guide/signals), [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Glassmorphism) |
| **Backend** | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Socket.io](https://socket.io/) |
| **Persistence**| [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) |
| **Monorepo** | [Nx Dev Tools](https://nx.dev/) |

---

## 📂 Project Structure

```text
chat.o.friend/
├── apps/
│   ├── frontend/         # Angular application
│   └── api/              # Node.js Express server
├── libs/                 # Shared libraries (future use)
└── package.json          # Root workspace configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-o-friend.git
   cd chat-o-friend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment:
   Create a `.env` file in `apps/api/` with:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the Application

To start both the frontend and backend concurrently:

```bash
# Start Frontend
npx nx serve frontend

# Start Backend
npx nx serve api
```

The application will be available at `http://localhost:4200` and the API at `http://localhost:3000`.

---

## 🧪 Development Workflow

- **Generate Component**: `npx nx g @nx/angular:component my-component --project=frontend`
- **Build for Production**: `npx nx build frontend --prod`
- **Run Tests**: `npx nx test frontend`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Poorna Prajna D](https://github.com/poornaprajnad666)
