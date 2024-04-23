import {Button} from "../index";
import bucketService from "../../appwrite/bucketService";
import { useNavigate } from "react-router-dom";

function ArticleCard({blogTitle,blogFile,blogFeaturedimage}) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col bg-black shadow-lg shadow-white/10 rounded-md overflow-hidden border-2 border-white/5 gap-2 p-2">
      <div className="w-full">
        <img className="w-full rounded-md object-fill " src={bucketService.getBlogFeaturedimage(blogFeaturedimage)} alt={blogTitle} />
      </div>
      <div className="p-2 flex flex-col gap-3">
        <p className="font-robotoRegular text-xs">{blogTitle}</p>
        <Button onClick={()=>navigate(`/blog-post/${blogFile}`)}>Read More</Button>
      </div>
    </div>
  )
}

export default ArticleCard;