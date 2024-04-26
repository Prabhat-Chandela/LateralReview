import {Button} from "../index";
import bucketService from "../../appwrite/bucketService";
import { useNavigate } from "react-router-dom";

function GuestCard({blogTitle,blogFile,blogFeaturedimage}) {
    const navigate = useNavigate();
  return (
    <div className="guestParentCard w-full flex flex-col bg-black shadow-lg shadow-white/10 rounded-md overflow-hidden border-2 border-white/5 gap-2 sm:p-2 relative cursor-pointer transition-all ease-out">
      <div className="w-full">
        <img className="w-full rounded-md object-fill " src={bucketService.getBlogFeaturedimage(blogFeaturedimage)} alt={blogTitle} />
      </div>
      <div className="guestChildCard py-5 flex flex-col justify-center items-center  backdrop-filter backdrop-blur-lg bg-opacity-10 gap-3 absolute left-0 bottom-0
       w-full text-white opacity-0 transition-all ease-out duration-300">
        <p className="font-robotoRegular text-xs">{blogTitle}</p>
        <Button onClick={()=>navigate(`/blog-post/${blogFile}`)}>Read More</Button>
      </div>
    </div>
  )
}

export default GuestCard
