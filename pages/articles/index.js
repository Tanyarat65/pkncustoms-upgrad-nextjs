import Header from "@/components/Header";
import Link from "next/link";
import { articles } from "@/lib/constants";
import { useModalArticle } from "@/lib/utils";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";

export default function Articles() {
  const { selectedArticle, openModal, closeModal } = useModalArticle();

  return (
    <>
      <Header />
      <div className="container mx-auto pt-32 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">All Articles</h1>
      </div>
      <div id="article-section" className="py-1 px-10 grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1">
        {articles
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
      <Footer />
    </>
  );
}
