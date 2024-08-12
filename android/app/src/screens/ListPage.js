import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { getArticleList } from '../api/ArticleApi';
import { useNavigation } from '@react-navigation/native';
import { DataTable, Button, Text } from 'react-native-paper';

function ListPage({ route }) {
  /** 파라미터 받기 */
  const { category } = route.params;

  /** 페이징 관리 */
  const [pageRequest, setPageRequest] = useState({
    "cate" : category,
    "type" : null,
    "keyword" : null,
    "pg" : 1,
  })
  // 게시글 목록
  const [articleList, setArticleList] = useState([]);

  // 서버에서 게시글 목록 가져오기
  useEffect(() => {
    console.log("list222");
      const fetchData = async () => {
          try {
              const response = await getArticleList(pageRequest);
              console.log(response);
              setArticleList(response.dtoList);
          } catch(err) {
              console.log(err);
          }
      }
      fetchData();
  }, [pageRequest]);

  const navigation = useNavigation();

  const ClickBtn = (articleNo) => {
    navigation.navigate('View', { articleNo: articleNo })
  }

  return (
    <SafeAreaView>
      <View>
        <Text variant="displayMedium">목록</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>No</DataTable.Title>
            <DataTable.Title>Title</DataTable.Title>
            <DataTable.Title>Writer</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
          </DataTable.Header>

          {articleList.map((article, index) => (
            <DataTable.Row key={index} onPress={() => ClickBtn(article.articleNo)}>
              <DataTable.Cell>{article.articleNo}</DataTable.Cell>
              <DataTable.Cell numeric>{article.articleTitle}</DataTable.Cell>
              <DataTable.Cell numeric>{article.articleWriter}</DataTable.Cell>
              <DataTable.Cell numeric>{article.articleDate.split('T')[0]}</DataTable.Cell>
            </DataTable.Row>
          ))}

        </DataTable>
        <Button mode="contained" onPress={() => navigation.navigate('Write', { category: category })}>글쓰기</Button>

      </View>
    </SafeAreaView>
  );
}

export default ListPage;
