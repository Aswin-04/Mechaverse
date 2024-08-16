
const ContactDetails = ({title, contacts}) =>  (
    <div className="flex flex-col gap-8">
    <h3 className="font-bold text-2xl font-grotesk text-clr-200 max-md:text-xl">{title}</h3>
    <div className="flex flex-col gap-12">
      {contacts.map(({ name, phone }) => (
        <div key={phone} className="flex flex-col gap-4 max-md:text-lg text-xl">
          <p className=" text-slate-300 font-sans">{name}</p>
          <p className=" underline underline-offset-8 decoration-primary text-clr-500">{phone}</p>
        </div>
      ))}
    </div>
  </div>
)

export default ContactDetails
