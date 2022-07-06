import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconSize = 30;

const options = [
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Marcedes',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'BMW',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Toyota',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Volvo',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Bugatti',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Honda',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'More',
      icon: (
         <MaterialCommunityIcons
            name='dots-horizontal-circle-outline'
            size={iconSize}
            color='black'
         />
      ),
      onPress: () => {},
   },
];

export default options;
