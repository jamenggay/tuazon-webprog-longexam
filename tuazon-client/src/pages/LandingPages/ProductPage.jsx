import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="page-stack">
        <section className="section-block">
          <div className="section-inner mx-auto max-w-3xl">
            <h1 className="heading-lg text-slate-900">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="section-inner max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="eyebrow mb-3">
            {product.category}
          </p>
          <h1 className="heading-xl text-slate-900">
            {product.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="text-lg font-semibold text-slate-900">{product.price}</span>
            <span className="chip">{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner mx-auto max-w-3xl">
          <div className="image-frame mb-8 flex aspect-4/3 items-center justify-center overflow-hidden border border-slate-900/10">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-8 text-slate-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-900/10 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
