import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'e1',
    price: 4,
    title: 'done',
    description: 'The first nothing'
  },
  {
    id: 'e2',
    price: 14,
    title: 'done2',
    description: 'The first nothing2'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (<ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
          id={product.id}
        />))}
      </ul>
    </section>
  );
};

export default Products;
