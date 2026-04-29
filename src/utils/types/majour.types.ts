export interface UserType {
  id: string;
  fullname: string;
  bio?: string;
  email: string;
  avatar?: string;

  projectIds: string[];

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description?: string;

  memberIds: string[];
  sectionIds: string[];

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface SectionType {
  id: string;
  title: string;
  description?: string;

  projectId: string;
  storyCardIds: string[];
  ticketIds: string[];
  workflowId: string;

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowStepType {
  id: string;
  title: string;
  description?: string;

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowType {
  id: string;
  title: string;
  description?: string;

  workflowSteps: WorkflowStepType[];
  defaultWorkflowStep: WorkflowStepType;

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoryCardType {
  id: string;
  title: string;
  description?: string;
  assignedTo: string;
  storyPoints?: number;
  priority: "low" | "medium" | "high";

  workflowStep: WorkflowStepType;
  workflowId: string;

  projectId: string;
  sectionId: string;
  ticketIds?: string[];

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketType {
  id: string;
  title: string;
  description?: string;
  assignedTo: string;
  storyPoints?: number;
  priority: "low" | "medium" | "high" | "critical";

  workflowStep: WorkflowStepType;
  workflowId: string;

  projectId: string;
  sectionId: string;
  storyCardId?: string;
  parentTicketId?: string;
  subTicketIds?: string[];

  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}
