import React from "react";

const TabToggle = ({ isYearly, setIsYearly }: any) => (
  <div className="inline-flex rounded-full shadow p-1">
    <button
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        !isYearly
          ? "bg-blue-600 text-primary-foreground"
          : "text-muted-foreground"
      }`}
      onClick={() => setIsYearly(false)}
    >
      Monthly
    </button>
    <button
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        isYearly
          ? "bg-blue-600 text-primary-foreground"
          : "text-muted-foreground"
      }`}
      onClick={() => setIsYearly(true)}
    >
      Yearly
    </button>
  </div>
);
export default TabToggle;
