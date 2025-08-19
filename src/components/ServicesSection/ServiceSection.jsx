const ServiceSection = () => {
  const services = [
    {
      icon: "bx bx-code-alt",
      title: "Web Development",
      description:
        "I'm working in web development. I enjoy creating beautiful web designs and developing user-friendly interfaces.",
    },
    {
      icon: "bx bx-crop",
      title: "UI/UX Design",
      description:
        "I'm working as a Designer using Figma, illustrator and photoshop. I enjoy creating beautiful and professional designs.",
    },
    {
      icon: "bx bxl-instagram-alt",
      title: "App Design",
      description:
        "I'm working in App development and design. I enjoy creating beautiful and intuitive apps using React Native.",
    },
  ];

  return (
    <section className="services py-16 bg-gray-100" id="services">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" px-6 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange border-dashed rounded-2xl space-y-5"
            >
              <i className={`${service.icon} text-4xl text-blue-600 mb-4`}></i>
              <h3 className="text-2xl mb-2 font-bold text-cyan">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <a
                href="#"
                className="inline-block px-4 py-2 ursor-pointer text-white  transition-all duration-500 rounded-full bg-gradient-to-r  from-darkCyan to-orange shadow-cyanShadow hover:scale-110 mt-4 mb-8"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
