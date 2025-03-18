import React from "react";
import "./adminform.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Define Zod schema
const FormSchema = z.object({
  pname: z.string().min(4, "Name should be at least 4 characters"),
  fname: z.string().min(4, "Father's name should be at least 4 characters"),
  foccupation: z.string().min(4, "Father's occupation should be 4 characters"),
  mname: z.string().min(4, "Mother's name should be at least 4 characters"),
  moccupation: z
    .string()
    .min(4, "Mother's occupation should be at least 4 characters"),
  dob: z.string().min(10, "Invalid date format (dd-mm-yyyy)"),
  adharNo: z.string().length(12, "Aadhar number must be 12 digits"),
  mobileNo: z.string().length(10, "Mobile number must be 10 digits"),
  marial: z.enum(["married", "unmarried"], {
    message: "Marital status is required",
  }),
  address: z.string().min(5, "Address is too short"),
  category: z.enum(["SC", "ST", "OBC"], { message: "Category is required" }),
  course: z.enum(["it", "diploma", "mca"], { message: "Course is required" }),
  passingYear10: z.string().min(4, "Enter valid passing year"),
  percentage10: z.string().min(1, "Enter valid percentage"),
  totalMarks10: z.string().min(1, "Enter total marks"),
  obtainedMarks10: z.string().min(1, "Enter obtained marks"),
  passingYear12: z.string().min(4, "Enter valid passing year"),
  percentage12: z.string().min(1, "Enter valid percentage"),
  totalMarks12: z.string().min(1, "Enter total marks"),
  obtainedMarks12: z.string().min(1, "Enter obtained marks"),
});

export default function Adminform() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      pname: "",
      fname: "",
      mname: "",
      foccupation: "",
      moccupation: "",
      dob: "",
      adharNo: "",
      mobileNo: "",
      marial: "",
      address: "",
      category: "",
      course: "",
      passingYear10: "",
      percentage10: "",
      totalMarks10: "",
      obtainedMarks10: "",
      passingYear12: "",
      percentage12: "",
      totalMarks12: "",
      obtainedMarks12: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://kalinga.etns.co.in/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed");
    }
  };

  return (
    <div className="adminform">
      <h1 className="heading">Admission Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputfield">
          <span>
            <label>Name of the Candidate</label>
            <input placeholder="Enter Name" {...register("pname")} />
            {errors.pname && <p className="error">{errors.pname.message}</p>}
          </span>
          <span>
            <label>Father's Name</label>
            <input placeholder="Enter Father's Name" {...register("fname")} />
            {errors.fname && <p className="error">{errors.fname.message}</p>}
          </span>
          <span>
            <label>Occupation of Father</label>
            <input
              placeholder="Enter Father's Occupation"
              {...register("foccupation")}
            />
            {errors.foccupation && (
              <p className="error">{errors.foccupation.message}</p>
            )}
          </span>
          <span>
            <label>Mother's Name</label>
            <input placeholder="Enter Mother's Name" {...register("mname")} />
            {errors.mname && <p className="error">{errors.mname.message}</p>}
          </span>
          <span>
            <label>Occupation of Mother</label>
            <input
              placeholder="Enter Mother's Occupation"
              {...register("moccupation")}
            />
            {errors.moccupation && (
              <p className="error">{errors.moccupation.message}</p>
            )}
          </span>
        </div>

        <div className="personal-detail">
          <span>
            <label>Date of Birth</label>
            <input placeholder="dd-mm-yyyy" {...register("dob")} />
            {errors.dob && <p className="error">{errors.dob.message}</p>}
          </span>
          <span>
            <label>Aadhar Number</label>
            <input placeholder="Enter Aadhar Number" {...register("adharNo")} />
            {errors.adharNo && (
              <p className="error">{errors.adharNo.message}</p>
            )}
          </span>
          <span>
            <label>Mobile Number</label>
            <input
              placeholder="Enter Mobile Number"
              {...register("mobileNo")}
            />
            {errors.mobileNo && (
              <p className="error">{errors.mobileNo.message}</p>
            )}
          </span>
          <span>
            <label>Marital Status</label>
            <select className="maratial" {...register("marial")}>
              <option value="">Select Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
            {errors.marial && <p className="error">{errors.marial.message}</p>}
          </span>
          <span>
            <label>Permanent Address</label>
            <input
              placeholder="Enter Permanent Address"
              {...register("address")}
            />
            {errors.address && (
              <p className="error">{errors.address.message}</p>
            )}
          </span>
        </div>

        <div className="Personcategory">
          <span>
            <label>Category</label>
            <select className="maratial" {...register("category")}>
              <option value="">Select Category</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
            </select>
            {errors.category && (
              <p className="error">{errors.category.message}</p>
            )}
          </span>
          <span>
            <label>Course</label>
            <select className="maratial" {...register("course")}>
              <option value="">Select Course</option>
              <option value="it">IT</option>
              <option value="diploma">Diploma</option>
              <option value="mca">MCA</option>
            </select>
            {errors.course ? (
              <p className="error">{errors.course.message}</p>
            ) : (
              <></>
            )}
          </span>
        </div>

        <div className="inputfield">
          <span>
            <label>10th Passing Year</label>
            <input
              {...register("passingYear10")}
              placeholder="Enter 10th Passing Year"
            />
            {errors.passingYear10 && (
              <p className="error">{errors.passingYear10.message}</p>
            )}
          </span>
          <span>
            <label>10th Percentage</label>
            <input
              {...register("percentage10")}
              placeholder="Enter 10th Percentage"
            />
            {errors.percentage10 && (
              <p className="error">{errors.percentage10.message}</p>
            )}
          </span>
          <span>
            <label>10th Total Marks</label>
            <input
              {...register("totalMarks10")}
              placeholder="Enter 10th Total Marks"
            />
            {errors.totalMarks10 && (
              <p className="error">{errors.totalMarks10.message}</p>
            )}
          </span>
          <span>
            <label>10th Obtained Marks</label>
            <input
              {...register("obtainedMarks10")}
              placeholder="Enter 10th Obtained Marks"
            />
            {errors.obtainedMarks10 && (
              <p className="error">{errors.obtainedMarks10.message}</p>
            )}
          </span>
        </div>

        <div className="inputfield">
          <span>
            <label>12th Passing Year</label>
            <input
              {...register("passingYear12")}
              placeholder="Enter 12th Passing Year"
            />
            {errors.passingYear12 && (
              <p className="error">{errors.passingYear12.message}</p>
            )}
          </span>
          <span>
            <label>12th Percentage</label>
            <input
              {...register("percentage12")}
              placeholder="Enter 12th Percentage"
            />
            {errors.percentage12 && (
              <p className="error">{errors.percentage12.message}</p>
            )}
          </span>
          <span>
            <label>12th Total Marks</label>
            <input
              {...register("totalMarks12")}
              placeholder="Enter 12th Total Marks"
            />
            {errors.totalMarks12 && (
              <p className="error">{errors.totalMarks12.message}</p>
            )}
          </span>
          <span>
            <label>12th Obtained Marks</label>
            <input
              {...register("obtainedMarks12")}
              placeholder="Enter 12th Obtained Marks"
            />
            {errors.obtainedMarks12 && (
              <p className="error">{errors.obtainedMarks12.message}</p>
            )}
          </span>
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
