"use client";

import AOSComponent from "@/lib/aos";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(formdata: FormData) {
    if (!name || !message || !email) return;

    // Using Web3Forms to send emails to samah.shakir.ali@gmail.com
    const emailPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
        name: name,
        email: email,
        message: message,
        subject: `Portfolio Contact from ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setName("");
          setEmail("");
          setMessage("");
          return data;
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      });

    toast.promise(emailPromise, {
      loading: "Sending message...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Something went wrong while sending message :(",
    });
  }

  return (
    <AOSComponent>
      <section
        id="contact"
        className="mt-32 flex flex-col gap-6 p-6 pb-20 text-slate-900 2xl:pb-60"
      >
        <h3
          className="contact-title mb-4 font-heading text-4xl"
          data-aos="fade-left"
        >
          Contact me
        </h3>
        <form
          action={sendEmail}
          className="flex flex-col gap-6 text-xl placeholder:text-xl"
        >
          <div data-aos="fade-left" className="w-full">
            <input
              className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20"
              required
              placeholder="Your name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              value={name}
            />
          </div>
          <div data-aos="fade-left" className="w-full">
            <input
              className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20"
              required
              placeholder="Your email"
              id="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div data-aos="fade-left" className="w-full">
            <textarea
              className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-32"
              required
              placeholder="Your message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <button className="max-w-[600px] rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl">
            Send
          </button>
        </form>
      </section>
    </AOSComponent>
  );
}
