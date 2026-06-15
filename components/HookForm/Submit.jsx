import { Button } from '@components/ui/button';
import { classnames } from '@lib';
import { LoaderCircle } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const Submit = ({ children, isLoading, ...props }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const disabled = isLoading || isSubmitting;
  // Override the disabled prop when passed
  props.disabled = disabled;

  return (
    <div className="relative inline-flex items-center">
      <Button type="submit" {...props}>
        <div className={classnames(disabled && 'invisible')}>{children}</div>
      </Button>
      {disabled && <LoaderCircle className="absolute inset-0 m-auto h-6 w-6 animate-spin" />}
    </div>
  );
};

export default Submit;
