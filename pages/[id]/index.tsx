import { useRouter } from 'next/router';
import Link from 'next/link';
import { formatDate, generateDateFromId } from '@/utils/date';
import { Post } from '@/types/_post';



export default function PostPage({ post }: { post: Post }) {

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className='dark:bg-darkBg min-h-screen'>
    <div className="max-w-3xl mx-auto py-8 ">
      <Link href="/">
        <span className="text-primaryLight hover:underline text-3xl font-extrabold">Overreacted</span>
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-800 mt-10 mb-2 dark:text-white">{post.title}</h1>
      <p className="text-gray-600 mb-2 dark:text-white">{formatDate(new Date(post.date))}</p>
      <p className="text-gray-800 text-xl dark:text-white">{post.body}</p>
    </div>
    </main>
  );
};


export async function getServerSideProps(context: any) {
  const { id } = context.params;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    const post = {
      id: data.id,
      title: data.title,
      body: data.body,
      date: generateDateFromId(data.id), 
    };
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null,
      },
    };
  }
}
