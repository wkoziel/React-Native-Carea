import React, { useState } from 'react';
import { Picker as P } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

function Selector(props) {
   const [selectedLanguage, setSelectedLanguage] = useState();

   return (
      <View style={styles.container}>
         <P
            onValueChange={(itemValue, itemIndex) =>
               setSelectedLanguage(itemValue)
            }
            selectedValue={selectedLanguage}
         >
            <P.Item label='Java' value='java' />
            <P.Item label='JavaScript' value='js' />
            <P.Item label='sdsdsd' value='sdsd' />
         </P>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      background: 'black',
      height: 10,
   },
});

export default Selector;
