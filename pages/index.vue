<template>
  <div
    class="w-[1440px] grid grid-cols-5 gap-4 mx-auto my-8"
  >
    <!-- data? coloquei um ? porque estava dando erro dizendo que poderia ser null -->
    <CharacterCard
      v-for="{
        id,
        name,
        image,
        status,
        species,
        location,
      } in data?.characters.results"
      :key="id"
      :id="id"
      :name="name"
      :image="image"
      :status="status"
      :species="species"
      :location="location.name"
    />
  </div>
</template>

<script lang="ts" setup>
  // como criar uma query de graphql
  // endpoint/onde criar a query https://rickandmortyapi.com/graphql

  type CharactersResults = {
    characters: {
      results: {
        id: string;
        name: string;
        image: string;
        status: string;
        species: string;
        location: {
          name: string;
        };
      }[];
    };
  };

  const query = gql`
    query getCharacters {
      characters {
        results {
          name
          image
          status
          id
          species
          location {
            name
          }
        }
      }
    }
  `;

  // metodo de query async do nuxt
  const { data } = await useAsyncQuery<CharactersResults>(
    query,
  );
</script>
