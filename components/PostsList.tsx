import Link from 'next/link';
import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
    date: Date;
}

const PostsList: React.FC<{ posts: Post[] }> = ({ posts }) => {
    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    };

    return (
        <div>
            <ul className="space-y-7 mt-8">
                {posts.map((post) => (
                    <Link key={post.id} href={`/${post.id}`}>
                        <li  className="p-4 ">
                            <h2 className="text-3xl text-primary font-extrabold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-2">{formatDate(new Date(post.date))}</p>
                            <p className="text-gray-800 text-xl">{post.body.slice(0, 60)}...</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
