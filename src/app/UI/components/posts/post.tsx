import Link from "next/link";

export default async function Component({id,title,description,date}:{id:number,title:string,description:string,date:string}){
    // const response:any = await fetch('https://api.vercel.app/blog')
    // const data = await response.json()
    // console.log('Respomse:::',data);
    
    return (
        <div key={id} className="md:col-span-4 bg-gray-200 text-black">
            <Link href={`post/${id}`}><h4 className="p-2"><b><strong>{title}</strong></b></h4></Link>
            <p>{description}</p>
        </div>
    )
}