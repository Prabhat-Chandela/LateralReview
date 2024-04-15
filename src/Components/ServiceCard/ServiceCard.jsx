
function ServiceCard({
    serviceImage="",
    serviceName="service name",
    serviceDetail="about service",
}) {
  return (
    <div className="flex flex-col bg-white  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg p-3 border border-red-600  overflow-hidden gap-7 w-full">
      
            <h3 className="font-robotoBold flex items-center justify-center gap-3 w-fit rounded-lg bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent text-lg"><span> <img src={serviceImage} className="w-6 h-6" alt="service-image" /></span>{serviceName}</h3>

            <p className="font-robotoRegular text-sm lg:text-base text-white">{serviceDetail}</p>
  
    </div>
  )
}

export default ServiceCard;