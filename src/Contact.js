import React from "react";

function Contact() {
  return (
    <div class="py-10 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Get in Touch With Us
          </h2>
          <p class="mt-2 mr-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We're ready to lead you into the dream houses in Antalya..
          </p>
          <hr className="mt-5 breakline ml-32"></hr>
          <div className="flex ml-20 pl-10 tracking-tight lg:text-center">
            <div className="pl-5 pb-15 mt-3">
              <img
                src="/img/us.png"
                alt="couple"
                width="200px"
                height="200px"
              ></img>
            </div>
            <div>
              <p class="mt-12 pl-5 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                <span className="couple italic ">
                  Contact with our Dream Team:
                </span>
                <p>
                  "We are Belgian (Corporate Planner) & Turkish (Web Developer)
                  couple who is living winter time in Antalya and summer time in
                  Ghent, Belgium. We would like to help you for your any further
                  questions."
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-10 ml-10">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="province">Province</label>
          <select id="province" name="province">
            <option value="Antalya Centrum">Antalya Centrum</option>
            <option value="Alanya">Alanya</option>
            <option value="Kemer">Kemer</option>
            <option value="Kalkan">Kalkan</option>
          </select>
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write your wish.."
            style={{ height: "200px" }}
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="bg-indigo-600 font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
