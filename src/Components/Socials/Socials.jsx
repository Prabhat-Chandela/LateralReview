import { Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Socials() {
  return (
    <div className="flex gap-5 mt-2" >

              <a href="https://www.linkedin.com/company/lateral-review/?viewAsMember=true" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61557777824555" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Facebook size={20} /></a>
              <a href="https://www.instagram.com/lateralreview/" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Instagram size={20} /></a>
              <a href="https://twitter.com/LateralReviews" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Twitter size={20} /></a>
              <a href="https://www.youtube.com/channel/UCPEXLEb0lX45U3mIzOTOr_g" target="_blank" rel="noopner noreferrer" className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Youtube size={20} /></a>
            </div>
  )
}

export default Socials