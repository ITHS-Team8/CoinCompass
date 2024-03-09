<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main>
    <NavBar />
    <div class="about-container">
      <h1>Välkommen till CoinCompass</h1>
      <p>
        CoinCompass är din guide i den digitala valutans värld. Vi erbjuder
        intuitiva verktyg för att spåra och hantera dina utgifter, skapa konto
        för personlig anpassning och exportera dina transaktioner på ett säkert
        sätt.
      </p>
      <p>
        Med en stark grund i finansiell teknik och en passion för innovation,
        strävar CoinCompass efter att göra kryptohandel enkel och tillgänglig
        för alla. Oavsett om du är nybörjare eller en erfaren handlare, har vi
        de verktyg och resurser som behövs för att hjälpa dig att navigera i
        kryptoekonomin.
      </p>
      <p>
        Vårt mål är att ge våra användare kontroll över sina finanser genom att
        erbjuda en plattform som är säker, pålitlig och lätt att använda. Bli en
        del av CoinCompass-familjen idag och ta det första steget mot att
        förändra din finansiella framtid.
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 10vh;
}

.about-container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.about-container h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.about-container p {
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>
