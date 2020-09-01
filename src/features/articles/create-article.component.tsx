import React from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Heading,
} from "@chakra-ui/core";
import { useAppDispatch } from "../../store";
import { addArticle } from "./articlesSlice";

interface Props {}

type Inputs = {
  title: string;
  date: Date;
};

const ArticleForm: React.FC<Props> = (props) => {
  const { register, errors, handleSubmit, reset, formState } = useForm<
    Inputs
  >();

  const dispatch = useAppDispatch();

  const handleSubmitForm = (data: Inputs) => {
    dispatch(
      addArticle({
        id: v4(),
        title: data.title,
        date: new Date(data.date).toISOString(),
        upvotes: 0,
      })
    );
    reset();
  };

  return (
    <>
      <Heading marginBottom="1rem">Create Article</Heading>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormControl isInvalid={!!errors.title}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            name="title"
            placeholder="Title"
            ref={register({ required: true })}
          />
          <FormErrorMessage>
            {errors.title && "Title is required"}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.date}>
          <FormLabel htmlFor="Date">Date</FormLabel>
          <Input
            name="date"
            placeholder="Date"
            type="date"
            ref={register({ required: true })}
          />
          <FormErrorMessage>
            {errors.date && "Date is required"}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ArticleForm;
