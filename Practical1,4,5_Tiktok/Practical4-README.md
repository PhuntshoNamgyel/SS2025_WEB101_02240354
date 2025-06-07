# TikTok Frontend + Backend Integration

This project connects a **Next.js frontend** to an **Express.js backend** to implement user authentication, personalized video feeds, and social features such as following users and liking videos.

---

## Project Overview

In this practical, you will:
- Secure the frontend using JWT-based authentication
- Fetch video and user data from the backend API
- Implement video interactions (like, comment, follow)
- Create a personalized following feed
- Build user discovery and dynamic profile pages

---

## Setup Instructions

### 1. Clone the Repositories

```bash
# Frontend
git clone https://github.com/syangche/TikTok_Frontend.git

# Backend
git clone https://github.com/syangche/TikTok_Server.git
```

### 2. Install Frontend Dependencies

```bash
cd TikTok_Frontend
npm install axios jwt-decode react-hot-toast
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the frontend project:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## Authentication Integration

### API Configuration
- Set up Axios instance in `src/lib/api-config.js`
- Automatically attach JWT tokens in requests
- Handle API errors globally

### Auth Context
- Create `src/contexts/authContext.jsx`
- Wrap the app with `AuthProvider` in `layout.js`

### Auth UI Components
- Modal: `src/components/ui/Modal.jsx`
- Auth Forms: `src/components/auth/AuthForms.jsx`
- Combined UI: `src/components/auth/AuthModal.jsx`

### Layout Update
- Modify `MainLayout.jsx` to show login/logout and protect routes based on auth status

---

## Video Feed & Interactions

### Video Services
- Create `src/services/videoService.js` for API functions (fetch, like, comment)

### Video Components
- Update `VideoCard.jsx` to handle real data and interactions
- Update `VideoFeed.jsx` to fetch videos with loading/error handling

---

## Social Features

### User Services
- Add `src/services/userService.js` to manage profile and follow actions

### Explore Users Page
- Create `src/app/explore-users/page.jsx` to browse and follow users

### Following Feed
- Create `src/app/following/page.jsx` to show videos only from followed users

### Dynamic Profile Page
- Create `src/app/profile/[userId]/page.jsx` for individual user profiles

---

## Upload Feature

- Create or update `src/app/upload/page.jsx` for uploading videos (caption, thumbnail)

---

## Testing Checklist

- Register multiple accounts
- Upload videos with different users
- Follow/unfollow users
- Like/unlike videos
- View profiles and test playback
- Log in/out and test protected routes

---

## Resources

- Next.js Docs
- React Hook Form
- Axios
- JWT Introduction
- Express.js Docs
- Prisma Docs