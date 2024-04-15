import bucketService from "../../appwrite/bucketService";
import { useNavigate } from "react-router-dom";
import { Button } from "../index"

function MagazineCard({ magazineTitle, magazineFile, magazineCover, magazineCategory }) {

  const navigate = useNavigate();
  const cover = bucketService.getMagazineCover(magazineCover);
  
  return (
    <div className="bg-gradient-to-r from-red-700 to-red-500 flex  flex-col w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/5 h-1/3 rounded-lg overflow-hidden p-1 relative ">

      <div className=" w-full h-full overflow-hidden ">
        <img className="rounded-md w-full h-full " src={cover.pathname} alt={magazineTitle} />
      </div>

      <div className="flex flex-col absolute -top-full">

        <h3 className="font-robotoBlack p-2">{magazineTitle}</h3>
        <Button onClick={() => navigate(`/magazine/${magazineFile}`)}>
          Digital Version
        </Button>

      </div>

    </div>
  )
}

export default MagazineCard;