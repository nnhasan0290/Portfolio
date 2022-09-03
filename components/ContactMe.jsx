import {
  FacebookRounded, GitHub, Instagram, LinkedIn, Mail, Phone, Send, Twitter
} from '@mui/icons-material';
import Link from 'next/link';
import React, { useState } from 'react';
import BigHead from './BigHead';
import GradientBtn from './GradientBtn';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    alert('Message has been sent successfully');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  return (
    <main className=" sm:px-[100px] sm:py-10 bg-[#111111] text-white box-border min-h-screen ">
      <BigHead main="GET IN TOUCH" background="CONTACT" />
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="min-w-[200px] lg:max-w-[400px] p-2  my-2">
          <div className="">
            <h1 className="font-semibold">Feel Free To Knock</h1>
            <p className="my-5 opacity-80">
              Feel free to get in touch with me. I am alwaysopen to
              discussing new projects,creative ideas or opportunities
              to be part of your visions.
            </p>
          </div>
          <div className="flex my-5 space-x-3">
            <Mail fontSize="large" />
            <div className="text-lg">
              <p className="leading-5 opacity-70">Mail Me</p>
              <p>nazmulhasan0290@gmail.com</p>
            </div>
          </div>
          <div className="flex my-5 space-x-3">
            <Phone fontSize="large" />
            <div className="text-lg">
              <p className="leading-5 opacity-70">Phone Me</p>
              <p>+8801521408381</p>
            </div>
          </div>
          <div className="flex my-5 space-x-3">
            <Link href="https://www.facebook.com/profile.php?id=100006626565477">
              <FacebookRounded fontSize="large" className="cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/NLNazmuL1">
              <Twitter fontSize="large" className="cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/nazmul6390/">
              <Instagram fontSize="large" className="cursor-pointer" />
            </Link>
            <Link href="https://github.com/nnhasan0290">
              <GitHub fontSize="large" className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/nazmul-hasan-6b4995223/">
              <LinkedIn fontSize="large" className="cursor-pointer" />
            </Link>

          </div>
        </div>
        <form onSubmit={submitHandle} className="min-w-[250px]  py-2 flex flex-col lg:px-10  my-2 w-full">
          <div className="flex flex-wrap">
            <div className="flex p-2 w-full md:basis-1/2">
              <input onChange={(e) => setName(e.target.value)} value={name} className=" bg-[#615f5f22] p-3 rounded-full w-full" type="text" name="name" id="name" placeholder="Your Name" required />
            </div>
            <div className="p-2 w-full md:basis-1/2">
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#615f5f22] p-3 rounded-full " type="email" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="p-2">
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-[#615f5f22] p-3 rounded-full" type="text" name="subject" id="subject" placeholder="Your Subject" required />
          </div>
          <div className="p-2 w-full">
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="outline-none bg-[#615f5f22] p-3 rounded-md w-full" name="message" id="message" cols="30" rows="8" placeholder="Your Message" required />
          </div>
          <div>
            <GradientBtn type="submit" text="Send Message" icon={<Send />} />
          </div>
        </form>
      </div>
    </main>
  );
}
