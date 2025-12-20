type CheckboxInputProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const CheckboxInput = ({ label, checked, onChange }: CheckboxInputProps) => {
  return (
    <label className="inline-flex items-center mt-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 accent-primary-200 appearance-auto"
      />
      <span className="ml-2 text-gray-700 dark:text-neutral-50 font-medium">
        {label}
      </span>
    </label>
  );
};

export default CheckboxInput;
