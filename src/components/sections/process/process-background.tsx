"use client";

export const ProcessBackground = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute top-0 -right-20 h-64 w-64 rounded-full bg-gradient-to-bl from-purple-600/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>
    </>
  );
};
