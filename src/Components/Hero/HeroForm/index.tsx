import { Form, FormBtn, FormInput } from "./index.styled";
import { toast } from "react-toastify";
import React from "react";

export default function HeroForm() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value; 

    if (target.email.value === "") {
      toast.error("Value cannot be empty");
      return;
    }
    toast(`We send next steps to ${email}`);
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={submitForm}>
      <FormInput type="email" name="email" placeholder="Email address" />
      <FormBtn type="submit">Get started</FormBtn>
    </Form>
  );
}
