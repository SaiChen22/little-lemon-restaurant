// TODO: JSDoc
const toStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 0.5 : 0;
  const stars = new Array(fullStars).fill(1);
  if (halfStar) {
    stars.push(halfStar);
  }
  return stars;
};

export default toStars;
