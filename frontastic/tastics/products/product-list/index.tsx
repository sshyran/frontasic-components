import ProductList from 'components/frontastic-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { products, category, nextCursor, previousCursor } = data;

  if (!products || products.length == 0) return <p>No products found.</p>;

  return (
    <ProductList products={products} category={category} previousCursor={previousCursor} nextCursor={nextCursor} />
  );
}

export default ProductListTastic;
