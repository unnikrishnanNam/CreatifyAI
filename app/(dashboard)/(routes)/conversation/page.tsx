"use client";
import { Heading } from "@/components/custom/Heading";
import { formSchema } from "@/constants";
import { MessageSquare } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col min-h-full items-centre justify-center ">
      <Heading
        title="Conversation"
        description="The most advanced conversation model offered by creatify Ai"
        icon={MessageSquare}
        iconColor={"text-violet-500"}
        bgColor={"bg-violet-500/10"}
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            className="rounded-lg
            border
            w-full
            p-4
            px-3
            md:px-6
            focus-within:shadow-sm grid
            grid-cols-12
            gap-2
            "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      disabled={isLoading}
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      placeholder="Calculate the sum of 2 and 3"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <Button className="col-span-12 lg:col-span-2">Generate</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConversationPage;
