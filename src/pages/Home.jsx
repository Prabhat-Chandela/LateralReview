import {ArticleCard} from "../Components";
import {Newspaper} from "lucide-react";

function Home() {
  return (
    <div className="font-robotoBlack flex flex-col sm:p-5 w-full gap-20 lg:gap-32">

      <section className="w-full flex items-center justify-center mt-5 sm:mt-10">
        <h1 className="bg-gradient-to-r text-center from-red-700 to-red-500 bg-clip-text text-transparent text-[10vw] sm:text-[5vw]">
          TheLateralReview
        </h1>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-red-700 font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper/></span> Recent Blogs</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-red-700 font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper/></span>Guest Posts</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

          <div  className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard/>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home;