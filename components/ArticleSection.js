import Link from "next/link";

const articles = [
  { id: 1, title: "โครงการเสาไฟฟ้า", image: "/images/pipe.jpg", category: "โครงสร้าง" },
  { id: 2, title: "สินค้าเกษตร", image: "/images/depot_img_4onoin.jpg", category: "สินค้าเกษตร" },
  { id: 3, title: "ยานยนต์ไฟฟ้า", image: "/images/motorcycle.jpg", category: "เทคโนโลยี" },
];

const ArticleSection = () => {
  return (
    <section id="article-section" className="pt-40 py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Articles</h2>
        <div className="grid md:grid-cols-3 gap-6 px-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={article.image} alt={article.title} className="rounded-lg w-full h-40 object-cover mb-4" />
              <span className="text-sm text-gray-500">{article.category}</span>
              <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
              <Link href={`/articles/${article.id}`} className="text-blue-600 hover:text-blue-800">Read More →</Link>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/articles">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">More Articles</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
