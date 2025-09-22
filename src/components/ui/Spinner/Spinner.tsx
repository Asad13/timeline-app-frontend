type SpinnerProps = {
  size?: number;
  stroke?: number;
  color?: string;
};

const Spinner = ({ size, stroke, color }: SpinnerProps) => {
  const w = size !== undefined ? `${size}px` : '1rem';
  const h = size !== undefined ? `${size}px` : '1rem';
  const s = stroke !== undefined ? `${stroke}px` : '2px';
  const c = color !== undefined ? color : '#4caf50';

  return (
    <span
      style={{
        width: w,
        height: h,
        borderWidth: s,
        borderColor: c,
      }}
      className="relative inline-block animate-spin rounded-full border-dotted"
    ></span>
  );
};

export default Spinner;
