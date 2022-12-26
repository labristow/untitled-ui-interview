import React from "react";
import { ICON } from "../../assets/icons";
import ProfileImg from "../../assets/svgs/profile.svg";

function ProfileBar() {
  return (
    <div className="w-full h-10 flex items-center justify-between">
      <div className="profile__inner flex items-start">
        <React.Fragment>
          <img
            src={ProfileImg}
            alt="profile__image__not__found"
            width="40px"
            height="40px"
            className="rounded-full"
          />
          <div className="profile__details ml-3 mr-4">
            <h5 className="font-medium text-gray-900 text-sm">Olivia Rhye</h5>
            <p className="text-gray-500 text-[14px] truncate w-36">
              olivia@untitledui.com
            </p>
          </div>
        </React.Fragment>
        <button>
          <ICON.SignoutIcon />
        </button>
      </div>
    </div>
  );
}

export default ProfileBar;
