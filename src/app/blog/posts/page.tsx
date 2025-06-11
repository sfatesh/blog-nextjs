import { postsData } from '@/app/lib/posts'
import Post from '@/app/UI/components/posts/post'
import { connectDB } from '@/app/lib/data'

export default async function PostsPage() {
    const client = await connectDB()
    console.log('PostsPage::',client);
    
    return (
        <div>
            {client && <p className='text-green-500'>Data base connected successfully</p>}
            <h1 className="text-purple-800">Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {
                    postsData.map((item)=>{
                        return (
                           <Post key={item.id} {...item}/>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}