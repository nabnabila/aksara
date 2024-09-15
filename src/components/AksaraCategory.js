import bgImage from "../assets/image/bg.png";

const CategorySection = () => {
  return (
    <div class="card" style="width: 18rem;">
      <img src={bgImage} class="card-img-top" alt="Card image" />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default CategorySection;
