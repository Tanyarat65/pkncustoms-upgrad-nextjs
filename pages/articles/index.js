import Link from "next/link";

export default function Articles() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-6">All Articles</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
