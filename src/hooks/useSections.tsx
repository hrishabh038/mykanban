import type { SectionType } from "../utils/types/majour.types";
import { metadata } from "../utils/metadata/metadata";

export const useGetAllSectionsWithParentId = (
  projectId: string,
): SectionType[] => {
  return metadata.sections.filter((section) => section.projectId === projectId);
};
