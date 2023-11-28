import React from 'react'

export type SEOType = {
  title?: string
}

export type SEOProps = {
  meta?: SEOType
}

export type DefaultLayoutProps = {
  children: React.ReactNode
  meta?: SEOType
}
