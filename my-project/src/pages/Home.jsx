import { useEffect, useState } from "react";
import { fetchData } from "../data/data";
import "./Home.css"; // Import the CSS file for styles

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.articles); // Access 'articles' from the response
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container'>
      <div className='articles'>
        {/* First two rows with 3 articles each */}
        <div className='row'>
          {data.slice(0, 6).map((item, index) => (
            <div key={index} className='article-box'>
              <div
                className='article-image'
                style={{ backgroundImage: `url(${item.urlToImage})` }}>
                <div className='overlay'>
                  <h2 className='title'>{item.title}</h2>
                  <div className='author-info'>
                    <span className='author'>{item.author || "Unknown"}</span>
                    <span className='date'>
                      {item.publishedAt &&
                        new Date(item.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Starting from the 7th article, display them one by one */}
        {data.slice(6).map((item, index) => (
          <div key={index} className='single-article'>
            <div
              className='article-image'
              style={{ backgroundImage: `url(${item.urlToImage})` }}>
              <div className='overlay'>
                <h2 className='title'>{item.title}</h2>
                <div className='author-info'>
                  <span className='author'>{item.author || "Unknown"}</span>
                  <span className='date'>
                    {item.publishedAt &&
                      new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
