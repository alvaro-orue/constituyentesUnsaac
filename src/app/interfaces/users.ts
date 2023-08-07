export default interface User {
  uid: string;
  email: string;
  semester?: string;
  career?: string;
  college?: string;
  name?: string;
  photoURL?: string;
  role: string;
  emailVerified: boolean;
}
