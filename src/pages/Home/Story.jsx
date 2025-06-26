import diningAreaImage from '../../assets/dining-area.jpg';

const Story = () => {
  return (
    <section className="flex justify-center pb-20 pt-16">
      <div className="flex w-256 justify-between gap-x-12">
        <div>
          <h2 className="font-serif text-5.5xl leading-tight text-yellow">
            Little Lemon
          </h2>
          <h3 className="font-serif text-4.5xl">Chicago</h3>
          <article className="mt-4 text-justify">
            <p>
              The Little Lemon is a family-owned and operated restaurant that
              takes pride in bringing the authentic flavors of the Mediterranean
              to our local community. Our culinary philosophy is rooted in the
              time-honored recipes passed down through generations, yet we are
              not afraid to add a contemporary twist to these classics. Our menu
              is a celebration of tradition and innovation, where each dish is a
              testament to our commitment to high-quality ingredients and
              flavorful combinations.
            </p>
            <p>
              We invite you to join us on this gastronomic journey, where old
              meets new in a delicious harmony. Welcome to Little Lemon, where
              the Mediterranean meets modernity.
            </p>
          </article>
        </div>
        <div className="w-120 flex-none pt-14">
          <img
            src={diningAreaImage}
            alt="Little Lemon dining area"
            className="h-80 w-120 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
