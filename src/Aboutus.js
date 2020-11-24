import React from "react";

function Aboutus() {
  return (
    <div className="Aboutus mt-5">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="lg:text-center ">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              ABOUT US
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Reference Projects
            </p>

            <div className="flex ml-20  pl-10 tracking-tight lg:text-center   ">
              <div className="pl-5 pb-15">
                <img
                  src="/img/baba.png"
                  alt="ownerofcompany"
                  width="200px"
                  height="200px"
                ></img>
              </div>
              <div>
                <p className="mt-10 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Camlik Park Residence was build from Omer Kuk who is an
                  engineer and owner of Antalya Dream Homes Real Estate Company.
                  He has more than <strong>30 years</strong> experience in
                  construction and building houses.
                </p>
              </div>
            </div>
            <hr className="mt-5 breakline ml-32"></hr>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-24">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Competitive exchange rates */}
                    </dt>
                    <div className="foto1">
                      <img src="/img/kukgarden.png" alt="gardenview"></img>
                    </div>
                    <dd className="mt-2  text-base text-gray-500">
                      Garden views / landscape from the building blocks
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 ">
                    <div className="foto2">
                      <img src="/img/pool.png" alt="photocollage"></img>
                    </div>

                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* No hidden fees */}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">Pool</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-24 foto3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Transfers are instant */}
                    </dt>
                    <img src="/img/kuk.png" alt="logo"></img>
                    <dd className="mt-2 text-base text-gray-500">
                      Camlik Park Residence, Kuk Group
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 foto4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Mobile notifications */}
                    </dt>
                    <img src="/img/indoor.png" alt="indoor"></img>
                    <dd className="mt-2 text-base text-gray-500">
                      Indoor decoration
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-24 foto5">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Mobile notifications */}
                    </dt>
                    <img src="/img/collage.png" alt="reference"></img>
                    <dd className="mt-2 text-base text-gray-500">
                      Photo Collage of the Project
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
