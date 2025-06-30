export default function TextInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      onChange={onChange}
      required={required}
      value={value}
    />
  );
}
