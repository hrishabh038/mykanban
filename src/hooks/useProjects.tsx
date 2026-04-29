import type { ProjectType } from "../utils/types/majour.types";
import { metadata } from "../utils/metadata/metadata";

export const useGetProject = (projectId: string): ProjectType | undefined => {
    return metadata.projects.find((project) => project.id === projectId);
}

export const useGetProjects = (): ProjectType[] => {
    return metadata.projects;
}