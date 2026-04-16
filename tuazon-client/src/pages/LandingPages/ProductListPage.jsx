import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="section-inner pl-5">
          <p className="eyebrow mb-3 text-[30px] font-bold">
            Products
          </p>
          <h1 className="heading-xl max-w-2xl text-[20px] text-slate-900">
            Shop campus essentials in a simple product grid
          </h1>
          <p className="body-copy mt-4 max-w-2xl text-[20px]">
            Browse practical items for class, study, commute, < br />and everyday campus routines.
          </p>
          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>

      <section className="section-block pl-5 pt-15">
        <div className="section-inner">
          <p className="eyebrow text-[20px] font-bold pl-5">
            Featured Products
          </p>
        <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}

export default ProductListPage
