interface FieldInputProps {
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  isTextArea?: boolean;
}

const FieldInput = ({
  placeholder,
  onChange,
  value,
  isTextArea,
}: FieldInputProps) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-slate-100 placeholder:text-slate-400 p-4 h-60 w-full hover:bg-gray-100 focus:bg-gray-100 outline-none rounded-xl"
          required
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-slate-100 placeholder:text-slate-400 p-4 h-14 w-full hover:bg-gray-100 focus:bg-gray-100 rounded-xl"
          required
        />
      )}
    </>
  );
};

export default FieldInput;
