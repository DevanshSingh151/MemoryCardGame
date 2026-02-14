import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-full max-w-4xl mx-auto">{children}</div>
    </div>
  );
};
