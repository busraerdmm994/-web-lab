export default function Button({ children, variant = "primary", size = "md", ...props }: any) {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:ring-2 focus:ring-offset-2 outline-none";
  const variants = {
    primary: "bg-accent text-white hover:bg-pink-600 focus:ring-pink-400",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    ghost: "bg-transparent text-accent hover:bg-pink-50 dark:hover:bg-slate-800"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
}