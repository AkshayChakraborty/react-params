import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import "./Product.css";
const ProductDetails = () => {
    const [user, setUser] = useState([0]);
  const [product, setProduct] = useState();
  let { id } = useParams();

  useEffect(() => {
    const apiUser = async () => {
      const userdata = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setUser(userdata?.data);
    };
    apiUser();
  }, []);
  console.log("user", user);

  return (
    <>
      <div className="container">
        {/* Start Product Slider  */}
        <div className="product">
          <div className="product-small-img">
            {user?.images?.map((item) => {
              return (
                <>
                  <img
                    src={item}
                    onClick={() => {
                      setProduct(item);
                    }}
                    alt=""
                  />
                  
                </>
              );
            })}
          </div>
        </div>
        <div className="img-container">
          {/* <img id="imageBox" src={product} alt="" /> */}
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
      </div>
      {/* End Product Slider  */}

      <div className="column">
        <h1>{user.title}</h1>
        <hr />
        <h3>{user.id}</h3>
        <p>{user.description}</p>
        <input defaultValue={1} type="number" />
        <Link className="btn btn-dark" to="#">
          Add to Cart
        </Link>
      </div>
    </>
  );
}

export default ProductDetails