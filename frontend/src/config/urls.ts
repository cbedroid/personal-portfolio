export const API_BASE_URL = "/api/";

export const api_urls = {
  users: `${API_BASE_URL}users/`,
  user: (id: number) => `${API_BASE_URL}users/${id}`,
  userProfiles: `${API_BASE_URL}userprofiles/`,
  userProfile: (id: number) => `${API_BASE_URL}userprofiles/${id}`,
  projects: `${API_BASE_URL}projects/`,
  project: (id: number) => `${API_BASE_URL}projects/${id}`,
  skills: `${API_BASE_URL}skills/`,
  skill: (id: number) => `${API_BASE_URL}skills/${id}`,
  technologies: `${API_BASE_URL}technology/`,
  technology: (id: number) => `${API_BASE_URL}technology/${id}`,
  resumes: `${API_BASE_URL}resumes/`,
  resume: (id: number) => `${API_BASE_URL}resume/${id}`,
};
