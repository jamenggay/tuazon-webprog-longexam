import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import merchImage from '../../assets/img/prod3.jpg';
import booksImage from '../../assets/img/prod1.jpg';
import uniformImage from '../../assets/img/medtech.jpg';

const HomePage = () => {
    return (
        <div className="page-stack">
            <section className="section-block-dark relative min-h-[30rem] overflow-hidden">
                <img
                    src="/src/assets/img/hero.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.2),rgba(17,24,39,0.78))]" />

                <div className="section-inner relative z-10 flex min-h-[24rem] items-center justify-end text-right pr-10 sm:min-h-[26rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-200">
                            Campus Marketplace
                        </p>
                        <h1 className="heading-xl text-amber-50">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                            Explore campus uniforms, student essentials, 
                            < br /> and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-end gap-3">
                            <Button to="/products" variant="primary">
                                Shop Now
                            </Button>
                            <Button to="/about">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-block">
                <div className="section-inner">
                <div className="mb-7">
                    <h2 className="text-[30px] font-bold eyebrow pt-10 pl-5">
                        Store Overview
                    </h2>
                    <h2 className="heading-lg mt-3 text-slate-900 pl-5">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="metric-card pl-5">
                        <p className="text-sm uppercase tracking-[0.26em] text-slate-500 ">Live Catalog</p>
                        <p className="mt-4 text-4xl font-semibold text-slate-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Products
                        </p>
                    </div>
                    <div className="metric-card ">
                        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Easy Navigation</p>
                        <p className="mt-4 text-4xl font-semibold text-slate-900">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Categories
                        </p>
                    </div>
                    <div className="metric-card">
                        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Order Flow</p>
                        <p className="mt-4 text-4xl font-semibold text-slate-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Orders
                        </p>
                    </div>
                    <div className="metric-card">
                        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Flexible Fulfillment</p>
                        <p className="mt-4 text-4xl font-semibold text-slate-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Pickup Slots
                        </p>
                    </div>
                </div>
                </div>
            </section>

            <section className="section-block">
                <div className="section-inner">
                    <p className="eyebrow pl-5 pt-10 text-[30px] font-bold">
                        Product Categories
                    </p>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="panel-card p-4">
                        <div className="image-frame flex aspect-4/3 items-center justify-center">
                            <img className="h-full w-full object-cover" src={merchImage} alt="NU merchandise" />
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold text-slate-900">NU Merches</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Bag Tag, Caps, Lanyards for Nationalians
                        </p>
                        <Button to="/products" className="mt-5 w-full" variant="primary">View Products</Button>
                    </article>

                    <article className="panel-card p-4">
                        <div className="image-frame flex aspect-4/3 items-center justify-center">
                            <img className="h-full w-full object-cover" src={booksImage} alt="Medical books" />
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold text-slate-900">Medical Books</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            RLE Manuals, Lab Manuals, Books for Medical students
                        </p>
                        <Button to="/products" className="mt-5 w-full" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="panel-card p-4">
                        <div className="image-frame flex aspect-4/3 items-center justify-center">
                            <img className="h-full w-full object-cover" src={uniformImage} alt="Uniforms" />
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold text-slate-900">Uniforms</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Medtech, Tourism, Traditional Uniforms
                        </p>
                        <Button to="/products" className="mt-5 w-full" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
