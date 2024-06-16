import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleProduct = () => {
    router.replace("/productss");
    console.log("placing order");
  };
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={handleProduct}>place order </button>
    </div>
  );
}
export default Home;
