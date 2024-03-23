import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface InputFormFieldProps {
  name: string;
  displayName: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  isRequired?: boolean;
  maxLength?: number;
}

export default function InputFormField({
  name,
  displayName,
  placeholder,
  type = 'text',
  autoComplete = '',
  isRequired = false,
  maxLength,
}: InputFormFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name} className='space-x-1 text-lg'>
            <span>{displayName}</span>
            {isRequired && <span className='text-red-500'>*</span>}
          </FormLabel>
          <FormControl>
            <div className='relative'>
              <Input
                placeholder={placeholder ?? ''}
                {...field}
                type={type}
                autoComplete={autoComplete}
                maxLength={maxLength}
                className='pr-9 focus-visible:ring-1 focus-visible:ring-blue-500'
              />
              {field.value && (
                <Button
                  size='icon'
                  variant='link'
                  className='absolute right-0 top-0'
                  onClick={() => field.onChange('')}
                >
                  <X />
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
