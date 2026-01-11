import React from 'react';
import Swimming from '../assets/swimming.png'
import  Class from '../assets/class.png'
import Playground from '../assets/playground.png'
const QZone = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4">
        <h2 className="font-semibold text-lg mb-3">Q-Zone</h2>

        <div className="space-y-4">
          {/* Swimming */}
          <div className="border rounded-lg p-2">
            <img
              src={Swimming}
              alt="Swimming"
              className="w-full rounded-md"
            />
            <p className="text-center mt-2 text-sm font-medium">
              Swimming
            </p>
          </div>

          {/* Class */}
          <div className="border rounded-lg p-2">
            <img
              src={Class}
              alt="Class"
              className="w-full rounded-md"
            />
            <p className="text-center mt-2 text-sm font-medium">
              Class
            </p>
          </div>

          {/* Playground */}
          <div className="border rounded-lg p-2">
            <img
              src={Playground}
              alt="Playground"
              className="w-full rounded-md"
            />
            <p className="text-center mt-2 text-sm font-medium">
              Playground
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZone;
