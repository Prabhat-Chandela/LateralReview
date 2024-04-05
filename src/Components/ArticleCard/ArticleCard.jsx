import {Button} from "../index";

function ArticleCard() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-red-700 to-red-500 rounded-md overflow-hidden">
      <div>
        <img src="" alt="article image" />
      </div>
      <div className="px-2 py-1">
        <p>title</p>
        <Button>Read More</Button>
      </div>
    </div>
  )
}

export default ArticleCard;