import { Input , Button } from "../Components/index";
import { motion as m } from "framer-motion";
import { Linkedin, Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";

function Contact() {

  return (
    <div className="w-full flex flex-col gap-20 mt-9 sm:mt-5 ">

      <section className="w-full">

        <div className="w-full flex flex-col gap-5">
          <div className="overflow-hidden">
            <m.h2
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
              PING US HERE
            </m.h2>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col gap-5">
            <p className="text-white font-robotoRegular text-xs sm:text-sm sm:w-[60%] lg:w-[37%]">Feel free to reach us regarding any work related query and for achieving excellence in creating a brand of your own.</p>

            <div className="flex gap-5 mt-2" >

              <a href="https://www.linkedin.com/company/lateral-review/?viewAsMember=true" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61557777824555" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Facebook size={20} /></a>
              <a href="https://www.instagram.com/lateralreview/" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Instagram size={20} /></a>
              <a href="https://twitter.com/LateralReviews" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Twitter size={20} /></a>
              <a href="https://www.youtube.com/channel/UCPEXLEb0lX45U3mIzOTOr_g" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Youtube size={20} /></a>
            </div>

          </m.div>

        </div>

      </section>

      <m.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5 , duration:0.5, ease:"easeInOut"}}
      className="w-full flex items-center justify-center mb-7 ">

        <div className="flex flex-col w-full gap-9 sma:gap-0 sm:flex-row bg-black shadow-[0_3px_20px_rgb(255,255,255,0.2)] p-5 ">

          <div className="flex flex-col gap-7 sm:w-1/2 sm:border-r border-r-red-700 sm:p-5 ">

          <h3 className="text-red-700 tracking-widest font-robotoBold sm:text-xl">LATERAL REVIEW</h3>
            <p className="font-robotoRegular text-xs sm:text-sm">
              Here, at LateralReview, we are always willing to hear from you. Make sure to contact us for any doubts or clarifications, inquiries, guest posting availability, advertising requirements or to even say hello! We will make sure to revert back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-5">
              <h6 className="font-robotoMedium text-red-700 tracking-widest">REACH US THROUGH</h6>
              <div className="flex flex-col gap-2">
                <p className="flex gap-3"><span className="text-red-700"><MapPin /></span>New Delhi, India</p>
                <p className="flex gap-3"><span className="text-red-700"><Mail /></span>lateralreview@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-7 sm:w-1/2 sm:p-5 sm:pl-7">
              <h3 className="text-red-700 tracking-widest font-robotoBold  sm:text-xl">MENTION YOUR QUERY</h3>

            <div className="flex flex-col gap-5">
              <Input label="Email"
              placeholder="Enter email here"
              type="email"
              />
              <Input label="Query"
               placeholder="Enter query here"
              className="h-20" 
              />
              <Button bgColor="bg-gradient-to-r from-red-700 to-red-500" textColor="text-black">Send Query</Button>
            </div>

          </div>

        </div>
      </m.section>


    </div>
  )
}

export default Contact;