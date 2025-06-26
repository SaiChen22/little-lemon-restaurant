import UnderConstructionImage from '../../assets/under-construction.svg';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center pt-16">
      <img
        src={UnderConstructionImage}
        alt="Under Construction illustration"
        className="w-90"
      />
      <h1 className="mt-8 font-serif text-5.5xl text-olive">
        Under Construction
      </h1>
    </div>
  );
};

export default UnderConstruction;
