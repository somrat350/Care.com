"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";

const BookingForm = ({ wareHouses, service }) => {
  const { data: session } = useSession();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      durationType: "days",
    },
  });
  const [loading, setLoading] = useState(false);
  const division = useWatch({ control, name: "division" });
  const durationType = useWatch({ control, name: "durationType" });
  const duration = useWatch({ control, name: "duration" });
  const [cost, setCost] = useState(0);

  useEffect(() => {
    if (!duration || duration <= 0) {
      setCost(0);
      return;
    }

    if (durationType === "days") {
      setCost(duration * service.costPerDay);
    } else if (durationType === "hours") {
      setCost(duration * service.costPerHour);
    }
  }, [duration, durationType, service]);

  const divisionsDuplicate = wareHouses?.map((house) => house.division);
  const divisions = [...new Set(divisionsDuplicate)];

  const districtsByDivision = (division) => {
    const divisionDistricts = wareHouses.filter(
      (house) => house.division === division
    );
    return divisionDistricts.map((d) => d.district);
  };

  const formSubmit = (data) => {
    const newBooking = {
      email: session.user.email,
      name: session.user.name,
      address: `${data.division}, ${data.district}, ${data.area}`,
      serviceId: service._id,
      serviceName: service.title,
      cost,
      duration,
      durationType,
      status: "pending",
      createdAt: new Date(),
    };

    Swal.fire({
      title: "Are you sure to booking?",
      text: `You should pay the cost $${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, booked it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .post("/api/bookings", newBooking)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Booked!",
                text: "Service booking successful!",
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
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="md:w-1/2 flex flex-col gap-4"
    >
      {/* Duration */}
      <div>
        <label className="font-semibold mb-1">Duration </label>
        <div className="flex gap-4 my-2">
          <div className="flex gap-1">
            <input
              type="radio"
              {...register("durationType")}
              value={"days"}
              className="radio"
              id="days"
            />
            <label htmlFor="days">Days</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="hours"
              {...register("durationType")}
              value={"hours"}
              className="radio"
            />
            <label htmlFor="hours">Hours</label>
          </div>
        </div>
        <input
          type="number"
          min={1}
          placeholder="Enter duration"
          {...register("duration")}
          required
          className="input w-full"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block font-semibold mb-1">Division</label>
        <select
          {...register("division")}
          required
          defaultValue="Pick a Division"
          className="select w-full"
        >
          <option disabled={true}>Pick a Division</option>
          {divisions?.map((d, i) => (
            <option value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-1">District</label>
        <select
          {...register("district")}
          required
          defaultValue="Pick a District"
          className="select w-full"
        >
          <option disabled={true}>Pick a District</option>
          {districtsByDivision(division)?.map((d, i) => (
            <option value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-1">Area / Address</label>
        <input
          type="text"
          {...register("area")}
          placeholder="Full address..."
          required
          className="input w-full"
        />
      </div>

      {/* Total Cost */}
      <div className="mt-2 font-semibold text-lg">
        Total Cost: <span className="text-secondary">${cost}</span>
      </div>

      {/* Confirm Booking */}
      <button
        // onClick={handleBooking}
        className="btn btn-secondary skeleton bg-secondary hover:scale-105 transition mt-4 font-semibold"
      >
        <span className={`${loading ? "loading" : ""}`}></span>
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
