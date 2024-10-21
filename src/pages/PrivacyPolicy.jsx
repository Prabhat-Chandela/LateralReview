import { motion as m } from "framer-motion"
import { easeInOut } from "framer-motion/dom";

function PrivacyPolicy() {
  return (
    <div className="w-full mt-5 flex flex-col">

      <section className="w-full flex flex-col gap-3" >
        <div className="overflow-hidden">
          <m.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]"
          >PRIVACY POLICY</m.h2>
        </div>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: easeInOut }}
          className="flex flex-col gap-2 font-robotoMedium text-xs sm:text-sm w-full sm:w-[85%]">
          <span>Last updated: February 03, 2024.</span>

          <span>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</span>

          <span>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</span>
        </m.p>
      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease: easeInOut }}
        className="flex flex-col gap-5 mt-7">

        <div className="flex flex-col gap-3">
          <h2 className="font-robotoBold text-xl sm:text-2xl text-red-700">Interpretation and Definitions</h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Interpretation</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Definitions</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              For the purposes of this Privacy Policy:</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Account </mark>means a unique account created for You to access our Service or parts of our Service.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Affiliate </mark> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Company </mark>(referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to lateralreview.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Cookies </mark>are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Country </mark>refers to: Delhi, India</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Device </mark>means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Personal Data </mark>is any information that relates to an identified or identifiable individual.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Service </mark>refers to the Website.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Service Provider </mark>means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Usage Data </mark>refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Website </mark>refers to lateralreview, accessible from https://lateralreview.com.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">You </mark>means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
          </div>



        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-robotoBold text-xl sm:text-2xl text-red-700">Collecting and Using Your Personal Data</h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Personal Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full flex flex-col gap-2">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              <span>Email address</span>
              <span>First name and last name</span>
              <span>Phone number</span>
              <span>Usage Data</span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Usage Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              Usage Data may include information such as Your Device Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Tracking Technologies and Cookies</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              <mark className="text-red-500 bg-transparent">Cookies or Browser Cookies : </mark>A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">Web Beacons : </mark>Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Free Privacy Policy website article.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              We use both Session and Persistent Cookies for the purposes set out below:</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full flex gap-1 flex-col">
              <span className="w-fit text-red-500">Necessary / Essential Cookies</span>
              <span>Type: Session Cookies</span>
              <span>Administered by: Us</span>
              Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full flex gap-1 flex-col">
              <span className="w-fit text-red-500">Cookies Policy / Notice Acceptance Cookies</span>
              <span>Type: Persistent Cookies</span>
              <span>Administered by: Us</span>
              Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full flex gap-1 flex-col">
              <span className="w-fit text-red-500">Functionality Cookies</span>
              <span>Type: Persistent Cookies</span>
              <span>Administered by: Us</span>
              Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
              <span>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</span></p>

          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Use of Your Personal Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              The Company may use Personal Data for the following purposes:
            </p>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              To provide and maintain our Service, including to monitor the usage of our Service.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">To manage Your Account : </mark>to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              <mark className="text-red-500 bg-transparent">For the performance of a contract : </mark>the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">To contact You : </mark>To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent">To provide You </mark>with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              <mark className="text-red-500 bg-transparent">To manage Your requests : </mark>To attend and manage Your requests to Us.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full">
              <mark className="text-red-500 bg-transparent" >For business transfers : </mark>We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full ">
              <mark className="text-red-500 bg-transparent">For other purposes : </mark>We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>

              <p className="font-robotoRegular text-xs sm:text-sm w-full flex flex-col gap-2">
              We may share Your personal information in the following situations:
              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">With Service Providers : </mark>
              We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
              </span>

              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">For business transfers : </mark>
              We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
              </span>

              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">With Affiliates : </mark>
              We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
              </span>

              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">With business partners : </mark>
              We may share Your information with Our business partners to offer You certain products, services or promotions.
              </span>

              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">With other users : </mark>
              when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
              </span>

              <span className="pl-2">
              <mark className="text-red-500 bg-transparent">With Your consent : </mark>
              We may disclose Your personal information for any other purpose with Your consent.
              </span>
            </p>

          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Retention of Your Personal Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
         
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Transfer of Your Personal Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            Your information, including Personal Data, is processed at the Companys operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>
         
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-robotoMedium text-lg sm:text-xl text-red-700">Delete Your Personal Data</h3>
            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            Our Service may give You the ability to delete certain information about You from within the Service.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
            </p>

            <p className="font-robotoRegular text-xs sm:text-sm w-full">
            Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
            </p>
         
          </div>

        </div>

      </m.section>


    </div>
  )
}

export default PrivacyPolicy;