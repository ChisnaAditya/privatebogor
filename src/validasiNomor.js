import React from "react";

export default function tesNomorHP(phone) {
  if (
    !phone ||
    !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)
  ) {
    return false;
  }
}
