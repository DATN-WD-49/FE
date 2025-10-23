import React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, register, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          {...register}
          {...rest}
          className={`border rounded-md p-2 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-green-500"
          }`}
        />
        {error?.message && (
          <p className="text-sm text-red-500 mt-1">{error.message}</p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;
