# Medicare Central Web - Registration Portal

A modern, user-friendly registration portal for Medicare healthcare platform built with React, TypeScript, and Vite.

## 🚀 Features

- **Multi-Role Registration**: Support for Doctor, Nurse, and Vendor registration
- **OTP Verification**: Email-based OTP verification system
- **Toast Notifications**: Modern, user-friendly error and success messages
- **Responsive Design**: Mobile-first, fully responsive UI
- **Type-Safe**: Built with TypeScript for better developer experience
- **Form Validation**: Client-side and server-side validation with clear error messages

## 📁 Project Structure

```
my-app/
├── src/
│   ├── assets/               # Static assets (images, icons)
│   ├── core/                 # Shared functionality (utils, hooks, constants)
│   ├── shared/               # Shared UI components (common buttons, layout)
│   ├── modules/              # Feature-based modules
│   │   ├── landing-page/     # Landing Page module (components, pages)
│   │   ├── home-nursing/     # Home Nursing module (nurse, therapist)
│   │   ├── specialist/       # Specialist module (doctor)
│   │   ├── clinic/           # Clinic module (lab assistant)
│   │   └── pharmacy/         # Pharmacy module (vendor)
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> **Note:** The project is currently transitioning to this modular architecture. Some features might still reside in the legacy `src/pages` or `src/components` folders during the migration process.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/medicare-centralweb.git
   cd medicare-centralweb/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your API endpoints:
   ```
   VITE_API_BASE_URL=https://dev.medicarebackend.com/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type checking
npm run type-check
```

## 📝 Usage

### Registration Flow

1. **Select Role**: User chooses between Doctor, Nurse, or Vendor
2. **Fill Form**: User completes registration form with validation
3. **OTP Verification**: User receives OTP via email and verifies
4. **Success**: User is redirected to role-specific dashboard

### Toast Notification System

The app uses a custom Toast notification system for user feedback:

```tsx
import { useToast } from './components/common/ToastContainer';

const MyComponent = () => {
  const { showSuccess, showError, showWarning, showInfo } = useToast();

  const handleAction = () => {
    try {
      // Your logic
      showSuccess('Action completed successfully!');
    } catch (error) {
      showError('Something went wrong');
    }
  };
};
```

### Error Handling

User-friendly error messages are handled via `errorHandler.ts`:

```tsx
import { getErrorMessage } from './utils/errorHandler';

// Transform backend errors to user-friendly messages
const friendlyMessage = getErrorMessage(error);
showError(friendlyMessage);
```

## 🎨 UI Components

### Toast Component
- **Types**: success, error, warning, info
- **Features**: Auto-dismiss, manual close, animated entrance/exit
- **Location**: Top-right corner (customizable)

### Registration Forms
- **Validation**: Real-time form validation
- **Error Display**: Inline error messages + toast notifications
- **Phone Input**: Auto-format and sanitize
- **Password**: Minimum 8 characters with strength requirements

## 🔧 Configuration

### API Endpoints

Configure in `src/constants/constant.ts`:

```typescript
export const BASE_API_URL = "https://dev.medicarebackend.com/api";

// Registration endpoints
export const DOCTOR_REGISTER_URL = "/register/doctor";
export const VENDOR_REGISTER_URL = "/register/vendor";
export const NURSE_REGISTER_URL = "/register/nurse";
```

### Routes

All routes are defined in `src/App.tsx` and `src/constants/constant.ts`.

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security

- Password minimum 8 characters
- Client-side input sanitization
- HTTPS only for production
- Secure OTP verification flow

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- **Project Lead**: [Your Name]
- **Frontend Developer**: [Developer Name]
- **Backend Developer**: [Developer Name]

## 📞 Support

For support, email support@medicare.com or open an issue in the repository.

## 🔄 Recent Updates

### v1.2.0 (May 2026)
- ✅ Introduced Modular Architecture (`src/modules/*`)
- ✅ Migrated Landing Page to `src/modules/landing-page`

### v1.1.0 (December 2024)
- ✅ Added Toast notification system
- ✅ Improved error handling with user-friendly messages
- ✅ Enhanced form validation
- ✅ Updated UI/UX for better accessibility

### v1.0.0 (Initial Release)
- ✅ Multi-role registration system
- ✅ OTP verification
- ✅ Responsive design
- ✅ TypeScript implementation

---

**Built with ❤️ by Medicare Team**