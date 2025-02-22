import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AddProjectModal = ({ isModalOpen, closeModal }) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>  {/* ✅ Modal Opens When isModalOpen is true */}
      <Dialog as="div" open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg">
              <Dialog.Title className="text-xl font-bold">Add Project</Dialog.Title>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Project Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full p-2"
                    placeholder="Enter project name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                    className="border border-gray-300 rounded w-full p-2"
                    placeholder="Enter project description"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                    Save
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddProjectModal;
