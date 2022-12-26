import React from "react";
import { ICON } from "../../assets/icons";
import Table from "./Table";

function SettingTable() {
  return (
    <div className="w-full">
      <div className="table__header flex items-center justify-between mb-6 mt-8 px-6 md:px-0">
        <h5 className="font-medium text-sm text-gray-900">Billing history</h5>
        <button className="h-10 pr-3 bg-white shadow-sm pl-1 border flex items-center border-gray-200 rounded text-gray-900 text-[13px]">
          <span className="w-9 flex">
            <ICON.DownloadIcon />
          </span>{" "}
          Download all
        </button>
      </div>
      <div className="w-full overflow-x-scroll px-0">
        <Table />
      </div>
    </div>
  );
}

export default SettingTable;
