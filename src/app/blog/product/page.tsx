import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function ProductPage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log('hehehe',posts);
  
  return (
    <ul>
      {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}