import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryItem } from '@/data/products';

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#FAF7F2] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {/* Category Image - 1:1 High-Resolution WebP from Blueprint */}
      <div className="relative w-full aspect-[485/442] overflow-hidden bg-[#FAF7F2]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content Footing - Exact 1:1 Match to Blueprint */}
      <div className="px-5 py-5 sm:px-6 sm:py-5 lg:px-6 lg:py-6 bg-[#FAF7F2] flex items-center">
        <h3 className="font-serif text-[18px] sm:text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-[#052033] tracking-tight group-hover:text-[#0B5D68] transition-colors inline-flex items-center gap-2.5 whitespace-nowrap">
          <span>{category.name}</span>
          <span className="text-lg font-normal transition-transform duration-200 group-hover:translate-x-1.5 leading-none">&rarr;</span>
        </h3>
      </div>
    </Link>
  );
}
