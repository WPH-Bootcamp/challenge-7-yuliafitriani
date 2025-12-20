type FormLabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

const FormLabel = ({ children, htmlFor }: FormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-bold text-neutral-25 dark:text-neutral-50 mb-1"
    >
      {children}
    </label>
  );
};

export default FormLabel;
