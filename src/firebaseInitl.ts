
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" // New import
import { FIREBASE_CONFIG } from './env-values';

const app = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(app);
export default app;
