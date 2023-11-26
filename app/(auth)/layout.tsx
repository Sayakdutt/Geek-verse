const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-indigo-500 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
