const Services = () => {
    const services = [
        {
            image: "/icons/software.png",
            name: "Custom Websites",
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.",
            bg: "/images/services1.png",
            id: 1
        },
        {
            image: "/icons/portfolio.png",
            name: "Portfolio Sites", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.",
            bg: "/images/services2.png", 
            id: 2
        },
        {
            image: "/icons/landing-page.png", 
            name: "Landing Pages", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.",
            bg: "/images/services3.png", 
            id: 3
        },
        {
            image: "/icons/mobile-shopping.png",
            name: "E-commerce Stores", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.",
            bg: "/images/services4.png", 
            id: 4
        }
    ]

    return ( 
        <div className="services">
            <h2>Services</h2>
            <div className="service-list">
                {services.map((service) => (
                    <div className="service-card"
                         key={service.id}
                         style={{
                            backgroundImage: `
                                linear-gradient(
                                    to top,
                                    rgba(0, 0, 0, 0.65),
                                    rgba(0, 0, 0, 0)
                                    ),
                                    url(${service.bg})
                                    `,
                                }}
                        >
                        <div className="service-content">
                            <img src={service.image} alt={service.name} />
                            <h3>{service.name}</h3>
                            <p>{service.service}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;