import { useEffect, useState } from "react";  

const InputField = ({
  field ="",  
  label = "",
  type = "text",
  value = "",
  placeholder = "",
  required = false
}) => {
    const [id, setId] = useState("");
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => {
        setId(field.split(" ").join(""))
    }, []);

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="font-medium">
          {field}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
