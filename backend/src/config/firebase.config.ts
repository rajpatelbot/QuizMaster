import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from "./env";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: messagingSenderId,
};

/*
 * Initialize Firebase
 */
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
