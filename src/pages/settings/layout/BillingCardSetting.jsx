import React from "react";
import { ICON } from "../../../assets/icons";
import EmailInput from "../../../components/input/EmailInput";

function BillingCardSetting({cardLists, activeCardId, chooseCardOption }) {
  return (
    <div className="billing__setting flex flex-col lg:flex-row items-start">
      <div className="billing_setting__details w-[360px]">
        <p className="text-gray-900 font-medium text-xs">Card details</p>
        <p className="text-gray-500 text-xs">Select default payment method.</p>
      </div>
      <div className="billing__right__options w-full">
        {cardLists.map(({ logo, id, title, expiryDate }) => {
          if (activeCardId === id) {
            return (
              <div
                id={id}
                className="card__type__option mt-3  w-full rounded-xl p-4 bg-primary-50 border border-primary-300 h-[100px] relative"
              >
                <div className="flex justify-start items-start gap-3">
                  {logo}
                  <div className="card__details">
                    <p className="text-primary-600 font-medium text-xs">
                      {title}
                    </p>
                    <p className="text-[#9E77ED] text-xs">{expiryDate}</p>
                    <div className="call__to__action mt-2 flex items-center gap-3">
                      <button
                        onClick={() => chooseCardOption(id)}
                        className="text-xs text-[#9E77ED]"
                      >
                        Set as default
                      </button>
                      <button className="text-xs text-primary-600 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => chooseCardOption(id)}
                  className="absolute radio__checkbox cursor-pointer right-4 top-4"
                >
                  <ICON.CheckRadioIcon />
                </div>
              </div>
            );
          } else {
            return (
              <div
                id={id}
                className="card__type__option  w-full mt-3 rounded-xl p-4 bg-white border border-gray-200 h-[100px] relative"
              >
                <div className="flex justify-start items-start gap-3">
                  {logo}
                  <div className="card__details">
                    <p className="text-gray-900 font-medium text-xs">{title}</p>
                    <p className="text-gray-500 text-xs">{expiryDate}</p>
                    <div className="call__to__action mt-2 flex items-center gap-3">
                      <button
                        onClick={() => chooseCardOption(id)}
                        className="text-xs text-gray-500"
                      >
                        Set as default
                      </button>
                      <button className="text-xs text-primary-600 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => chooseCardOption(id)}
                  className="absolute radio__checkbox cursor-pointer right-4 top-4"
                >
                  <ICON.UncheckedRadioIcon />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default BillingCardSetting;
