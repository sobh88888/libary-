import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <article>
        <h1 className="text-[35px]  text-[#0C4278] ml-10 mb-2 ">Contact Us</h1>
        <div className="h-full w-full  grid grid-cols-2 grid-rows-2 bg-[#EFF6FF]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVsZXBob25lfGVufDB8fDB8fHww"
              alt="error"
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4 text-center mt-5">
              Connect for Guidance
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" h-full w-[80%] m-auto space-y-4 flex flex-col"
            >
              <div className="flex flex-col gap-4">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label className="block font-semibold">Phone</label>
                <input
                  type="text"
                  {...register("phone")}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Your Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-800 text-white px-4 py-2 rounded-lg h-[40px] w-[120px] hover:bg-green-500"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="h-[100%] w-[50%] m-auto flex flex-col justify-center  gap-1 p-2">
            <p className="text-[30px] underline">Address</p>
            <p className="">
              Plot No D3/12 Madhusudhan Samabaya Nagar, Dumduma Near Cosmopolis
              Ps: Khandagiri, Pin: 751019 Dist: Khorda Odisha Phone: +91
              7325804628, +91 8926259873 Email: kaihtc2024@gmail.com
            </p>
          </div>
          <div className="">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9020810443745!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909fa4c63b0a1%3A0x8e3d4e3b8df8b4e1!2sKalinga%20Institute!5e0!3m2!1sen!2sin!4v1616084789952!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contactus;
