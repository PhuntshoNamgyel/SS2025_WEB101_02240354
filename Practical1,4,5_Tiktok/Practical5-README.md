# Infinite Scroll with TanStack Query

This project enhances the TikTok application by implementing **infinite scrolling** using **TanStack Query (React Query)** and **cursor-based pagination**. It allows users to scroll endlessly through video feeds with smooth performance and efficient data fetching.

---

## Overview

We use **cursor-based pagination** instead of offset-based to handle large datasets and new incoming content reliably. The frontend is built with **Next.js**, and the backend uses **Express.js** with **Prisma ORM**.

---

## Backend Implementation

### Step 1: Update Video Controller
- Modify `getAllVideos` in `src/controllers/videoController.js`
- Accepts `cursor` and `limit` query params
- Returns videos along with `nextCursor` and `hasNextPage`

### Step 2: Update Following Videos Controller
- Apply the same cursor-based pagination logic in `getFollowingVideos`

### Key Backend Changes
- Uses `cursor` and `limit` (instead of page numbers)
- Implements the "n+1" pattern to check for more data
- Utilizes Prisma's `cursor`, `skip`, and `take` methods

---

## Frontend Implementation (Next.js)

### Step 1: Install TanStack Query

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

### Step 2: Set Up Query Provider

In `src/app/layout.js`:
- Wrap your app with `QueryClientProvider`
- Optionally include `ReactQueryDevtools` for debugging

### Step 3: Update Video Service

In `src/services/videoService.js`:
- Create a function to fetch videos using cursor-based API
- Ensure it handles `nextCursor` and `hasNextPage` correctly

### Step 4: Add Intersection Observer Hook

Create `src/hooks/useIntersectionObserver.js`:
- Detect when the user scrolls near the bottom
- Trigger `fetchNextPage` from `useInfiniteQuery`

### Step 5: Update Video Feed

In `src/components/ui/VideoFeed.jsx`:
- Replace `useQuery` with `useInfiniteQuery`
- Use Intersection Observer to auto-load next pages
- Handle merged data and loading states

---

## Why Cursor-Based Pagination?

- **Offset-based**: Prone to inconsistency with dynamic data
- **Cursor-based**: Efficient and stable for infinite scroll
- Avoids skipping/duplicating items when data changes

---

## Resources

- TanStack Query Docs
- Infinite Queries Guide
- Intersection Observer API
- Prisma Pagination
- Next.js App Router Docs