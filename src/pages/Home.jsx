import { ArticleCard, Carousel, Counter, GuestCard, MagazineCard } from "../Components/index";
import { Newspaper } from "lucide-react";
import { easeInOut, motion as m } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import databaseService from "../appwrite/databaseService";
import bucketService from "../appwrite/bucketService";
import { getAllBlogs, getAllMagazines } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      className="font-robotoBlack flex flex-col w-full gap-20 lg:gap-32 ">

      <section className="w-full mt-[17vh] sm:mt-[18vh] grid grid-cols-12 grid-rows-10 gap-2 p-2 sm:p-5 h-[50vh] sm:h-[85vh]">

        <div className="col-span-6 row-span-10 border border-red-500"><img src="" alt="hero-image-1" /></div>
        <div className="col-span-3 row-span-5 border border-red-500"><img src="" alt="hero-image-2" /></div>
        <div className="col-span-3 row-span-5 border border-red-500"><img src="" alt="hero-image-3" /></div>
        <div className="col-span-6 row-span-5  flex flex-col gap-3"><h1 className="font-robotoBlack text-[5vw] text-red-600 uppercase">Lateral <mark className="bg-transparent text-white">Review</mark> </h1>
          <p className="font-robotoMedium text-xs sm:text-lg text-white uppercase tracking-[0.5vw] lg:tracking-[1vw] ">Unlocking New Potential</p></div>


      </section>


      <section className="flex flex-col gap-5 p-5">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span> Recent Blogs</h2>

        <div className="grid grid-cols-6 sm:gap-3">

          {allBlogs.filter((blog) => blog.guestTag == "nonGuest").map((blog) => (
            <div key={blog.$id} className=' w-full col-span-6 sm:col-span-3 lg:col-span-2'>
              <ArticleCard {...blog} />
            </div>
          ))
          }

        </div>
      </section>

      <section
        className="w-full overflow-hidden flex flex-col gap-7 lg:gap-0 lg:flex-row lg:justify-between p-5 bg-[#1a1a1a]">
        <div className="flex flex-col gap-5 lg:justify-between lg:pb-7 lg:w-1/2  ">
          <h1 className="font-robotoBlack text-[6vw] lg:text-[4vw] bg-gradient-to-br from-black to-neutral-950 bg-clip-text text-transparent uppercase">Latest Magazines Released</h1>

          <p className="hidden lg:block font-robotoMedium text-lg w-[70%]">Embark on a journey into the minds of global leaders, gaining profound insights and inspiration from their experiences through our magazine. Delve deep and discover the perspectives shaping our world today.</p>
          <button onClick={() => (navigate("/magazines"))} className=" w-fit rounded-lg px-3 py-2 text-sm text-red-600 hover:text-white bg-black hover:scale-105  duration-300 transition ease-in-out">Magazine Galore</button>
        </div>
        <Carousel>
          {allMagazines.map((magazine) => (
            <div className="min-w-full sm:min-w-[50%] pr-5 sm:pb-7" key={magazine.$id}>
              <MagazineCard {...magazine} />
            </div>

          ))}
        </Carousel>
      </section>

      <section className="flex flex-col gap-5 p-5">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span>Featured Articles</h2>

        <div className="grid grid-cols-6 gap-3 sm:gap-0 flex-wrap">
          {allBlogs.filter((blog) => blog.guestTag == "guest").map((blog) => (
            <div key={blog.$id} className='col-span-6 sm:col-span-3 lg:col-span-2 w-full'>
              <GuestCard {...blog} />
            </div>
          ))

          }
        </div>
      </section>


      <m.section className="w-full p-5">
        <Counter />
      </m.section>

      <section className="w-full bg-red-700 p-5 flex flex-col gap-5 relative xl:h-[60vh] xl:mb-[60vh]">

        <div className="flex flex-col gap-5">
          <h1 className="font-robotoBlack text-[7vw] lg:text-[4vw] bg-gradient-to-br from-black to-neutral-950 bg-clip-text text-transparent uppercase">About Lateral Review</h1>
          <p className="font-robotoMedium text-xs sm:text-lg ">Lateral Review is a platform for leaders, entrepreneurs
            and organizations from across the globe to showcase their story. We feature
            stories that are inspiring, unique, and extremely insightful. In just a short
            span, we have garnered a growing reader base and we would like to welcome you
            aboard in this journey. Our platform promises to share with you quality and
            nothing but quality. Join us and embrace excellence.</p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between flex-wrap p-3 xl:absolute xl:-bottom-1/2 ">

          <div className="w-full sm:w-[45%] xl:w-[23%] bg-black text-red-600 hover:bg-white hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-white/10 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

           
            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-red-600 flex items-center justify-center pt-5"><h3 className="font-robotoBold text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] xl:w-[23%] bg-black text-red-600 hover:bg-white hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-white/10 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-red-600 flex items-center justify-center pt-5"><h3 className="font-robotoBold text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] xl:w-[23%] bg-black text-red-600 hover:bg-white hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-white/10 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-red-600 flex items-center justify-center pt-5"><h3 className="font-robotoBold text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] xl:w-[23%] bg-black text-red-600 hover:bg-white hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-white/10 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

            
            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>
            <div className="border-t border-t-red-600 flex items-center justify-center pt-5"><h3 className="font-robotoBold text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

        </div>

      </section>


    </m.div>
  )
}

export default Home;