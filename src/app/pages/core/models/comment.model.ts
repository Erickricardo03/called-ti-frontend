// src/app/core/models/comment.model.ts

export interface CommentResponse {
  id: number;
  content: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
  ticketId: number;
}
