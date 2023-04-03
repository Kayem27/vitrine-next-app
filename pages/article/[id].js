import Link from "next/link";

const article = ({ article }) => {
  return (
    <div>
      <div className="article-page">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <Link href="/">Revenir à l'acceuil</Link>
      </div>
    </div>
  );
};

export default article;

// Précharger coté serveur
export const getStaticProps = async (context) => {
//   console.log(context.params.id); 
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );

  const article = await res.json();
  return{
      props: {
        article,
      },
  } 
};

export const getStaticPath = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const articles = await res.json();
//   On prépare les id dans un objet Path {id:1, id:2, ...}
const ids = articles.map((article) => article.id);
console.log(ids);
};
