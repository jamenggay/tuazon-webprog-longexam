import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="panel-card group p-4">
      <div className="image-frame flex aspect-4/3 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-800">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900">{product.title}</h3>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-base font-semibold text-slate-900">{product.price}</p>
        <span className="chip">{product.stock}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-5 w-full">View Product</Button>
    </article>
  );
};

export default ProductCard;
