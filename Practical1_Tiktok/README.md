# TikTok Clone – Next.js Practical Project

A simplified TikTok-style web app using **Next.js**, **Tailwind CSS**, and **React Hook Form**. It includes sidebar navigation, a video feed layout, and basic login/signup forms.

---

##  Part 1: Getting Started

### Step 1: Navigate to Your Project Directory

Open your terminal and move into your GitHub repository directory:

```bash
cd your-repo-directory
```

### Step 2: Create a New Next.js Project

```bash
npx create-next-app@latest
```

Use the following settings when prompted:

- **TypeScript:** No
- **ESLint:** Yes
- **Tailwind CSS:** Yes
- **Use src/ directory:** Yes
- **App Router:** Yes
- **Customize import alias:** No

### Step 3: Clean Up Default Project

- Navigate to `src/app/page.js` and replace it with a basic component
- In `src/app/globals.css`, remove everything except:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Set Up Project Structure

Create folders inside the src directory:

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
```

---

##  Part 2: Web Layout and Interface

### Step 1: Install Icons

```bash
npm install react-icons
```

### Step 2: Update Layout Structure

- Create `src/components/layout/MainLayout.jsx` with navigation and layout
- Update `src/app/layout.js` to use MainLayout

### Step 3: Build Video Feed

Create UI components:

- `src/components/ui/VideoCard.jsx`
- `src/components/ui/VideoFeed.jsx`
- Update home page (`src/app/page.js`) to render VideoFeed

### Step 4: Add Pages

Create the following files:

- `src/app/following/page.jsx`
- `src/app/explore/page.jsx`
- `src/app/live/page.jsx`
- `src/app/upload/page.jsx` (match TikTok upload style)
- `src/app/profile/page.jsx` (match TikTok profile style)

### Step 5: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

##  Part 3: Login and Registration Forms

### Step 1: Install Form Library

```bash
npm install react-hook-form
```

### Step 2: Create Pages

- `src/app/login/page.jsx`
- `src/app/signup/page.jsx`

Use:

- `register`, `handleSubmit`, `watch`, and `errors` from React Hook Form
- `required`, `pattern`, `minLength`, and `validate` for validation rules

### Step 3: Update MainLayout Navigation

Modify `src/components/layout/MainLayout.jsx` to include:

- Login and Signup buttons in the sidebar
- Login button in the header

---

##  Testing the Forms

- **Submit without filling fields** → shows validation errors
- **Use invalid email format** → shows pattern error
- **Use short password** → shows minLength error
- **In signup, use mismatched passwords or skip terms checkbox** → shows custom validation error
- **On correct input** → shows loading and success message