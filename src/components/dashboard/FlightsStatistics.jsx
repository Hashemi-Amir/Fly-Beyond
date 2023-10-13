function FlightsStatistics({ total, viewed }) {
  return (
    <div className="mb-10 flex justify-between font-semibold text-white dark:text-dark-primary-300">
      <span className="rounded-md bg-blue-500 px-3 py-1 dark:bg-gray-300">
        Viewed: {viewed}
      </span>
      <span className="rounded-md bg-blue-500 px-3 py-1 dark:bg-gray-300">
        Total: {total}
      </span>
    </div>
  );
}

export default FlightsStatistics;
