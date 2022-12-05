import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";

import {
  fetchProjects,
  fetchResumes,
  fetchSkills,
  fetchTechnologies,
  fetchUserProfiles,
  fetchUsers,
  getProject,
  getResume,
  getSkill,
  getTechnology,
  getUser,
  getUserProfile,
} from "./api";
import queryClient from "./queryClient";
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

/* Skill Queries and Keys */
export const skillKeys = {
  all: ["skill"] as const,
  lists: () => [...skillKeys.all, "list"] as const,
  list: (filters: object) => [...skillKeys.lists(), filters] as const,
  details: () => [...skillKeys.all, "detail"] as const,
  detail: (id: SkillEntity["id"]) => [...skillKeys.details(), id] as const,
};

export function useGetSkillQuery(
  id: SkillEntity["id"],
  options?: UseQueryOptions<SkillEntity, AxiosError>,
) {
  return useQuery<SkillEntity, AxiosError>(
    skillKeys.detail(id),
    () => getSkill(id),
    options,
  );
}

export function useGetSkillsQuery(
  filters: SkillListFilter = {},
  options: UseQueryOptions<SkillListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<SkillListResponse, AxiosError>(
    skillKeys.list(filters),
    () => fetchSkills(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const skill of data.results) {
          queryClient.setQueryData(skillKeys.detail(skill.id), skill);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}

/* Project Queries and Keys */
export const projectKeys = {
  all: ["project"] as const,
  lists: () => [...projectKeys.all, "list"] as const,
  list: (filters: object) => [...projectKeys.lists(), filters] as const,
  details: () => [...projectKeys.all, "detail"] as const,
  detail: (id: ProjectEntity["id"]) => [...projectKeys.details(), id] as const,
};

export function useGetProjectQuery(
  id: ProjectEntity["id"],
  options?: UseQueryOptions<ProjectEntity, AxiosError>,
) {
  return useQuery<ProjectEntity, AxiosError>(
    projectKeys.detail(id),
    () => getProject(id),
    options,
  );
}

export function useGetProjectsQuery(
  filters: ProjectListFilter = {},
  options: UseQueryOptions<ProjectListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<ProjectListResponse, AxiosError>(
    projectKeys.list(filters),
    () => fetchProjects(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const project of data.results) {
          queryClient.setQueryData(projectKeys.detail(project.id), project);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}

/* Technology Queries and Keys */
export const technologyKeys = {
  all: ["technology"] as const,
  lists: () => [...technologyKeys.all, "list"] as const,
  list: (filters: object) => [...technologyKeys.lists(), filters] as const,
  details: () => [...technologyKeys.all, "detail"] as const,
  detail: (id: TechnologyEntity["id"]) => [...technologyKeys.details(), id] as const,
};

export function useGetTechnologyQuery(
  id: TechnologyEntity["id"],
  options?: UseQueryOptions<TechnologyEntity, AxiosError>,
) {
  return useQuery<TechnologyEntity, AxiosError>(
    technologyKeys.detail(id),
    () => getTechnology(id),
    options,
  );
}

export function useGetTechnologiesQuery(
  filters: TechnologyListFilter = {},
  options: UseQueryOptions<TechnologyListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<TechnologyListResponse, AxiosError>(
    technologyKeys.list(filters),
    () => fetchTechnologies(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const technology of data.results) {
          queryClient.setQueryData(technologyKeys.detail(technology.id), technology);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}

/* User Queries and Keys */
export const userKeys = {
  all: ["user"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: object) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: UserEntity["id"]) => [...userKeys.details(), id] as const,
};

export function useGetUserQuery(
  id: UserEntity["id"],
  options?: UseQueryOptions<UserEntity, AxiosError>,
) {
  return useQuery<UserEntity, AxiosError>(
    userKeys.detail(id),
    () => getUser(id),
    options,
  );
}

export function useGetUsersQuery(
  filters: UserListFilter = {},
  options: UseQueryOptions<UserListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<UserListResponse, AxiosError>(
    userKeys.list(filters),
    () => fetchUsers(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const user of data.results) {
          queryClient.setQueryData(userKeys.detail(user.id), user);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}

/* UserProfile Queries and Keys */
export const userProfileKeys = {
  all: ["userProfile"] as const,
  lists: () => [...userProfileKeys.all, "list"] as const,
  list: (filters: object) => [...userProfileKeys.lists(), filters] as const,
  details: () => [...userProfileKeys.all, "detail"] as const,
  detail: (id: UserProfileEntity["id"]) => [...userProfileKeys.details(), id] as const,
};

export function useGetUserProfileQuery(
  id: UserProfileEntity["id"],
  options?: UseQueryOptions<UserProfileEntity, AxiosError>,
) {
  return useQuery<UserProfileEntity, AxiosError>(
    userProfileKeys.detail(id),
    () => getUserProfile(id),
    options,
  );
}

export function useGetUserProfilesQuery(
  filters: UserProfileListFilter = {},
  options: UseQueryOptions<UserProfileListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<UserProfileListResponse, AxiosError>(
    userProfileKeys.list(filters),
    () => fetchUserProfiles(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const profile of data.results) {
          queryClient.setQueryData(userProfileKeys.detail(profile.id), profile);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}

/* UResume Queries and Keys */
export const resumeKeys = {
  all: ["resume"] as const,
  lists: () => [...resumeKeys.all, "list"] as const,
  list: (filters: object) => [...resumeKeys.lists(), filters] as const,
  details: () => [...resumeKeys.all, "detail"] as const,
  detail: (id: ResumeEntity["id"]) => [...resumeKeys.details(), id] as const,
};

export function useGetResumeQuery(
  id: ResumeEntity["id"],
  options?: UseQueryOptions<ResumeEntity, AxiosError>,
) {
  return useQuery<ResumeEntity, AxiosError>(
    resumeKeys.detail(id),
    () => getResume(id),
    options,
  );
}

export function useGetResumesQuery(
  filters: ResumeListFilter = {},
  options: UseQueryOptions<ResumeListResponse, AxiosError> = {
    enabled: true,
    refetchOnWindowFocus: false,
  },
) {
  return useQuery<ResumeListResponse, AxiosError>(
    resumeKeys.list(filters),
    () => fetchResumes(filters),
    {
      ...options,
      onSuccess: (data) => {
        for (const resume of data.results) {
          queryClient.setQueryData(resumeKeys.detail(resume.id), resume);
        }
        if (options?.onSuccess) {
          options.onSuccess(data);
        }
      },
    },
  );
}
