export interface CreateTicketRequest {
  subject: string;
  description: string;
  priority: Priority;
}

export interface TicketResponse {
  id: number;
  subject: string;
  description: string;
  priority: Priority;
  status: TicketStatus;
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED'
}
