import Article from "@/components/Article";
import Meta from "@/components/Meta";

const index = ({articles}) => {
  console.log(articles);
  return (
    <div>
      <Meta />
      <h1>BLOG</h1>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

// Executer le code coté serveur 
// On récupère les données des articles depuis l'API
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  const articles = await res.json();

  return {
    props:{
      articles,
    }
  }
}
