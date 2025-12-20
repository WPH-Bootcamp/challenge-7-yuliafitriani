type TextareaInputProps = {
  id?: string;
  value: string;
  rows?: number;
  placeholder?: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const TextareaInput = ({
  id,
  value,
  rows = 4,
  placeholder,
  onChange,
  required,
}: TextareaInputProps) => {
  return (
    <textarea
      id={id}
      rows={rows}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-200 focus:border-primary-200 dark:text-dark-neutral-25"
    />
  );
};

export default TextareaInput;
