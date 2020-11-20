import React from "react";
// import { Route } from "react-router-dom/Route";
// import { BrowserRouter as Router } from "react-router-dom";

function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              ABOUT US
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Reference Projects
            </p>
            <div className="flex ml-20 pl-20 tracking-tight lg:text-center   ">
              <div>
                <img src="/img/baba.png" alt="reference"></img>
              </div>
              <div>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Camlik Park Residence was build from Omer Kuk who is an
                  engineer and owner of Antalya Dream Homes Real Estate Company.
                  He has more than <strong>30 years</strong> experience in
                  construction and building houses.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* Competitive exchange rates */}
                  </dt>
                  <div className="foto1">
                    <img src="/img/kuk.png" alt="logomuz"></img>
                  </div>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <div className="foto1">
                    <img src="/img/fotokader.png" alt="photocollage"></img>
                  </div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* No hidden fees */}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* Transfers are instant */}
                  </dt>
                  <img src="/img/bahce.png" alt="garden"></img>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* Mobile notifications */}
                  </dt>
                  <img src="/img/interior.png" alt="interior"></img>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* Mobile notifications */}
                  </dt>
                  <img src="/img/pool.png" alt="pool"></img>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {/* Mobile notifications */}
                  </dt>
                  <img src="/img/reference.png" alt="reference"></img>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
