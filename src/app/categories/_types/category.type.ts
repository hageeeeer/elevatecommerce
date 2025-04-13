export interface Root {
    message: string
    metadata: Metadata
    categories: CategoryIn[]
  }
  
  export interface Metadata {
    currentPage: number
    limit: number
    totalPages: number
    totalItems: number
  }
  
  export interface CategoryIn {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
    productsCount: number
  }