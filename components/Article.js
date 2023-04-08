import Link from "next/link";

const Article = ({ article }) => {
  return (
    <Link
      className="article"
      href="/article/[id]"
      as={`/article/${article.id}`}
    >
      <h3>{article.title} ➡️</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default Article;
