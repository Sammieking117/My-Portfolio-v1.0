const Services = () => {
    const services = [
        {
            image: "/icons/software.png",
            name: "Custom Websites",
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.",
            id: 1
        },
        {
            image: "/icons/portfolio.png",
            name: "Portfolio & Personal Sites", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.", 
            id: 2
        },
        {
            image: "/icons/landing-page.png", 
            name: "Landing Pages", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.", 
            id: 3
        },
        {
            image: "/icons/mobile-shopping.png",
            name: "E-commerce Stores", 
            service: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel at debitis amet doloremque, laboriosam velit.", 
            id: 4
        }
    ]

    return ( 
        <div className="services">
            <h2>Services</h2>
            <div className="service-list">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <img src={service.image} alt={service.name} />
                        <h3>{service.name}</h3>
                        <p>{service.service}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;