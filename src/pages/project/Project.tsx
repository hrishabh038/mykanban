import { useParams } from "react-router-dom";
import {
  useGetUser,
  useGetProject,
  useGetAllSectionsWithParentId,
} from "../../hooks/hooks";
import { decodeDate } from "../../utils/helpers/helpers";
import { useState } from "react";
import Container from "../../containers/Container";
import {
  TextTypeAccordion,
  UniqueIdentifier,
} from "../../components/components";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = useGetProject(projectId!);

  // ✅ Single source of truth — only ONE section id can be open at a time
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="text-neutral-400 p-6">
        Project not found for id: {projectId}
      </div>
    );
  }

  const user = useGetUser(project.createdBy);
  const projectCreatorName = user?.fullname;
  const { day, date, month, year } = decodeDate(project.createdAt);
  const formattedDate = `${day}, ${date} ${month.label} ${year}`;

  const sections = useGetAllSectionsWithParentId(project.id);

  const handleToggle = (id: string) => {
    // If same section clicked → close it, else open the new one
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-10">
      {/* Project Header */}
      <div className="flex flex-col gap-4">
        <UniqueIdentifier className="text-xs" usingFor="proj" id={project.id} />
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        {project.description && (
          <p className="text-neutral-300">{project.description}</p>
        )}
        <p className="text-xs text-neutral-600">
          Created by{" "}
          <span className="text-purple-400">{projectCreatorName}</span> on{" "}
          <span className="text-neutral-500">{formattedDate}</span>
        </p>
      </div>

      {/* Sections */}
      <Container heading="sections" className="flex flex-col gap-2">
        {sections.map((section) => (
          <TextTypeAccordion
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            usingFor="sect"
            isOpen={openSectionId === section.id} // ✅ controlled externally
            onToggle={handleToggle}
          />
        ))}
      </Container>
    </section>
  );
};

export default Project;
