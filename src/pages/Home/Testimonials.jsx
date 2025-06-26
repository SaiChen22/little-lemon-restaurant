import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const testimonials = [
  {
    id: 1,
    author: 'John Doe',
    avatar: new URL('../../assets/avatar-1.jpeg', import.meta.url).href,
    rating: 5,
    text: 'The modern twist on traditional recipes is delightful! Warm, family atmosphere makes the experience even better.'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: new URL('../../assets/avatar-2.jpeg', import.meta.url).href,
    rating: 5,
    text: 'Absolutely delicious! The fusion of modern and traditional flavors creates a unique and memorable dining experience.'
  },
  {
    id: 3,
    author: 'Robert Brown',
    avatar: new URL('../../assets/avatar-3.jpeg', import.meta.url).href,
    rating: 4.5,
    text: 'Excellent Mediterranean flavors with a creative twist.  Despite the slight wait and lively atmosphere, highly recommended!'
  },
  {
    id: 4,
    author: 'Emily Johnson',
    avatar: new URL('../../assets/avatar-4.jpeg', import.meta.url).href,
    rating: 4.5,
    text: 'The food is delicious and the modern take on traditional recipes is refreshing. It can get a bit noisy, but worth it!'
  }
];

const Testimonials = () => {
  return (
    <section className="mt-20 flex justify-center bg-olive pb-16">
      <div className="w-256">
        <div className="flex h-40 items-center">
          <h2 className="font-serif text-4.5xl text-white">What people say</h2>
        </div>
        <div className="flex justify-between">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
