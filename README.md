# React Blogging Platform
A simple blogging platform built with React, allowing users to read, write, edit, and delete blog posts.
The React blogging platform is designed to allow users to read, write, edit, and delete blog posts. It includes features such as displaying a list of blog posts, viewing full post content, adding new posts, editing existing posts, and deleting posts. The project leverages React for building the user interface, styled-components for styling, and local state management to handle blog post data.

# Features
Display a list of blog posts with titles, authors, summaries, and publication dates.
View full content of a blog post.
Add new blog posts.
Edit existing blog posts.
Delete blog posts.


# Technologies Used
React
styled-components
CSS for styling

# Development Mode
Start the development server:
npm start


# Functionality and Implementation Details
1) Displaying Blog Posts (BlogPostList.js):

2) Retrieves list of blog posts from local storage or mock API using useState and useEffect hooks.
Maps through the list to display titles, authors, summaries, and publication dates.
Provides buttons to view, edit, and delete each post.
Viewing a Blog Post (BlogPost.js):

3) Renders full content of a selected blog post when clicked from BlogPostList.
Implements conditional rendering based on selected post state.
Adding a New Post (AddEditPostForm.js):

4) Form component with input fields (title, author, content, publication date) managed using useState.
Handles form submission to add new posts to the list.
Editing an Existing Post (AddEditPostForm.js):

5) Reuses the same form component (AddEditPostForm) to edit existing posts.
Prefills form fields with existing post data for editing.
Updates post data on form submission.
Deleting a Post (BlogPostList.js):

6) Provides functionality to delete a post from the list.
Updates state to reflect the deletion and removes the post from view.
Styling (styled-components):

7) Uses styled-components for styling, ensuring scoped styles and ease of maintenance.
Global styles (GlobalStyles.js) handle base styles like font-family and margin/padding adjustments.
Component-specific styles (BlogPostStyles.js, FormStyles.js) define layout, colors, and other design elements.