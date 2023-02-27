import React from "react";

export const ImagePopup = ({ image, onClose }: any) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="bg-yellow-100 p-4 rounded-lg z-10 w-9/12 lg:w-1/2 flex flex-col">
          <img src={image} alt="Selected" className="rounded-lg" />
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg">
            Close
          </button>
        </div>
      </div>
    );
  }