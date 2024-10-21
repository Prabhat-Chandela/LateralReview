import bucketService from "../../appwrite/bucketService";

import { PenTool, Tag } from "lucide-react";

function MagazineCard({ magazineTitle, magazineCover, magazineCategory }) {

  const cover = bucketService.getMagazineCover(magazineCover);


  return (
    <div className=" flex w-full h-full rounded-lg overflow-hidden items-center justify-center ">

      <div className="parentCard w-full p-1 overflow-hidden relative cursor-pointer">
        <img className="overflow-hidden w-full object-fill rounded-md items-center justify-center" src={cover} alt={magazineTitle} />

        <div className="childCard absolute translate-y-full opacity-0 bottom-0 left-1 w-full p-2 backdrop-filter backdrop-blur-lg bg-opacity-20 flex flex-col gap-3 transition ease-linear  duration-200">
          <h3 className="text-white font-robotoBold flex items-center justify-center gap-2 w-fit text-xs"><span><PenTool size={20} /></span> {magazineTitle}</h3>
          <p className="text-white font-robotoBold flex items-center justify-center gap-2 w-fit text-xs"><span><Tag size={20} /></span> {magazineCategory}</p>
        </div>

      </div>

    </div>
  )
}

export default MagazineCard;