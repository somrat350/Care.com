"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const BookingForm = ({ wareHouses }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      durationType: "days",
    },
  });
  const division = useWatch({ control, name: "division" });
  const durationType = useWatch({ control, name: "durationType" });
  const duration = useWatch({ control, name: "duration" });
  const [cost, setCost] = useState(0);

  const PRICE_PER_DAY = 200;
  const PRICE_PER_HOUR = 30;

  useEffect(() => {
    if (!duration || duration <= 0) {
      setCost(0);
      return;
    }

    if (durationType === "days") {
      setCost(duration * PRICE_PER_DAY);
    } else if (durationType === "hours") {
      setCost(duration * PRICE_PER_HOUR);
    }
  }, [duration, durationType]);

  const divisionsDuplicate = wareHouses?.map((house) => house.division);
  const divisions = [...new Set(divisionsDuplicate)];

  const districtsByDivision = (division) => {
    const divisionDistricts = wareHouses.filter(
      (house) => house.division === division
    );
    return divisionDistricts.map((d) => d.district);
  };

  const formSubmit = (data) => {
    console.log(data);
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
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
