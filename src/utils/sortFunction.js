import React from "react";

const InvoiceSort = (data) => {
  const sortedData = [...data].sort((a, b) => {
    const start = a.name.toLowerCase();
    const end = b.name.toLowerCase();

    if (start < end) {
      return -1;
    } else if (start > end) {
      return 1;
    }

    return 0;
  });
  return sortedData;
};

export const sortFunction = {
  InvoiceSort,
};
