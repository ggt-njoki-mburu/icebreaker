import type { Category } from "@/types";
import { CategoryGrid } from "./CategoryGrid";
import { Heading } from "./Heading";

interface CategoriesProps {
    categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
    return (
        <div className="flex flex-col gap-4 justify-center w-full">
            <Heading level={1}>Categories</Heading>
            <div className="mt-2">
                <Heading level={3}>Select a category below:</Heading>
            </div>
            {categories.length === 0 ? (
                <div className="flex flex-col gap-4 justify-center w-full mt-4">
                    <Heading level={4}>No categories found.</Heading>
                </div>
            ) : (
                <div className="mt-4">
                    <CategoryGrid categories={categories} />
                </div>
            )}
        </div>
    );
}