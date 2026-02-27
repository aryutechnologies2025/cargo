import {
  MdGavel,
  MdWarning,
  MdSecurity,
  MdAccessTime,
  MdAssignment,
  MdPayment,
  MdReport,
  MdCancel,
  MdDescription,
  MdPeople,
  MdInfo,
} from "react-icons/md";
import {
  FaShieldAlt,
  FaBoxOpen,
  FaFileSignature,
} from "react-icons/fa";

const termsSections = [
    {
      title: "Contract qualified Acceptance",
      icon: <FaFileSignature className="text-[#027cc2]" />,
      content:
        "We reserve the right to reject your shipment after acceptance and prior to performance of any part of the transportation services, when shipments might cause damage or delay to other shipments, equipment or personnel. This will also apply if the transportation of you shipment is prohibited by law or is in violation of any rules contained in waybill or our tariffs.",
    },
    {
      title: "Insurance",
      icon: <FaShieldAlt className="text-[#027cc2]" />,
      content:
        "To extend your protection beyond our liability, you may elect to purchase insurance by designation on this air waybill and pay the premium. Such insurance is coverage is governed by policy in force.",
    },
    {
      title: "Warranties",
      icon: <MdGavel className="text-[#027cc2]" />,
      content: "We make no warranties, express or implied.",
    },
    {
      title: "Your Obligation",
      icon: <MdAssignment className="text-[#027cc2]" />,
      content:
        "If the carriage or your shipment by air involves an ultimate destination or stop in a country other than the country of departure, the Warsaw convention, an international treaty relating to international by air, may be applicable, which treaty would govern and in most cases limit our liability to $25 per package unless you declare a higher value for the carriage as described below.",
    },
    {
      title: "Limitation of Liability",
      icon: <MdWarning className="text-[#027cc2]" />,
      content:
        "Unless you declare a higher shipment valuation and pay the fee, our limit of liability is the lower of the following: (1) Actual value (b) $25 per package when lost, damaged or adversely affected. In any event we will not be liable for acts or omissions, including but not limited to, inadequate packing, securing, marking or addressing, or for acts or omissions of the receiver or any party having interest in the shipment. We also are not liable if you or the receiver violates any terms of this agreement. We are also not liable for loss, damage or delay caused by circumstances outside our control, including but not limited to acts of God, perils of the air, weather conditions, acts of public enemies, strikes, civil commotion or acts or omissions of public authorities such as customs, police and quarantine officials who have actual or apparent authority.(The shipper agreed we are liable in any event for any special, incidental, consequential damages including but not limited to loss of profits or loss of income, whether or not we had knowledge that such damages might be incurred.",
    },
    {
      title: "Handling of Fragile Item",
      icon: <FaBoxOpen className="text-[#027cc2]" />,
      content:
        "All though we try our best to handle and deliver FRAGILE items, but by all meanˇs it is entirely on shipperˇs risk. We do not take any responsibility in case of Damage.",
    },
    {
      title: "Delayed Shipments",
      icon: <MdAccessTime className="text-[#027cc2]" />,
      content:
        "We shall make every reasonable efforts to deliver your shipment according to our normal delivery schedules but these are not guaranteed and do not come from part of this contract. We are not liable for any delays.",
    },
    {
      title: "Right to Inspect",
      icon: <MdSecurity className="text-[#027cc2]" />,
      content:
        "We may at our opinion, open and inspect any shipment for any reason, including but not limited to, verification of contents prior to or after acceptance of the shipment for transportation.",
    },
    {
      title: "Responsibilities for Payment",
      icon: <MdPayment className="text-[#027cc2]" />,
      content:
        "Even is different payment instructions are given, you will always be primarily responsible for all charges, including transportation charges and all duties, customs assessments, governmental penalties and fines, taxes, and our attorneys fees and legal costs related to this shipment to you or warehousing it pending disposition.",
    },
    {
      title: "Claims for Loss, Damage or Delay",
      icon: <MdReport className="text-[#027cc2]" />,
      content:
        "All claims for reimbursement must be made in writing to us within specific time periods after the date on which we accept shipments. As follows: (1) 14 days if it is a loss or damage claim, (b) 30 days if an overcharge claim (c) 07 days if a claim for delay. If the receiver has signed a delivery receipt without notation of damage or loss, we must also be notified of the loss or damage or rally within 48 hours after delivery if the shipment is perishable and in writing within 7 days if non-perishable.(If the receiver accepts your shipment without noticing any damage or loss on the delivery record, we will assume that the shipment was delivered in good condition. The container(s), packing material and contents must be available for inspection at the receiverˇs location. We are not however, obligated to act on any claim until all transportation charges have been paid; the claim amount may not be deducted from those charges",
    },
    {
      title: "Items Not Acceptable for Transportation",
      icon: <MdCancel className="text-[#027cc2]" />,
      content:
        "We wonˇt accept certain items for carriage and other items may be accepted for carriage only to limited destinations or under restricted conditions. We reserve the right to reject packages based upon these limitations or reasons of safety and security.",
    },
    {
      title: "Custom Clearance",
      icon: <MdDescription className="text-[#027cc2]" />,
      content:
        "By giving any shipment to us, you appoint us your agents solely for performance of customs clearance and certify us as the consignee for the purpose of designating a customs broker to perform customs clearance (unless you specify customs broker in front of air waybill). In some circumstances, local authorities may require additional documentation confirming our appointment. It is your responsibility to provide proper documentation and confirmation where required. You are responsible for and warrant your compliance with all applicable laws, rules and regulations including but not limited to customs law, import and export laws and government regulation of any country to, from, through or over which your shipment may be carried.",
    },
    {
      title: "Terms for personal effects",
      icon: <MdPeople className="text-[#027cc2]" />,
      content:
        "Please read the terms and conditions for transport of personal effects, that are a part of the agreement between Cargo Lord Ltd and its customers. Cargo Lordˇs general terms of transport apply to personal effects. Cargo Lord suggest that all personal effects shipments are insured before shipping. Most people insure their possessions in their homes, so insuring them during transport should be just as important. Customer service employees provide information and arrange for insurance. The owner of the personal effects is always responsible for the packing of personal effects. In all cases must personal effects be packed securely, preferably in cardboard boxes, wrapped in corrugated cardboard or thick bubble plastic (furniture and large appliances). The corners of all large items should be specially protected. Assistance with carrying boxes/items is not included. When exporting full container loads (FCL) from Cargo Lord Ltd , the owner of the shipment is responsible for getting their cargo securely sealed before shipping. When transporting cars, personal effects cannot be kept inside the car.",
    },
  ];
const TermsPage = () => {
  

  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header Section with Animation */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transform transition-all duration-700 `}
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#027cc2] rounded-full"></div>
            <MdGavel className="text-[#027cc2] text-xl animate-pulse" />
            <div className="w-12 h-0.5 bg-[#027cc2] rounded-full"></div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-3">
            Terms & Conditions of <br className="max-sm:hidden sm:block" />
            <span className="text-[#027cc2] relative inline-block">
              Contract qualified Acceptance
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#027cc2] to-transparent"></div>
            </span>
          </h1>

          <p className="text-[#777777] text-xs sm:text-sm max-w-2xl mx-auto mt-4">
            Please read these terms carefully before using our services. By
            using our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-1 `}
             
            >
              {/* Left accent border */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-[#027cc2] transform transition-all duration-500 `}
              />

              {/* Section Header */}
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Icon container */}
                  <div
                    className={`relative p-2 sm:p-3 rounded-lg bg-[#027cc2]/5 transition-all duration-300 group-hover:bg-[#027cc2]/10 `}
                  >
                    <div className="absolute inset-0 bg-[#027cc2]/20 rounded-lg blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative text-xl sm:text-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {section.icon}
                    </div>
                  </div>

                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#2A2A2A] transition-all duration-300 group-hover:text-[#027cc2]">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-[#777777] text-xs sm:text-sm leading-relaxed">
                  {section.content}
                </p>

                {/* Important notice badge for certain sections */}
                {(section.title === "Limitation of Liability" ||
                  section.title === "Claims for Loss, Damage or Delay") && (
                  <div className="mt-3 inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 text-[10px] sm:text-xs px-2 py-1 rounded-full animate-pulse">
                    <MdInfo className="text-xs" />
                    Important: Please read carefully
                  </div>
                )}
              </div>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#027cc2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default TermsPage;
