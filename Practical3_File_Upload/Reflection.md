# File Upload Implementation Reflection

## Main Concepts Applied

In this practical, I applied key full-stack development concepts using React and Next.js. I created a file upload form that supports:

- Drag-and-drop functionality
- File validation (by type and size)
- Upload progress tracking
- Form handling using `react-hook-form`
- Drag-and-drop interface with `react-dropzone`
- HTTP requests with `axios` for sending upload requests
- Server-side file processing using `formidable`

---

## What I Learned

I learned how to set up a full-stack file upload system using modern tools. I now understand how to:

- Build a responsive and interactive form in React
- Handle form inputs and validation using `react-hook-form`
- Add drag-and-drop functionality with `react-dropzone`
- Track upload progress with `axios`
- Use a Next.js API route with `formidable` to parse multipart form data

This helped me connect frontend forms with backend API logic and understand how file uploads work in real web applications.

---

## Challenges and How I Solved Them

### Challenge 1: Configuring Formidable in Next.js API Route
- **Problem:** The file data was not being parsed correctly because Next.js parses requests differently than expected
- **Solution:** I solved this by disabling the default body parser in the API route and following examples from the official documentation and the GitHub reference

### Challenge 2: Showing Upload Progress to Users
- **Problem:** Upload progress wasn't clearly visible to users during file uploads
- **Solution:** I used `axios` with the `onUploadProgress` option, which allowed me to display the percentage of the file uploaded in real time

---

## Conclusion

This practical gave me hands-on experience in building a modern file upload feature using both frontend and backend tools. Key achievements include:

- Managing form input and performing validation effectively
- Handling file data in a real-world full-stack setup
- Strengthening my understanding of working with APIs
- Improving my confidence in using external libraries within a Next.js application

Overall, this project enhanced my full-stack development skills and provided valuable experience in creating interactive, user-friendly file upload functionality.