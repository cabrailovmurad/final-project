import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__top">
          <div className="portfolio__top__left">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/project-details-1.jpg.webp"
              alt=""
            />
          </div>
          <div className="portfolio__top__right">
            <h4>LAVENDAR AMBIENT</h4>
            <p>
            Luxury Comfort Sofa

Introducing our Luxury Comfort Sofa, the perfect blend of elegance, comfort, and durability. Designed to enhance any living space, this sofa offers unparalleled quality and style.

Features and Benefits:
Superior Comfort: The sofa is upholstered with high-density foam cushions, providing exceptional comfort and support. The plush seating ensures you can relax for hours in ultimate luxury.

Premium Materials: Crafted from top-grade materials, this sofa features a sturdy hardwood frame that guarantees long-lasting durability. The high-quality fabric upholstery is soft to the touch, yet resistant to wear and tear, ensuring your sofa looks new for years.
            </p>
            <ul>
              <li>
                <span>Rating</span>
                {": "}
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </li>
              <li>
                <span>Client</span>: MuradStudio
              </li>
              <li>
                <span>Website</span>: woodrex.az
              </li>
              <li>
                <span>Completed</span>: 17 Aug 2074
              </li>
              <li>
                <span>Price</span>:200$
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio__bottom">
          <p>
          Furniture Today Modern furniture combines style, comfort, and innovation. We offer a diverse range of products, from classic to contemporary models, ensuring there's something for everyone's taste and needs.
          </p>
          <p>
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;