# Reflection

##  Main Concepts Applied

In this practical, I used several important web development concepts:

- **Next.js App Router** - I used the latest App Router system to organize the app pages under the `src/app` directory
- **Tailwind CSS** - I applied Tailwind for fast and responsive styling across the layout and components
- **React Components** - I created reusable UI components like `VideoCard` and `VideoFeed` to show videos on the home page
- **Main Layout** - I built a layout component (`MainLayout.jsx`) with a sidebar, top navigation, and content area similar to TikTok's design
- **Routing and Navigation** - I created multiple pages like Home, Explore, Live, Upload, and Profile using Next.js routing
- **React Hook Form** - I used this library to build and validate login and signup forms easily with less code and better performance
- **Form Validation** - I used rules like required fields, minimum password length, email format checks, and password matching

---

##  What I Learned

This project helped me understand how to build a web app using modern tools like **Next.js**, **Tailwind CSS**, and **React Hook Form**. I learned how to:

- Structure a Next.js project using the `src` directory
- Create a layout and link multiple pages together
- Build UI components and style them using Tailwind
- Manage form state and validation with React Hook Form

---

##  Challenges and How I Solved Them

### 1. Tailwind not working at first
- **Problem:** The styles didn't apply after setup
- **Solution:** I rechecked `globals.css` and ensured I kept only Tailwind directives. That fixed it

### 2. Layout not showing correctly
- **Problem:** The sidebar and content were overlapping
- **Solution:** I adjusted the layout using Tailwind's flex utilities and tested with smaller components first

### 3. Form validation not displaying errors
- **Problem:** Error messages were not showing under inputs
- **Solution:** I added checks using `errors.fieldName?.message` in JSX and used `register` properly for each input

---

##  Conclusion

Overall, this practical helped me gain hands-on experience in building a structured web app with real features. It also taught me how to debug and find solutions when things didn't work at first.