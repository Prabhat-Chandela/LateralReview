
function ServiceCard({
    serviceImage="",
    serviceName="service name",
    serviceDetail="about service",
}) {
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-red-700 to-red-500 rounded-lg p-3 overflow-hidden gap-7 w-full">
        <div className=" w-full sm:w-[20%] border border-black rounded-lg overflow-hidden">
            <img src={serviceImage} className="w-full" alt="service-image" />
        </div>
        <div className="flex flex-col items-start gap-3 w-full sm:w-[80%]">
            <h3 className="font-robotoBold text-white">{serviceName}</h3>
            <p className="font-robotoRegular text-white">{serviceDetail}</p>
        </div>
    </div>
  )
}

export default ServiceCard;