import React, { FC } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IOption } from '@/types/course';

const SORT_OPTIONS: IOption[] = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
];
const SortCourse: FC = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px] border-none !border-b focus:ring-0 focus:ring-offset-0 overflow-hidden">
                <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    {SORT_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SortCourse;
