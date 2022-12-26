import React, { useState } from "react";
import { ICON } from "../../assets/icons";
import { LOGO } from "../../assets/logo";
import SettingsTab from "../../components/groupButton/SettingsTab";
import EmailInput from "../../components/input/EmailInput";
import Hr from "../../components/line/Hr";
import toast, { Toaster } from "react-hot-toast";
import SidebarHead from "../../components/sidebar/SidebarHead";
import SettingTable from "../../components/table/SettingTable";
import SettingMainHeader from "./layout/SettingMainHeader";
import BillingCardSetting from "./layout/BillingCardSetting";
import BillingEmailSetting from "./layout/BillingEmailSetting";

function Main({ showSidebarHandle }) {
  const [settingTab, setSettingTab] = useState("billing");
  const [activeCardId, setActiveCardId] = useState(0);
  const [contactEmailTypeId, setContactEmailTypeId] = useState(0);
  const [cardLists] = useState([
    {
      id: 0,
      title: "Visa ending in 1234",
      expiryDate: "Expiry 06/2024",
      logo: <LOGO.VisaLogo />,
    },
    {
      id: 1,
      title: "Mastercard ending in 1234",
      expiryDate: "Expiry 06/2024",
      logo: <LOGO.MastercardLogo />,
    },
  ]);

  const chooseCardOption = (id) => {
    if (id !== activeCardId) {
      setActiveCardId(id);
      toast.success(`Card option set to Card${id}`);
    }
  };

  const chooseContactOption = (id) => {
    if (id !== contactEmailTypeId) {
      setContactEmailTypeId(id);
      toast.success(`contact option set to Option${id}`);
    }
  };

  return (
    <div className="md:p-9 pb-12 w-full md:w-[calc(100%_-_280px)] h-screen overflow-y-scroll">
      <div className="block md:hidden">
        <SidebarHead showSidebarHandle={showSidebarHandle} />
      </div>
      <Toaster position="top right" />
      <div className="setting__main__header p-9 md:p-0">
        <SettingMainHeader settingTab={settingTab} setSettingTab={setSettingTab}/>

        <div className="billing__tab__content w-full">
          <div className="billing__tab__header">
            <h5 className="font-medium text-gray-900 text-sm">
              Payment method
            </h5>
            <p className="text-gray-500 text-xs">
              Update your billing details and address.
            </p>
          </div>
          <div className="mt-5 mb-6">
            <Hr />
          </div>
          <BillingEmailSetting contactEmailTypeId={contactEmailTypeId} chooseContactOption={chooseContactOption}/>
          <div className="my-5">
            <Hr />
          </div>
          <BillingCardSetting cardLists={cardLists} activeCardId={activeCardId} chooseCardOption={chooseCardOption}/>
          
          <div className="flex items-start flex-col lg:flex-row w-full">
            <div className="billing_setting__details w-[360px]"></div>

            <div className="w-full add__payment__method mt-4">
              <button className="flex items-center gap-2">
                <ICON.PlusIcon />
                <p className="text-gray-500 font-medium text-sm">
                  Add new payment method
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <SettingTable />
    </div>
  );
}

export default Main;
