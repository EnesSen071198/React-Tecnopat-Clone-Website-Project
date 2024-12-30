import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Article = ({ data }) => {
  const { id } = useParams();
  const article = data[id];

  if (!article) return <div>Article not found</div>;

  return (
    <div className='article-detail'>
      <div
        className='article-image'
        style={{ backgroundImage: `url(${article.urlToImage})` }}>
        <div className='overlay'>
          <h2 className='title'>{article.title}</h2>
          <div className='author-info'>
            <span className='author'>{article.author || "Unknown"}</span>
            <span className='date'>
              {article.publishedAt &&
                new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <p>{article.description}</p>
      <p>{article.content}</p>
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.array.isRequired
};

export default Article;
