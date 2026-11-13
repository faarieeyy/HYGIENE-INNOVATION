'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CategoryItem } from '@/data/products';
import { ThreeTiltCard } from './ThreeTiltCard';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: CategoryItem;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.75,
        delay: (index % 4) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <ThreeTiltCard maxTilt={5} scale={1.02} className="h-full">
        <Link
          href={`/shop?category=${encodeURIComponent(category.name)}`}
          className="group flex flex-col h-full overflow-hidden rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] shadow-xs hover:shadow-xl transition-all duration-300"
        >
          {/* Category Image - 1:1 High-Resolution WebP with Specular Depth */}
          <div className="relative w-full aspect-[485/442] overflow-hidden bg-[#FAF7F2]">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            />

            {/* Item count tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#052C33] shadow-xs border border-white/50">
              {category.count} Products
            </div>

            {/* Subtle Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent opacity-60" />
          </div>

          {/* Content Footing */}
          <div className="px-6 py-5 bg-[#FAF7F2] flex items-center justify-between mt-auto">
            <h3 className="font-serif text-[18px] sm:text-[19px] lg:text-[20px] xl:text-[21px] font-bold text-[#052033] tracking-tight group-hover:text-[#0B5D68] transition-colors">
              {category.name}
            </h3>

            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#052033] group-hover:bg-[#052C33] group-hover:text-white transition-all shadow-2xs group-hover:translate-x-1 shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </ThreeTiltCard>
    </motion.div>
  );
}
