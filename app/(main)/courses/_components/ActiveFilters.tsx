'use client';

import { Button } from '@/components/ui/button';
import { IFilterState } from '@/types/course';
import { X } from 'lucide-react';
import React, { FC, useState } from 'react'

const ActiveFilters: FC = ({ }) => {
    const [filter, setFilter] = useState<IFilterState>({
        categories: ["development"],
        price: ["free"],
        sort: "",
    });

    const applyArrayFilter = ({ type, value }: { type: 'categories' | 'price'; value: string }) => {
        const isFilterApplied = filter[type].includes(value);

        if (isFilterApplied) {
            setFilter((prev) => ({
                ...prev,
                [type]: (prev[type] as string[]).filter((v) => v !== value),
            }));
        } else {
            setFilter((prev) => ({
                ...prev,
                [type]: [...prev[type], value],
            }));
        }
    };
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {filter.categories.length > 0 &&
                filter.categories.map((category) => (
                    <Button
                        key={category}
                        variant="ghost"
                        className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
                        onClick={() => applyArrayFilter({ type: "categories", value: category })}
                    >
                        {category}
                        <X className="w-3" />
                    </Button>
                ))}
            {filter.price.length > 0 &&
                filter.price.map((price) => (
                    <Button
                        key={price}
                        variant="ghost"
                        className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
                        onClick={() => applyArrayFilter({ type: "price", value: price })}
                    >
                        {price}
                        <X className="w-3" />
                    </Button>
                ))}
        </div>

    )
}

export default ActiveFilters;
