import React from "react";
import { Link } from "react-router-dom";
import ShiftModal from "./ShiftModal";
import ShiftModalOutsidecities from "./ShiftModalOutsidecities";

const Shifting = () => {
  return (
    <section>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl border border-indigo-600 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-2xl tracking-tighter font-bold">
                  1 Bedroom hall and kitchen
                </h2>
                <h2 className="text-center text-green-600 text-sm tracking-tighter font-bold">
                  For 1 bedroom, dining, drawing & kitchen Service available
                  within a city and between two cities
                </h2>

                <div className="space-x-2 text-center py-2 lg:py-0"></div>
                <label htmlFor="my-modal-5" className="btn bg-teal-500">
                  Inside City
                </label>
                <ShiftModal></ShiftModal>
                <label htmlFor="my-modal-5" className="btn bg-amber-300">
                  Outside City
                </label>
                <ShiftModalOutsidecities></ShiftModalOutsidecities>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl border border-indigo-600 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-2xl tracking-tighter font-bold">
                  2 Bedroom hall and kitchen
                </h2>
                <h2 className="text-center text-green-600 text-sm tracking-tighter font-bold">
                  For 2 bedroom, dining, drawing & kitchen Service available
                  within a city and between two cities
                </h2>

                <div className="space-x-2 text-center py-2 lg:py-0"></div>
                <label htmlFor="my-modal-5" className="btn bg-teal-500">
                  Inside City
                </label>
                <ShiftModal></ShiftModal>
                <label htmlFor="my-modal-5" className="btn bg-amber-300">
                  Outside City
                </label>
                <ShiftModalOutsidecities></ShiftModalOutsidecities>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl border border-indigo-600 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-2xl tracking-tighter font-bold">
                  3 Bedroom hall and kitchen
                </h2>
                <h2 className="text-center text-green-600 text-sm tracking-tighter font-bold">
                  For 3 bedroom, dining, drawing & kitchen Service available
                  within a city and between two cities
                </h2>

                <div className="space-x-2 text-center py-2 lg:py-0"></div>
                <label htmlFor="my-modal-5" className="btn bg-teal-500">
                  Inside City
                </label>
                <ShiftModal></ShiftModal>
                <label htmlFor="my-modal-5" className="btn bg-amber-300">
                  Outside City
                </label>
                <ShiftModalOutsidecities></ShiftModalOutsidecities>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl border border-indigo-600 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-2xl tracking-tighter font-bold">
                  4 Bedroom hall and kitchen
                </h2>
                <h2 className="text-center text-green-600 text-sm tracking-tighter font-bold">
                  For 4 bedroom, dining, drawing & kitchen Service available
                  within a city and between two cities
                </h2>

                <div className="space-x-2 text-center py-2 lg:py-0"></div>
                <label htmlFor="my-modal-5" className="btn bg-teal-500">
                  Inside City
                </label>
                <ShiftModal></ShiftModal>
                <label htmlFor="my-modal-5" className="btn bg-amber-300">
                  Outside City
                </label>
                <ShiftModalOutsidecities></ShiftModalOutsidecities>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Shifting;
