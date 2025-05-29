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

export const AllHousing = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProductIndex, setCurrentProductIndex] = useState<number>(0); // лучше начать с 0
    const [productDirection, setProductDirection] = useState<number>(1);

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

    const handleNextProduct = () => {
        setProductDirection(1);
        if (isMobile) {
            setCurrentProductIndex((prev) =>
                prev + 1 >= products.length ? 0 : prev + 1
            );
        } else {
            setCurrentProductIndex((prev) =>
                prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
            );
        }
    };

    const handlePrevProduct = () => {
        setProductDirection(-1);
        if (isMobile) {
            setCurrentProductIndex((prev) =>
                prev <= 0 ? products.length - 1 : prev - 1
            );
        } else {
            setCurrentProductIndex((prev) =>
                prev <= 0 ? products.length - itemsPerPage : prev - itemsPerPage
            );
        }
    };

    const { data: fetchedProductsData } = useQuery({
        queryKey: ["fetchProducts"],
        queryFn: fetchProducts,
    });

    useEffect(() => {
        if (fetchedProductsData) {
            setProducts(fetchedProductsData);
        }
    }, [fetchedProductsData]);

    const currentPage = isMobile
        ? currentProductIndex + 1
        : Math.floor(currentProductIndex / itemsPerPage) + 1;

    const totalPages = isMobile
        ? products.length
        : Math.ceil(products.length / itemsPerPage);

    return (
        <AnimatedSection className="container products-slide">
            <h2 className="second-heading">Featured Properties</h2>
            <Slider
                items={products}
                currentIndex={currentProductIndex}
                direction={productDirection}
                handleNext={handleNextProduct}
                handlePrev={handlePrevProduct}
                isMobile={isMobile}
                itemsToShow={itemsPerPage}
            >
                {isMobile ? (
                    <ProductCard
                        key={`product-${currentProductIndex}`}
                        productIcon={assets[products[currentProductIndex]?.image]}
                        productName={products[currentProductIndex]?.heading}
                        productDescription={products[currentProductIndex]?.description}
                        productPrice={products[currentProductIndex]?.price}
                    >
                        {products[currentProductIndex]?.productDetails?.map(
                            (detail, i) => (
                                <ProductCardDetails
                                    key={`detail-${i}`}
                                    productCharacteristicIcon={
                                        assets[detail.productCharacteristicIcon]
                                    }
                                    productCharacteristic={detail.productCharacteristic}
                                />
                            )
                        )}
                    </ProductCard>
                ) : (
                    products
                        .slice(currentProductIndex, currentProductIndex + itemsPerPage)
                        .map((product, index) => (
                            <ProductCard
                                key={`product-${currentProductIndex}-${index}`}
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
                        ))
                )}
            </Slider>
            <ProductSlider
                currentPage={currentPage}
                lastPage={totalPages}
                onClickNext={handleNextProduct}
                onClickPrev={handlePrevProduct}
            >
                <img src={assets["Vector (Stroke)"]} alt="navigation arrow" />
            </ProductSlider>
        </AnimatedSection>
    );
};