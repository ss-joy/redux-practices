import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  addBooking,
  deleteBooking,
} from "../redux/bookings/action-creators.js";
function BookingForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  function onSubmit(fData) {
    fData.id = v4();
    if (fData) {
      dispatch(addBooking(fData));
    }
  }
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="first-hero lws-inputform"
          noValidate
        >
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                {...register("from", {
                  required: {
                    value: true,
                    message: "dest de",
                  },
                })}
                className="outline-none px-2 py-2 w-full"
                id="lws-from"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="coxs">Cox&apos;s Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                {...register("to", {
                  required: {
                    value: true,
                    message: "dto de",
                  },
                })}
                className="outline-none px-2 py-2 w-full"
                id="lws-to"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="cox">Cox&apos;s Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              {...register("date", {
                required: {
                  value: true,
                  message: "date de",
                },
              })}
              type="date"
              className="outline-none px-2 py-2 w-full date"
              id="lws-date"
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                {...register("guests", {
                  required: {
                    value: true,
                    message: "guest de",
                  },
                })}
                className="outline-none px-2 py-2 w-full"
                id="lws-guests"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                {...register("ticketClass", {
                  required: {
                    value: true,
                    message: "cal de",
                  },
                })}
                className="outline-none px-2 py-2 w-full"
                id="lws-ticketClass"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
