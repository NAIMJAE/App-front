import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getArticleView } from '../api/ArticleApi';
import { Card, Text } from 'react-native-paper';

function ViewPage({ route }) {
    /** 파라미터 받기 */
    const { articleNo } = route.params;

    const [article, setArticle] = useState('');

    useEffect(() => {
        console.log(articleNo)
        const fetchData = async () => {
            try {
                const response = await getArticleView(articleNo);
                setArticle(response);
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

  return (
    <View>
        <Text variant="displayMedium">글보기</Text>
        <Card>
            <Card.Content>
                <Text variant="headlineMedium">{article.articleTitle}</Text>
                <Text variant="headlineSmall">{article.articleWriter}</Text>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="bodyLarge">{article.articleContent}</Text>
            </Card.Content>
        </Card>
    </View>
  );
}

export default ViewPage;
