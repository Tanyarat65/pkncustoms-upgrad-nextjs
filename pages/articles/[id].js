import { useRouter } from "next/router";

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">บทความ {id}</h1>
    </div>
  );
}
