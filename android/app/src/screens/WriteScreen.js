import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { getArticleView, writeArticle } from '../api/ArticleApi';
import { useNavigation } from '@react-navigation/native';
import { DataTable, Button, Text, TextInput } from 'react-native-paper';

function WriteScreen({ route }) {
    /** 파라미터 받기 */
    const { category } = route.params;

    const navigation = useNavigation();

    // 사용자가 입력한 값을 저장하는 useState
    const [article, setArticle] = useState({
        "articleTitle" : "",
        "articleContent" : "",
        "articleCate" : category,
        "articleWriter" : "abcd1111",
    })

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // 게시글 작성 버튼 함수
    const handleSubmit = async (e) => {
        if (title !== "" || content !== "") {

            const data = {
                articleTitle : title,
                articleContent : content,
                articleCate : category,
                articleWriter : "abcd1111",
            }

            try {
                const response = await writeArticle(data);
                if (response > 0) {
                    navigation.navigate('List', { category: category })
                }else {
                    alert("실패");
                }
            }catch(err) {
                console.log(err);
            }
        }else {
            alert("빈칸있음");
        }
    }

  return (
    <View>
        <Text variant="displayMedium">{category} 글쓰기</Text>
        <TextInput label="제목" style={styles.input} onChangeText={setTitle}></TextInput>
        <TextInput label="내용" style={styles.input2} onChangeText={setContent}></TextInput>
        <Button title='저장' onPress={handleSubmit}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        margin: 12,
        padding: 4,
    },
    input2: {
        height: 400,
        margin: 12,
        padding: 4,
    },
});

export default WriteScreen;
