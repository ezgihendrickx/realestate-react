import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// npm install @emailjs/browser --save

function Contact() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  //State to show a confirmation message
  const [show_confirm_msg, setShowConfirmMsg] = useState(false);
  //Function sendEmail communicates with "EmailJS" server, sends e-mail to Gmail
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2npudtj",
        "template_upc9s6f",
        e.target,
        "7QwYKCcSuVL9Zp_dO"
      )
      .then(
        (result) => {
          console.log(result.text);
          //"show confirmation message"
          setShowConfirmMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="ml-2 text-base text-indigo-600 font-semibold tracking-wide uppercase ">
            {t("contact.getintouch")}
          </h2>
          <p className="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.header2")}
          </p>

          <div className=" tracking-tight lg:flex justify-center ">
            <div className="mt-5 pl-5 ">
              <img
                src="/img/aboutUs/us.png"
                alt="couple"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div>
              <p className=" mt-10 max-w-2xl text-xl text-gray-600 ml-2  ">
                {/* text-left mt-12 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto  */}
                <span className="couple italic">
                  {t("contact.contact")} <big>🧚🏽‍♀️</big>
                </span>
                <br />
                {t("contact.explanation2")}
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                antalyadomhomes@inbox.ru
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                {/*https://dev.to/ebereplenty/add-whatsapp-chat-to-your-website-react-and-html-3a5g*/}
                <a
                  href="https://wa.me/32491888399"
                  className="whatsapp_float "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp whatsapp-icon mr-5 text-green-500"></i>
                  For only Europe +32 491 88 83 99 Наталья Иванова +905528943740
                  محمد اکبری +989123790225
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="ml-2 text-base text-indigo-600 font-semibold tracking-wide uppercase ">
            {t("contact.getintouch")}
          </h2>
          <p className="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.header2")}
          </p>

          <div className=" tracking-tight lg:flex justify-center ">
            <div className="mt-5 pl-5 ">
              <img
                src="/img/aboutUs/Nathalia.jpg"
                alt="couple"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div>
              <p className=" mt-10 max-w-2xl text-xl text-gray-600 ml-2  ">
                {/* text-left mt-12 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto  */}
                <span className="couple italic">
                  {t("contact.contact")} <big>🧚🏽‍♀️</big>
                </span>
                <br />
                Инженер-землеустроитель по образованию. 9 лет работала в ДЗК, и
                2 года в аграрной фирме.
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                antalyadomhomes@inbox.ru
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                {/*https://dev.to/ebereplenty/add-whatsapp-chat-to-your-website-react-and-html-3a5g*/}
                <a
                  href="https://wa.me/32491888399"
                  className="whatsapp_float "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp whatsapp-icon mr-5 text-green-500"></i>
                  For only Russia, Ukraine Kazakhstan Наталья Иванова
                  +905528943740
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="ml-2 text-base text-indigo-600 font-semibold tracking-wide uppercase ">
            {t("contact.getintouch")}
          </h2>
          <p className="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.header2")}
          </p>

          <div className=" tracking-tight lg:flex justify-center ">
            <div className="mt-5 pl-5 ">
              <img
                src="/img/aboutUs/akbari.jpg"
                alt="couple"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div>
              <p className=" mt-10 max-w-2xl text-xl text-gray-600 ml-2  ">
                {/* text-left mt-12 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto  */}
                <span className="couple italic">
                  {t("contact.contact")} <big>🧚🏽‍♀️</big>
                </span>
                <br />
                محمد اکبری فارغ التحصیل در رشته مهندسی مکانیک از دانشگاه تکنیک
                یلدیز _استانبول ترکیه ۱۹۸۸ نماینده رسمی در شرکت Aom Homes
                آنتالیا _ ترکیه
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                antalyadomhomes@inbox.ru
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-600 ml-2 ">
                {/*https://dev.to/ebereplenty/add-whatsapp-chat-to-your-website-react-and-html-3a5g*/}
                <a
                  href="https://wa.me/32491888399"
                  className="whatsapp_float "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp whatsapp-icon mr-5 text-green-500"></i>
                  For only Iran: تلفن تماس +989123790225
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-800 container mt-10 mx-auto">
        <form onSubmit={sendEmail}>
          {/*action="/action_page.php "*/}
          <label htmlFor="fname" className="text-white ">
            {t("form.firstName")}
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder={t("form.input1")}
          />
          <label htmlFor="lname" className="text-white ">
            {t("form.lastName")}
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder={t("form.input2")}
          />
          <label htmlFor="email" className="text-white ">
            {t("form.email")}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={t("form.input4")}
          />
          {/*
          <label htmlFor="province" className="text-white ">
            {t("form.province")}
          </label>
         
          <select id="province" name="province">
            <option value="Antalya Centrum">Antalya Center</option>
            <option value="Alanya">Alanya</option>
            <option value="Kemer">Kemer</option>
            <option value="Kalkan">Kalkan</option>
          </select>
  */}
          <label htmlFor="subject" className="text-white ">
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
        {/*End Form*/}

        <div className="text-white">
          {show_confirm_msg && (
            <div>
              <br />
              Thank you for your message. We will contact you as soon as
              possible.
            </div>
          )}
          {/*To write this code: confirmation message when send*/}
        </div>
      </div>
    </div>
  );
}

export default Contact;
