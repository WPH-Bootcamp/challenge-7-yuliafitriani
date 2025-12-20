type TextInputProps = {
  id?: string;
  type?: "text" | "email";
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const TextInput = ({
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  required,
}: TextInputProps) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-primary-200 focus:border-primary-200 outline-none transition-all dark:text-dark-neutral-25"
    />
  );
};

export default TextInput;
