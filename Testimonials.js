import React from "react";
import { TerminalIcon, CodeIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <CodeIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Worked on fields like Machine Learning, Data Science, Web Development and Automation.<p>Important projects are mentioned here.</p>

          </p>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <a href={testimonial.link}><TerminalIcon className="block w-8 text-gray-500 mb-4" /></a>
              <a href={testimonial.link}>
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                </a>
                <div className="inline-flex items-center">
                <a href={testimonial.link}>
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 square-full flex-shrink-0 object-cover object-center"
                  />
                  </a>
                  <span className="flex-grow flex flex-col pl-4">
                  <a href={testimonial.link}>
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    </a>
                    <a href={testimonial.link}>
                      <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span></a>

                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}