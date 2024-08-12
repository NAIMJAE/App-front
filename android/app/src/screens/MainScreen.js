import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text  } from 'react-native-paper';
function MainScreen() {
  const navigation = useNavigation();

  const ClickBtn = (cate) => {
    navigation.navigate('List', { category: cate })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text variant="displayMedium">메인</Text>
          <Button mode="contained" onPress={() => ClickBtn('free')}>자유게시판</Button>
          <Button mode='contained-tonal' onPress={() => ClickBtn('notice')}>공지사항</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default MainScreen;
