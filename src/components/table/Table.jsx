import React, { useState } from "react";
import { ICON } from "../../assets/icons";
import user1 from "../../assets/users/user1.svg";
import user2 from "../../assets/users/user2.svg";
import user3 from "../../assets/users/user3.svg";
import user4 from "../../assets/users/user4.svg";
import user5 from "../../assets/users/user5.svg";

function Table() {
  const [invoiceData] = useState([
    {
      name: "Basic Plan – Dec 2022",
      amount: "10.00",
      date: "Dec 1, 2022",
      status: "paid",
      users: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "Basic Plan – Nov 2022",
      amount: "10.00",
      date: "Nov 1, 2022",
      status: "unpaid",
      users: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Basic Plan – Oct 2022",
      amount: "10.00",
      date: "Oct 1, 2022",
      status: "paid",
      users: [1, 2, 3, 4, 5],
    },
    {
      name: "Basic Plan – Sep 2022",
      amount: "10.00",
      date: "Sep 1, 2022",
      status: "paid",
      users: [1, 2, 3],
    },
    {
      name: "Basic Plan – Aug 2022",
      amount: "10.00",
      date: "Aug 1, 2022",
      status: "paid",
      users: [1, 2, 3, 4],
    },
    {
      name: "Basic Plan – Jul 2022",
      amount: "10.00",
      date: "Jul 1, 2022",
      status: "paid",
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      name: "Basic Plan – Jun 2022",
      amount: "10.00",
      date: "Jun 1, 2022",
      status: "paid",
      users: [1, 2, 3],
    },
  ]);
  return (
    <div className="table bg-white w-full">
      <table className="w-full">
        <div className="table__header shadow-sm bg-gray-50 rounded-tl-lg rounded-tr-lg border border-gray-200 h-11">
          <thead>
            <tr>
              <th>
                <div className="w-[470px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  <span className="flex w-4 mr-2">
                    <ICON.CheckboxIcon />
                  </span>
                  Invoice
                  <span className="flex w-3.5 ml-2">
                    <ICON.ArrowdownIcon />
                  </span>
                </div>
              </th>
              <th>
                <div className="w-[127px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  Amount
                </div>
              </th>
              <th>
                <div className="w-[127px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  Date
                </div>
              </th>
              <th>
                <div className="w-[103px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  Status
                </div>
              </th>
              <th>
                <div className="w-[172px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  Users on plan
                </div>
              </th>
              <th>
                <div className="w-[72px] text-xs text-gray-500 flex items-center justify-start px-6 h-11">
                  Action
                </div>
              </th>
            </tr>
          </thead>
        </div>
        <div className="table__body rounded-bl-lg rounded-br-lg shadow-sm">
          <div className="md:h-[calc(555px_-_144px)] md:overflow-hidden md:overflow-y-scroll">
            <tbody>
              {invoiceData.map(
                ({ name, amount, date, users, status }, index) => (
                  <div
                    key={index}
                    className="border-t border-b border-gray-100 w-full"
                  >
                    <tr>
                      <td>
                        <div className="w-[470px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]">
                          <span className="flex w-4 mr-2">
                            <ICON.CheckboxIcon />
                          </span>
                          <p className="text-gray-900 font-medium text-sm">
                            {name}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-[127px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]">
                          <p className="text-gray-500 flex font-normal text-sm">
                            USD ${amount}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-[127px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]1">
                          <p className="text-gray-500 flex font-normal text-sm">
                            {date}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-[103px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]">
                          {status === "paid" ? (
                            <div className="w-[55px] flex items-center justify-center gap-1 px-1 py-1 rounded-full bg-success-50">
                              <span className="flex">
                                <ICON.CheckedIcon />
                              </span>
                              <p className="text-sm text-success-700">Paid</p>
                            </div>
                          ) : (
                            <div className="w-[55px] flex items-center justify-center gap-1 px-1 py-1 rounded-full bg-red-50">
                              <span className="flex">
                                {/* <ICON.CheckedIcon /> */}
                              </span>
                              <p className="text-sm text-red-700">UnPaid</p>
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="w-[172px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]">
                          {/* {users.map((user) => (
                      <img src={user1} alt="" className="-mr-2.5" />
                    ))} */}
                          {users.length >= 1 && (
                            <img src={user1} alt="" className="-mr-2.5" />
                          )}
                          {users.length >= 2 && (
                            <img src={user2} alt="" className="-mr-2.5" />
                          )}
                          {users.length >= 3 && (
                            <img src={user3} alt="" className="-mr-2.5" />
                          )}
                          {users.length >= 4 && (
                            <img src={user4} alt="" className="-mr-2.5" />
                          )}
                          {users.length >= 5 && (
                            <img src={user5} alt="" className="-mr-2.5" />
                          )}
                          {users.length > 5 && (
                            <span className="w-[25px] h-[25px] font-medium rounded-full flex items-center justify-center text-xs bg-gray-100 border border-white">
                              +{users.length - 5}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="w-[152px] text-xs text-gray-500 flex items-center justify-start px-6 h-[72px]">
                          <button className="flex items-center">
                            <ICON.DownloadIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </div>
                )
              )}
            </tbody>
          </div>
        </div>
      </table>
    </div>
  );
}

export default Table;
