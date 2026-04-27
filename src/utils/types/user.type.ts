type ID = string;

interface User {
  id: ID;
  name: string;
  email: string;
  avatar?: string;
  projectIds: ID[];
}

interface Project {
  id: ID;
  name: string;
  key: string;
  description?: string;
  memberIds: ID[];
  featureIds: ID[];
  sectionIds: ID[];
  createdAt: string;
  updatedAt: string;
}

interface Feature {
  id: ID;
  projectId: ID;
  title: string;
  description?: string;
  status: "planned" | "in-progress" | "done";
}

interface Section {
  id: ID;
  projectId: ID;
  title: string;
  order: number;
  storyCardIds: ID[];
  ticketIds: ID[];
}

interface StoryCard {
  id: ID;
  projectId: ID;
  sectionId: ID;
  featureId?: ID;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "in-progress" | "done";
  ticketIds: ID[];
}

interface Ticket {
  id: ID;
  projectId: ID;
  sectionId: ID;
  storyCardId?: ID;
  parentTicketId?: ID;
  title: string;
  description?: string;
  assigneeId?: ID;
  reporterId?: ID;
  type: "task" | "bug" | "improvement";
  priority: "low" | "medium" | "high" | "critical";
  status: "todo" | "in-progress" | "review" | "done";
  subTicketIds: ID[];
  dueDate?: string;
  labels: string[];
}

interface SubTicket {
  id: ID;
  ticketId: ID;
  title: string;
  done: boolean;
}
