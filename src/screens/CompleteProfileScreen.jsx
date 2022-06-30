import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GoBackPanel from '../components/GoBackPanel';
import TextInput from '../components/TextInput';
import ChangePhoto from '../components/ChangePhoto';
import Button from '../components/Button';
import routes from '../routes';
import { saveStorageData } from '../utils/storage';
import { useSelector } from 'react-redux';

const defaultPhoto =
   'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg';

function CompleteProfileScreen({ navigation }) {
   const [selectedImage, setSelectedImage] = useState(defaultPhoto);
   const [fullName, setFullName] = useState(null);
   const [nickname, setNickname] = useState(null);
   const [phoneNumber, setPhoneNumber] = useState(null);
   const [dateOfBirth, setDateOfBirth] = useState(null);
   const [contactEmail, setContactEmail] = useState(null);
   const [gender, setGender] = useState(null);

   const user = useSelector((state) => state.auth.email);

   const goBackPressHandler = () => {
      navigation.navigate(routes.signIn);
   };

   const saveButtonPressHandler = async () => {
      console.log('save');
      if (
         selectedImage &&
         fullName &&
         nickname &&
         dateOfBirth &&
         contactEmail &&
         gender
      ) {
         const userData = {
            photo: selectedImage,
            fullName,
            nickname,
            dateOfBirth,
            contactEmail,
            gender,
         };
         console.log(user);
         await saveStorageData(user, userData);
         navigation.navigate(routes.home);
      }
   };

   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel label='Fill Your Profile' onPress={goBackPressHandler} />
         <ChangePhoto
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
         />
         <TextInput
            placeholder='Full Name'
            value={fullName}
            onChange={setFullName}
         />
         <TextInput
            placeholder='Nickname'
            value={nickname}
            onChange={setNickname}
         />
         <TextInput
            placeholder='Date of birth'
            value={dateOfBirth}
            onChange={setDateOfBirth}
            icon='calendar'
            iconRight
            iconColor={dateOfBirth ? 'black' : 'gray'}
         />
         <TextInput
            placeholder='Contact email'
            value={contactEmail}
            onChange={setContactEmail}
            icon='email'
            iconRight
            type='emailAddress'
            iconColor={contactEmail ? 'black' : 'gray'}
         />
         <TextInput
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={setPhoneNumber}
            type='telephoneNumber'
            icon='phone'
            iconColor={phoneNumber ? 'black' : 'gray'}
            iconRight
         />
         <TextInput
            placeholder='Gender'
            value={gender}
            onChange={setGender}
            icon='arrow-down'
            iconRight
            iconColor={gender ? 'black' : 'gray'}
         />
         <Button label='Save' onPress={saveButtonPressHandler} primary />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
   },
});

export default CompleteProfileScreen;
