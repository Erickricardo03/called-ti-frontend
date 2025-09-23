export interface UserRequest {
  name: string;
  email: string;
  password: string;
     role?: string; // <-- adicionar isso

}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
}
