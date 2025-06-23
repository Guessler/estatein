import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../../utils/exports/directories/assets";
import AnimatedSection from "../../common/Animated/AnimatedSection";
import { ProductCard } from "../ProductCard";
import { Slider } from "../Slider";
import { ProductSlider } from "../Slider/ProductSlider";
import { Product } from "../../../types/interfaces";
import { ProductCardDetails } from "../ProductCard/ProductCardDetails";
import { usePaginationHandlers } from "../../../hooks/usePaginationHandlers";
import { usePaginator } from "../../../hooks/usePaginator";

interface AllHousingProps {
    searchText?: string;
    products?: Product[];
}

export const AllHousing = ({ searchText = "", products = [] }: AllHousingProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1596);
    const navigate = useNavigate();

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1596);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const itemsPerPage = isMobile ? 1 : 3;

    const filteredProducts = products.filter((product: Product) => 
        product.heading?.toLowerCase().includes(searchText.toLowerCase())
    );

    const {
        currentPage,
        nextPage,
        prevPage,
        paginatedItems
    } = usePaginator<Product>(filteredProducts, itemsPerPage);

    const [direction, setDirection] = useState<number>(1);

    const { handleNext, handlePrev } = usePaginationHandlers({
        directionSetter: setDirection,
        onNext: nextPage,
        onPrev: prevPage,
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleViewDetails = (product: Product, index: number) => {
        console.log(product)
        // if (!product?.id) {
        //     console.error("Product ID is missing!", product);
        //     return;
        // }
        navigate(`/properties/${index}`, { 
            state: { 
                product,
                from: window.location.pathname
            } 
        });
    };

    return (
        <AnimatedSection className="container products-slide">
            <h2 className="second-heading">Featured Properties</h2>
            <Slider
                items={filteredProducts}
                currentIndex={currentPage * itemsPerPage}
                direction={direction}
                handleNext={handleNext}
                handlePrev={handlePrev}
                isMobile={isMobile}
                itemsToShow={itemsPerPage}
            >
                {paginatedItems.map((product, index) => (
                    <ProductCard
                        key={`product-${product.id}`}
                        productIcon={assets[product.image]}
                        productName={product.heading}
                        productDescription={product.description}
                        productPrice={product.price}
                        onViewDetails={() => handleViewDetails(product, index)}
                    >
                        {product.productDetails?.map((detail, i) => (
                            <ProductCardDetails
                                key={`detail-${i}`}
                                productCharacteristicIcon={
                                    assets[detail.productCharacteristicIcon]
                                }
                                productCharacteristic={detail.productCharacteristic}
                            />
                        ))}
                    </ProductCard>
                ))}
            </Slider>
            <ProductSlider
                currentPage={currentPage + 1}
                lastPage={totalPages}
                onClickNext={handleNext}
                onClickPrev={handlePrev}
            >
                <img src={assets["Vector (Stroke)"]} alt="navigation arrow" />
            </ProductSlider>
        </AnimatedSection>
    );
};