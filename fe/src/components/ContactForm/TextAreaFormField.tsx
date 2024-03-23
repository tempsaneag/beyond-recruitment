import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

interface TextareaFormFieldProps {
  name: string;
  displayName: string;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
  textAreaClassName?: string;
}

export default function TextareaFormField({
  name,
  displayName,
  isRequired,
  placeholder,
  textAreaClassName,
}: TextareaFormFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {displayName && (
            <div className='flex items-end justify-between'>
              <FormLabel htmlFor={name} className='space-x-1 text-lg'>
                <span>{displayName}</span>
                {isRequired && <span className='text-red-500'>*</span>}
              </FormLabel>
              {field.value !== '' && (
                <Button
                  variant='ghost'
                  type='button'
                  className='h-fit w-fit px-2 py-0.5'
                  onClick={() => field.onChange('')}
                >
                  Clear text
                </Button>
              )}
            </div>
          )}
          <FormControl>
            <div className='relative'>
              <Textarea
                id={name}
                {...field}
                placeholder={placeholder}
                className={`w-full focus-visible:ring-1 focus-visible:ring-blue-500 ${textAreaClassName ?? ''}`}
              />
            </div>
          </FormControl>

          <div className='flex items-center justify-between gap-2'>
            <div>
              <FormMessage />
            </div>
            <span
              className={`${field.value.length > 1000 ? 'text-red-500' : ''}`}
            >
              {field.value.length}/1000
            </span>
          </div>
        </FormItem>
      )}
    />
  );
}
