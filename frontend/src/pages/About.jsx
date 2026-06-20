import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import { ShieldCheck, Truck, Headphones } from 'lucide-react';
import NewLatterBox from "../component/NewLatterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-400">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/3  text-gray-600">
          <p>
            Welcome to our e-commerce store, your one-stop destination for
            quality products at affordable prices. We are committed to providing
            a seamless online shopping experience with a carefully curated
            collection of fashion, accessories, and lifestyle products. Our goal
            is to make shopping simple, convenient, and enjoyable by offering a
            wide range of products, secure payment options, and reliable
            delivery services.
          </p>
          <p>
            Customer satisfaction is at the heart of everything we do. We
            believe in building long-term relationships with our customers by
            delivering excellent service, high-quality products, and exceptional
            value. Whether you're looking for the latest trends or everyday
            essentials, our team works tirelessly to bring you the best
            selection and a hassle-free shopping experience from start to
            finish.
          </p>
          <b className="text-4xl">Our mission</b>
          <p>
            Our mission is to make online shopping simple, affordable, and
            accessible for everyone by offering high-quality products,
            exceptional customer service, and a seamless shopping experience. We
            strive to build trust with our customers through reliability,
            innovation, and continuous improvement, ensuring that every purchase
            delivers value, convenience, and satisfaction.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We are committed to delivering products that meet the highest
              standards of quality and reliability. Every item in our collection
              is carefully selected and thoroughly reviewed to ensure it
              provides excellent value and satisfaction.
            </p>
          </div>

          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Convenience</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Shopping should be easy, convenient, and stress-free. Our
              user-friendly website, secure payment options, and streamlined
              checkout process save you time and effort, with fast delivery and
              easy order tracking.
            </p>
          </div>

          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <Headphones  className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Exceptional customer service is at the core of our business —
              prompt, friendly, and reliable support at every stage of your
              shopping journey.
            </p>
          </div>
        </div>
      </section>

      <NewLatterBox/>
    </div>
  );
};

export default About;
