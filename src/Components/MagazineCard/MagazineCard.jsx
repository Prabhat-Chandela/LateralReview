import bucketService from "../../appwrite/bucketService";
import { Link } from "react-router-dom";
import { Button } from "../index"

function MagazineCard({ magazineTitle, magazineFile, magazineCover, magazineCategory }) {
  return (
    <div>
      <div>
        <img src={bucketService.getMagazineCover(magazineCover)} alt={magazineTitle} />
      </div>
      <h3>{magazineTitle}</h3>

      <div>

        <div>
          <Link to={`/magazine/${magazineFile}`}>
            <Button>
              Digital Version
            </Button>
          </Link>
        </div>

        <h3>{magazineCategory}</h3>

      </div>
    </div>
  )
}

export default MagazineCard;