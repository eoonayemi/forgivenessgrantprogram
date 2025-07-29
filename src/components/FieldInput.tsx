interface FieldInputProps {
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  label?: string;
  styles?: string;
  type?: string;
  isTextArea?: boolean;
}

const FieldInput = ({
  placeholder,
  onChange,
  value,
  label,
  styles,
  isTextArea,
}: FieldInputProps) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles} bg-slate-100 placeholder:text-slate-400 p-4 h-60 w-full hover:bg-slate-100 focus:bg-slate-100 outline-none rounded-xl`}
          required
        ></textarea>
      ) : (
        <div className="flex flex-col gap-3 w-full">
          {label && (
            <label className="font-bold">
              {label}
              <span className="text-red-600 ml-1">*</span>
            </label>
          )}

          <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${styles} bg-slate-100 placeholder:text-slate-400 p-4 h-14 w-full hover:bg-slate-100 focus:bg-slate-100 rounded-xl`}
            required
          />
        </div>
      )}
    </>
  );
};

export default FieldInput;
