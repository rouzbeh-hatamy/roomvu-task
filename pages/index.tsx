import ProfileCard from '@/components/ProfileCard'
import { GetServerSideProps } from 'next';
import PostsList from '@/components/PostsList';
import { generateDateFromId } from '@/utils/date';
import { Post } from '@/types/_post';
import DarkModeToggle from '@/components/DarkModeToggle';


export default function Home({ posts }: { posts: Post[] }) {

  return (
    <main className="py-8 dark:bg-darkBg">
      <div className="container mx-auto max-w-3xl p-5">
        <div className='flex justify-between'>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 dark:text-white">Overreacted</h1>
        <DarkModeToggle />
        </div>
        <ProfileCard />
        <PostsList posts={posts} />
      </div>
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const fetchedPosts: Post[] = data.map((post: any) => ({
      ...post,
      date: generateDateFromId(post.id),
    }));
    const sortedPosts = fetchedPosts.sort((a, b) => b.date.valueOf() - a.date.valueOf());
    return {
      props: {
        posts: sortedPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};
