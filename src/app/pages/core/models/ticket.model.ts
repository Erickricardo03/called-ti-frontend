export interface CreateTicketRequest {
  title: string;           // trocado de subject
  description: string;
  priority: Priority;
  requesterId: number;     // necessário para o backend
  category: string;        // necessário para o backend
  assigneeId?: number;     // opcional
}

export interface TicketResponse {
  id: number;
  title: string;           // trocado de subject
  description: string;
  priority: Priority;
  status: TicketStatus;
  category: string;
  requesterId: number;
  assigneeId?: number;
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
