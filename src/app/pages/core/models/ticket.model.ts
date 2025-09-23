export interface CreateTicketRequest {
  title: string;
  description: string;
  priority: Priority;
  requesterId: number;
  category: string;
  assigneeId?: number;
}

export interface TicketResponse {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: TicketStatus;
  category: string;
  requester: { id: number, name: string }; 
  assignee?: { id: number, name: string };
  createdAt: string;
  updatedAt: string;
}


export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
  FINALIZED = 'FINALIZED'
}
