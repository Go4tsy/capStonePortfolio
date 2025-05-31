// Placeholder for Sanity CMS integration
// To enable, install @sanity/client and configure your project ID, dataset, and token
import sanityClient from '@sanity/client';

// Initialize Sanity client using environment variables
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// GROQ queries for projects and blog posts
const PROJECTS_QUERY = '*[_type == "project"] | order(date desc)';
const BLOGPOSTS_QUERY = '*[_type == "blogPost"] | order(date desc)';

// Fetch projects from Sanity, fallback to local JSON
export async function getProjects() {
  try {
    return await client.fetch(PROJECTS_QUERY);
  } catch (e) {
    // Fallback to local data if CMS is unavailable
    return fetch('/projects.json').then(res => res.json());
  }
}

// Fetch blog posts from Sanity, fallback to local JSON
export async function getBlogPosts() {
  try {
    return await client.fetch(BLOGPOSTS_QUERY);
  } catch (e) {
    // Fallback to local data if CMS is unavailable
    return fetch('/blogPosts.json').then(res => res.json());
  }
}

// Add similar functions for blog posts, etc.

// This file is now ready for live Sanity CMS integration with fallback support. 