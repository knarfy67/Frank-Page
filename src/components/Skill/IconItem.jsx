function IconItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-[64px] sm:text-[80px] md:text-[96px] text-[#E62727]">
        {icon}
      </div>
      <p className="text-xs sm:text-sm font-light dark:text-light text-center">
        {label}
      </p>
    </div>
  );
}

export default IconItem;
