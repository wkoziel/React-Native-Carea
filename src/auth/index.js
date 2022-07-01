import {
   readStorageData,
   saveStorageData,
   storageKeys,
} from '../utils/storage';
import { login } from '../redux/auth';

export const loginUser = async (email, password) => {
   const users = (await readStorageData(storageKeys.users)) || [];
   if (users.find((u) => u.email === email && u.password === password)) {
      return true;
   }
   return false;
};

export const registerUser = async (email, password) => {
   const users = (await readStorageData(storageKeys.users)) || [];
   if (!users?.find((user) => user.email === email)) {
      await saveStorageData(storageKeys.users, [...users, { email, password }]);
   }
};
