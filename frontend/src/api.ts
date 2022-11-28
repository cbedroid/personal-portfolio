import axios from "axios";

import { api_urls } from "./config/urls";
import {
  ProjectEntity,
  ProjectListFilter,
  ProjectListResponse,
  ResumeEntity,
  ResumeListFilter,
  ResumeListResponse,
  SkillEntity,
  SkillListFilter,
  SkillListResponse,
  TechnologyEntity,
  TechnologyListFilter,
  TechnologyListResponse,
  UserEntity,
  UserListFilter,
  UserListResponse,
  UserProfileEntity,
  UserProfileListFilter,
  UserProfileListResponse,
} from "./types";

/* Inject API JWT authorization token to authorize requests */
// const apiToken = process.env.REACT_APP_API_TOKEN;
//
// if (!!apiToken) axios.defaults.headers.common["Authorization"] = `Token ${apiToken}`;

axios.defaults.headers.common["x-requested-with"] = "XMLHttpRequest";

export async function getProject(id: ProjectEntity["id"]) {
  const response = await axios.get<ProjectEntity>(`${api_urls.project}/${id}`);
  return response.data;
}

export async function fetchProjects(
  params: ProjectListFilter,
): Promise<ProjectListResponse> {
  const response = await axios(`${api_urls.projects}`, { params });
  return response.data;
}

export async function getSkill(id: SkillEntity["id"]) {
  const response = await axios.get<SkillEntity>(`${api_urls.skill}/${id}`);
  return response.data;
}

export async function fetchSkills(params: SkillListFilter): Promise<SkillListResponse> {
  const response = await axios(`${api_urls.skills}`, { params });
  return response.data;
}

export async function getTechnology(id: TechnologyEntity["id"]) {
  const response = await axios.get<TechnologyEntity>(`${api_urls.technology}/${id}`);
  return response.data;
}

export async function fetchTechnologies(
  params: TechnologyListFilter,
): Promise<TechnologyListResponse> {
  const response = await axios(`${api_urls.technologies}`, { params });
  return response.data;
}

export async function getUser(id: UserEntity["id"]) {
  const response = await axios(`${api_urls.user}/${id}`);
  return response.data;
}

export async function fetchUsers(
  params: UserListFilter | undefined,
): Promise<UserListResponse> {
  const response = await axios(`${api_urls.users}`, { params });
  return response.data;
}

export async function getUserProfile(id: UserProfileEntity["id"]) {
  const response = await axios(`${api_urls.userProfile}/${id}`);
  return response.data;
}

export async function fetchUserProfiles(
  params: UserProfileListFilter | undefined,
): Promise<UserProfileListResponse> {
  const response = await axios(`${api_urls.userProfiles}`, { params });
  return response.data;
}

export async function getResume(id: ResumeEntity["id"]) {
  const response = await axios(`${api_urls.resume}/${id}`);
  return response.data;
}

export async function fetchResumes(
  params: ResumeListFilter | undefined,
): Promise<ResumeListResponse> {
  const response = await axios(`${api_urls.resumes}`, { params });
  return response.data;
}
