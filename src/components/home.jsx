
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./loader";
import ArticleCard from './article_card';

const topics = ['news', 'sport', "tech", 'world', 'finance', "politics", "business", 'economics', "entertainment", "beauty", "travel", 'music', "food", "science", "gaming", "energy"];


export default function Home({selectedTopic, setSelectedTopic}) {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateSelectedTopic = (topic) => {
    setSelectedTopic(topic);
  }

  const searchArticles = () => {
    let url = 'https://newsapi.org/v2/top-headlines?language=en';
    if((selectedTopic !== '' && selectedTopic.length >= 3)) {
      url = `https://newsapi.org/v2/everything?q=${selectedTopic}&sortBy=popularity`;
    }
    if((selectedTopic !== '' && selectedTopic.length >= 3) || (articles.length === 0)) {
      setLoading(true);
      axios.get(url , {
        headers: {
          'x-api-key': '784bf109fd7740d5a54fac55780c23a4',
        }
      })
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
    }
  }

  useEffect(() => {
    searchArticles();
  }, [selectedTopic])

  useEffect(() => {
    searchArticles();
  }, [])

  return (
    <div className="w-full min-h-screen">
      <div className="mb-6">
        <TopicSection selectedTopic={selectedTopic} updateSelectedTopic={updateSelectedTopic}/>
      </div>
      <Articles articles={articles} loading={loading} />
    </div>
  )
}

function Articles({articles, loading}) {
  return (
    <div className="">
      <p className="mb-6">Articles</p>
      <div className="px-4 grid gap-6">
        {
          loading ? 
          <Loader />
          :
          articles.length > 0 ? 
          articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))
          :
          <div className="flex items-center justify-center h-60 capitalize">
            no articles found
          </div>
        }
      </div>
    </div>
  )
}

function TopicSection({selectedTopic, updateSelectedTopic}) {
  return (
      <div className="w-full">
        <p className="mb-6">Search by Topic...</p> 
        <div className="flex gap-2.5 items-center flex-wrap px-4">
          {
            selectedTopic !== '' && topics.includes(selectedTopic) ?
            <div className="px-4 py-2 rounded-full cursor-pointer bg-primaryBlue text-white capitalize shadow" onClick={() => {
              updateSelectedTopic('');
            }}>
              {selectedTopic}
            </div>
            : null
          }
          {
            topics.map((topic) => selectedTopic !== topic ? (
              <div className="px-4 py-2 rounded-full cursor-pointer bg-white text-primaryText capitalize shadow" onClick={() => {
                updateSelectedTopic(topic);
              }}>
                {topic}
              </div>
            ) : null)
          }
        </div>
      </div>
  );
}