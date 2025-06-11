export default async function ProductPage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log('hehehe',posts);
  
  return (
    <ul>
      {posts.map((post:any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}