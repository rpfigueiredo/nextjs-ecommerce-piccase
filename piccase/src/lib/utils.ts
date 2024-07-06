import { type ClassValue, clsx } from "clsx"
import { Metadata } from 'next'
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'PicCase - Cases personalizadas',
  description = 'Crie cases personalizadas para seu celular em segundos',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@rpfigueired0',
    },
    icons,
    metadataBase: new URL("https://piccase-dev.vercel.app/")
  }
}