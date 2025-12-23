"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const CancelBookingButton = ({ className, children, id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCancelBooking = () => {
    Swal.fire({
      title: "Are you sure to cancel it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .patch(`/api/bookings/${id}`, {
            status: "cancelled",
          })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              router.refresh();
              Swal.fire({
                title: "Cancelled!",
                icon: "success",
              });
            }
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };
  return (
    <button onClick={handleCancelBooking} className={`${className}`}>
      <span className={`${loading && "loading"}`}></span> {children}
    </button>
  );
};

export default CancelBookingButton;
