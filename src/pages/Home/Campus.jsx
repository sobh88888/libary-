import React from "react";

const Campus = () => {
  return (
    <section className="h-[60vh] w-full grid grid-cols-2">
      <article className=" h-full w-full flex flex-col gap-[30px] justify-center item-center pl-[70px]">
        <h2 className="font-normal text-[36px] leading-[40px] text-[rgb(10,10,10)] font-[Arial,Helvetica,sans-serif]">
          Welcome To Our Campus
        </h2>
        <h5 className="font-[Arial,Helvetica,sans-serif] font-semibold text-[16px] leading-[24px] text-[rgb(10,10,10)]">
          We are delighted to welcome you to the Kalinga Institute of Allied
          Health Training Centre (KIAHTC), a vibrant hub of learning, growth,
          and excellence.
        </h5>
        <p className="font-[Arial,Helvetica,sans-serif] font-normal text-[16px] leading-[24px] text-[rgb(10,10,10)]">
          Our campus is more than just a place to study; it's a community where
          students from diverse backgrounds come together to share knowledge,
          experiences, and aspirations. With a state-of-the-art infrastructure,
          dedicated faculty, and a dynamic curriculum, we are committed to
          empowering you with the skills and values needed to thrive in today's
          fast-evolving world.
        </p>
        <button className="h-[50px] w-[140px] font-[Arial,Helvetica,sans-serif] font-normal text-[16px] leading-[24px] text-white bg-yellow-300 hover:bg-[#EAB308]">
          Read more...
        </button>
      </article>
      <article className="h-full w-full">
        <img
          src="http://157.173.220.213:3009/_next/image?url=%2Fassets%2Fimages%2Fstudent4.jpg&w=1920&q=75"
          className="h-full w-[200%] object-fill"
        ></img>
      </article>
    </section>
  );
};

export default Campus;
