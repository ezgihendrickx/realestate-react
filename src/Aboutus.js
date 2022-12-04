import React from "react";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="Aboutus mt-5">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="lg:text-center ">
            <h2 className="ml-2 text-base text-indigo-600 font-semibold tracking-wide uppercase ">
              {t("aboutUs.aboutUs")}
            </h2>
            <p className="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("aboutUs.header")}
            </p>

            <div className="lg:flex justify-center ml-2 tracking-tight lg:text-center">
              <div className="mt-5 pl-5 pb-15">
                <img
                  src="/img/aboutUs/baba.png"
                  alt="ownerofcompany"
                  width="200px"
                  height="200px"
                ></img>
              </div>
              <div>
                <p className="mt-10 max-w-2xl text-xl text-gray-500 lg:ml-2 ">
                  {t("aboutUs.explanation")}
                </p>
              </div>
            </div>
            <div className="hidden sm:block lg:max-w-9xl mt-5 breakline lg:ml-64"></div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Competitive exchange rates */}
                    </dt>
                    <div className="foto1">
                      <img
                        src="/img/aboutUs/kukgarden.png"
                        alt="gardenview"
                      ></img>
                    </div>
                    <dd className="mt-2  text-base text-gray-500">
                      {/* Garden views / landscape from the building blocks */}
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 ">
                    <div className="foto2">
                      <img src="/img/aboutUs/pool.png" alt="photocollage"></img>
                    </div>

                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* No hidden fees */}
                    </dt>
                    {/* <dd className="mt-2 text-base text-gray-500">Pool</dd> */}
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 foto3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Transfers are instant */}
                    </dt>
                    <img src="/img/aboutUs/kuk.png" alt="logo"></img>
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
                    <img src="/img/aboutUs/indoor.png" alt="indoor"></img>
                    <dd className="mt-2 text-base text-gray-500">
                      Indoor decoration
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 foto5">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Mobile notifications */}
                    </dt>
                    <img src="/img/aboutUs/collage.png" alt="reference"></img>
                    <dd className="mt-2 text-base text-gray-500">
                      Photo Collage of the Project
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0"></div>
                  <div className="mr-24 foto6">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {/* Mobile notifications */}
                    </dt>
                    <img src="/img/aboutUs/logos1.jpg" alt="reference"></img>
                    <dd className="mt-1 text-base text-gray-500">
                      Certificates
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
