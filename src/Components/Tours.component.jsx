import Title from "./Title.component";
import Tour from "./Tour.component";

import { tours } from "../utils/data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour, i) => {
          return <Tour key={i} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
