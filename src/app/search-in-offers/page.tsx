import Heading from '@/layouts/searchInOffers/heading/heading'
import PropertyDisplay from '@/layouts/searchInOffers/propertyDisplay/propertyDisplay'
import SearchFilters from '@/layouts/searchInOffers/searchFilters/searchFilters'

const SearchInOffers = () => {
  return (
    <main>
      <Heading />
      <SearchFilters />
      <PropertyDisplay />
    </main>
  )
}

export default SearchInOffers