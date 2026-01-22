import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductData {
    name: string;
    description: string;
    price: number;
    image: string;
    isBestSeller?: boolean;
}

interface ProductCardOneProps {
    product: ProductData;
}

export function ProductCardOne({ product }: ProductCardOneProps) {
    return (
        <Card className="w-full max-w-[320px]">
            <CardContent>
                {/* Product Image */}
                <div className="relative mb-6">
                    <div className="bg-gray-100 rounded-2xl flex items-center justify-center h-[280px] relative overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                    <CardTitle className="text-xl leading-tight mb-2">
                        {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                        {product.description}
                    </CardDescription>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

                    <Button className="hover:cursor-pointer">Add to Cart</Button>
                </div>
            </CardContent>
        </Card>
    );
}
