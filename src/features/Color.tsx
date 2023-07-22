
type ColorProps = {
    isActive?: boolean
};

export const Color = ({ isActive }: ColorProps) => {
    const isActiveClass = isActive
      ? "border border-green-900 p-1 rounded-full"
      : "";
    return (
      <div className={isActiveClass}>
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <div className="bg-red-400 h-1/2"></div>
          <div className="bg-pink-200 h-1/2"></div>
        </div>
      </div>
    );
  };