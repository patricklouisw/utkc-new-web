"use client";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function MailingList() {
  const firstNameRef = useRef("") as any;
  const lastNameRef = useRef("") as any;
  const emailRef = useRef("") as any;

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    try {
      const result = await fetch("/api/subscribe-user", {
        body: JSON.stringify({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      const errorMessage = await result.json();

      if (result.status >= 400) {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          html: errorMessage.error,
        });
      } else if (result.status >= 200) {
        Swal.fire({
          icon: "success",
          title: "Subscribed Successfully",
        });
      }
    } catch (error: any) {
      console.error(error);
    }

    e.target.reset();
  };

  return (
    <div className="w-full h-[36rem] relative">
      <img
        src="/images/train/ria1.jpg"
        alt="karate"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full bg-[#234C96] opacity-30 absolute top-0 left-0"></div>

      <div className="absolute inset-x-0 inset-y-0 max-w-7xl mx-auto flex justify-end items-center px-5">
        <form
          onSubmit={subscribeUser}
          className="bg-slate-100 p-5 rounded border flex flex-col gap-5 opacity-90"
        >
          <div>
            <h2 className="text-3xl text-blue-700 font-semibold leading-normal text-center uppercase">
              Interested?
            </h2>
            <h3 className="text-2xl text-red-500 font-medium underline leading-normal text-center uppercase tracking-tight">
              Join Our Mailing List
            </h3>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-md">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Enter Your First Name"
                name="firstName"
                ref={firstNameRef}
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-md">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Enter Your Last Name"
                name="lastName"
                ref={lastNameRef}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-md">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border rounded p-2"
              placeholder="Enter Your Email"
              name="email"
              ref={emailRef}
              required
            />
          </div>

          <button
            type="submit"
            name="subscribe"
            className="w-full rounded-md p-2 bg-blue-500 text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
