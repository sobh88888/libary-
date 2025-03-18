import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "./images/image.jpg";
import pic2 from "./images/image(1).jpg";
import pic3 from "./images/image(2).jpg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Minimum 3 characters required"),
  email: z.string().email("Invalid email address"),
  pnumber: z.number().min(10, "number must be at least 10"),
});

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    data.preventdefault();
    console.log(data);
  };

  return (
    <main className="w-full h-[95vh] relative shadow-md overflow-hidden transition-all duration-300">
      <section className="absolute inset-0 flex gap-[60px] h-auto w-auto items-center justify-center z-[1]">
        <article className="bg-[rgba(49,49,49,0.6)] border border-solid border-[1px] w-[60%] p-4 flex flex-col gap-[30px] shaddow-md ml-[40px]">
          <h1 className="text-3xl font-bold text-white font-normal text-[36px] leading-[40px]">
            KALINGA INSTITUTE OF ALLIED HEALTH AND TRAINING CENTRE (KIAHTC)
          </h1>
          <h2 className="text-2xl font-bold text-white font-normal text-[24px] leading-[32px]">
            Affiliated by Central Bharat Sevak Samaj (CBSS) PIONER INSTITUTE OF
            PARA MEDICAL SCIENCES (PIPS)
          </h2>
        </article>

        <article className="bg-[rgba(28,28,28,0.6)] flex flex-col gap-[10px] rounded-lg p-[30px] h-auto w-[400px]">
          <h2 className="underline font-bold text-3xl text-white text-center">
            Connect for Guidance
          </h2>
          <form
            className="flex flex-col gap-[30px] h-full w-full justfy-center item-center  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-[10px] ">
              <label className="text-white">Name</label>
              <input
                {...register("name")}
                placeholder="Enter name"
                className=" p-6 h-[40px] w-[90%] border border-gray-300 rounded bg-white"
              />
              {errors.name ? (
                <p className="text-red-500">{errors.name.message}</p>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="text-white">Email</label>
              <input
                {...register("email")}
                placeholder="Enter email"
                className="p-6 h-[40px] w-[90%] border border-gray-300 rounded bg-white"
              />
              {errors.email ? (
                <p className="text-red-500">{errors.email.message}</p>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col gap-[10px] ">
              <label className="text-white">Number</label>
              <input
                {...register("pnumber")}
                placeholder="Enter number"
                className="p-6 h-[40px] w-[90%] border border-gray-300 rounded bg-white"
              />
              {errors.pnumber ? (
                <p className="text-red-500">{errors.pnumber.message}</p>
              ) : (
                <></>
              )}
            </div>

            <button className="w-[130px] p-6 h-[40px]  bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </article>
      </section>

      <Slider {...settings}>
        <div className="transition-all duration-300">
          <img
            src={pic1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="transition-all duration-300">
          <img
            src={pic2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="transition-all duration-300">
          <img
            src={pic3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </main>
  );
};

export default Sliders;
