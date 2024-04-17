import { Button, ServiceCard } from "../Components/index";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

  const services = [
    {
      serviceImage: "src/assets/images/Digital-marketing.svg",
      serviceName: "Digital Marketing",
      serviceDetail: "Our digital marketing services encompass a diverse range of strategies and techniques aimed at amplifying your brand's online presence. From search engine optimization (SEO) to social media marketing and beyond, we craft tailored campaigns to engage your target audience and drive meaningful results."
    },
    {
      serviceImage: "src/assets/images/Print-digital-magazine.svg",
      serviceName: "Digital Magazine",
      serviceDetail: "Elevate your content marketing efforts with our digital magazine solutions. We specialize in creating captivating and interactive digital publications that captivate your audience, delivering rich, multimedia experiences that showcase your brand's expertise and offerings."
    },
    {
      serviceImage: "src/assets/images/SEO-services.svg",
      serviceName: "SEO Services",
      serviceDetail: "Increase your website's visibility and drive organic traffic with our SEO services. Our team of experts employs proven techniques to optimize your website's structure, content, and performance, ensuring that your brand stands out in search engine results and reaches the right audience."
    },
    {
      serviceImage: "src/assets/images/Website-development.svg",
      serviceName: "Website Developement",
      serviceDetail: "Your website is your digital storefront, and we're here to make it shine. Our website development services combine creativity and functionality to create stunning, user-friendly websites that effectively convey your brand's message and drive conversions."
    },
    {
      serviceImage: "src/assets/images/Email-marketing.svg",
      serviceName: "Email Marketing",
      serviceDetail: "Stay connected with your audience and nurture leads with our email marketing services. From crafting engaging content to designing eye-catching templates and analyzing performance metrics, we'll help you leverage the power of email to drive engagement and build lasting relationships with your customers."
    },
    {
      serviceImage: "src/assets/images/Graphics-Designing.svg",
      serviceName: "Graphic Designing",
      serviceDetail: "Make a lasting impression with visually stunning graphic design. Our team of talented designers brings your brand to life with captivating visuals that resonate with your audience and communicate your message effectively across all channels."
    },
    {
      serviceImage: "src/assets/images/Content-writing.svg",
      serviceName: "Content Writing",
      serviceDetail: "Engage your audience and establish your brand as an authority in your industry with our expert content writing services. Whether you need blog posts, articles, website copy, or social media content, our team crafts compelling, high-quality content that drives traffic, leads, and conversions."
    },
    {
      serviceImage: "src/assets/images/B2B-lead-generation.svg",
      serviceName: "B2B lead generation",
      serviceDetail: "Fuel your sales pipeline with our B2B lead generation services. We leverage a combination of targeted outreach, content marketing, and strategic partnerships to identify and engage with qualified leads, helping you drive growth and expand your business in the B2B space."
    }
  ]


  return (

    <>
      <section className=" mt-9 sm:mt-7">
      <div className="w-full flex flex-col gap-5">
        <div className="overflow-hidden">
        <m.h2
        initial={{opacity:0 , y:"100%"}}
        animate={{opacity:1,y:0}}
        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
          AREA OF EXPERTISE
        </m.h2>
        </div>

        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5, duration:0.5 , ease:"easeInOut"}}
        className="w-full flex flex-col gap-3">
        <p className="text-white font-robotoRegular text-xs sm:text-sm sm:w-[60%] lg:w-[35%]">Whatever you want to do, if you want to be great at it, you have to love it and be able to make sacrifices for it.</p>
       
          <Button onClick={()=>navigate("/contact")}>Ping Us</Button>
          </m.div>

      </div>

      </section>

      <section className="mt-7">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay:0.5, duration: 0.7, ease: "backInOut" }}
          className="w-full grid grid-cols-2 gap-3">
          {services && services.map((service) => (
            <div className="w-full grid col-span-2 sm:col-span-1" key={service.serviceName}>
              <ServiceCard serviceName={service.serviceName} serviceDetail={service.serviceDetail} serviceImage={service.serviceImage} />
            </div>
          ))}
        </m.div>

      </section>

    </>
  )
}

export default Services;