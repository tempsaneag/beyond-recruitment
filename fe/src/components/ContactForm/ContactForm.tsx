import InputFormField from '@/components/ContactForm/InputFormField';
import { Form } from '@/components/ui/form';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ContactFormSchema,
  contactFormSchema,
} from '@/types/contactFormSchema';
import TextareaFormField from '@/components/ContactForm/TextAreaFormField';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/utils/axios.service';
import { useToast } from '@/components/ui/use-toast';
import { usePreventSwipeStore } from '@/store/preventSwipeStore';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { AxiosError } from 'axios';

export default function ContactForm() {
  const setPreventSwipe = usePreventSwipeStore(
    (state) => state.setPreventSwipe
  );
  const { toast } = useToast();

  const form = useForm<ContactFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      text: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormSchema) =>
      await axiosInstance.post(`/send-email`, data),
    onSuccess: (response) => {
      toast({
        title: 'Message sent',
        description: response?.data || 'Email sent successfully',
        className: 'bg-green-500 text-white',
      });
      form.reset();
    },
    onError: (error) => {
      const err = error as AxiosError;
      toast({
        title: 'Error',
        description:
          (err.response?.data as string) ||
          'An error occurred while sending the email',
        className: 'bg-red-500 text-white',
      });
    },
  });

  const handleSubmit = async (data: ContactFormSchema) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (form.formState.isDirty || form.formState.isSubmitting) {
      setPreventSwipe(true);
    }

    return () => {
      setPreventSwipe(false);
    };
  }, [form.formState]);

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='mt-5 w-full max-w-xl space-y-5 rounded-lg bg-gray-200 p-10'
        >
          <InputFormField
            name='name'
            displayName='Name'
            placeholder='John Doe'
            isRequired
            maxLength={40}
          />
          <InputFormField
            name='email'
            displayName='Email'
            placeholder='example@example.com'
            isRequired
            maxLength={40}
          />
          <InputFormField
            name='subject'
            displayName='Subject'
            placeholder='Subject of the message'
            isRequired
            maxLength={40}
          />
          <TextareaFormField
            name='text'
            displayName='Text'
            isRequired
            placeholder='Enter message text'
          />
          <div className='flex justify-center'>
            <Button disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader2 className='size-8 animate-spin' />
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
