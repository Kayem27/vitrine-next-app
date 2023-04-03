import Link from "next/link";

const Article = ({article}) => {
  return (
    <Link href="" className="article">
        <div>
            <h3>{article.title} ➡️</h3>
            <p>{article.body}</p>
        </div>
    </Link>
  );
};

export default Article;
