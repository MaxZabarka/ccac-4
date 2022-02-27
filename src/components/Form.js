import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const INDUSTRIES = [
  "Energy",
  "Mining",
  "Infastructure",
  "Agribusiness",
  "Digital / IT",
  "Education",
  "Banking / Finance",
  "Tourism and Hospitality",
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div>
          <label for="Name">Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("Name", { required: true })}
          />
        </div>

        <div>
          <label for="Company">Company</label>
          <input
            type="text"
            placeholder="Company"
            {...register("Company", {})}
          />
        </div>
      </div>

      <div className="row">
        <div>
          <label for="Company">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("Email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/i,
            })}
          />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            {...register("Phone", {
              pattern:
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
            })}
          />
        </div>
      </div>
      <div className="Industries">
        <label for="Industry">Industry</label>
        {[...INDUSTRIES, "Other"].map((industry) => (
          <div>
            <input
              {...register("Industry", { required: true })}
              type="radio"
              value={industry}
            />
            <label for={industry}>{industry}</label>
          </div>
        ))}
      </div>
      <div className="About">
        <label for="About">About your project</label>
        <textarea
          placeholder="Brief description of your interest and comments for the CCAC"
          rows={10}
          {...register("About", {})}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
  //   return (
  //     <form>
  //       <label for="industry">Industry</label>
  //       <br />
  //       <input list="industry" name="industry" />
  //       <div onChange={(e) => {
  //           console.log(e.target.value)
  //       }}>
  //         {[...INDUSTRIES, "Other"].map((industry) => (
  //           <>
  //             <label for={industry}>{industry}</label>
  //             <input type="radio" name="industries" value={industry} />
  //           </>
  //         ))}
  //       </div>
  //       <br />
  //       <br />

  //       <label>
  //         Brief description of your interest and comments for the CCAC
  //       </label>
  //       <br />
  //       <textarea style={{ width: "100%" }} rows={10}></textarea>
  //       <br />
  //       <br />
  //       <label>Email</label>
  //       <br />
  //       <input type="email"></input>
  //     </form>
  //   );
};

export { Form, INDUSTRIES };
