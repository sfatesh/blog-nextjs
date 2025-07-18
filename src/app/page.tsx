import Image from "next/image";
import styles from '@/app/UI/styles/home.module.css'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl text-purple-700 font-bold mb-4 ${styles.text_wisteria}`}>WelCome To Home Page</h1>
            <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repellendus dolore ratione obcaecati saepe neque debitis, facilis corporis at incidunt esse laboriosam ea, quod rem voluptates nostrum numquam beatae velit?</p>
            <a href="/blog/posts" className={`outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content}`}>
              Go to Blog</a>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
  <Image

        src="/hero-desktop.jpeg"

        width={1000}

        height={760}

        className="hidden md:block z-10"

        alt="Screenshots of the dashboard project showing desktop version"

      />

      <Image

        src="/hero-mobile.jpeg"

        width={560}

        height={620}

        className="block md:hidden"

        alt="Screenshot of the dashboard project showing mobile version"

      />

</div>

      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_wisteria}`}>
      
      </div>
    </main>
  );
}
