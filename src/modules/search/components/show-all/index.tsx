import { Container, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { useEffect } from "react"
import { useHits, useSearchBox } from "react-instantsearch-hooks-web"

const ShowAll = () => {
  const { hits } = useHits()
  const { query } = useSearchBox()

  useEffect(() => console.log({ hits, query }), [hits])

  if (hits.length < 6 || query === "") return null

  return (
    <Container className="flex gap-2 justify-center h-fit py-2">
      <Text>Showing the first 6 results.</Text>
      <InteractiveLink href={`/search/${query}`}>View all</InteractiveLink>
    </Container>
  )
}

export default ShowAll