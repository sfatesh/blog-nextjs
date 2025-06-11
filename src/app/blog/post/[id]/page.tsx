import { postsData } from '@/app/lib/posts';
import Post from '@/app/UI/components/posts/post'

export default async function PostPage({
  params,
}: {
  params: {id:string}
}){
    const {id} =  params
    console.log('PostPage',params,id);
    
    const post:any = postsData.find((item:{id:number,title:string,description:string,date:string})=>item.id == Number(id));
    return (
        <div>
            <h1>Post</h1>
            <Post key={post.id} {...post}/>
        </div>
    )
}