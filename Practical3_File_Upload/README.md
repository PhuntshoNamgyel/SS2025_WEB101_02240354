# File Upload Application (React + Next.js)

A React (Next.js) application that allows users to upload files with validation, drag-and-drop support, and upload progress tracking.

---

## Project Setup

### Step 1: Create a New Project

```bash
npx create-next-app file-upload
cd file-upload
```

### Step 2: Install Required Dependencies

```bash
npm install react-hook-form formidable axios react-dropzone
```

---

## Features

- Upload files using a form
- Drag-and-drop interface using `react-dropzone`
- File type and size validation with `react-hook-form`
- Upload progress tracking using `axios`
- Backend API route using `formidable` to handle multipart data

---

## Project Structure

- **`pages/index.js`** - Frontend form with file input, validation, and drag-and-drop
- **`pages/api/upload.js`** - Backend API to process file uploads and track progress

---

## References

**GitHub Reference Code:** https://github.com/syangche/React_Practicals.git