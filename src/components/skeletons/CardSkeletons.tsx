const CardSkeletons = () => {
  return (
    <div role="status" className="max-w-5xl p-4 border border-gray-200 rounded shadow animate-pulse md:p-6">
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full"></div>
      <div className="flex items-center mt-4 space-x-3">
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
          <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CardSkeletons;
