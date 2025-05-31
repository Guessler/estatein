import { useEffect, useState } from "react";
import { assets } from "../../utils/exports/directories/assets";
import { AnimatedSection } from "../common/Animated/AnimatedSection";
import { ProductCard } from "../ProductCard";
import { Slider } from "../Slider";
import { ProductSlider } from "../Slider/ProductSlider";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/products";
import { Product } from "../../types/interfaces";
import { ProductCardDetails } from "../ProductCard/ProductCardDetails";

import { usePaginationHandlers } from "../../hooks/usePaginationHandlers";
import { usePaginator } from "../../hooks/usePaginator";

export const AllHousing = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1596);

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

    const { data: fetchedProductsData = [] } = useQuery({
        queryKey: ["fetchProducts"],
        queryFn: fetchProducts,
    });

    const {
        currentPage,
        nextPage,
        prevPage,
        paginatedItems
    } = usePaginator<Product>(fetchedProductsData, itemsPerPage);

    const [direction, setDirection] = useState<number>(1);

    const { handleNext, handlePrev } = usePaginationHandlers({
        directionSetter: setDirection,
        onNext: nextPage,
        onPrev: prevPage,
    });

    const totalPages = Math.ceil(fetchedProductsData.length / itemsPerPage);

    return (
        <AnimatedSection className="container products-slide">
            <h2 className="second-heading">Featured Properties</h2>
            <Slider
                items={fetchedProductsData}
                currentIndex={currentPage * itemsPerPage}
                direction={direction}
                handleNext={handleNext}
                handlePrev={handlePrev}
                isMobile={isMobile}
                itemsToShow={itemsPerPage}
            >
                {paginatedItems.map((product) => (
                    <ProductCard
                        key={`product-${product.id}`}
                        productIcon={assets[product.image]}
                        productName={product.heading}
                        productDescription={product.description}
                        productPrice={product.price}
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