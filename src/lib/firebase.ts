import { initializeApp } from 'firebase/app';
import { ref, child, get, set, remove, getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/**
 * 파이어베이스 데이터 반환 함수
 * @param key: 데이터 key
 */
const getFirebaseData = async (key: string) => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, key));
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val(); // Return the data directly from the async function
    } else {
      console.log('No data available');
      return ''; // Return an empty string if no data is available
    }
  } catch (error) {
    console.error(error);
    return ''; // Return an empty string in case of an error
  }
};

/**
 * 파이어베이스 데이터 셋팅 함수
 * @param key: 데이터 key
 * @param value: 데이터 값
 */
const setFirebaseData = async (key: string, value: string) => {
  await set(ref(db, `tokens/${key}`), value);
};

/**
 * 파이어베이스 데이터 삭제 함수
 * @param key: 데이터 key
 */
const removeFirebaseData = (key: string) => {
  remove(ref(db, key));
};

export { getFirebaseData, setFirebaseData, removeFirebaseData };
