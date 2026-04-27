interface Project {
  id: string;
  name: string;
  key: string;
  description?: string;
  memberIds: string[];
  sectionIds: string[];
  createdAt: string;
  updatedAt: string;
}

export default Project;