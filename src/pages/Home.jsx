import { ArticleCard, Carousel, Counter, GuestCard } from "../Components/index";
import { Newspaper, ArrowBigRightDash } from "lucide-react";
import { easeInOut, motion as m } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import databaseService from "../appwrite/databaseService";
import bucketService from "../appwrite/bucketService";
import { getAllBlogs, getAllMagazines } from "../store/postSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  useEffect(() => {

    databaseService.getMagazines().then((magazines) => {
      if (magazines) {
        dispatch(getAllMagazines({ allMagazines: magazines.documents }))
      }
    });

    databaseService.getBlogs().then((blogs) => {
      if (blogs) {
        dispatch(getAllBlogs({ allBlogs: blogs.documents }))
      }
    })

  }, [])

  const allMagazines = useSelector((state) => state.post.allMagazines);
  const allBlogs = useSelector((state) => state.post.allBlogs);


  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="font-robotoBlack flex flex-col sm:p-5 w-full gap-20 lg:gap-32 mt-12 sm:mt-5">

      <section className="w-full flex flex-col gap-7 items-center justify-center mt-5 sm:mt-10">

        <div className="w-full overflow-hidden">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="font-robotoBlack bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent text-[8vw] sm:text-[6vw] flex flex-col gap-1 items-center tracking-[1.5vw] ">LATERAL REVIEW <span className="text-xs sm:text-lg font-robotoMedium text-white tracking-[1vw] bg-red-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 w-fit px-1 sm:px-3 py-1">Unlocking New perspective</span></m.h1>

        </div>

      </section>

      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full xl:w-[95%] bg-transparent xl:mx-auto overflow-hidden p-1 sm:p-3 xl:p-6 shadow-[0_3px_20px_rgb(255,255,255,0.2)]">
        <Carousel>
          {allMagazines.map((magazine) => (
            <div key={magazine.$id} className="min-w-full max-h-[70vh] flex items-center justify-center relative">

              <button onClick={()=> navigate(`/magazine/${magazine.magazineFile}`)} className="w-fit absolute bottom-[30%] left-[10%] flex justify-center items-center gap-1 sm:left-[10%] px-2 sm:p-2 font-robotoMedium text-red-700 bg-white rounded-sm sm:rounded-lg text-xs"><span className="hidden sm:block">Read Digital Version</span><ArrowBigRightDash size={10} /></button>


              <img className="w-full h-full object-fill overflow-hidden " src={bucketService.getMagazinePoster(magazine.magazinePoster)} alt={magazine.magazineTitle} />
            </div>

          ))}
        </Carousel>
      </m.section>

      <section className="flex flex-col gap-3">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span> Recent Blogs</h2>

        <div className="grid grid-cols-4 sm:gap-3">

          {allBlogs.filter((blog) => blog.guestTag == "nonGuest").map((blog) => (
            <div key={blog.$id} className='py-3 w-full col-span-4 sm:col-span-2 lg:col-span-1'>
              <ArticleCard {...blog} />
            </div>
          ))
          }

        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span>Guest Posts</h2>

        <div className="grid grid-cols-3 gap-3 sm:gap-0 flex-wrap">
          {allBlogs.filter((blog) => blog.guestTag == "guest").map((blog) => (
            <div key={blog.$id} className='p-1 col-span-3 sm:col-span-1 w-full'>
              <GuestCard {...blog} />
            </div>
          ))

          }
        </div>
      </section>

    
        <m.section className="w-full bg-gradient-to-br from-red-700 to-red-500 p-3">
          <Counter />
        </m.section>
      

    </m.div>
  )
}

export default Home;