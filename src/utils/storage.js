import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKeys = {
   users: 'users',
};

export const saveStorageData = async (key, newData) => {
   try {
      await AsyncStorage.setItem(key, JSON.stringify(newData));
      console.log('Data successfully saved');
   } catch (e) {
      console.log('Failed to save the data to the storage');
   }
};

export const readStorageData = async (key) => {
   try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) return JSON.parse(data);
      return null;
   } catch (e) {
      console.log('Failed to fetch the input from storage');
   }
};
