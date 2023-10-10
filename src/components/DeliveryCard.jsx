const DeliveryCard = ({ label, cities }) => {
  const citiesLength = cities.length;
  const slicedCities = cities.slice(0, 3);
  return (
    <div className="flex justify-between items-center shadow-md px-6 py-3 rounded-xl hover:shadow-lg">
      <div className="flex gap-2 items-start">
        <span className="rounded-full bg-green-500  w-2 h-2 mt-3"></span>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">{label}</h2>
          <p>
            {slicedCities.join(", ")}{" "}
            <span>{cities.length > 4 && `, +${citiesLength - 4} others`}</span>
          </p>
        </div>
      </div>
      <div className="h-full">{`>`}</div>
    </div>
  );
};

export default DeliveryCard;
