export type ContactFormFields = {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
  recaptcha: string;
};

export interface ListResponse<T = unknown> {
  count: number;
  next: string | null;
  previous: string | null;
  num_pages: number;
  results: T[];
  distincts?: { [field: string]: (number | string | null)[] };
}

export type SocialAccountEntity = {
  id: number;
  title: string;
  link: string;
  icon?: string;
  user: string;
};

export type UserProfileEntity = {
  id: number;
  avatar: string;
  description: string;
  social_account: SocialAccountEntity[];
  user: UserProfileEntity["id"];
};

export type UserEntity = {
  id: string; // uuid
  username: string;
  first_name: string | undefined;
  last_name: string | undefined;
  full_name: string;
  profile: UserProfileEntity;
};

export type TechnologyEntity = {
  id: number;
  name: string;
  image: string;
  link: string;
};

export type SkillEntity = {
  id: number;
  title: string;
  experience: number;
  rate: number;
  user: UserEntity["id"];
};

export type ProjectEntity = {
  id: number;
  name: string;
  description: string;
  link: string | null;
  video: string;
  technology: TechnologyEntity[];
};

export type ResumeEntity = {
  id: number;
  url: string;
  user: UserEntity["id"];
  username: UserEntity["username"];
  created_at: string;
  updated_at: string;
};
// List filter params
export type SkillListFilter = {
  id?: SkillEntity["id"];
  title?: SkillEntity["title"];
  experience?: SkillEntity["experience"];
  user?: SkillEntity["user"];
};

export type TechnologyListFilter = {
  id?: TechnologyEntity["id"];
  name?: TechnologyEntity["name"];
};

export type ProjectListFilter = {
  id?: ProjectEntity["id"];
  name?: ProjectEntity["name"];
  technology?: ProjectEntity["technology"][];
};

export type UserListFilter = {
  id?: UserEntity["id"];
  username?: UserEntity["username"];
  first_name?: UserEntity["first_name"];
  last_name?: UserEntity["last_name"];
  profile?: UserProfileEntity;
};

export type UserProfileListFilter = {
  id?: UserEntity["id"];
  username?: UserEntity["username"];
};

export type ResumeListFilter = {
  id?: ResumeEntity["id"];
  user?: UserEntity["id"];
  username?: UserEntity["username"];
};
export type ProjectListResponse = ListResponse<ProjectEntity>;
export type TechnologyListResponse = ListResponse<TechnologyEntity>;
export type SkillListResponse = ListResponse<SkillEntity>;
export type UserListResponse = ListResponse<UserEntity>;
export type UserProfileListResponse = ListResponse<UserProfileEntity>;
export type ResumeListResponse = ListResponse<ResumeEntity>;
