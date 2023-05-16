import { services } from "../utils/data";
import Service from "./Service.component";
import Title from "./Title.component";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service, i) => {
          return <Service key={i} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
