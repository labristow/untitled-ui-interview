import React from "react";
import { ICON } from "../../../assets/icons";
import EmailInput from "../../../components/input/EmailInput";

function BillingEmailSetting({contactEmailTypeId, chooseContactOption}) {
  return (
    <div className="billing__setting flex items-start flex-col lg:flex-row">
      <div className="billing_setting__details w-[360px] mb-3">
        <p className="text-gray-900 font-medium text-xs">Contact email</p>
        <p className="text-gray-500 text-xs">Where should invoices be sent?</p>
      </div>
      <div className="billing__right__options w-full">
        <div className="billing_setting__details mb-4">
          <p
            onClick={() => chooseContactOption(0)}
            className="text-gray-900 cursor-pointer font-medium text-xs flex items-center"
          >
            {/* <input type="radio" name="contactEmailType" /> */}
            {contactEmailTypeId === 0 ? (
              <ICON.CheckRadioIcon2 />
            ) : (
              <ICON.UncheckedRadioIcon2 />
            )}
            <span className="pl-1 text-gray-900 font-medium text-xs">
              Send to my account email
            </span>
          </p>
          <p className="text-gray-500 text-xs pl-[18px]">
            olivia@untitledui.com
          </p>
        </div>
        <div className="billing_setting__details">
          <p
            onClick={() => chooseContactOption(1)}
            className="text-gray-900 cursor-pointer font-medium text-xs flex items-center"
          >
            {contactEmailTypeId === 1 ? (
              <ICON.CheckRadioIcon2 />
            ) : (
              <ICON.UncheckedRadioIcon2 />
            )}
            <span className="pl-1 text-gray-900 font-medium text-xs">
              Send to an alternative email
            </span>
          </p>
          <div className="pl-[18px] mt-2 w-full lg:w-[488px]">
            <EmailInput isActive={contactEmailTypeId === 1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingEmailSetting;
