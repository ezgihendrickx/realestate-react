import React from "react";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div class="py-10 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="ml-2 text-base text-indigo-600 font-semibold tracking-wide uppercase ">
            {t("contact.getintouch")}
          </h2>
          <p class="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.header2")}
          </p>

          <div className=" tracking-tight lg:flex justify-center ">
            <div className="mt-5 pl-5 ">
              <img
                src="/img/us.png"
                alt="couple"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div>
              <p class=" mt-10 max-w-2xl text-xl text-gray-500 ml-2  ">
                {/* text-left mt-12 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto  */}
                <span className="couple italic">
                  {t("contact.contact")} <big>🧚🏽‍♀️</big>
                </span>
                <p>{t("contact.explanation2")}</p>
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-500 ml-2 ">
                ezgihendrickx@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class=" bg-gray-800 container mt-10 ml-10 lg:mx-auto">
        <form action="/action_page.php ">
          <label for="fname" className="text-white ">
            {t("form.firstName")}
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder={t("form.input1")}
          />

          <label for="lname" className="text-white ">
            {t("form.lastName")}
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder={t("form.input2")}
          />
          <label for="province" className="text-white ">
            {t("form.province")}
          </label>
          <select id="province" name="province">
            <option value="Antalya Centrum">Antalya Center</option>
            <option value="Alanya">Alanya</option>
            <option value="Kemer">Kemer</option>
            <option value="Kalkan">Kalkan</option>
          </select>
          <label for="subject" className="text-white ">
            {t("form.subject")}
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder={t("form.input3")}
            style={{ height: "200px" }}
          ></textarea>
          <input
            type="submit"
            value={t("form.submit")}
            className="bg-indigo-600 font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
