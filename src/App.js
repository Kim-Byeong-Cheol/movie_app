import React from 'react';
import PropTypes from 'prop-types';
function Food({name, image, rating}) {
  return (
      <div>
          <h2>I love {name}</h2>
          <h4>{rating}/5.0</h4>
          <img src={image} alt={name}/>
      </div>);
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img.koreatimes.co.kr/upload/newsV2/images/202106/dd467848c7e349e9b456fea85ff36c1f.jpg/dims/resize/740/optimize",
    rating: 5,
    },
  {
    id: 2,
    name: "fkaus",
    image: "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df6d6942c1182227fcb7abc8f8d41009f8e6ab627a5d5d893f47832a08f75eb9db8",
    rating: 4.9,
  },
  {
    id: 3,
    name: "samgiopsal",
    image: "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 4.8,
  },
  {
    id: 4,
    name: "chukumi",
    image: "https://m.eat-at-home.co.kr/web/product/big/202104/1df9b776642fcc940bd705683aa8a2df.jpg",
    rating: 4.7,
  },
]

function App() {
  return (
  <div>
    {foodILike.map(dish=>(<Food key={dish.id} name={dish.name}  image={dish.image} rating={dish.rating}/>))}
  </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;
