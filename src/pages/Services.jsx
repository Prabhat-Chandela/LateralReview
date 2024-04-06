import { ServiceCard } from "../Components/index";

function Services() {
  const services=[
    {
      serviceImage:"",
      serviceName:"Digital Marketing",
      serviceDetail:"Our digital marketing services encompass a diverse range of strategies and techniques aimed at amplifying your brand's online presence. From search engine optimization (SEO) to social media marketing and beyond, we craft tailored campaigns to engage your target audience and drive meaningful results."
    },
    {
      serviceImage:"",
      serviceName:"Digital Magazine",
      serviceDetail:"Elevate your content marketing efforts with our digital magazine solutions. We specialize in creating captivating and interactive digital publications that captivate your audience, delivering rich, multimedia experiences that showcase your brand's expertise and offerings."
    },
    {
      serviceImage:"",
      serviceName:"SEO Services",
      serviceDetail:"Increase your website's visibility and drive organic traffic with our SEO services. Our team of experts employs proven techniques to optimize your website's structure, content, and performance, ensuring that your brand stands out in search engine results and reaches the right audience."
    },
    {
      serviceImage:"",
      serviceName:"Website Developement",
      serviceDetail:"Your website is your digital storefront, and we're here to make it shine. Our website development services combine creativity and functionality to create stunning, user-friendly websites that effectively convey your brand's message and drive conversions."
    },
    {
      serviceImage:"",
      serviceName:"Email Marketing",
      serviceDetail:"Stay connected with your audience and nurture leads with our email marketing services. From crafting engaging content to designing eye-catching templates and analyzing performance metrics, we'll help you leverage the power of email to drive engagement and build lasting relationships with your customers."
    },
    {
      serviceImage:"",
      serviceName:"Graphic Designing",
      serviceDetail:"Make a lasting impression with visually stunning graphic design. Our team of talented designers brings your brand to life with captivating visuals that resonate with your audience and communicate your message effectively across all channels."
    },
    {
      serviceImage:"",
      serviceName:"Content Writing",
      serviceDetail:"Engage your audience and establish your brand as an authority in your industry with our expert content writing services. Whether you need blog posts, articles, website copy, or social media content, our team crafts compelling, high-quality content that drives traffic, leads, and conversions."
    },
    {
      serviceImage:"",
      serviceName:"B2B lead generation",
      serviceDetail:"Fuel your sales pipeline with our B2B lead generation services. We leverage a combination of targeted outreach, content marketing, and strategic partnerships to identify and engage with qualified leads, helping you drive growth and expand your business in the B2B space."
    }
  ]


  return (
    <div className="w-full flex flex-col gap-5">
      {services && services.map((service)=>(
        <div className="w-full" key={service.serviceName}>
          <ServiceCard serviceName={service.serviceName} serviceDetail={service.serviceDetail}/>
        </div>
      ))}
    </div>
  )
}

export default Services;