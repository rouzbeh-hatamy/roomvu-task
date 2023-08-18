import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProfileCard from '@/components/ProfileCard'
import { GetServerSideProps } from 'next';

const generateDateFromId = (id: number): Date => {
  const now = new Date();
  now.setHours(now.getHours() - id);
  return now;
};

interface Post {
  id: number;
  title: string;
  body: string;
  date: Date;
}


export default function Home({ posts }: { posts: Post[] }) {

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Overreacted</h1>
      <ProfileCard />
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const fetchedPosts: Post[] = data.map((post: any) => ({
      ...post,
      date: generateDateFromId(post.id).toISOString(),
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
