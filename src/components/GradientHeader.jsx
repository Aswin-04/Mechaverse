
const GradientHeader = ({ label, className }) => {
  return (
    <h1 className={`h1 mt-2 text-transparent bg-clip-text bg-custom-gradient-120 ${className}`}>
      {label}
    </h1>
  );
};

export default GradientHeader;