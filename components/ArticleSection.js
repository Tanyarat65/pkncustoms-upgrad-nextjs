import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { articles } from "@/lib/constants";
import { useModalArticle } from "@/lib/utils";
import { useRouter } from "next/router";

const ArticleSection = () => {

    const { selectedArticle, openModal, closeModal } = useModalArticle();

    const router = useRouter();
  
  return (
    <>
      <div id="article-section" className="py-1 pt-32 px-10 grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1">
        {articles
        .filter((article, index) => index < 4)
        .map((article) => (
          <div
            key={article.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg px-auto w-full h-80 object-cover mb-4 "
            />
            <span className="text-sm text-gray-500">{article.category}</span>
            <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
            {/* ดันปุ่ม Read More → ให้อยู่ล่างสุดของการ์ด */}
            <div className="flex-grow" />
            <button
              onClick={() => openModal(article)}
              className="text-blue-600 hover:text-blue-800 self-end mt-4"
            >
              Read More &rarr;
            </button>
          </div>
        ))}

        {/* เมื่อมี selectedArticle จึงแสดง Modal ขึ้นมา */}
        {selectedArticle && (
          <Modal article={selectedArticle} onClose={closeModal} />
        )}

      </div>
      <div className="my-6 mx-auto text-center">
        <button onClick={() => router.push('/articles')} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">More Articles</button>
      </div>
    </>
  );
};

export default ArticleSection;

/*    <section id="article-section" className="pt-40 py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Articles</h2>
        <div className="grid md:grid-cols-3 gap-6 px-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={article.image} alt={article.title} className="rounded-lg w-full h-40 object-cover mb-4" />
              <span className="text-sm text-gray-500">{article.category}</span>
              <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
              <Link href={`/articles/${article.id}`} className="text-blue-600 hover:text-blue-800 ">Read More →</Link>
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
    */
