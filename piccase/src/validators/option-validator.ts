// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
  { label: 'Preto', value: 'black', tw: 'zinc-900' },
  {
    label: 'Azul',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rosa', value: 'rose', tw: 'rose-950' },
] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iPhone X',
      value: 'iphonex',
    },
    {
      label: 'iPhone 11',
      value: 'iphone11',
    },
    {
      label: 'iPhone 12',
      value: 'iphone12',
    },
    {
      label: 'iPhone 13',
      value: 'iphone13',
    },
    {
      label: 'iPhone 14',
      value: 'iphone14',
    },
    {
      label: 'iPhone 15',
      value: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Policarbonato',
      value: 'polycarbonate',
      description: 'Revestimento resistente a arranhões',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'acabamento',
  options: [
    {
      label: 'Acabamento suave',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Acabamento texturizado',
      value: 'textured',
      description: 'Textura macia e aderente',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
