import React, { useState } from "react";
import FeaturedImg from "../../assets/svgs/news-featured.svg";

function FeaturedImage() {
  const [showFeaturedNews, setShowFeaturedNews] = useState(true);
  const hideFeaturedNews = () => {
    setShowFeaturedNews(false);
  };
  return (
    <React.Fragment>
      {showFeaturedNews && (
        <div className="w-full h-[292px] bg-gray-50 mt-6 px-4 py-5 rounded-[8px]">
          <h5 className="featured__title font-medium text-[16px]">
            New features available!
          </h5>
          <p className="featured__subtitle text-sm mt-1 text-gray-500">
            Check out the new dashboard view. Pages now load faster.
          </p>
          <img
            src={FeaturedImg}
            alt="news__featured__image__not__found"
            className="rounded-lg my-4"
          />
          <p className="featured__control font-medium text-sm mt-1 text-gray-500">
            <button className="" onClick={hideFeaturedNews}>
              Dismiss
            </button>
            <a href="#whats-new" className="text-primary-600 ml-2.5 underline">
              What’s new?
            </a>
          </p>
        </div>
      )}
    </React.Fragment>
  );
}

export default FeaturedImage;
