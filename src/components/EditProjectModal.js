import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import axios from "axios";
import toast from "react-hot-toast";

const AddProjectModal = ({ isModalOpen, closeModal, edit = false, id = null }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (edit && isModalOpen) {
      axios
        .get(`http://localhost:9000/project/${id}`)
        .then((res) => {
          setTitle(res.data[0].title);
          setDesc(res.data[0].description);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  }, [isModalOpen, edit, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      axios
        .post("http://localhost:9000/project/", { title, description: desc })
        .then((res) => {
          closeModal();
          const customEvent = new CustomEvent("projectUpdate", { detail: { ...res.data } });
          document.dispatchEvent(customEvent);
          toast.success("Project created successfully");
          setTitle("");
          setDesc("");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            toast.error(error.response.data.details[0].message);
          } else {
            toast.error("Something went wrong");
          }
        });
    } else {
      axios
        .put(`http://localhost:9000/project/${id}`, { title, description: desc })
        .then((res) => {
          closeModal();
          const customEvent = new CustomEvent("projectUpdate", { detail: { ...res.data } });
          document.dispatchEvent(customEvent);
          toast.success("Project updated successfully");
          setTitle("");
          setDesc("");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            toast.error(error.response.data.details[0].message);
          } else {
            toast.error("Something went wrong");
          }
        });
    }
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4 w-screen h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="rounded-md bg-white w-6/12">
              <Dialog.Title as="div" className="bg-white shadow px-6 py-4 rounded-t-md sticky top-0">
                {edit ? <h1>Edit Project</h1> : <h1>Create Project</h1>}
                <button
                  onClick={closeModal}
                  className="absolute right-6 top-4 text-gray-500 hover:bg-gray-100 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indigo-200"
                >
                  ❌
                </button>
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="gap-4 px-8 py-4">
                <div className="mb-3">
                  <label htmlFor="title" className="block text-gray-600">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-indigo-400"
                    placeholder="Project title"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="Description" className="block text-gray-600">
                    Description
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="border border-gray-300 rounded-md w-full text-sm py-2 px-2.5 focus:border-indigo-500 focus:outline-offset-1 focus:outline-indigo-400"
                    rows="6"
                    placeholder="Project description"
                  ></textarea>
                </div>
                <div className="flex justify-end items-center space-x-2">
                  <BtnSecondary onClick={closeModal}>Cancel</BtnSecondary>
                  <BtnPrimary>Save</BtnPrimary>
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
