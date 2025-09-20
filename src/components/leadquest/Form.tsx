import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaType, formSchema } from "@/lib/Validation";
import { Heading } from "../layout/Heading";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

    // remove this function later.
  const onSubmit = (data: FormSchemaType) => {
    console.log("Valid form data:", data);
  };

  return (
    <section className="sm:py-20 py-10 px-4 bg-[url('/cta_form_bg.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-md rounded-2xl p-6 sm:p-10 mx-auto py-10 bg-[url('/form_bg.svg')] bg-no-repeat bg-cover bg-centers">
        <div className="flex flex-col gap-3 justify-start items-center my-8">
          <div>
            <Heading className="text-3xl sm:text-4xl font-bold">
              Join us on{" "}
              <span className="italic font-secondaryFont">this journey</span>
            </Heading>
          </div>

          <p className="text-sm text-center text-primaryBlack/60 max-w-md">
            Are you interested in the upcoming TYIL fellowship programme 2024,
            you can fill the form below to indicate your interest.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name*
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              placeholder="Enter your full name"
              className="border rounded px-4 py-2 w-full border-gray-200 placeholder:text-sm 
             focus:outline-none focus:ring-2 focus:ring-primaryRed"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address*
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="you@gmail.com"
              className="border rounded px-4 py-2 w-full border-gray-200 placeholder:text-sm 
             focus:outline-none focus:ring-2 focus:ring-primaryRed"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            primaryText="Join the Movement"
            hoverText="Join the Movement"
            icon={ArrowRightIcon}
            iconPosition="right"
            type="submit"
            className="gap-2 px-8 py-3 w-full mt-6"
            aria-label="registration button"
            variant="red"
          />
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
